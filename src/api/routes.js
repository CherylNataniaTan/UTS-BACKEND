const express = require('express');
const router = express.Router();

const historiesRoute = require('./components/histories/histories-route')
const topupsRoute = require('./components/topups/topups-route');

router.use(historiesRoute);
router.use(topupsRoute);

module.exports = router;