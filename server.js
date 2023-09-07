	// server.js
    const express = require('express');
    const app = express();
    const PORT = process.env.PORT || 3000;
    const jsxViewEngine = require('jsx-view-engine');
    const pokemon = require('./models/pokemon');
     
    // set the views directory and the view engine
    app.set('view engine', 'jsx'); // Set the view engine to use JSX
    app.set('views', './views'); // Set the views directory
    app.engine('jsx', jsxViewEngine()); // Set the engine to use jsxViewEngine
     
    // define a GET route for /pokemon
    app.get('/pokemon', (req, res) => {
      // send the pokemon data as JSON
      // res.send(pokemon);
      // render the Index.jsx file
      res.render('Index', { pokemon });
    });
     //pokemon id 
    app.get('/pokemon/:id', (req, res) => {
      // second param of the render method must be an object
      res.render('Show', {
        // there will be a variable available inside the jsx file called pokemon, its value is pokemon[req.params.id]
        pokemon: pokemon[req.params.id],
      });
    });
     
    // start the server
    app.listen(PORT, () => {
      console.log(`Running on port: ${PORT}`);
    });