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

export default function UserList() {
  return (
    <Box>
      <Header />
      <Flex width="100%" spacing="8" maxWidth={1480} my="6" mx="auto" px="6">
        <SideBar />
        <Box flex="1" borderRadius={8} bgColor="gray.800" p={["6", "8"]}>
          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>

          <Divider my="6" bgColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" width="100%" spacing={["6", "8"]}>
              <Input name="name" label="Nome completo" />
              <Input name="email" type="email" label="E-mail" />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" width="100%" spacing={["6", "8"]}>
              <Input name="password" type="password" label="Senha" />
              <Input
                name="password_confirmation"
                type="password"
                label="Confirnar senha"
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
              <Button cursor="pointer" size="sm" colorScheme="pink">
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
