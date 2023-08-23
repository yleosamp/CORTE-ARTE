const mongoose = require('mongoose');
const URI = 'mongodb+srv://salaoUser:4Xmrpm6saaQ09LLs@cluster-dev.q6ezmhj.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(URI);

mongoose
  .connect(URI)
  .then(() => console.log('DB is Up!'))
  .catch(() => console.log(err));