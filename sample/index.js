'use strict';

const fs = require('fs');
const path = require('path');
const open = require('open');

(function() {
  const argv = Array.from(process.argv);
  argv._node = argv.shift();
  argv._this = argv.shift();
  console.log(argv, argv.length);

  if (argv.length === 0) { return }
  if (! fs.existsSync(argv[0])) { return }

  argv.pathSrc = path.resolve(argv[0]);

  const dir = path.dirname(argv.pathSrc);
  const ext = path.extname(argv.pathSrc);
  const fnm = path.basename(argv.pathSrc, ext);

  argv.pathDst = path.resolve(dir, `${fnm}-out.html`);
  argv.title = fnm;

  console.log('[src]', argv.pathSrc);
  console.log('[dst]', argv.pathDst);
})();