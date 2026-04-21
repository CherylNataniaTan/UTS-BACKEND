<<<<<<< HEAD
const express = require("express");
const router = express.Router();

// const transactionsRoutes = require("./api/components/transactions/transactions-route");
// router.use("/histories", historiesRoute);
=======
const express = require('express');
const router = express.Router();

const historiesRoute = require('./components/histories/histories-route')
const topupsRoute = require('./components/topups/topups-route');

router.use(historiesRoute);
router.use(topupsRoute);
>>>>>>> 7a554114880febfd7d4f128f92e7f2add859d2f6

module.exports = router;