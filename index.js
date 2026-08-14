const { PORT } = require('./src/config/server-config');
const express = require('express');
const routes = require('./src/routes');

const app = express();
app.use(express.json());
app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;