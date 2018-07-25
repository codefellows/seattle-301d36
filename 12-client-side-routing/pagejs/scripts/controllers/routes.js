'use strict';

// --------------------------------------------
// FRONT-END ROUTES
// --------------------------------------------
page('/',homeView.init);
page('/about',aboutView.init);
page('/contact',contactView.init);
page('/contact/:name',contactView.init);
// --------------------------------------------

// Vinicio - this line has to be placed at the end of the file, AFTER you define any front-end routes
page(); // Vinicio - this line is starting the Page JS Engine