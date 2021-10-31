import { Stack, Box, Flex } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCountOfRegisters: number;
  registerPerPage?: number;
  currentPage: number;
  onPageChange?: (page: number) => void;
}

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter((page) => page > 0);
}

const siblingsCount = 2;

export function Pagination({
  totalCountOfRegisters,
  registerPerPage = 2,
  currentPage,
  onPageChange,
}: PaginationProps) {
  const lastPage = Math.ceil(totalCountOfRegisters / registerPerPage);

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : [];
  console.log(
    previousPages,
    nextPages,
    currentPage,
    lastPage,
    currentPage - 1 - siblingsCount
  );

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
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem page={Number(1)} />
            <Flex as="p" width="8" color="gray.300" justify="center" align="end">
              ...
            </Flex>
          </>
        )}

        {previousPages.length > 0 &&
          previousPages.map((page) => (
            <PaginationItem key={page} page={Number(page)} />
          ))}
        <PaginationItem page={currentPage} isCurrent />
        {nextPages.length > 0 &&
          nextPages.map((page) => (
            <PaginationItem key={page} page={Number(page)} />
          ))}
        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + siblingsCount + 1 < lastPage && (
              <Flex as="p" width="8" color="gray.300" justify="center" align="end">
                ...
              </Flex>
            )}
            <PaginationItem page={Number(lastPage)} />
          </>
        )}
      </Stack>
    </Stack>
  );
}
