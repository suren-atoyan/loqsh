import React from 'react';

import { Text } from '@urban-bot/core';
import { messages } from '../../config';

function Loading({ message = messages.waiting }) {
  return (
    <Text>{message}</Text>
  );
}

export default Loading;
