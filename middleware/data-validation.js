module.exports = {
  validateClient
}

function validateClient(client) {
  let errors = [];
  if (!client.name) {
    errors.push("Client's name is required");
  }
  if (!client.user_id) {
    errors.push("please provide the id of the user in charge of this client");
  }
  return {
    isSuccessful: errors.length > 0 ? false : true,
    errors
  };
}
