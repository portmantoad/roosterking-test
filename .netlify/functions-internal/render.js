const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set([".DS_Store","favicon.png","lighthouse/boys.jpg","lighthouse/boys.png","lighthouse/darktexture.jpg","lighthouse/family_photo.jpg","lighthouse/highway.gif","lighthouse/lighthouse.jpg","lighthouse/lighthouse.png","lighthouse/lighthouse_bw.jpg","lighthouse/lighthouse_bw.png","lighthouse/luna.mp4","lighthouse/luna.webp","lighthouse/moonwhale.jpg","lighthouse/moonwhale.png","lighthouse/nightlights.webp","lighthouse/orcawhale.gif","lighthouse/photorealistic_whale.png","lighthouse/pixelsort_waves.png","lighthouse/rpg_island-optim.png","lighthouse/rpg_island.png","lighthouse/sky.jpg","lighthouse/sky.psd","lighthouse/sky_dithering.png","lighthouse/sky_pixel-triangle.png","lighthouse/sky_pixel.png","lighthouse/title.mp4","lighthouse/title.svg","lighthouse/title.webp","lighthouse/title2.webp","lighthouse/title3.mp4","lighthouse/title3.webp","lighthouse/wavesglitch.jpg","lighthouse/wavesglitch.png","lighthouse/wavesglitch2.png","strokes/.DS_Store","strokes/1117.png","strokes/115.png","strokes/1196.png","strokes/1322.png","strokes/1378.png","strokes/139.png","strokes/1391.png","strokes/1430.png","strokes/1537.png","strokes/164.png","strokes/205.png","strokes/257.png","strokes/260.png","strokes/265.png","strokes/266.png","strokes/289.png","strokes/303.png","strokes/317.png","strokes/329.png","strokes/375.png","strokes/377.png","strokes/386.png","strokes/400.png","strokes/442.png","strokes/461.png","strokes/492.png","strokes/501.png","strokes/530.png","strokes/545.png","strokes/555.png","strokes/578.png","strokes/632.png","strokes/675.png","strokes/725.png","strokes/80.png","strokes/818.png","strokes/830.png","strokes/850.png","strokes/860.png","strokes/908.png","strokes/929.png","strokes/935.png","strokes/958.png","strokes/977.png","strokes/98.png","strokes/983.png","strokes/990.png"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".gif":"image/gif",".mp4":"video/mp4",".webp":"image/webp",".psd":"image/vnd.adobe.photoshop",".svg":"image/svg+xml"},
	_: {
		entry: {"file":"_app/immutable/start-dcf7ee62.js","imports":["_app/immutable/start-dcf7ee62.js","_app/immutable/chunks/index-fa909dd1.js"],"stylesheets":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js'))
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
