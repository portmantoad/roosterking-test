<script>
	import '../app.css';
</script>


<main id="parallaxRoot">
		<slot />
</main>

<footer>

</footer>

<style>


	#parallaxRoot{
		position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-x: hidden;
    overflow-y: auto;
    perspective: 8px;
    height: 100vh;
    -moz-perspective-origin: 100%;
    -webkit-perspective-origin-x: 100%;
    perspective-origin-x: 100%;
	}

	main{
    
	}
</style>