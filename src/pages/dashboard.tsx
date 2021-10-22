import { Flex } from "@chakra-ui/react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex width="100%" maxWidth={1480} my="6" mx="auto" px="6">
        <SideBar />
      </Flex>
    </Flex>
  );
}
