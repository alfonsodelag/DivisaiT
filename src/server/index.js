const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const app = express();

app.use(cors());

app.get("/", async (req, res) => {
    const response = await fetch("https://datos.madrid.es/egob/catalogo/202625-0-aparcamientos-publicos.json")
    const body = await response.json()
    res.json(body);
});

app.listen(4000, () => {
    console.log('server is listening on port 4000');
});