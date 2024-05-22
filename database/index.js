const express = require('express');
const app = express();

const { Pool } = require('pg');

// Create a pool for database connections
const pool = new Pool({
    host: 'localhost',
    user: 'postgres', 
    database: 'node',
    password: '9.9.2001',
    port: 5432
});

// Middleware to parse JSON bodies
app.use(express.json());

// Define a GET endpoint to fetch data
app.get('/get', (req, res) => {
    pool.query("SELECT * FROM NODEJS", (error, result) => {
        if (error) {
            console.error('Error executing query:', error);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.json(result.rows);
        }
    });
});

//posting data in pgsql

app.post('/add', (req, res) => {
    const { name, status } = req.body;
    pool.query("INSERT INTO nodejs (name, status) VALUES ($1, $2);", [name, status], (error, result) => {
        if (error) {
            console.error('Error executing query:', error);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            console.log(result);
            res.json({success:"Data saved successfuly"})
            
        }
    });
});

//updating data in psql
app.put('/update/:id', (req, res) => {
    const { id } = req.params;
    const { name, status } = req.body;
    pool.query('UPDATE nodejs SET name = $1, status= $2 WHERE id = $3', [name, status, id], (error) => {
        if (error) {
            console.error('Error Updating data', error);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.json({ success: "Data updated successfully" });
        }
    });
});

//delete data in psql
app.delete("/delete/:id", (req, res) => {
    const { id } = req.params;
    pool.query("DELETE FROM nodejs WHERE id=$1", [id], (err, results) => {
        if (err) {
            console.error("Error deleting data from database", err);
            return res.status(400).send();
        } else{
            res.json({ success: "Data deleted successfully" });
        }
    })
})






app.listen(3000, () => {
    console.log(`Server running at port 3000`);
});
