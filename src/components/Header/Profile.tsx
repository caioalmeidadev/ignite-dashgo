import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export default function Profile() {
    return (
    <Flex align='center'>
        <Box mr='4' textAlign='right'>
            <Text>Caio Almeida</Text>
            <Text color='gray.500' fontSize='small'>caioalmeidanaweb@gmail.com</Text>
        </Box>
       <Avatar size='md' name='Caio Almeida' src='http://www.github.com/caioalmeidadev.png' />
    </Flex>
    );
}