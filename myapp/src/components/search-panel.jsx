import {
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Tooltip,
} from "@chakra-ui/react";

export function SearchPanel(props) {
  return (
    <HStack>
      <InputGroup>
        <InputLeftElement />

        <Input
          _placeholder={{
            opacity: 0.6,
            color: "#8d80d9",
            paddingleft: "30px",
            fontSize: "10px",
          }}
          h="36px"
          bg="#cbcfd4"
          variant="filled"
          placeholder="Search for Friends..."
        />
      </InputGroup>
      <Tooltip>
        <IconButton></IconButton>
      </Tooltip>
    </HStack>
  );
}
