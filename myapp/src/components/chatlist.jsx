import {Avatar,Flex,HStack} from "@chakra-ui/react"

export function Chat({ name, message, date, seen, src, ...rest }) {

    return (

        <HStack>
            <Avatar>

                <Box>
                    <Flex>
                    <Box>
                            <Text> </Text>
                                <HStack>

                                <DeliveredIcon />
                                <Test></Test>
                            </HStack>
                            
                            
                    </Box>
            
                </Flex>
            
        </Box>
    </HStack >

);
}
    
    
