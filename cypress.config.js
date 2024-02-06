const { defineConfig } = require("cypress");
module.exports = defineConfig({
  viewportWidth: 1224,
  viewportHeight: 768,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  video: true,
  videosFolder: 'cypress/videos',
});
