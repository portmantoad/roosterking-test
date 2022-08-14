<script>
  import Autolayout from '$lib/Autolayout.svelte';
  import ParallaxElem from '$lib/ParallaxElem.svelte';
  import { inview } from 'svelte-inview';

  const options = { rootMargin: '-100px',
    unobserveOnEnter: true}

  let sectionHeights = [];
</script>

  <section style="padding-top: 0; padding-bottom: 25vh; height: 100vh" bind:offsetHeight={sectionHeights[0]}>

    <ParallaxElem speed="-40" height="100vh">
      <img style="
      position:absolute; 
      top:0; right:0;
      object-position: right bottom;  
      object-fit: cover; 
      image-rendering: pixelated;
      width: 100%; 
      height:min(100vw, 100vh);" src="lighthouse/sky_dithering.png" />
    </ParallaxElem>

    <ParallaxElem speed="-10" blend="multiply" height="100vh" offset=".25">
      <img style="
      height: max(50vw, 80vh); 
      margin-right: auto; 
      max-width: 100%; 
      object-position: 12% bottom; 
      margin-top:auto; 
      object-fit: cover;" src="lighthouse/lighthouse_bw.png" />
    </ParallaxElem>


    <Autolayout x={.9} y={0.1}>
        <!-- <img style="width: calc(100vw - 1859/1499*100vh*.75); height: 75vh; object-fit: contain; object-position: calc(50% + 3vw) 30%; position:relative; margin-left: auto; mix-blend-mode: multiply; filter: blur(0px) brightness(.75) contrast(15.5); 
      transition: filter 3000ms ease-out;
      /* filter: blur(18px) brightness(2) contrast(15.5);" src="lighthouse/title3.webp" />-->
      <video style="mix-blend-mode: multiply; width: calc(55vh * 800/496); max-width: 100%;" src="lighthouse/title3.mp4" muted autoplay loop></video>
    </Autolayout>


  </section>
  
  <section style="padding: 15vh 0;" bind:offsetHeight={sectionHeights[1]}>
    <ParallaxElem speed="-2" blend="multiply" top={sectionHeights[0]} height={sectionHeights[1] + 'px'}>
      <img style="position: absolute; bottom:0; left:20%; height:calc(100%); min-width: 80%; align-self: stretch; mix-blend-mode:multiply;" src="lighthouse/wavesglitch.jpg" />
    </ParallaxElem>
      <div use:inview={options} on:enter={(event) => { event.detail.node.classList.add('visible');}} class="textblock" style="margin: auto;">
      <span class="stroked medium-11"> He told the seller he needed to "try it on for size"</span>
      <span class="stroked large-4 indented">He borrowed a boat and brought six middle school boys out to camp</span>
    </div>
    <div class="horizontal" style="padding: 5em 0;">
      <div use:inview={options} on:enter={(event) => { event.detail.node.classList.add('visible');}} class="textblock" style="margin: auto;">
        <span class="stroked medium-13">A killer whale named Luna kept swimming up to us</span>
        <span class="stroked small-12 indented">driving away the fish</span>
        <span class="stroked small-15">he must have been lonely.</span>
      </div>
      <!-- <img style="width: 100vh; max-width: 50%; position: relative;" src="lighthouse/photorealistic_whale.png" /> -->
      <figure style="margin:0; padding: 1em; position: relative; width: 45em; max-width: 100vw; ">
<!--         <img style="width: 100%; position:absolute; top: 0; left:0;" src="lighthouse/luna.webp">
 -->        <video style="width:100%;" src="lighthouse/luna.mp4" muted autoplay loop></video>
        <figcaption><a href="https://www.youtube.com/watch?v=-YzeOnF1I58">(Source)</a></figcaption>
      </figure>

      
    </div>
    <div use:inview={options} on:enter={(event) => { event.detail.node.classList.add('visible');}} class="textblock" style="margin: auto;">
      <span class="stroked medium-15">I resisted pressing my hand against his thick slick skin </span>
      <span class="stroked large-8 indented">as a boat full of sightseers snapped pictures of us on disposable cameras</span>
    </div>



  </section>

  <section style="min-height: 100vh;" bind:offsetHeight={sectionHeights[2]}>

    <ParallaxElem speed="2" top={sectionHeights[0] + sectionHeights[1]} offset={-0.5}>
      <img style="width:40em; max-width:95vw; image-rendering: pixelated; position: relative;" src="lighthouse/orcawhale.gif" />
    </ParallaxElem>

    <img style="position: absolute; right:0; bottom:0; height:100%; width:100%;" src="lighthouse/pixelsort_waves.png" />

    <ParallaxElem speed="2" top={sectionHeights[0] + sectionHeights[1]} offset={0.25} height={sectionHeights[2] + 'px'}>
      <Autolayout x={.8} style="
        transform: translateY(15%);
        z-index: 100;
      ">
        <img style="width: min(85vh, 90vw); position: relative;" src="lighthouse/rpg_island-optim.png" />
      </Autolayout>
    </ParallaxElem>

    <Autolayout x={.35} y={.35}>
      <div use:inview={options} on:enter={(event) => { event.detail.node.classList.add('visible');}} class="textblock" style="margin: auto;">
        <span class="stroked large-1">Only me and one other boy wanted to fish again the next day</span>
      <span class="stroked medium-12">The others planned to collect sticks and explore.</span>
      <span class="stroked medium-2 indented">We left our friends in their tents </span>
      <span class="stroked medium-6 indented">and set out towards the lighthouse.</span>
      </div>
    </Autolayout>

  </section>

  <section style="
  background-image: url('lighthouse/darktexture.jpg');
  background-size: cover;
  background-attachment: fixed;
  "
  bind:offsetHeight={sectionHeights[3]}>
<!--     <ParallaxElem speed="-10" top={sectionHeights[0] + sectionHeights[1] + sectionHeights[2]} offset={0.2} height={sectionHeights[3]}>
    <img style="position: absolute; left:0; right:0; top:0; width:100%; height:100%; object-fit: cover;" src="lighthouse/darktexture.jpg" />
  </ParallaxElem> -->

    <Autolayout x={.35} y={.5} style="
      position: relative; min-height: 70vh;
    ">

      <div use:inview={options} on:enter={(event) => { event.detail.node.classList.add('visible');}} class="textblock" style="margin: auto;">
        <span class="stroked medium-9">Our chaperone slept alone on the floor below</span>
        <span class="stroked medium-7">as we laid in sleeping bags side by side</span>
        <span class="stroked medium-4 indented">whispering, staring into each other</span>
        <span class="spacer"></span>
        <span class="stroked small-13">I wanted to kiss him.</span>
      </div>

    </Autolayout>

    <div class="horizontal">
      <img style="position: relative; width: 35em; padding: 1em; max-width: calc(100vw - 2em);" src="lighthouse/boys.jpg" />
      <div use:inview={options} on:enter={(event) => { event.detail.node.classList.add('visible');}} class="textblock" style="margin: auto;">
        <span class="stroked medium-5">When I got up to use the bathroom</span>
        <span class="stroked medium-10">I thought I saw a look flash across his face.</span>
        <span class="stroked medium-3 indented">When I returned he was asleep.</span>
      </div>
    </div>

<div style="position: relative; min-height: 125vh; width: 100%;">
    <img style="position: absolute; right:0; top:25vh; min-height:100vh; min-width:100%; mix-blend-mode: screen;" src="lighthouse/highway.gif" />

        <Autolayout x={.9} y={1} style="
      position: relative; min-height: 100vh;
      margin-top: 25vh;
    ">
      <img style="width: 100vh; max-width: 45vw; position: relative;" src="lighthouse/family_photo.jpg" />
    </Autolayout>

    <Autolayout x={.1} y={.8}>
      <div use:inview={options} on:enter={(event) => { event.detail.node.classList.add('visible');}} class="textblock" style="margin: auto;">
        <span class="stroked large-9">It wasn't until the ride home that I heard the family dog had been run over.</span>
        <span class="stroked medium-14 indented">When I was in college I learned that Luna died too,</span>
        <span class="stroked medium-8 indented">caught in the motor of some other boat.</span>
      </div>
    </Autolayout>


</div>

</section>

<ParallaxElem speed="2" top={sectionHeights[0] + sectionHeights[1] + sectionHeights[2] + sectionHeights[3]} blend="screen" offset={-1} height="100vh"> 
  <img style="    position: absolute;
    right: 0px;
    top: 0px;
    min-width: 80vw;
    min-height: 100%;
    max-width: 100%; 
    object-fit: cover;
    object-position: 15% top;
    mix-blend-mode: screen;" src="lighthouse/moonwhale.jpg" />
</ParallaxElem>
<img style="width:100vw; height:100vh; object-fit: cover;" src="lighthouse/nightlights.webp" alt="">