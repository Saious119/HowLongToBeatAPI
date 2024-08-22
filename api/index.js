// ./src/index.js
// importing the dependencies
const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

let hltb = require('howlongtobeat');
let hltbService = new hltb.HowLongToBeatService();

// enabling CORS for all requests
app.use(cors({
	//origin: "https://cringebots.dev", // restrict calls to those this address
    origin: "*",
	methods: "GET" // only allow GET requests
}));


// defining an endpoint to return hltb entry based on given game name (gname)
app.get('/api/game/:gname', (req, res) => {
    const { gname } = req.params;
    hltbService.search(gname).then((result)  => {
        console.log(result);
        res.send(result[0]);
    });
    //res.send(ads);
    //return result;
});

// starting the server
app.listen(3001, () => {
  console.log('listening on port 3001');
});
