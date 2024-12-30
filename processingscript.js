const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Route to handle form submission
app.post('/processingscript.js', (req, res) => {
    const formData = {
        name: req.body.Name,
        password: req.body.password,
        checkbox: req.body.checkbox || 'unchecked',
        areYou: req.body.areyou,
        comments: req.body.comments,
        options: req.body.options,
    };

    console.log('Form Data:', formData);

    // Respond with a success message
    res.send(`
        <h1>Form Submitted Successfully</h1>
        <p>Name: ${formData.name}</p>
        <p>Password: ${formData.password}</p>
        <p>Checkbox: ${formData.checkbox}</p>
        <p>Are you: ${formData.areYou}</p>
        <p>Comments: ${formData.comments}</p>
        <p>Selected Option: ${formData.options}</p>
    `);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
