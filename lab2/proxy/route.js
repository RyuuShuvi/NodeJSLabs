const express = require('express');
const router = express.Router();
const service = require('./service');

router.use('/', async (req, res) => {
        const data = await service.getData();
        res.send(data);
});

module.exports = router;
