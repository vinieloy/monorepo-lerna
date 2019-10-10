import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './button';

storiesOf('Button', module).add(
  'default', () => <Button>{'Continuar'}</Button>
);

storiesOf('Button', module).add(
  'disabled', () => <Button disabled={true} >{'Continuar'}</Button>
);