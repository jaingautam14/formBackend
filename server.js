const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Serve html css js files
app.use(express.static(path.join(__dirname, 'public')));

// API save data to a file
app.post('/save', (req, res) => {
    const data = req.body;

    if (!data) {
        // return res.status(400).send('No data received!');
        return res.send('No data received!');
    }

    fs.writeFile('formData.txt', JSON.stringify(data, null, 2), (err) => {
        if (err) {
            console.error('Error saving data:', err);
            return res.status(500).send('Error saving data!');
        }
        // /// /// / / / / / / / / / / / / / / / // / //
        res.status(200).send('Data saved successfully!');
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
