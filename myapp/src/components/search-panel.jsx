import {
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Tooltip,
  FilterIcon,
  IconButton,
} from "@chakra-ui/react";

export function SearchPanel(props) {
  return (
    <HStack spacing={"2.5"} px="8" py="2" borderRadius={"1px"}>
      <InputGroup>
        <InputLeftElement pointerEvents={"n"} />

        <Input
          _placeholder={{
            opacity: 0.88,
            color: "#8d80d9",
            paddingleft: "30px",
            fontSize: "10px",
          }}
          h="36px"
          _hover={{ bg: "#f0f2f5  " }}
          bg="#cbcfd4"
          variant="filled"
          placeholder="Search Your Friends..."
        />
      </InputGroup>
      <Tooltip
        shouldWrapChildren
        label="Unread Chats Filter"
        bg="#8d80d9"
        color="black"
        fontSize={"md"}
      >
        <IconButton>
          <FilterIcon />
        </IconButton>
      </Tooltip>
    </HStack>
  );
}
