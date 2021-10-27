import { Flex, Button, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form";
import { useForm, SubmitHandler } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type SingInFormData = {
  email: string;
  password: string;
};

const sighInFormSchema = yup.object().shape({
  email: yup
    .string()
    .required("O campo e-mail é obrigatório")
    .email("O formato de e-mail não está válido"),
  password: yup.string().required("O campo senha é obrigatório"),
});

export default function Home() {
  const { handleSubmit, register, formState } = useForm({
    resolver: yupResolver(sighInFormSchema),
  });

  const handleSignIn: SubmitHandler<SingInFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
  };
  return (
    <Flex align="center" justify="center" w="100vw" h="100vh">
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius="8"
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            name="email"
            type="email"
            label="E-mail"
            error={formState.errors.email}
            {...register("email")}
          />
          <Input
            name="password"
            type="password"
            label="Senha"
            error={formState.errors.password}
            {...register("password")}
          />
        </Stack>
        <Button
          isLoading={formState.isSubmitting}
          loadingText="Entrando..."
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
