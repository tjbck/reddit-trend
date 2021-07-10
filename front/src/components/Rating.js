import {
  Stack,
  Input,
  FormControl,
  Button,
  Center,
  Textarea,
  SkeletonText,
  Skeleton,
  Box,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { FormEvent, ChangeEvent, useState } from 'react';

function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
  }

const Rating = () => {
  const [url, setUrl] = useState('');
  const [state, setState] = useState('initial');
  const [error, setError] = useState(false);

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
            alert(`Analysing ${url}...`);

            // remove this code and implement your submit logic right here
            setTimeout(() => {
              if (validURL(url)) {
                setState('success');
              } else {
                  alert(`'${url}' is not a valid URL, Please try again.`)
                setError(true);
                setState('initial');
                return;
              }

              
            }, 1000);
          }}
        >
          <FormControl>
            <Input
              variant="outline"
              placeholder="Insert Your Reddit Post URL Here!"
              onChange={e => setUrl(e.target.value)}
            />
          </FormControl>
          <FormControl w={{ base: '100%', md: '40%' }}>
            <Button
              colorScheme={state === 'success' ? 'green' : 'blue'}
              isLoading={state === 'submitting'}
              w="100%"
              type={state === 'success' ? 'button' : 'submit'}
            >
              {state === 'success' ? <CheckIcon /> : 'Submit'}
            </Button>
          </FormControl>
        </Stack>
      </Center>

      {state === 'submitting' && (
        <Box>
          <SkeletonText mt="4" noOfLines={4} spacing="4" isLoaded={false} />
        </Box>
      )}

      {state === 'success' && (
        <Center>
          <Textarea m={5} value={`Analysis of '${url}'\nPrediction from the backend!`} />
        </Center>
      )}
    </div>
  );
};

export default Rating;
