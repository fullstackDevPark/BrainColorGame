<script>
	let container;
	let map;
	let zoom = 15;
    let center = {lat: 37.499528, lng: 127.027309};
    
    import { onMount } from 'svelte';
    
	onMount(async () => {
		map = new google.maps.Map(container, {
            zoom,
			center,
			styles: {} // optional
		});
	});
</script>


<div bind:this={container} style="width: 100%;height: 900px;"></div>