const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const { connectDB } = require('./src/db/config')
const authRoute = require('./src/routes/auth')
const bookRoute = require('./src/routes/books')
dotenv.config()
const app = express()
const port = process.env.PORT

const corsOptions = {
  origin: 'https://bcs-backend-qulo-nwegr5exe-abdulrehman67s-projects.vercel.app', // You can replace '*' with specific domains like ['http://localhost:3000', 'https://your-frontend-domain.com']
  methods: 'GET,POST,PUT,DELETE', // Allowed methods
  allowedHeaders: 'Content-Type,Authorization', // Allowed headers
};

app.use(cors(corsOptions));
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello From BCS')
})
// 

app.use('/auth', authRoute)
app.use('/book', bookRoute)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  connectDB()
})