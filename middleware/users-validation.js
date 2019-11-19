//import
const jwt = require("jsonwebtoken");

//exports
module.exports = {
  validateRegistration,
  getJwtToken
};

//helper functions
function validateRegistration(user) {
  let errors = [];
  if (!user.name) {
    errors.push("Please provide a name for this user");
  }
  if (!user.email) {
    errors.push("Please provide an email address");
  }
  if (!user.password) {
    errors.push("Please provide a password");
  }
  return {
    isSuccessful: errors.length > 0 ? false : true,
    errors
  };
}

function validateUser(user) {
  let errors = [];
  if (!user.email) {
    errors.push("Please provide an email address");
  }
  if (!user.password) {
    errors.push("Please provide a password");
  }
  return {
    isSuccessful: errors.length > 0 ? false : true,
    errors
  };
}

function getJwtToken(email) {
  const payload = {
    email
  };
  const secret =
    process.env.JW_SECRET ||
    "QB9DJvfhRWMwnJbbWkyaHjwf6Sp7T7DzPn4eC0fH897tXEz8thgrmHPURBFnMLSwE20tgk5YsXzyolrzsagPm3OXX9HmIfG0pxFEQVYSahnJeGRNnWpw0TyHXCQo07V8";

  const options = {
    expiresIn: "7d"
  };

  return jwt.sign(payload, secret, options);
}
