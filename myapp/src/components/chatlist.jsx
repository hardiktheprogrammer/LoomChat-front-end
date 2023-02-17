import { Avatar, Flex, HStack } from "@chakra-ui/react";

export function Chat({ name, message, date, seen, mainsrc, ...rest }) {
  return (
    <HStack>
      <Avatar mx="3" name={name} src={mainsrc} />

      <Box flex="4" pr="6">
        <Flex justifyContent={"space-between"} align={"baseline"}>
          <Box>
            <Text fontWeight="300"> {name}</Text>
            <HStack>
              <DeliveredIcon />
              <Test></Test>
            </HStack>
          </Box>
        </Flex>
      </Box>
    </HStack>
  );
}
