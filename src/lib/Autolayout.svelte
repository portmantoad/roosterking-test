<script>
  export let x = 0.5;
  export let y = 0.5;
  export let style = '';

  let gridStyles = `grid-template-columns: ${x}fr minmax(0,auto) ${1 - x}fr; 
      grid-template-rows: ${y}fr minmax(0,auto) ${1 - y}fr; `
</script>

<div class="autolayout"  style={gridStyles + style}>
		<slot />
</div>

<style>
    .autolayout{
      display: grid;
      position: absolute; top:0; left:0; 
      width:100%;
      min-height:100%;
    }

    .autolayout > :global(*){
      grid-column-start: 2; grid-row-start: 2;
    }
</style>
