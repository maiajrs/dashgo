import { Flex, Icon, Input} from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";
export function SearchBox() {
  return (
    <Flex align="center" ml="auto">
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
    </Flex>
  );
}
