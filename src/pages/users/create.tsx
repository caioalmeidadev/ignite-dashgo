import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import {SubmitHandler, useForm} from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

type CreateUserFormData = {
    name: string;
    email: string;
    password: string;
    password_confirm: string;
  }
  
  const CreateUserFormSchema = yup.object().shape({
    name: yup.string().required('O nome é obrigatório'),
    email: yup.string().required('O e-mail é obrigatório').email('E-mail inválido'),
    password: yup.string().required('A senha é obrigatória').min(6,'A senha precisa de no minimo 6 caracteres'),
    password_confirm: yup.string().oneOf([
        null, yup.ref('password')
    ], 'As senha precisam ser iguais')
  });
  
export default function UserCreate() {

    const { register, handleSubmit, formState} = useForm({
        resolver: yupResolver(CreateUserFormSchema)
    });

    const { errors} = formState;

    const handleCreateUsers:SubmitHandler<CreateUserFormData> =  (values) => {
        console.log(values);
    }

    return (
        <Box>
            
            <Header />
            
            <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
                <Sidebar />

                <Box as='form' onSubmit={handleSubmit(handleCreateUsers)} flex='1' borderRadius={8} bg='gray.800' p='8'>
                    <Heading size='ls' fontWeight='normal'> Criar Usuário</Heading>
                    
                    <Divider my='6' borderColor='gray.700' />

                    <VStack spacing='8'>
                        <SimpleGrid minChildWidth='240px' spacing='8' w='100%'>
                            <Input name='name' label='Nome Completo'{...register('name')} error={errors.name}/>
                            <Input name='email' label='E-mail' {...register('email')} error={errors.email}/>
                        </SimpleGrid>
                        <SimpleGrid minChildWidth='240px' spacing='8' w='100%'>
                            <Input name='password' type='password' label='Senha'{...register('password')} error={errors.password}/>
                            <Input name='password_confirm' type='password' label='Confirmação de Senha' {...register('password_confirm')} error={errors.password_confirm}/>
                        </SimpleGrid>

                        
                    </VStack>
                    <Flex mt='8' justify='flex-end'>
                        <HStack spacing='4'>
                            <Link href='/users' passHref>
                            <Button colorScheme='whiteAlpha'>Cancelar</Button>
                            </Link>
                            <Button type="submit" isLoading={formState.isSubmitting} colorScheme='pink'>Salvar</Button>
                        </HStack>
                    </Flex>


                </Box>
            </Flex>
        
        </Box>
    );
}