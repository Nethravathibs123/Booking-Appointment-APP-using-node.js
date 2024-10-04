const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path'); // Make sure to import path
const userRoutes = require('./routes/user'); // Adjust the path if necessary
const sequelize = require('./util/database'); // Adjust the path if necessary

const app = express();

app.set('view engine', 'ejs'); // Set EJS as the templating engine
app.set('views', path.join(__dirname, 'views')); // Set the views directory

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public'))); // Serve static files

// User routes
app.use('/api', userRoutes);

// Serve main view
app.get('/', (req, res) => {
    res.render('index'); // Render the main page
});

// Sync database and start the server
sequelize.sync()
    .then(() => {
        app.listen(3000, () => {
            console.log('Server is running on http://localhost:3000');
        });
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
