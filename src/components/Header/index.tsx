import { Flex } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export default function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      mx="auto"
      h="20"
      align="center"
      mt="4"
      px="6"
    >
      <Logo />

      <NotificationsNav />
      
      <SearchBox />

      <Profile />
    </Flex>
  );
}
