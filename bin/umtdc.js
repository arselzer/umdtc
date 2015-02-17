#!/usr/bin/env node

var api = require("../api.js")
var argv = require("minimist")(process.argv.slice(2))
var chalk = require("chalk")

var config = {
  "server": "http://localhost:8080",
  "interface": "wlp0s20u1u1",
  "gpsd_port": 2947
}

if (!argv.server)
  console.log("server: " + chalk.green(config.server) + " ... specify a server with " + chalk.blue("--server"))
else
  config.server = argv.server

if (!argv.if)
  console.log("if: " + chalk.green(config.interface) + " ... select a network interface with " + chalk.blue("--if"))
else
  config.interface = argv.if

// the GPSd port is basically always the default one
if (argv.gpsd_port)
  config.gpsd_port = argv.gpsd_port
