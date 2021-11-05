import Link from "next/link";
import {
  Box,
  Flex,
  Heading,
  Divider,
  VStack,
  SimpleGrid,
  HStack,
  Button,
} from "@chakra-ui/react";

import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import { Input } from "../../components/Form";

import { useForm, SubmitHandler } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "react-query";
import { api } from "../../service/api";
import { queryClient } from "../../service/queryClient";
import { useRouter } from "next/router";

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

const createFormSchema = yup.object().shape({
  name: yup.string().required("O campo nome é obrigatório"),
  email: yup
    .string()
    .required("O campo e-mail é obrigatório")
    .email("O formato de e-mail não está válido"),
  password: yup
    .string()
    .required("O campo senha é obrigatório")
    .min(6, "A senha precisa ter no mínimo 6 caracteres"),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref("password")], "As senhas precisam ser iguais"),
});

export default function UserList() {
  const router = useRouter()
  const createUser = useMutation(
    async (user: CreateUserFormData) => {
      const response = await api.post("users", {
        user: {
          ...user,
          created_at: new Date(),
        },
      });
      return response.data.user;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("users");
      },
    }
  );

  const { handleSubmit, register, formState } = useForm({
    resolver: yupResolver(createFormSchema),
  });

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (
    values
  ) => {
    await createUser.mutateAsync(values);

    router.push("/users")
  };
  return (
    <Box>
      <Header />
      <Flex width="100%" spacing="8" maxWidth={1480} my="6" mx="auto" px="6">
        <SideBar />
        <Box
          as="form"
          onSubmit={handleSubmit(handleCreateUser)}
          flex="1"
          borderRadius={8}
          bgColor="gray.800"
          p={["6", "8"]}
        >
          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>

          <Divider my="6" bgColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" width="100%" spacing={["6", "8"]}>
              <Input
                name="name"
                label="Nome completo"
                error={formState.errors.name}
                {...register("name")}
              />
              <Input
                name="email"
                type="email"
                error={formState.errors.email}
                label="E-mail"
                {...register("email")}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" width="100%" spacing={["6", "8"]}>
              <Input
                name="password"
                type="password"
                label="Senha"
                error={formState.errors.password}
                {...register("password")}
              />
              <Input
                name="password_confirmation"
                type="password"
                label="Confirnar senha"
                error={formState.errors.password_confirmation}
                {...register("password_confirmation")}
              />
            </SimpleGrid>
          </VStack>
          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button
                  as="a"
                  cursor="pointer"
                  size="sm"
                  colorScheme="whiteAlpha"
                >
                  Cancelar
                </Button>
              </Link>
              <Button
                type="submit"
                cursor="pointer"
                size="sm"
                colorScheme="pink"
                isLoading={formState.isSubmitting}
                loadingText="Registrando..."
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
