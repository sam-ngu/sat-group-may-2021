const express = require('express');
const apiRoutes = require('./api/index');

const authRoutes = require('./web/auth')
const webRoutes = require('./web/web')

const router = express.Router();


router.use('/api', apiRoutes);
router.use(authRoutes);
router.use(webRoutes);


module.exports = router;


