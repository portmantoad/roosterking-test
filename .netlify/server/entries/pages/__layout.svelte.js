var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_2435e811 = require("../../_app/immutable/chunks/index-2435e811.js");
const app = "";
const __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "#parallaxRoot.svelte-1s8zd7m{position:absolute;top:0;left:0;right:0;bottom:0;overflow-x:hidden;overflow-y:auto;perspective:8px;height:100vh;-moz-perspective-origin:100%;-webkit-perspective-origin-x:100%;perspective-origin-x:100%}",
  map: null
};
const _layout = (0, import_index_2435e811.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main id="${"parallaxRoot"}" class="${"svelte-1s8zd7m"}">${slots.default ? slots.default({}) : ``}</main>

<footer></footer>`;
});
