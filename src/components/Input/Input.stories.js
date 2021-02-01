import React from 'react';
import Input from './Input';

export default {
  title: 'Form/Input',
  component: Input,
};

export const Large = () => <Input variant='large' value='Some random text' />;
export const Medium = () => <Input variant='medium' value='Some text' />;
export const Short = () => <Input variant='short' value='Text' />;
