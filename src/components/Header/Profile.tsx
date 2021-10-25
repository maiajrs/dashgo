import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Júnior Maia</Text>
        <Text color="gray.300" fontSize="small">
          jr.maia@gmail.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Júnior Maia"
        src="https://avatars.githubusercontent.com/u/67764559?v=4"
      />
    </Flex>
  );
}
