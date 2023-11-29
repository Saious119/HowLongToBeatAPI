// ./src/index.js
// importing the dependencies
const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

let hltb = require('howlongtobeat');
let hltbService = new hltb.HowLongToBeatService();

// defining the Express app
//const app = express();

// adding Helmet to enhance your Rest API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// defining an endpoint to return hltb entry based on given game name (gname)
app.get('/api/game/:gname', (req, res) => {
    const { gname } = req.params;
    hltbService.search(gname).then(result => res.send(result));
    //res.send(ads);
});

// starting the server
// app.listen(3001, () => {
//   console.log('listening on port 3001');
// });

module.exports = app;