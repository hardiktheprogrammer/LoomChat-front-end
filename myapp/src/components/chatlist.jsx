import { Avatar, chakra, Flex, HStack } from "@chakra-ui/react";

export function Chat({ name, message, date, seen, mainsrc, ...rest }) {
  return (
    <HStack
      _hover={{
        cursor: "pointer",
        backgroundColor: "#daf7f7",
      }}
      {...rest}
    >
      <Avatar mx="3" name={name} src={mainsrc} />

      <Box flex="4" pr="6">
        <Flex justifyContent={"space-between"} align={"baseline"}>
          <Box>
            <Text fontWeight="300"> {name}</Text>
            <HStack>
              <DeliveredIcon />
              <Test color="#b256f0" fontSize="md">
                {meesage}
              </Test>
            </HStack>
          </Box>
          <chakra.time fontSize="md" color="#66817d">
            {date}
          </chakra.time>
        </Flex>
      </Box>
    </HStack>
  );
}
