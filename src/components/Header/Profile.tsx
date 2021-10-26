import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Júnior Maia</Text>
          <Text color="gray.300" fontSize="small">
            jr.maia@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Júnior Maia"
        src="https://avatars.githubusercontent.com/u/67764559?v=4"
      />
    </Flex>
  );
}
