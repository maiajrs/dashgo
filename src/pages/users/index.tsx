import NextLink from "next/link";
import React from "react";
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
  Link,
} from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import Header from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import SideBar from "../../components/SideBar";
import { useUsers } from "../../service/hooks/useUsers";
import { queryClient } from "../../service/queryClient";
import { api } from "../../service/api";

export default function UserList() {
  const [state, setState] = React.useState(1);
  const { isLoading, error, data, isFetching } = useUsers(state);

  const isWideVersion = useBreakpointValue({ base: false, lg: true });

  async function handlePrefetchUser(user_id: number) {
    await queryClient.prefetchQuery(
      ["user", user_id],
      async () => {
        const response = await api.get(`users/${user_id}`);
        return response.data;
      },
      { staleTime: 1000 * 60 * 10 }
    );
  }
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
            <NextLink href="/users/create" passHref>
              <Button
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                as="a"
                leftIcon={<Icon as={RiAddLine} />}
              >
                Criar novo
              </Button>
            </NextLink>
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
                  {data.users.map((user) => (
                    <Tr key={user.id}>
                      <Td px={["4", "4", "6"]}>
                        <Checkbox colorScheme="pink"></Checkbox>
                      </Td>
                      <Td>
                        <Box>
                          <Link
                            color="purple.700"
                            onMouseEnter={() => handlePrefetchUser(Number(user.id))}
                          >
                            <Text fontWeight="bold">{user.name}</Text>
                          </Link>
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
              <Pagination
                registerPerPage={10}
                currentPage={state}
                totalCountOfRegisters={Number(data.x_total_count)}
                onPageChange={setState}
              />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
