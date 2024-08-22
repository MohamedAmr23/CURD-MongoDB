import express from 'express'
import { dbConnection } from './database/dbConnection.js'
import router from './src/modules/user/user.router.js'
const app = express()
const port = 2000
dbConnection()

app.use(router)
app.use(express.json())

app.listen(port, () => console.log(`Example app listening on port ${port}!`))