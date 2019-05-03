import express from 'express';

import { PORT } from './config/port';
import logger from './config/winston';

const app = express()

app.listen(PORT, () => {
  logger.info(`Server now listening for request at port ${PORT}`);
})
