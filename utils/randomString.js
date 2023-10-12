const crypto = require('crypto');


  function generateRandomString(length) {

  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const bytes = crypto.randomBytes(length);
  let randomString = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = bytes[i] % characters.length;
    randomString += characters.charAt(randomIndex);
  }

  return randomString;
}

module.exports = generateRandomString