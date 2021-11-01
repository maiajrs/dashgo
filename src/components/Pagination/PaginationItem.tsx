import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  page: number;
  isCurrent?: boolean;
  onPageChange: (page: number) => void;
}

export function PaginationItem({
  page,
  isCurrent = false,
  onPageChange,
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
      onClick={() => onPageChange(page)}
    >
      {page}
    </Button>
  );
}
