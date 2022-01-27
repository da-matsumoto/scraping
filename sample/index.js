'use strict';

const fs = require('fs');
const path = require('path');
const open = require('open');

(function() {
  const argv = Array.from(process.argv);
  argv._node = argv.shift();
  argv._this = argv.shift();
  console.log(argv, argv.length);
})();