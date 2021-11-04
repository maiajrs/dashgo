import { useQuery } from "react-query";
import { api } from "../api";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

type getUserProps = {
  x_total_count: string;
  users: User[];
};

export const getUsers = async (page: number): Promise<getUserProps> => {
  const { data, headers } = await api.get("users", { params: { page } });
  const { x_total_count } = headers;

  const users = data.users.map((user: User) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt: new Date(user.createdAt).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
  }));
  return {
    users,
    x_total_count,
  };
};

export function useUsers(page: number) {
  return useQuery(["users", page], () => getUsers(page), {
    staleTime: 1000 * 60 * 10,
  });
}
