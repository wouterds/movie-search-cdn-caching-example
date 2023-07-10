import dotenv from 'dotenv';

// load .env before loading anything else
dotenv.config();

import express from 'express';

import { handlePingRequest, handleRootRequest } from './request-handlers';

const app = express();
app.get('/', handleRootRequest);
app.get('/ping', handlePingRequest);

app.listen(process.env.PORT, () => {
  console.log(
    `Application running on port http://localhost:${process.env.PORT} 🚀`,
  );
});
