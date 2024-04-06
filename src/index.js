// const { readdirSync } = require(`fs`);
// const { join } = require(`path`);

// for (let type of readdirSync(join(__dirname, `module`)).filter(
//     f => !f.includes(`.`)
// )) {
//     readdirSync(join(__dirname, `module`, type))
//         .filter(file => file !== `index.js` && file.endsWith(`.js`))
//         .map(File => {
//             const Name = File.split(`.`)[0];
//             exports[
//                 Name.charAt(0).toUpperCase() + Name.slice(1)
//             ] = require(`${__dirname}/module/${type}/${File}`);
//         });
// }


export * from "./module/filters/blur";
export * from "./module/filters/gay";
export * from "./module/filters/greyscale";
export * from "./module/filters/invert";
export * from "./module/filters/sepia";
export * from "./module/gif/blink";
export * from "./module/gif/triggered";
export * from "./module/montage/ad";
export * from "./module/montage/affect";
export * from "./module/montage/batslap";
export * from "./module/montage/beautiful";
export * from "./module/montage/bed";
export * from "./module/montage/bobross";
export * from "./module/montage/clown";
export * from "./module/montage/confusedStonk";
export * from "./module/montage/deepfry";
export * from "./module/montage/delete";
export * from "./module/montage/discordBlack";
export * from "./module/montage/discordBlue";
export * from "./module/montage/doubleStonk";
export * from "./module/montage/facepalm";
export * from "./module/montage/heartbreaking";
export * from "./module/montage/hitler";
export * from "./module/montage/jail";
export * from "./module/montage/karaba";
export * from "./module/montage/kiss";
export * from "./module/montage/lisaPresentation";
export * from "./module/montage/mikkelsen";
export * from "./module/montage/mms";
export * from "./module/montage/notStonk";
export * from "./module/montage/podium";
export * from "./module/montage/poutine";
export * from "./module/montage/rip";
export * from "./module/montage/snyder";
export * from "./module/montage/spank";
export * from "./module/montage/stonk";
export * from "./module/montage/tatoo";
export * from "./module/montage/thomas";
export * from "./module/montage/trash";
export * from "./module/montage/wanted";
export * from "./module/utils/circle";
export * from "./module/utils/color";
export * from "./module/utils/denoise";
export * from "./module/utils/mirror";
