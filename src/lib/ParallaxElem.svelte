<!-- TODO: replace "top" with "pin", supplying an element selector

offsetTop
offsetLeft
offsetWidth
offsetHeight

-->

<script>
  import { portal } from "svelte-portal";

  export let offset = 0;
  export let top = 0;
  export let height = 'initial';
  export let speed = -2;
  export let blend = 'initial';

</script>

<!-- <Portal target="#parallaxRoot"> -->
  <div class="parallaxElem" style={
    `--offset: ${offset};
    --top: ${top};
    --height: ${height};
    --speed: ${speed};
    --blend: ${blend};
  `} use:portal={"#parallaxRoot"} hidden>
  		<slot />
  </div>
<!-- </Portal> -->

<style>
  .parallaxElem{
    position: absolute;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    z-index: calc(var(--speed) * 100);
    top: var(--top);
    height: var(--height);
    transform: translateY( calc(var(--offset) * 100%));
    mix-blend-mode: var(--blend);
}

    /*@media screen and (min-width: 40em) {*/
      @supports ((perspective: 1px)/* and (not (-webkit-overflow-scrolling: touch))*/) {
        .parallaxElem{
/*        transform: 
          translate3D(
            calc((var(--speed)/2 / 8) * 1%),
            calc(((-100/8 * var(--speed)/2) + (var(--offset) * 100)) * 1%),
            calc(var(--speed) * 1px)
          ) 
          scale(var(--scalespeed))
        ;*/
        transform: 
          translateX(calc((var(--speed)/2 / 8) * 1%)) 
          translateY( calc(var(--offset) * 100%)) 
          translateZ(calc(var(--speed) * 1px)) 
          scale(calc(1 + (var(--speed) * -1) / 8));
        /*transform-origin: 50% 100%;*/
        transform-origin: 100% 50%;
      }
    /*}*/
  }
</style>