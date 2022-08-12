var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  manifest: () => manifest
});
module.exports = __toCommonJS(stdin_exports);
const manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set([".DS_Store", "favicon.png", "lighthouse/boys.png", "lighthouse/darktexture.jpg", "lighthouse/family_photo.jpg", "lighthouse/highway.gif", "lighthouse/lighthouse.jpg", "lighthouse/lighthouse.png", "lighthouse/lighthouse_bw.jpg", "lighthouse/luna.mp4", "lighthouse/luna.webp", "lighthouse/moonwhale.png", "lighthouse/nightlights.webp", "lighthouse/orcawhale.gif", "lighthouse/photorealistic_whale.png", "lighthouse/pixelsort_waves.png", "lighthouse/rpg_island.png", "lighthouse/sky.jpg", "lighthouse/sky.psd", "lighthouse/sky_dithering.png", "lighthouse/sky_pixel-triangle.png", "lighthouse/sky_pixel.png", "lighthouse/title.mp4", "lighthouse/title.svg", "lighthouse/title.webp", "lighthouse/title2.webp", "lighthouse/title3.mp4", "lighthouse/title3.webp", "lighthouse/wavesglitch.jpg", "lighthouse/wavesglitch.png", "lighthouse/wavesglitch2.png"]),
  mimeTypes: { ".png": "image/png", ".jpg": "image/jpeg", ".gif": "image/gif", ".mp4": "video/mp4", ".webp": "image/webp", ".psd": "image/vnd.adobe.photoshop", ".svg": "image/svg+xml" },
  _: {
    entry: { "file": "_app/immutable/start-9fd35341.js", "imports": ["_app/immutable/start-9fd35341.js", "_app/immutable/chunks/index-fa909dd1.js"], "stylesheets": [] },
    nodes: [
      () => Promise.resolve().then(() => __toESM(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/2.js")))
    ],
    routes: [
      {
        type: "page",
        id: "",
        pattern: /^\/$/,
        names: [],
        types: [],
        path: "/",
        shadow: null,
        a: [0, 2],
        b: [1]
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};
