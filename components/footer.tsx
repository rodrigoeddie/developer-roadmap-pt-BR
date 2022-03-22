import { Box, Container, Flex, Image, Link, Stack, Text } from '@chakra-ui/react';
import siteConfig from '../content/site.json';
import { CustomAd } from './custom-ad';

function NavigationLinks() {
  return (
    <>
      <Stack isInline d={['none', 'none', 'flex']} color='gray.400' fontWeight={600} spacing='30px'>
        <Link _hover={{ color: 'white' }} href='/roadmaps'>Roteiros</Link>
        <Link _hover={{ color: 'white' }} href='/guides'>Guias</Link>
        <Link _hover={{ color: 'white' }} href='/watch'>Vídeos</Link>
        <Link _hover={{ color: 'white' }} href='/about'>Sobre</Link>
        <Link _hover={{ color: 'white' }} href={siteConfig.url.youtube} target='_blank'>YouTube</Link>
      </Stack>

      <Stack d={['flex', 'flex', 'none']} color='gray.400' fontWeight={600} spacing={0}>
        <Link py='7px' borderBottomWidth={1} borderBottomColor='gray.800' _hover={{ color: 'white' }}
              href='/roadmaps'>Roteiros</Link>
        <Link py='7px' borderBottomWidth={1} borderBottomColor='gray.800' _hover={{ color: 'white' }}
              href='/guides'>Guias</Link>
        <Link py='7px' borderBottomWidth={1} borderBottomColor='gray.800' _hover={{ color: 'white' }}
              href='/watch'>Vídeos</Link>
        <Link py='7px' borderBottomWidth={1} borderBottomColor='gray.800' _hover={{ color: 'white' }}
              href='/thanks'>Agradecimentos</Link>
        <Link py='7px' borderBottomWidth={1} borderBottomColor='gray.800' _hover={{ color: 'white' }}
              href='/about'>Sobre</Link>
        <Link py='7px' _hover={{ color: 'white' }} target='_blank'
              href={siteConfig.url.youtube}>YouTube</Link>
      </Stack>
    </>
  );
}

export function Footer() {
  return (
    <Box bg='brand.hero' p={['25px 0', '25px 0', '40px 0']}>
      <Container maxW='container.md'>
        <NavigationLinks />

        <Box mt={['40px', '40px', '50px']} mb='40px' maxW='500px'>
          <Flex spacing={0} alignItems='center' color='gray.400'>
            <Link d='flex' alignItems='center' fontWeight={600} _hover={{ textDecoration: 'none', color: 'white' }}
                  href='/'>
              <Image alt='' h='25px' w='25px' src='/logo.svg' mr='6px' />
              roadmap.sh
            </Link>
            <Text as='span' mx='7px'>por</Text>
            <Link bg='blue.500' px='6px' py='2px' rounded='4px' color='white' fontWeight={600} fontSize='13px'
                  _hover={{ textDecoration: 'none', bg: 'blue.600' }} href={siteConfig.url.twitter}
                  target='_blank'>@kamranahmedse</Link>
          </Flex>

          <Text my='15px' fontSize='14px' color='gray.500'>A comunidade criou roteiros, artigos, recursos e jornadas para ajudá-lo a escolher seu caminho e crescer em sua carreira.</Text>

          <Text fontSize='14px' color='gray.500'>
            <Text as='span' mr='10px'>&copy; roadmap.sh</Text>&middot;
            <Link href='/about' _hover={{ textDecoration: 'none', color: 'white' }} color='gray.400'
                  mx='10px'>FAQ</Link>&middot;
            <Link href='/terms' _hover={{ textDecoration: 'none', color: 'white' }} color='gray.400'
                  mx='10px'>Termos</Link>&middot;
            <Link href='/privacy' _hover={{ textDecoration: 'none', color: 'white' }} color='gray.400'
                  mx='10px'>Privacidade</Link>
          </Text>
        </Box>
      </Container>

      {/*<CustomAd />*/}
      {process.env.GA_SECRET && (
        <script
          async
          type='text/javascript'
          src='//cdn.carbonads.com/carbon.js?serve=CE7DLK3Y&placement=roadmapsh'
          id='_carbonads_js'
        />
      )}
    </Box>
  );
}
