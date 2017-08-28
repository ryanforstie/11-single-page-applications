'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};
  // TODO(DONE): Setup a function that kicks off the fetching and rendering of articles, using the same
  // code that used to be in index.html.
  // Also be sure to hide all the main section elements, and reveal the #articles section:
  aboutController.init = function() {
    $('.tab-content').hide();
    $('#about').show();
  }

  module.aboutController = aboutController;
})(app);
