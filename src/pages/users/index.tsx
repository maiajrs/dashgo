import Link from "next/link";
import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  Icon,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Checkbox,
  useBreakpointValue,
  Spinner,
} from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import Header from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import SideBar from "../../components/SideBar";
import { useUsers } from "../../service/hooks/useUsers";

export default function UserList() {
  const { isLoading, error, data, isFetching } = useUsers()

  const isWideVersion = useBreakpointValue({ base: false, lg: true });
  return (
    <Box>
      <Header />
      <Flex width="100%" maxWidth={1480} my="6" mx="auto" px="6">
        <SideBar />
        <Box flex="1" borderRadius={8} bgColor="gray.800" p="8">
          <Flex justify="space-between" align="center" mb="8">
            <Heading size="lg" fontWeight="normal">
              Usuários
              {!isLoading && isFetching && (
                <Spinner size="sm" color="gray.500" ml="4" />
              )}
            </Heading>
            <Link href="/users/create" passHref>
              <Button
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                as="a"
                leftIcon={<Icon as={RiAddLine} />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>
          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Text>Falha ao baixar os dados dos usuários</Text>
          ) : (
            <>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th px={["4", "4", "6"]} color="gray.300" width="8">
                      <Checkbox colorScheme="pink" />
                    </Th>
                    <Th>Usuário</Th>
                    {isWideVersion && <Th>Data de cadastro</Th>}
                    <Th></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td px={["4", "4", "6"]}>
                      <Checkbox colorScheme="pink"></Checkbox>
                    </Td>
                    <Td>
                      <Box>
                        <Text fontWeight="bold">Júnior Maia</Text>
                        <Text fontSize="sm" color="gray.300">
                          junior_maiaf@gmail.com
                        </Text>
                      </Box>
                    </Td>
                    {isWideVersion && <Td>24 de Novembro, 2021</Td>}
                    <Td textAlign="right">
                      <Button
                        as="a"
                        fontSize="sm"
                        size="sm"
                        colorScheme="purple"
                        leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                      >
                        Editar
                      </Button>
                    </Td>
                  </Tr>
                  {data.map((user) => (
                    <Tr key={user.id}>
                      <Td px={["4", "4", "6"]}>
                        <Checkbox colorScheme="pink"></Checkbox>
                      </Td>
                      <Td>
                        <Box>
                          <Text fontWeight="bold">{user.name}</Text>
                          <Text fontSize="sm" color="gray.300">
                            {user.email}
                          </Text>
                        </Box>
                      </Td>
                      {isWideVersion && <Td>{user.createdAt}</Td>}
                      <Td textAlign="right">
                        <Button
                          as="a"
                          fontSize="sm"
                          size="sm"
                          colorScheme="purple"
                          leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                        >
                          Editar
                        </Button>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
              <Pagination />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
