require('dotenv').config();
const express = require('express');
const connectDB = require('./database/db');
const User=require('./models/User')  //import the models
const order=require('./models/Order');

// Create Express app
const app = express();
 
// Set up middleware
app.use(express.json());
 
// Connect to MongoDB
connectDB().then(async()=>{
  //collection will be automatically created, if dosen't exist
  await User.createCollection();  //it will create the collection if it doesn't exist
  console.log('User collection was created');
}).catch(console.error);
 
// Define routes
app.use('/api', require('./routers/userRouters'));
app.use('/api', require('./routers/orderRoutes'));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});