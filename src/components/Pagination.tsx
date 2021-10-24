import { Stack, Box, Button } from "@chakra-ui/react";

export function Pagination() {
  return (
    <Stack
      direction="row"
      justify="space-between"
      mt="8"
      spacing="6"
      align="center"
    >
      <Box>
        <strong>0</strong>
        <strong> - </strong>
        <strong>10</strong>
        <strong> de </strong>
        <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <Button
          colorScheme="pink"
          size="sm"
          width="4"
          fontSize="xs"
          disabled
          _disabled={{ bg: "pink.500", cursor: "default" }}
        >
          1
        </Button>
        <Button
          colorScheme="pink"
          size="sm"
          width="4" 
          bg="gray.700"
          fontSize="xs"
          _hover={{ bg: "gray.500" }}
        >
          2
        </Button>
        <Button
          colorScheme="pink"
          size="sm"
          width="4" 
          bg="gray.700"
          fontSize="xs"
          _hover={{ bg: "gray.500" }}
        >
          3
        </Button>
        <Button
          colorScheme="pink"
          size="sm"
          width="4" 
          bg="gray.700"
          fontSize="xs"
          _hover={{ bg: "gray.500" }}
        >
          4
        </Button>
      </Stack>
    </Stack>
  );
}
