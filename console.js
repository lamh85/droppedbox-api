var repl = require("repl");

var Dropbox = require('dropbox').Dropbox;
require('isomorphic-fetch');
require('dotenv').config();

var replServer = repl.start({});

var DROPBOX_ACCOUNT_ACCESS_TOKEN = process.env.DROPBOX_ACCOUNT_ACCESS_TOKEN
var DROPBOX_ACCOUNT_CLIENT_ID = process.env.DROPBOX_ACCOUNT_CLIENT_ID

replServer.context.Dropbox = Dropbox;
replServer.context.DROPBOX_ACCOUNT_ACCESS_TOKEN = process.env.DROPBOX_ACCOUNT_ACCESS_TOKEN;
replServer.context.DROPBOX_ACCOUNT_CLIENT_ID = process.env.DROPBOX_ACCOUNT_CLIENT_ID;

// http://dropbox.github.io/dropbox-sdk-js/tutorial-Authentication.html
// https://github.com/dropbox/dropbox-sdk-js/blob/master/examples/javascript/auth/index.html

var dbx = new Dropbox({ accessToken: DROPBOX_ACCOUNT_ACCESS_TOKEN, fetch: fetch });
replServer.context.dbx = dbx

dbx.setClientId(DROPBOX_ACCOUNT_CLIENT_ID)
var authUrl = dbx.getAuthenticationUrl('http://localhost:8080/auth')