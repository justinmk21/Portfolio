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
          fontSize={{ base: 'lg', md: 'xl' }}
          fontWeight="semibold"
          mb={2}
          color="#gray"
        >
          Hi, I'm Kgomotso
        </Text>

        <Stack spacing={0} mb={2}>
          <Heading
            as="h1"
            fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
            color="#7B61FF"
          >
            Software
          </Heading>
          <Heading
            as="h1"
            fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
            color="#64B5FF"
          >
            Developer
          </Heading>
        </Stack>

        <Text
          fontSize={{ base: 'md', md: 'lg' }}
          color="eee"
          maxW={{ base: '100%', md: '500px' }}
        >
          I'm a developer based in Johannesburg, South Africa. I help build
          beautiful websites your users will love.
        </Text>
      </article>

      <article className="col d-flex justify-content-center justify-content-lg-end mt-5 mt-lg-0">
        <Box
        className='border-line'
          borderRadius="full"
          p={2}
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

