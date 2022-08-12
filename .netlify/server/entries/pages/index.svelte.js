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
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_2435e811 = require("../../_app/immutable/chunks/index-2435e811.js");
const Autolayout_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".autolayout.svelte-crneqj{display:grid;position:absolute;top:0;left:0;width:100%;min-height:100%}.autolayout.svelte-crneqj>*{grid-column-start:2;grid-row-start:2}",
  map: null
};
const Autolayout = (0, import_index_2435e811.c)(($$result, $$props, $$bindings, slots) => {
  let { x = 0.5 } = $$props;
  let { y = 0.5 } = $$props;
  let { style = "" } = $$props;
  let gridStyles = `grid-template-columns: ${x}fr minmax(0,auto) ${1 - x}fr; 
      grid-template-rows: ${y}fr minmax(0,auto) ${1 - y}fr; `;
  if ($$props.x === void 0 && $$bindings.x && x !== void 0)
    $$bindings.x(x);
  if ($$props.y === void 0 && $$bindings.y && y !== void 0)
    $$bindings.y(y);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  $$result.css.add(css$1);
  return `<div class="${"autolayout svelte-crneqj"}"${(0, import_index_2435e811.a)("style", gridStyles + style, 0)}>${slots.default ? slots.default({}) : ``}
</div>`;
});
const ParallaxElem_svelte_svelte_type_style_lang = "";
const css = {
  code: ".parallaxElem.svelte-ujfdmn{position:absolute;left:0;width:100%;height:100vh;display:flex;align-items:center;justify-content:center;pointer-events:none;z-index:calc(var(--speed) * 100);top:calc(var(--top) * 1px);height:calc(var(--height) * 1px);transform:translateY( calc(var(--offset) * 100%));mix-blend-mode:var(--blend)}@media screen and (min-width: 40em){@supports ((perspective: 1px) and (not (-webkit-overflow-scrolling: touch))){.parallaxElem.svelte-ujfdmn{transform:translateX(calc((var(--speed)/2 / 8) * 1%)) \n          translateY( calc(var(--offset) * 100%)) \n          translateZ(calc(var(--speed) * 1px)) \n          scale(calc(1 + (var(--speed) * -1) / 8));transform-origin:100% 50%}}}",
  map: null
};
const ParallaxElem = (0, import_index_2435e811.c)(($$result, $$props, $$bindings, slots) => {
  let { offset = 0 } = $$props;
  let { top = 0 } = $$props;
  let { height = 0 } = $$props;
  let { speed = -2 } = $$props;
  let { blend = "initial" } = $$props;
  if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0)
    $$bindings.offset(offset);
  if ($$props.top === void 0 && $$bindings.top && top !== void 0)
    $$bindings.top(top);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.speed === void 0 && $$bindings.speed && speed !== void 0)
    $$bindings.speed(speed);
  if ($$props.blend === void 0 && $$bindings.blend && blend !== void 0)
    $$bindings.blend(blend);
  $$result.css.add(css);
  return `
  <div class="${"parallaxElem svelte-ujfdmn"}"${(0, import_index_2435e811.a)(
    "style",
    `--offset: ${offset};
    --top: ${top};
    --height: ${height};
    --speed: ${speed};
    --blend: ${blend};
  `,
    0
  )} hidden>${slots.default ? slots.default({}) : ``}</div>
`;
});
const Routes = (0, import_index_2435e811.c)(($$result, $$props, $$bindings, slots) => {
  let sectionHeights = [];
  return `<section style="${"padding-top: 0; padding-bottom: 25vh;"}">${(0, import_index_2435e811.v)(ParallaxElem, "ParallaxElem").$$render($$result, { speed: "-40", height: sectionHeights[0] }, {}, {
    default: () => {
      return `<img style="${"position:absolute; width:100vw; height:100vh; top:0; right:0; object-position: right bottom; object-fit: cover; image-rendering: pixelated;"}" src="${"lighthouse/sky_dithering.png"}">`;
    }
  })}

    ${(0, import_index_2435e811.v)(ParallaxElem, "ParallaxElem").$$render(
    $$result,
    {
      speed: "-10",
      blend: "multiply",
      height: sectionHeights[0]
    },
    {},
    {
      default: () => {
        return `<img style="${"height: 100vh; margin-right: auto;"}" src="${"lighthouse/lighthouse_bw.jpg"}">`;
      }
    }
  )}


    ${(0, import_index_2435e811.v)(Autolayout, "Autolayout").$$render($$result, { x: 0.9, y: 0.2 }, {}, {
    default: () => {
      return `
      <video style="${"mix-blend-mode: multiply; max-width: 100%;"}" src="${"lighthouse/title3.mp4"}" muted autoplay loop></video>`;
    }
  })}</section>
  
  <section style="${"padding: 15vh 0;"}">${(0, import_index_2435e811.v)(ParallaxElem, "ParallaxElem").$$render(
    $$result,
    {
      speed: "-2",
      blend: "multiply",
      top: sectionHeights[0],
      height: sectionHeights[1]
    },
    {},
    {
      default: () => {
        return `<img style="${"position: absolute; bottom:0; left:20%; height:calc(100%); min-width: 80%; align-self: stretch; mix-blend-mode:multiply;"}" src="${"lighthouse/wavesglitch.jpg"}">`;
      }
    }
  )}
      <div class="${"textblock"}" style="${"margin: auto;"}"><span>He told the seller he needed to &quot;try it on for size&quot;</span>
      <span style="${"margin-left: 3em"}">He borrowed a boat and brought six middle school boys out to camp</span></div>
    <section class="${"horizontal"}" style="${"padding: 5em 0;"}"><div class="${"textblock"}" style="${"margin: auto;"}"><span>A killer whale named Luna kept swimming up to us</span>
        <span style="${"margin-left: 3em"}">driving away the fish</span>
        <span>he must have been lonely.</span></div>
      
      <figure style="${"margin:0; position: relative; width: 140vh; max-width: 50%; "}">        <video style="${"width:100%;"}" src="${"lighthouse/luna.mp4"}" muted autoplay loop></video>
        <figcaption><a href="${"https://www.youtube.com/watch?v=-YzeOnF1I58"}">(Source)</a></figcaption></figure></section>
    <div class="${"textblock"}" style="${"margin: auto;"}"><span style="${"margin-left: 3em"}">I resisted pressing my hand against his thick slick skin </span>
      <span style="${"margin-left: 3em"}">as a boat full of sightseers snapped pictures of us on disposable cameras</span></div></section>

  <section style="${"min-height: 100vh;"}">${(0, import_index_2435e811.v)(ParallaxElem, "ParallaxElem").$$render(
    $$result,
    {
      speed: "2",
      top: sectionHeights[0] + sectionHeights[1],
      offset: -0.5
    },
    {},
    {
      default: () => {
        return `<img style="${"width:40em; max-width:80%; image-rendering: pixelated; position: relative;"}" src="${"lighthouse/orcawhale.gif"}">`;
      }
    }
  )}

    <img style="${"position: absolute; right:0; bottom:0; height:100%; width:100%;"}" src="${"lighthouse/pixelsort_waves.png"}">

    ${(0, import_index_2435e811.v)(ParallaxElem, "ParallaxElem").$$render(
    $$result,
    {
      speed: "2",
      top: sectionHeights[0] + sectionHeights[1],
      offset: 0.25,
      height: sectionHeights[2]
    },
    {},
    {
      default: () => {
        return `${(0, import_index_2435e811.v)(Autolayout, "Autolayout").$$render(
          $$result,
          {
            x: 0.8,
            style: "\n        transform: translateY(15%);\n        z-index: 100;\n      "
          },
          {},
          {
            default: () => {
              return `<img style="${"width: 100vh; max-width: 90vw; position: relative;"}" src="${"lighthouse/rpg_island.png"}">`;
            }
          }
        )}`;
      }
    }
  )}

    ${(0, import_index_2435e811.v)(Autolayout, "Autolayout").$$render($$result, { x: 0.35, y: 0.35 }, {}, {
    default: () => {
      return `<div class="${"textblock"}" style="${"margin: auto;"}"><span>Only me and one other boy wanted to fish again the next day</span>
      <span>The others planned to collect sticks and explore.</span>
      <span style="${"margin-left: 3em"}">We left our friends in their tents </span>
      <span style="${"margin-left: 3em"}">and set out towards the lighthouse.</span></div>`;
    }
  })}</section>

  <section style="${"background-image: url('lighthouse/darktexture.jpg'); background-size: 100% auto; background-attachment: fixed; "}">

    ${(0, import_index_2435e811.v)(Autolayout, "Autolayout").$$render(
    $$result,
    {
      x: 0.35,
      y: 0.5,
      style: "\n      position: relative; min-height: 70vh;\n    "
    },
    {},
    {
      default: () => {
        return `<div class="${"textblock"}" style="${"margin: auto;"}"><span>Our chaperone slept alone on the floor below</span>
        <span>as we laid in sleeping bags side by side</span>
        <span style="${"margin-left: 3em"}">whispering, staring into each other</span>
        <span class="${"spacer"}"></span>
        <span>I wanted to kiss him.</span></div>`;
      }
    }
  )}

    <section class="${"horizontal"}"><img style="${"position: relative; width: 75vh; max-width: 50%; position: relative;"}" src="${"lighthouse/boys.png"}">
      <div class="${"textblock"}" style="${"margin: auto;"}"><span>When I got up to use the bathroom</span>
        <span>I thought I saw a look flash across his face.</span>
        <span style="${"margin-left: 3em"}">When I returned he was asleep.</span></div></section>

<div style="${"position: relative; min-height: 125vh; width: 100%;"}"><img style="${"position: absolute; right:0; top:0; min-width: 80vw; mix-blend-mode: screen; z-index: 100;"}" src="${"lighthouse/moonwhale.png"}">
    <img style="${"position: absolute; right:0; top:25vh; min-height:100vh; min-width:100%; mix-blend-mode: screen;"}" src="${"lighthouse/highway.gif"}">

    ${(0, import_index_2435e811.v)(Autolayout, "Autolayout").$$render($$result, { x: 0.1, y: 0.6 }, {}, {
    default: () => {
      return `<div class="${"textblock"}" style="${"margin: auto;"}"><span>It wasn&#39;t until the ride home that I heard the family dog had been run over.</span>
        <span style="${"margin-left: 3em"}">When I was in college I learned that Luna died too,</span>
        <span style="${"margin-left: 3em"}">caught in the motor of some other boat.</span></div>`;
    }
  })}

    ${(0, import_index_2435e811.v)(Autolayout, "Autolayout").$$render(
    $$result,
    {
      x: 0.9,
      y: 1,
      style: "\n      position: relative; min-height: 100vh;\n      margin-top: 25vh;\n    "
    },
    {},
    {
      default: () => {
        return `<img style="${"width: 100vh; max-width: 45vw; position: relative;"}" src="${"lighthouse/family_photo.jpg"}">`;
      }
    }
  )}</div></section>
<img style="${"width:100vw; height:100vh; object-fit: cover;"}" src="${"lighthouse/nightlights.webp"}" alt="${""}">`;
});
