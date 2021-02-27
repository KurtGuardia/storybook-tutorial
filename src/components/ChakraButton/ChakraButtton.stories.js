import { Button } from '@chakra-ui/react';
import React from 'react';

export default {
  title: 'Chakra/Button',
  component: Button,
};

export const Success = () => <Button colorScheme='green'>Success</Button>;
export const Danger = () => <Button colorScheme='red'>Danger</Button>;
