const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 3000;

app.use(bodyParser.json());

// MongoDB configuration
const mongoHost = 'localhost';
const mongoPort = 27017;
const dbName = 'movie';
const collectionName = 'movies';

// MongoDB connection
MongoClient.connect(`mongodb://${mongoHost}:${mongoPort}`, { useUnifiedTopology: true })
.then(client => {
const db = client.db(dbName);
const collection = db.collection(collectionName);

// Endpoint to retrieve all movies
app.get('/movies', (req, res) => {
collection.find().toArray()
.then(movies => res.json(movies))
.catch(error => res.status(500).json({ error }));
});

// Endpoint to retrieve a movie by ID
app.get('/movies/:id', (req, res) => {
const movieId = req.params.id;
collection.findOne({ _id: movieId })
.then(movie => {
if (!movie) {
res.status(404).json({ message: 'Movie not found' });
} else {
res.json(movie);
}
})
.catch(error => res.status(500).json({ error }));
});


// Start the server
app.listen(port, () => {
console.log(`Server is running on http://localhost:${port}`);
});
})
.catch(error => {
console.error('Error connecting to MongoDB:', error);
});
