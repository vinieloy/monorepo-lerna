import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from './input';

storiesOf('Input', module).add(
  'default', () => 
    <Input id="label-1" 
      placeholder="Digite aqui" />
);

storiesOf('Input', module).add(
  'label', () =>
    <Input id="label-1"
      label="Seu nome"
      placeholder="Digite aqui" />
);

storiesOf('Input', module).add(
  'disabled', () =>
    <Input disabled={true} 
      id="label-1"
      label="Seu nome"
      placeholder="Digite aqui" />
);