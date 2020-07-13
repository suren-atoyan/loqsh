import React from 'react';
import dotenv from 'dotenv';

import { UrbanBotTelegram } from '@urban-bot/telegram';
import { render, Root } from '@urban-bot/core';

import App from 'App';

dotenv.config();

const { TELEGRAM_TOKEN, PORT } = process.env;

const isDevelopment = process.env.NODE_ENV === 'development';

const urbanBotTelegram = new UrbanBotTelegram({
  token: TELEGRAM_TOKEN,
  isPolling: isDevelopment,
});

render(
  <Root
    bot={urbanBotTelegram}
    port={PORT || 8756}
  >
    <App />
  </Root>,
  () => console.log('telegram bot has started'),
);
