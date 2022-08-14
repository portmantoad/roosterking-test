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
  code: ".parallaxElem.svelte-1j510yq{position:absolute;left:0;width:100%;height:100vh;display:flex;align-items:center;justify-content:center;pointer-events:none;z-index:calc(var(--speed) * 100);top:calc(var(--top) * 1px);height:var(--height);transform:translateY( calc(var(--offset) * 100%));mix-blend-mode:var(--blend)}@supports ((perspective: 1px)/* and (not (-webkit-overflow-scrolling: touch))*/){.parallaxElem.svelte-1j510yq{transform:translateX(calc((var(--speed)/2 / 8) * 1%)) \n          translateY( calc(var(--offset) * 100%)) \n          translateZ(calc(var(--speed) * 1px)) \n          scale(calc(1 + (var(--speed) * -1) / 8));transform-origin:100% 50%}}",
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
  <div class="${"parallaxElem svelte-1j510yq"}"${(0, import_index_2435e811.a)(
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
  return `<section style="${"padding-top: 0; padding-bottom: 25vh; height: 100vh"}">${(0, import_index_2435e811.v)(ParallaxElem, "ParallaxElem").$$render($$result, { speed: "-40", height: "100vh" }, {}, {
    default: () => {
      return `<img style="${"position:absolute; top:0; right:0; object-position: right bottom; object-fit: cover; image-rendering: pixelated; width: 100%; height:min(100vw, 100vh);"}" src="${"lighthouse/sky_dithering.png"}">`;
    }
  })}

    ${(0, import_index_2435e811.v)(ParallaxElem, "ParallaxElem").$$render(
    $$result,
    {
      speed: "-10",
      blend: "multiply",
      height: "100vh",
      offset: ".25"
    },
    {},
    {
      default: () => {
        return `<img style="${"height: max(50vw, 80vh); margin-right: auto; max-width: 100%; object-position: 12% bottom; margin-top:auto; object-fit: cover;"}" src="${"lighthouse/lighthouse_bw.png"}">`;
      }
    }
  )}


    ${(0, import_index_2435e811.v)(Autolayout, "Autolayout").$$render($$result, { x: 0.9, y: 0.1 }, {}, {
    default: () => {
      return `
      <video style="${"mix-blend-mode: multiply; width: calc(55vh * 800/496); max-width: 100%;"}" src="${"lighthouse/title3.mp4"}" muted autoplay loop></video>`;
    }
  })}</section>
  
  <section style="${"padding: 15vh 0;"}">${(0, import_index_2435e811.v)(ParallaxElem, "ParallaxElem").$$render(
    $$result,
    {
      speed: "-2",
      blend: "multiply",
      top: sectionHeights[0],
      height: sectionHeights[1] + "px"
    },
    {},
    {
      default: () => {
        return `<img style="${"position: absolute; bottom:0; left:20%; height:calc(100%); min-width: 80%; align-self: stretch; mix-blend-mode:multiply;"}" src="${"lighthouse/wavesglitch.jpg"}">`;
      }
    }
  )}
      <div class="${"textblock"}" style="${"margin: auto;"}"><span class="${"stroked medium-11"}">He told the seller he needed to &quot;try it on for size&quot;</span>
      <span class="${"stroked large-4 indented"}">He borrowed a boat and brought six middle school boys out to camp</span></div>
    <div class="${"horizontal"}" style="${"padding: 5em 0;"}"><div class="${"textblock"}" style="${"margin: auto;"}"><span class="${"stroked medium-13"}">A killer whale named Luna kept swimming up to us</span>
        <span class="${"stroked small-12 indented"}">driving away the fish</span>
        <span class="${"stroked small-15"}">he must have been lonely.</span></div>
      
      <figure style="${"margin:0; padding: 1em; position: relative; width: 45em; max-width: 100vw; "}">        <video style="${"width:100%;"}" src="${"lighthouse/luna.mp4"}" muted autoplay loop></video>
        <figcaption><a href="${"https://www.youtube.com/watch?v=-YzeOnF1I58"}">(Source)</a></figcaption></figure></div>
    <div class="${"textblock"}" style="${"margin: auto;"}"><span class="${"stroked medium-15"}">I resisted pressing my hand against his thick slick skin </span>
      <span class="${"stroked large-8 indented"}">as a boat full of sightseers snapped pictures of us on disposable cameras</span></div></section>

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
        return `<img style="${"width:40em; max-width:95vw; image-rendering: pixelated; position: relative;"}" src="${"lighthouse/orcawhale.gif"}">`;
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
      height: sectionHeights[2] + "px"
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
              return `<img style="${"width: min(85vh, 90vw); position: relative;"}" src="${"lighthouse/rpg_island-optim.png"}">`;
            }
          }
        )}`;
      }
    }
  )}

    ${(0, import_index_2435e811.v)(Autolayout, "Autolayout").$$render($$result, { x: 0.35, y: 0.35 }, {}, {
    default: () => {
      return `<div class="${"textblock"}" style="${"margin: auto;"}"><span class="${"stroked large-1"}">Only me and one other boy wanted to fish again the next day</span>
      <span class="${"stroked medium-12"}">The others planned to collect sticks and explore.</span>
      <span class="${"stroked medium-2 indented"}">We left our friends in their tents </span>
      <span class="${"stroked medium-6 indented"}">and set out towards the lighthouse.</span></div>`;
    }
  })}</section>

  <section style="${"background-image: url('lighthouse/darktexture.jpg'); background-size: cover; background-attachment: fixed; "}">

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
        return `<div class="${"textblock"}" style="${"margin: auto;"}"><span class="${"stroked medium-9"}">Our chaperone slept alone on the floor below</span>
        <span class="${"stroked medium-7"}">as we laid in sleeping bags side by side</span>
        <span class="${"stroked medium-4 indented"}">whispering, staring into each other</span>
        <span class="${"spacer"}"></span>
        <span class="${"stroked small-13"}">I wanted to kiss him.</span></div>`;
      }
    }
  )}

    <div class="${"horizontal"}"><img style="${"position: relative; width: 35em; padding: 1em; max-width: calc(100vw - 2em);"}" src="${"lighthouse/boys.jpg"}">
      <div class="${"textblock"}" style="${"margin: auto;"}"><span class="${"stroked medium-5"}">When I got up to use the bathroom</span>
        <span class="${"stroked medium-10"}">I thought I saw a look flash across his face.</span>
        <span class="${"stroked medium-3 indented"}">When I returned he was asleep.</span></div></div>

<div style="${"position: relative; min-height: 125vh; width: 100%;"}"><img style="${"position: absolute; right:0; top:25vh; min-height:100vh; min-width:100%; mix-blend-mode: screen;"}" src="${"lighthouse/highway.gif"}">

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
  )}

    ${(0, import_index_2435e811.v)(Autolayout, "Autolayout").$$render($$result, { x: 0.1, y: 0.8 }, {}, {
    default: () => {
      return `<div class="${"textblock"}" style="${"margin: auto;"}"><span class="${"stroked large-9"}">It wasn&#39;t until the ride home that I heard the family dog had been run over.</span>
        <span class="${"stroked medium-14 indented"}">When I was in college I learned that Luna died too,</span>
        <span class="${"stroked medium-8 indented"}">caught in the motor of some other boat.</span></div>`;
    }
  })}</div></section>

${(0, import_index_2435e811.v)(ParallaxElem, "ParallaxElem").$$render(
    $$result,
    {
      speed: "2",
      top: sectionHeights[0] + sectionHeights[1] + sectionHeights[2] + sectionHeights[3],
      blend: "screen",
      offset: -1,
      height: "100vh"
    },
    {},
    {
      default: () => {
        return `<img style="${"position: absolute; right: 0px; top: 0px; min-width: 80vw; min-height: 100%; max-width: 100%; object-fit: cover; object-position: 15% top; mix-blend-mode: screen;"}" src="${"lighthouse/moonwhale.jpg"}">`;
      }
    }
  )}
<img style="${"width:100vw; height:100vh; object-fit: cover;"}" src="${"lighthouse/nightlights.webp"}" alt="${""}">`;
});
