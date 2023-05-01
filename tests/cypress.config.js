const { defineConfig } = require("cypress");
const { cypressBrowserPermissionsPlugin } = require('cypress-browser-permissions');
const mongo = require('cypress-mongodb');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      mongo.configurePlugin(on)
      config = cypressBrowserPermissionsPlugin(on, config)
      return config
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000",
    viewportHeight: 1080,
    viewportWidth: 1920, 
    env: {
      browserPermissions: {
        notifications: 'allow',
        geolocation: 'allow'
      },
      mongodb: {
        "uri": 'mongodb+srv://qajunior:cademy@cluster0.f67hpsh.mongodb.net/QtruckDB?retryWrites=true&w=majority',
        "database": 'QtruckDB'        
      }
    }
  },
});
