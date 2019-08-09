// index.js
// load the things we need
require('dotenv').config();
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3000
var app = express();
const connectionString = process.env.DATABASE_URL;
const { Pool } = require('pg')
var myParser = require("body-parser");
const pool = new Pool({connectionString: connectionString});

app
  .use(express.static(path.join(__dirname, 'public')))
  .use(myParser.urlencoded({extended : true}))
  .set('views', path.join(__dirname, 'views'))
  // set the view engine to ejs
  .set('view engine', 'ejs')
  //.get('/', (req, res) => res.render('pages/index'))
  
  // use res.render to load up an ejs view file
	
	.get('/', getViewHotDogsPage)
	.post('/addhotdog', addHotDog)
	.get('/getmanagehotdogspage', getManageHotDogsPage)
	.get('/getaddhotdogspage', getAddHotDogsPage)
	.delete('/deletehotdog', deleteHotDog)
	.get('/getupdatehotdogpage', getUpdateHotDogPage)
	.put('/updatehotdog', updateHotDog)
  
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
  
  function getViewHotDogsPage(req, res) {
		console.log("Getting hotdogs from DB");
	
	// This runs the query to get the hotdogs
  pool.query('SELECT hotdogs.id, hotdogname, description, price, images.image FROM hotdogs JOIN images ON hotdogs.image = images.id', function(err, result) {
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
    
}

function getAddHotDogsPage(req, res) {
	var infomessage = "";
	res.render('pages/add_hot_dog_page', {
		infomessage: infomessage
	});
}
  
  
/*
  function addHotDog(req, res) {
		var infomessage = "";
	console.log("Add Hot Dog Info:");
	console.log(req.body.jsonstring);
	var obj = JSON.parse(req.body.jsonstring);
	if(!obj.hotdogname || !obj.hotdogprice || !obj.hotdogdescription) {
	infomessage = "Please, provide all the required information.";
		res.render('pages/add_hot_dog_page', {
        infomessage: infomessage
    });	
	}
	var id = Math.floor(Math.random() * 10);
	
	
	obj.id = id; 
	
	// This runs the query to get the hotdogs
  pool.query('INSERT INTO hotdogs (hotdogname, description, price, image) VALUES ($1, $2, $3, $4)', [obj.hotdogname, obj.hotdogdescription, obj.hotdogprice, obj.id], function(err, result) {
      if (err) {
        return console.error('error running query', err);
      }
	  
	  // Log this to the console for debugging purposes.
    // Log this to the console for debugging purposes.
    console.log("Back from DB with result of adding a hot dog:");
	console.log(result);
	console.log(result.rowCount);
	
	// This runs the query to get the hotdogs
  pool.query('SELECT hotdogs.id, hotdogname, description, price, images.image FROM hotdogs JOIN images ON hotdogs.image = images.id', function(err, result) {
      if (err) {
        return console.error('error running query', err);
      }
	  
	  // Log this to the console for debugging purposes.
    console.log("Back from DB with result !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!:");
	console.log(result.rows);
	const hotdogs = result.rows;
	console.log("hotdogs variable: $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
	console.log(hotdogs);
	
	res.render('pages/manage_hot_dogs_page', {
        hotdogs: hotdogs
    });

    }); 
    }); 
    
}
*/

function addHotDog(req, res) {
		var infomessage = "";
	console.log("Add Hot Dog Info:");
	console.log(req.query.hotdogname);
	console.log(req.query.hotdogprice);
	console.log(req.query.hotdogdescription);
	if(!req.query.hotdogname || !req.query.hotdogprice || !req.query.hotdogdescription) {
	infomessage = "Please, provide all the required information.";
		res.render('pages/add_hot_dog_page', {
        infomessage: infomessage
    });	
	}
	var id = Math.floor(Math.random() * 10);
 
	
	// This runs the query to get the hotdogs
  pool.query('INSERT INTO hotdogs (hotdogname, description, price, image) VALUES ($1, $2, $3, $4)', [req.query.hotdogname, req.query.hotdogdescription, req.query.hotdogprice, id], function(err, result) {
      if (err) {
        return console.error('error running query', err);
      }
	  
	  // Log this to the console for debugging purposes.
    // Log this to the console for debugging purposes.
    console.log("Back from DB with result of adding a hot dog:");
	console.log(result);
	console.log(result.rowCount);
	
	// This runs the query to get the hotdogs
  pool.query('SELECT hotdogs.id, hotdogname, description, price, images.image FROM hotdogs JOIN images ON hotdogs.image = images.id', function(err, result) {
      if (err) {
        return console.error('error running query', err);
      }
	  
	  // Log this to the console for debugging purposes.
    console.log("Back from DB with result !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!:");
	console.log(result.rows);
	const hotdogs = result.rows;
	console.log("hotdogs variable: $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
	console.log(hotdogs);
	console.log(hotdogs);
	infomessage = "You have successfully added " + req.query.hotdogname;
	
	res.render('pages/manage_hot_dogs_page', {
        hotdogs: hotdogs,
		infomessage: infomessage
    });

    }); 
    }); 
    
}


function getManageHotDogsPage(req, res){
	console.log("Getting hotdogs from DB");
	
	// This runs the query to get the hotdogs
  pool.query('SELECT hotdogs.id, hotdogname, description, price, images.image FROM hotdogs JOIN images ON hotdogs.image = images.id', function(err, result) {
      if (err) {
        return console.error('error running query', err);
      }
	  
	  // Log this to the console for debugging purposes.
    console.log("Back from DB with result:");
	console.log(result.rows);
	const hotdogs = result.rows;
	console.log("hotdogs variable:");
	console.log(hotdogs);
	var infomessage = "";
	
	res.render('pages/manage_hot_dogs_page', {
        hotdogs: hotdogs,
		infomessage: infomessage
    });
	
	//callback(null, result.rows);
    }); 
}

function deleteHotDog(req, res) {
	  console.log("Id of Place of Interest that is going to be deleted:");
	  var name = req.query.placeofinterestname;
	  var infomessage = "";
	console.log(req.query.id);
	pool.query('DELETE FROM hotdogs WHERE id=$1', [req.query.id], function(err, result) {
      if (err) {
        return console.error('error running query', err);
      }
	  
	  // Log this to the console for debugging purposes.
    console.log("Back from DB with result:");
	console.log(result);
	
	//callback(null, result.rows);
    });
	
	// This runs the query to get the hotdogs
  pool.query('SELECT hotdogs.id, hotdogname, description, price, images.image FROM hotdogs JOIN images ON hotdogs.image = images.id', function(err, result) {
      if (err) {
        return console.error('error running query', err);
      }
	  
	  // Log this to the console for debugging purposes.
    console.log("Back from DB with result:");
	console.log(result.rows);
	const hotdogs = result.rows;
	console.log("hotdogs variable:");
	console.log(hotdogs);
	infomessage = "You have successfully deleted " + req.query.name;
	
	res.render('pages/manage_hot_dogs_page', {
        hotdogs: hotdogs,
		infomessage: infomessage
    });
	
	//callback(null, result.rows);
    });
  }
  
  function getUpdateHotDogPage (req, res) {
	  pool.query('SELECT * FROM hotdogs WHERE id=$1', [req.query.id], function(err, result) {
      if (err) {
        return console.error('error running query', err);
      }
	  console.log("Back from DB with result for this hot dog @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@:");
	console.log(result.rows);
	const hotdog = result.rows;
	console.log("HOt Dog Name:");
	console.log(hotdog[0].hotdogname);
	console.log("HOt Dog Price:");
	console.log(hotdog[0].hotdogprice);
	console.log("HOt Dog Description:");
	console.log(hotdog[0].hotdogdescription);
	var name = hotdog[0].hotdogname;
	var price = hotdog[0].price;
	var description = hotdog[0].description;
	var id = hotdog[0].id;
	  var infomessage = "";
	res.render('pages/update_hot_dog_page', {
		name: name,
		price: price,
		description: description,
		id: id,
		infomessage: infomessage
	});
	  });
  }
  
  function updateHotDog (req, res) {
	  var infomessage = "";
	  console.log("Update Hot Dog: %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
		
	console.log(req.body.jsonstring);
	var obj = JSON.parse(req.body.jsonstring);
	console.log(obj);

 
	pool.query('UPDATE hotdogs SET hotdogname = $2, description = $3, price = $4 WHERE id = $1', [Number(obj.id), obj.hotdogname, obj.hotdogdescription, obj.hotdogprice], function(err, result) {
	console.log("Result from DB with ");
	console.log(result);

	
	  
      if (err) {
        return console.error('error running query', err);
      }
});

pool.query('SELECT hotdogs.id, hotdogname, description, price, images.image FROM hotdogs JOIN images ON hotdogs.image = images.id', function(err, result) {
      if (err) {
        return console.error('error running query', err);
      }
	  
	  // Log this to the console for debugging purposes.
    console.log("Back from DB with result:");
	console.log(result.rows);
	const hotdogs = result.rows;
	console.log("hotdogs variable:");
	console.log(hotdogs);
	infomessage = "The information about " + obj.hotdogname + " has been successfully updated";
	
	res.render('pages/manage_hot_dogs_page', {
        hotdogs: hotdogs,
		infomessage: infomessage
    });
	
	//callback(null, result.rows);
    });

  }
