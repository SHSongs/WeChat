var express = require('express');
var router = express.Router();

router.post('/', (req, res) => {
    console.log(`flag`);
    res.send('response 되었음!');
});

module.exports = router;