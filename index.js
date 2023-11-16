import express from 'express';

const webserver = express();

webserver.get('/', async(req, res) => {
  try {
    res.status(200).json({"email": "admin@abku.dev"})
  } catch (error) {
    res.status(500).json({"error_message": error.message})
  }
})

webserver.get('/info', async(req, res) => {
  try {
    res.status(200).json({"name": "a1", "hosted_by": "Azure", "domain": "a1.abku.dev"})
  } catch (error) {
    res.status(500).json({"error_message": error.message})
  }
})


webserver.listen(3000, () => {
  console.log('Server started on port 3000');
});