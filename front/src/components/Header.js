import {
  Box,
  Heading,
  Stack,
  HStack,
  VStack,
  Text,
  Center,
} from '@chakra-ui/react';

import ColorModeSwitcher from '../components/ColorModeSwitcher';

const Header = ({ title }) => {
  return (
    <div>
      <Box p={4}>
        <Center>
          <Stack spacing={4} maxW={'4xl'} textAlign={'center'}>
            <ColorModeSwitcher />

            <Heading fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }} pb="4">
              Reddit post trend prediction{' '}
              <Text as={'span'} color={'orange.400'}>
                made easy
              </Text>
            </Heading>

            <Text fontSize={'xl'} pb="6">
              This project explores the possibility of applying machine learning
              tools for marketing and community engagement purposes. We've built
              a system consisting of several components that analyzes existing
              Reddit posts and makes plausible predictions about their expected
              performance in terms of ratings and community interactions.
            </Text>
          </Stack>
        </Center>
      </Box>
    </div>
  );
};

Header.defaultProps = {
  title: 'Reddit Tracker',
};

export default Header;
