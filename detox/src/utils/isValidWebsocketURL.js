const { URL } = require('url');

function isValidWebsocketURL(url) {
  try {
    const { protocol } = new URL(url);
module.exports = isValidWebsocketURL;
