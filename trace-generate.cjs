const fs = require('fs');
const potrace = require('potrace');

potrace.posterize('public/logo.png', {
  steps: 10,
  fillStrategy: potrace.Posterizer.FILL_DOMINANT,
  background: 'transparent',
  blackOnWhite: false
}, (err, svg) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  fs.writeFileSync('public/logo-sticker-traced.svg', svg, 'utf8');
  console.log('traced');
});
