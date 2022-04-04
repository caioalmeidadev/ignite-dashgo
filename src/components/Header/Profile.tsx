import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData: boolean;
}

export default function Profile({showProfileData}:ProfileProps) {
    return (
    <Flex align='center'>
        {showProfileData && (
            <Box mr='4' textAlign='right'>
                <Text>Caio Almeida</Text>
                <Text color='gray.500' fontSize='small'>caioalmeidanaweb@gmail.com</Text>
            </Box>
        )}
       <Avatar size='md' name='Caio Almeida' src='http://www.github.com/caioalmeidadev.png' />
    </Flex>
    );
}