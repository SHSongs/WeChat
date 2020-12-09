var express = require('express');
var app = express();                // app은 express의 인스턴스
var cors = require('cors');
const port = 3001;

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.use(cors());

app.get('/', (req, res) => {
    res.send('<h1>Hello Express!</h1>')
})