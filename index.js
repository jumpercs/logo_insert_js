const fs = require("fs");
const Jimp = require("jimp");

const inputDir = "./files";
const logoImage = "./logo.png";

fs.readdir(inputDir, (err, files) => {
  if (err) {
    console.log(err);
    return;
  }
  files.forEach((file) => {
    Jimp.read(`${inputDir}/${file}`,
      (err, image) => {
        if (err) {
          console.log(err);
          return;
        }
        image.resize(1920, Jimp.AUTO);

        Jimp.read(logoImage,
          (err, logo) => {
            if (err) {
              console.log(err);
              return;
            }

            image.composite(logo, image.bitmap.width - logo.bitmap.width - 10, image.bitmap.height - logo.bitmap.height - 10);

            image.write(`${inputDir}/com-logo-${file}`,
              (err) => {
                if (err) {
                  console.log(err);
                  return;
                }
              }

            );
          }
        );
      }
    );
  }
  );
}
);
