require('dotenv').config();

module.exports = {
    mongoURI: `mongodb://pethub1:lucky0ne@ds151086.mlab.com:51086/heroku_gx9zbbp0`,
    mongoURI2: `mongodb://heroku_gx9zbbp0:lucky0ne@ds151086.mlab.com:51086/heroku_gx9zbbp0',
    //mongoURI3: ENV['MONGODB_URI'],
    mongoURILocal: `mongodb://localhost/pethub`,
    secretOrKey: "secret"
  };

  heroku_gx9zbbp0