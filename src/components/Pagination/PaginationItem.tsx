import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  page: number;
  isCurrent?: boolean;
}

export function PaginationItem({
  page,
  isCurrent = false,
}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        colorScheme="pink"
        size="sm"
        width="8"
        bg="gray.700"
        fontSize="xs"
        disabled
        _disabled={{ bg: "pink.500", cursor: "default" }}
      >
        {page}
      </Button>
    );
  }
  return (
    <Button
      colorScheme="pink"
      size="sm"
      width="8"
      bg="gray.700"
      fontSize="xs"
      _hover={{ bg: "gray.500" }}
    >
      {page}
    </Button>
  );
}
