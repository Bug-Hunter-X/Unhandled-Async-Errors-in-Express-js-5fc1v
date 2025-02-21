const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  someAsyncOperation()
    .then(() => {
      res.send('Hello World!');
    })
    .catch(err => {
      console.error('Async operation failed:', err);
      // Provide more context to the error message
      const errorMessage = err.message || 'An unexpected error occurred';
      res.status(500).send({ error: errorMessage });
    });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

async function someAsyncOperation() {
  const success = Math.random() < 0.5;
  if (!success) {
    throw new Error('Something went wrong!');
  }
  //Simulate an async operation
  await new Promise(resolve => setTimeout(resolve, 100));
}