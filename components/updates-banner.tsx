import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Link,
  Text,
} from '@chakra-ui/react';
import siteConfig from '../content/site.json';

export function UpdatesBanner() {
  return (
    <Box
      borderTopWidth={1}
      pt={['40px', '40px', '70px']}
      pb={['40px', '45px', '80px']}
      textAlign="left"
      bg="brand.footer"
    >
      <Container maxW="container.md">
        <Heading
          color={'gray.100'}
          fontSize={['25px', '25px', '35px']}
          mb={['5px', '5px', '15px']}
        >
          Mantenha-se informado
        </Heading>
        <Text
          color="gray.400"
          lineHeight="26px"
          fontSize={['15px', '15px', '16px']}
          mb="20px"
        >
          Inscreva-se para receber atualizações, novos guias, vídeos e roteiros em sua caixa de entrada.
        </Text>

        <Flex flexDirection={['column', 'column', 'row']}>
          <Box mr={['0', '0', '20px']} mb={['15px', '15px', 0]}>
            <Button
              as={Link}
              href="/signup"
              width={['full', 'auto']}
              fontSize={['14px', '14px', '16px']}
              variant="outline"
              borderWidth={2}
              colorScheme="green"
              _hover={{ color: 'green.200', textDecoration: 'none' }}
            >
              Inscreva-se para receber atualizações
            </Button>
            <Text color="gray.500" fontSize="13px" mt="5px">
              Assinatura gratuita para receber atualizações
            </Text>
          </Box>
          <Box>
            <Button
              as={Link}
              href={siteConfig.url.sponsor}
              target="_blank"
              width={['full', 'auto']}
              fontSize={['14px', '14px', '16px']}
              _hover={{ textDecoration: 'none', bg: 'yellow.500' }}
              colorScheme="yellow"
            >
              Atualizações e conteúdo pago
            </Button>
            <Text color="gray.500" fontSize="13px" mt="5px">
            Apoie o projeto pagando {' '}
              <Text as="span" fontWeight={600}>
                5$ por mês
              </Text>
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
