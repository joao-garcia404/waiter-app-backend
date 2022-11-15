import express from 'express';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    console.log('Connected to mongoDB');

    const app = express();

    const PORT = 3001;

    app.listen(3001, () => {
      console.log(`🏎 Server running on http://localhost:${PORT}`);
    });
  })
  .catch(() => console.log('Error while connecting to mongoDB'));


