import justin from './assets/Justin.jpg';
import { Image, Text, Box, Heading, Stack } from '@chakra-ui/react';
import './css/landingpage.css';

function LandingPage() {
  return (
    <section
      className="container d-flex flex-column flex-lg-row justify-content-center align-items-center full-h"
      style={{
        minHeight: 'calc(100vh - 120px)',
        paddingTop: '100px',
      }}
    >
      <article className="col d-flex flex-column justify-content-center mb-5 mb-lg-0 text-center text-lg-start">
        <Text
          fontSize={{ base: 'lg', md: 'xl',lg: '24px' }}
          fontWeight="semibold"
          mb={2}
          color="#4e525a"
        >
          Hi, I am Kgomotso, a
        </Text>

        <Stack spacing={0} mb={2}>
          <Heading
            as="h1"
            fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
            fontWeight={'bolder'}
            color="#7B61FF"
          >
            Software
          </Heading>
          <Heading
            as="h1"
            fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
            fontWeight={'bolder'}
            color="#64B5FF"
          >
            Developer
          </Heading>
        </Stack>

        <Text
            font={'revert-layer'}
            fontSize={{ base: 'md', md: 'lg' }}
            color="4e525a"
            maxW={{ base: '100%', md: '500px' }}
        >
          I'm a Johannesburg-based developer from South Africa, focused on 
          creating visually stunning websites your audience will enjoy.
        </Text>
      </article>

      <article className="col d-flex justify-content-center justify-content-lg-end mt-5 mt-lg-0">
        <Box
          className='border-line'
          borderRadius="full"
          p={2.5}
          _hover={{ transform: 'scale(1.05)', transition: '0.3s' }}
        >
          <Image
            src={justin}
            alt="Kgomotso Mkhawane"
            boxSize={{ base: '250px', md: '300px', lg: '350px' }}
            borderRadius="full"
            objectFit="cover"
          />
        </Box>
      </article>
    </section>
  );
}

export default LandingPage;

