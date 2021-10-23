import { Flex, Text, Input, Icon, HStack, Box, Avatar } from "@chakra-ui/react";
import {
  RiNotificationLine,
  RiSearchLine,
  RiUserAddLine,
} from "react-icons/ri";

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
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        Dashgo
        <Text as="span" color="pink.500" ml="1">
          .
        </Text>
      </Text>

      <Flex
        as="label"
        alignSelf="center"
        bg="gray.800"
        flex="1"
        maxWidth={400}
        position="relative"
        py="4"
        px="8"
        ml="6"
        borderRadius="full"
      >
        <Input
          placeholder="Buscar na platafora"
          _placeholder={{ color: "gray.400" }}
          px="4"
          mr="4"
          variant="unstyled"
        />
        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>

      <Flex align="center" ml="auto">
        <HStack
          spacing="8"
          mx="8"
          pr="8"
          py="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiUserAddLine} fontSize="20" />
        </HStack>
        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>Júnior Maia</Text>
            <Text color="gray.300" fontSize="small">
              jr.maia@gmail.com
            </Text>
          </Box>
          <Avatar size="md" name="Júnior Maia" src="https://avatars.githubusercontent.com/u/67764559?v=4" />
        </Flex>
      </Flex>
    </Flex>
  );
}
