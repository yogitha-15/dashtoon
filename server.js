// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3002;

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public'), { 
    setHeaders: (res, path) => {
        if (path.endsWith('.css')) {
            res.setHeader('Content-Type', 'text/css');
        }
    },
}));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
