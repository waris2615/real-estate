function initThreeJS() {
    const container = document.getElementById('canvas-container');
    if (!container) return;

    // Set up scene, camera, and renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xE2E8F0); // Match background color

    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(15, 10, 20);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // Orbit Controls
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2 - 0.05; // Don't allow going below ground
    controls.minDistance = 10;
    controls.maxDistance = 50;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(20, 30, 10);
    directionalLight.castShadow = true;
    directionalLight.shadow.camera.left = -20;
    directionalLight.shadow.camera.right = 20;
    directionalLight.shadow.camera.top = 20;
    directionalLight.shadow.camera.bottom = -20;
    scene.add(directionalLight);

    // Create a simple house model
    const houseGroup = new THREE.Group();

    // 1. Base/Ground
    const groundGeometry = new THREE.PlaneGeometry(40, 40);
    const groundMaterial = new THREE.MeshStandardMaterial({
        color: 0x4CAF50, // Green grass
        roughness: 0.8
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    // 2. Main Body (First Floor)
    const bodyGeometry = new THREE.BoxGeometry(12, 6, 10);
    const bodyMaterial = new THREE.MeshStandardMaterial({ color: 0xFFFFFF }); // White walls
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.y = 3;
    body.castShadow = true;
    body.receiveShadow = true;
    houseGroup.add(body);

    // 3. Second Floor
    const secondFloorGeo = new THREE.BoxGeometry(10, 5, 8);
    const secondFloorMat = new THREE.MeshStandardMaterial({ color: 0xF5F5F5 });
    const secondFloor = new THREE.Mesh(secondFloorGeo, secondFloorMat);
    secondFloor.position.y = 8.5;
    secondFloor.castShadow = true;
    secondFloor.receiveShadow = true;
    houseGroup.add(secondFloor);

    // 4. Roof
    const roofGeometry = new THREE.ConeGeometry(8, 4, 4);
    const roofMaterial = new THREE.MeshStandardMaterial({ color: 0x2C3E50 }); // Dark blue/grey roof
    const roof = new THREE.Mesh(roofGeometry, roofMaterial);
    roof.position.y = 13;
    roof.rotation.y = Math.PI / 4; // Rotate to match square shape
    roof.castShadow = true;
    houseGroup.add(roof);

    // 5. Door
    const doorGeometry = new THREE.BoxGeometry(2, 4, 0.1);
    const doorMaterial = new THREE.MeshStandardMaterial({ color: 0x8B4513 }); // Brown wood
    const door = new THREE.Mesh(doorGeometry, doorMaterial);
    door.position.set(0, 2, 5.01);
    houseGroup.add(door);

    // 6. Windows
    const windowGeometry = new THREE.BoxGeometry(2, 2, 0.1);
    const windowMaterial = new THREE.MeshStandardMaterial({
        color: 0x87CEEB, // Sky blue glass
        transparent: true,
        opacity: 0.7,
        roughness: 0.1,
        metalness: 0.8
    });

    // Front windows (First floor)
    const window1 = new THREE.Mesh(windowGeometry, windowMaterial);
    window1.position.set(-3, 3, 5.01);
    houseGroup.add(window1);

    const window2 = new THREE.Mesh(windowGeometry, windowMaterial);
    window2.position.set(3, 3, 5.01);
    houseGroup.add(window2);

    // Front windows (Second floor)
    const window3 = new THREE.Mesh(windowGeometry, windowMaterial);
    window3.position.set(-2, 8.5, 4.01);
    houseGroup.add(window3);

    const window4 = new THREE.Mesh(windowGeometry, windowMaterial);
    window4.position.set(2, 8.5, 4.01);
    houseGroup.add(window4);

    scene.add(houseGroup);

    // Animation Loop
    function animate() {
        requestAnimationFrame(animate);

        // Slow rotation of the house for effect
        houseGroup.rotation.y += 0.005;

        controls.update();
        renderer.render(scene, camera);
    }

    animate();

    // Handle Window Resize
    window.addEventListener('resize', () => {
        if (!container) return;
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });
}