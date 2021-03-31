require('dotenv').config();
const express = require("express"),
    app = express(),
    port = process.env.PORT,
    cors = require('cors'),
    server = app.listen(port, () => console.log(`listening on port ${port}`))

const logger = require('morgan');

const widgetRouter = require('./server/routes/widget')

app.use(cors(),express.json(),express.urlencoded({extended: true}));

require('./server/config/database');

app.use(logger('dev'));

app.use('/api/widgets', widgetRouter);