import { Stack, Box, Button } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export function Pagination() {
  return (
    <Stack
      direction={["column", "row"]}
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
        <PaginationItem page={1} isCurrent />
        <PaginationItem page={2} />
        <PaginationItem page={3} />
        <PaginationItem page={4} />
      </Stack>
    </Stack>
  );
}
