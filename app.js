const express = require('express');
const fs = require('fs/promises');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

// Data file path
const dataFilePath = path.join(__dirname, 'resignation_data.json');

// Initialize JSON file if it doesn't exist
async function initializeDataFile() {
    try {
        await fs.access(dataFilePath);
    } catch {
        await fs.writeFile(dataFilePath, '[]');
    }
}

// API endpoints
app.get('/api/entries', async (req, res) => {
    try {
        const data = await fs.readFile(dataFilePath, 'utf8');
        res.json(JSON.parse(data));
    } catch (error) {
        res.status(500).json({ error: 'Error reading data' });
    }
});

app.post('/api/entries', async (req, res) => {
    try {
        const data = await fs.readFile(dataFilePath, 'utf8');
        const entries = JSON.parse(data);

        if (entries.length >= 100) {
            return res.status(400).json({ error: 'Maximum entries reached' });
        }

        entries.push(req.body);
        await fs.writeFile(dataFilePath, JSON.stringify(entries, null, 2));
        res.json(entries);
    } catch (error) {
        res.status(500).json({ error: 'Error saving data' });
    }
});

// Initialize and start server
initializeDataFile().then(() => {
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
});
