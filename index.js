// index.js
// load the things we need
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3000
var app = express();
const connectionString = process.env.DATABASE_URL;
const { Pool } = require('pg')
const pool = new Pool({connectionString: connectionString});

app
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  // set the view engine to ejs
  .set('view engine', 'ejs')
  //.get('/', (req, res) => res.render('pages/index'))
  
  // use res.render to load up an ejs view file
	
	.get('/', function(req, res) {
		console.log("Getting hotdogs from DB");
	
	// This runs the query to get the hotdogs
  pool.query('SELECT * FROM hotdogs', function(err, result) {
      if (err) {
        return console.error('error running query', err);
      }
	  
	  // Log this to the console for debugging purposes.
    console.log("Back from DB with result:");
	console.log(result.rows);
	const hotdogs = result.rows;
	console.log("hotdogs variable:");
	console.log(hotdogs);
	
	res.render('pages/index', {
        hotdogs: hotdogs
    });
	
	//callback(null, result.rows);
    }); 
    
})
  
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
