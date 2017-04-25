function go() {
	var scene = new THREE.Scene();
//	var camera = new THREE.OrthographicCamera(-1, 1, 1, -1,	0.1, 2);
	var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(innerWidth, innerHeight);
	
	$("body").appendChild(renderer.domElement);

	var uniforms = {
		iGlobalTime: {
			type: "f",
			value: 0
		}
	};
	
	var geometry = new THREE.PlaneGeometry(2, 2);
	var material = new THREE.ShaderMaterial({
		uniforms: uniforms,
		vertexShader: $("#vertexShader").textContent,
		fragmentShader: $("#fragmentShader2D").textContent
	});
	var plane = new THREE.Mesh(geometry, material);
	
	scene.add(plane);
	
	camera.position.z = 1;
	
	var start;
	
	var render = function() {
		requestAnimationFrame(render);
		
		uniforms.iGlobalTime.value = (Date.now() - start);
		
		renderer.render(scene, camera);
	};
	
	start = Date.now();
	
	render();
}


