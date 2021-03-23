hardware 
https://www.zotac.com/eg/product/mini_pcs/magnus-en72070v


vuejs links:

load layouts with router
https://itnext.io/vue-tricks-smart-layouts-for-vuejs-5c61a472b69b

d3
https://github.com/d3/d3/wiki/Tutorials
https://github.com/sxywu/vue-d3-example
https://github.com/d3/d3-drag
https://dev.to/ignoreintuition/binding-data-to-charts-using-vue-components-and-d3-4i27
https://bl.ocks.org/lorenzopub/02ccce43d708919ca7c0b242fe1c93f2
https://tomroth.com.au/drag-example/
https://bl.ocks.org/puzzler10/raw/49f13307e818ea9a909ba5adba5b6ed9/   zoom inside svg
https://bl.ocks.org/puzzler10/85e6ecbcf8442a67b1c7c6628ff9cee3  force drag 

https://bl.ocks.org/mbostock/1557377

interact-js
https://github.com/kimuraz/vue-interact
https://alligator.io/js/drag-and-drop-interactjs/

drag & drop 
https://codepen.io/SitePoint/pen/epQPNP
https://codepen.io/sirlancelot/pen/NNGYEP
https://wiki.selfhtml.org/wiki/SVG/Tutorials/Drag_%26_Drop
https://greensock.com/svg-drag/  

simple drag&drop
https://dev.to/abolz/roll-your-own-svg-drag-and-drop-in-vuejs-2c7o
https://www.petercollingridge.co.uk/tutorials/svg/interactive/dragging/

// vuejs drag componenn
https://interactjs.io/


_inspiration links:
sw points
https://tympanus.net/codrops/2019/01/17/interactive-particles-with-three-js/

bubble fade big
https://tympanus.net/codrops/2018/01/24/gradient-topography-animation/
https://tympanus.net/Development/GradientTopographyAnimation/

svg 3d zerlegt
https://tympanus.net/codrops/2019/04/12/pulling-apart-svgs-with-reusable-webgl-components-using-react-three-fiber/

wolke
https://tympanus.net/codrops/2020/01/28/how-to-create-procedural-clouds-using-three-js-sprites/


erklärung moving waves
https://tympanus.net/codrops/2018/12/20/interactive-animated-landscape/

greensock installation
https://greensock.com/profile/91983-mindthegap/content/?do=dashboard&purchase_complete=243343


Leaflet Map
npm install --save leaflet
npm install --save vue2-leaflet-markercluster


GSAP Morph
.pmrc File nötig mit credentials
danach npm install gsap

neu anlgae des Node module cache
npx vue-cli-service build --modern



# mt-amf

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


NOTES:
inspiriert von https://jsfiddle.net/skirtle/dzt1rahx/
router extends composition



fehler in reveal.js
In order to fix it, find this into reveal.js:

if( oldScale !== scale ) {
	dispatchEvent( 'resize', {
		'oldScale': oldScale,
		'scale': scale,
		'size': size
	} );
}
And replace:

if( oldScale !== scale && typeof event == 'undefined' ) {
	dispatchEvent( 'resize', {
		'oldScale': oldScale,
		'scale': scale,
		'size': size
	} );
}