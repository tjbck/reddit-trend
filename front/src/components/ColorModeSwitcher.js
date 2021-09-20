import React, { Fragment } from 'react';
import {
  useColorMode,
  useColorModeValue,
  Button,
  Text,
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <Fragment>
      <Button
        size="md"
        fontSize="lg"
        aria-label={`Switch to ${text} mode`}
        variant="ghost"
        color="current"
        marginLeft="2"
        onClick={toggleColorMode}
        {...props}
      >
        <SwitchIcon /> <Text pl={3}> Switch to {text} mode</Text>
      </Button>
    </Fragment>
  );
};

export default ColorModeSwitcher;
