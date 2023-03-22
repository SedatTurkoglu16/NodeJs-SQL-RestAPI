import express from 'express'
import config from './config'

import personRoutes from './routes/persons.routes'

const app = express()

app.set('port', config.port || 3000)

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(personRoutes);

export default app