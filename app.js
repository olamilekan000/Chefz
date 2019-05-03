import express from 'express';
import graphqlHTTP from 'express-graphql';
import cors from 'cors';

import { PORT } from './config/port';
import logger from './config/winston';
import {schema} from './server/schema/';

const app = express();

app.use(cors())
app.use('/graphql', graphqlHTTP({
	schema,
	graphiql: true
}))

app.listen(PORT, () => {
  logger.info(`Server now listening for request at port ${PORT}`);
})
