import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
// import Center from '../src/components/Center/Center';
import { ChakraProvider, theme, Box } from '@chakra-ui/react';
import { withKnobs } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

addDecorator((story) => (
  <ChakraProvider theme={theme}>
    <CSSReset />
    {story()}
  </ChakraProvider>
));

addDecorator(withKnobs);
addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },

  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
};

export const decorators = [
  (Story) => (
    <ChakraProvider theme={theme}>
      <Box m='4'>
        <Story />
      </Box>
    </ChakraProvider>
  ),
];
