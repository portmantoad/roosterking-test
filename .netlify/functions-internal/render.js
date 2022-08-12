const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set([".DS_Store","favicon.png","lighthouse/boys.png","lighthouse/darktexture.jpg","lighthouse/family_photo.jpg","lighthouse/highway.gif","lighthouse/lighthouse.jpg","lighthouse/lighthouse.png","lighthouse/lighthouse_bw.jpg","lighthouse/luna.mp4","lighthouse/luna.webp","lighthouse/moonwhale.png","lighthouse/nightlights.webp","lighthouse/orcawhale.gif","lighthouse/photorealistic_whale.png","lighthouse/pixelsort_waves.png","lighthouse/rpg_island.png","lighthouse/sky.jpg","lighthouse/sky.psd","lighthouse/sky_dithering.png","lighthouse/sky_pixel-triangle.png","lighthouse/sky_pixel.png","lighthouse/title.mp4","lighthouse/title.svg","lighthouse/title.webp","lighthouse/title2.webp","lighthouse/title3.mp4","lighthouse/title3.webp","lighthouse/wavesglitch.jpg","lighthouse/wavesglitch.png","lighthouse/wavesglitch2.png"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".gif":"image/gif",".mp4":"video/mp4",".webp":"image/webp",".psd":"image/vnd.adobe.photoshop",".svg":"image/svg+xml"},
	_: {
		entry: {"file":"_app/immutable/start-9fd35341.js","imports":["_app/immutable/start-9fd35341.js","_app/immutable/chunks/index-fa909dd1.js"],"stylesheets":[]},
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
