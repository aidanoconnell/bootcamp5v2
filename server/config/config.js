//This file holds any configuration variables we may need
//'config.js' is typically ignored by git to protect sensitive information, such as your database's username and password

module.exports = {
  db: {
    uri: 'mongodb://bootcamp4:genericpassword1@ds125058.mlab.com:25058/bootcamp-3', //place the URI of your mongo database here.
  },
  port: 8080
};
