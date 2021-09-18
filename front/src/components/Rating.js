import {
  Stack,
  Input,
  FormControl,
  Heading,
  Button,
  Center,
  Textarea,
  Text,
  SkeletonText,
  Skeleton,
  Box,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { FormEvent, ChangeEvent, useState } from 'react';

function validURL(str) {
  var pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  ); // fragment locator
  return !!pattern.test(str);
}

const Rating = () => {
  const [url, setUrl] = useState('');
  const [prediction, setPrediction] = useState('');
  const [state, setState] = useState('initial');
  const [error, setError] = useState(false);

  const handleSubmit = url => {
    console.log('cliked');
    if (state === 'initial') {
      setUrl(url);
    } else {
      setState('initial');
    }
  };

  return (
    <div>
      <Center>
        <Stack
          textAlign={'center'}
          maxW="560px"
          minW="560px"
          direction={{ base: 'row' }}
          as={'form'}
          spacing={'12px'}
          onSubmit={e => {
            e.preventDefault();
            setError(false);
            setState('submitting');
            alert(`Retrieving data from ${url}...`);
            if (validURL(url)) {
              // Retrieve Reddit Post JSON Data
              fetch(
                `${window.location.protocol}//${window.location.hostname}/predict?url=${url}`
              )
                .then(response => response.json())
                .then(data => {
                  console.log(data);
                  if (!data.error) {
                    setState('success');
                    setPrediction(data.result);
                  } else {
                    throw new Error(data.error);
                  }
                })
                .catch(error => {
                  alert(error);
                  console.error(error);
                  setError(true);
                  setState('initial');
                });
            } else {
              alert(`'${url}' is not a valid URL, Please try again.`);
              setError(true);
              setState('initial');
              return;
            }
          }}
        >
          <FormControl>
            <Input
              variant="outline"
              placeholder="Copy and Paste Your Reddit Post URL Here!"
              onChange={e => handleSubmit(e.target.value)}
            />
          </FormControl>
          <FormControl w={{ base: '100%', md: '40%' }}>
            <Button
              colorScheme={state === 'success' ? 'green' : 'blue'}
              isLoading={state === 'submitting'}
              w="100%"
              type="submit"
            >
              {state === 'success' ? <CheckIcon /> : 'Submit'}
            </Button>
          </FormControl>
        </Stack>
      </Center>

      {state === 'success' && (
        <Center pt="5">
          <Stack w="100%">
            <Text>Analysis of <Text as="i">{url}</Text></Text>
            {prediction == '' ? (
              <SkeletonText mt="4" noOfLines={4} spacing="4" isLoaded={false} />
            ) : (
              <Center pt="5">
                <Stack>
                <Center pt="5">
                    <Text  as="em"> expected rating 📈</Text>
                  </Center>
                  <Heading fontSize={{ base: '5xl', sm: '6xl', md: '8xl' }} >
                    {prediction.expected_rating}
                  </Heading>
                  
                </Stack>
              </Center>
            )}
          </Stack>
        </Center>
      )}
    </div>
  );
};

export default Rating;
