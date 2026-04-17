const fs = require("fs");
const potrace = require("potrace");

potrace.posterize("public/logo.png", {
  steps: 8,
  fillStrategy: potrace.Posterizer.FILL_DOMINANT,
  rangeDistribution: potrace.Posterizer.RANGES_AUTO,
  blackOnWhite: false,
  background: "transparent"
}, (err, svg) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  fs.writeFileSync("public/logo-sticker-traced-color-8.svg", svg, "utf8");
  console.log("posterize-8-written", svg.length);
});
