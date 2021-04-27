let scene, camera, renderer, starGeo1, starGeo2, starGeo3, stars, stars1, stars2, loader, airplane, mouse, raycaster, bullets = [], enemy, enemy1, enemy2, last_mov_y=1, last_mov_x=1, last_mov1_y=1, last_mov1_x=1, last_mov2_y=1, last_mov2_x=1,enemy_bullets =[], speed_enemy = 0.01, tm=0, health=100, score = 0, collected = true, powerup, num_enemys=3;

async function animate(){
    starGeo1.vertices.forEach(p=>{
        p.velocity += p.acceleration;
        p.y -= p.velocity;
        if(p.y < -200){
            p.y = 200;
            p.velocity = 0;
        }
    });
    starGeo2.vertices.forEach(p=>{
        p.velocity += p.acceleration;
        p.y -= p.velocity;
        if(p.y < -200){
            p.y = 200;
            p.velocity = 0;
        }
    });
    starGeo3.vertices.forEach(p=>{
        p.velocity += p.acceleration;
        p.y -= p.velocity;
        if(p.y < -200){
            p.y = 200;
            p.velocity = 0;
        }
    });
    bullets.forEach(p=>{
        p.position.z -= 0.05;
        if(enemy){
            if(Math.abs(p.position.x - enemy.position.x)<= 0.1 && Math.abs(p.position.y - enemy.position.y)<= 0.3 && Math.abs(p.position.z - enemy.position.z)<= 0.1){
                scene.remove(p);
                scene.remove(enemy);
                score+= 50/100;
                score = Math.ceil(score)
                num_enemys-=1/2;
                num_enemys = Math.ceil(num_enemys)
            }
        }
        if(enemy1){
            if(Math.abs(p.position.x - enemy1.position.x)<= 0.1 && Math.abs(p.position.y - enemy1.position.y)<= 0.3 && Math.abs(p.position.z - enemy1.position.z)<= 0.1){
                //console.log("Yes")
                scene.remove(p);
                scene.remove(enemy1);
                score+= 50/100;
                score = Math.ceil(score)
                num_enemys-=1/2;
                num_enemys = Math.ceil(num_enemys)
            }
        }
        if(enemy2){
            if(Math.abs(p.position.x - enemy2.position.x)<= 0.1 && Math.abs(p.position.y - enemy2.position.y)<= 0.3 && Math.abs(p.position.z - enemy2.position.z)<= 0.1){
                //console.log("Yes")
                scene.remove(p);
                scene.remove(enemy2);
                score+= 50;
                score = Math.ceil(score)
                num_enemys-=1/2;
                num_enemys = Math.ceil(num_enemys)
            }
        }
    });
    enemy_bullets.forEach(p=>{
        p.position.z += 0.05;
        // console.log(p.position)
        // console.log(airplane.position)
        if(airplane){
            if(Math.abs(p.position.x - airplane.position.x)<= 0.1 && Math.abs(p.position.y - airplane.position.y)<= 0.3 && Math.abs(p.position.z - airplane.position.z)<= 0.1){
                scene.remove(p);
                health-= (20/400)
                health = Math.floor(health);
            }
        }
    });
    if(enemy!=null){
        if(last_mov_x == 1){
            if(enemy.position.x+speed_enemy < 12){
                enemy.position.x += speed_enemy
                last_mov_x = 1;
            }
            else{
                enemy.position.x -= speed_enemy
                last_mov_x = 0;
            }
        }
        else if(last_mov_x == 0){
            if(enemy.position.x-speed_enemy > -12){
                enemy.position.x -= speed_enemy
                last_mov_x = 0;
            }
            else{
                enemy.position.x += speed_enemy
                last_mov_x = 1;
            }
        }
        if(last_mov_y == 1){
            if(enemy.position.y+speed_enemy < 6.4){
                enemy.position.y += speed_enemy
                last_mov_y = 1;
            }
            else{
                enemy.position.y -= speed_enemy
                last_mov_y = 0;
            }
        }
        else if(last_mov_y == 0){
            if(enemy.position.y-speed_enemy > -4.4){
                enemy.position.y -= speed_enemy
                last_mov_y = 0;
            }
            else{
                enemy.position.y += speed_enemy
                last_mov_y = 1;
            }
        }
    }
    if(enemy1!=null){
        if(last_mov1_x == 1){
            if(enemy1.position.x+speed_enemy < 12){
                enemy1.position.x += speed_enemy
                last_mov1_x = 1;
            }
            else{
                enemy1.position.x -= speed_enemy
                last_mov1_x = 0;
            }
        }
        else if(last_mov1_x == 0){
            if(enemy1.position.x-speed_enemy > -12){
                enemy1.position.x -= speed_enemy
                last_mov1_x = 0;
            }
            else{
                enemy1.position.x += speed_enemy
                last_mov1_x = 1;
            }
        }
        if(last_mov1_y == 1){
            if(enemy1.position.y+speed_enemy < 6.4){
                enemy1.position.y += speed_enemy
                last_mov1_y = 1;
            }
            else{
                enemy1.position.y -= speed_enemy
                last_mov1_y = 0;
            }
        }
        else if(last_mov1_y == 0){
            if(enemy1.position.y-speed_enemy > -4.4){
                enemy1.position.y -= speed_enemy
                last_mov1_y = 0;
            }
            else{
                enemy1.position.y += speed_enemy
                last_mov1_y = 1;
            }
        }
    }
    if(enemy2!=null){
        if(last_mov2_x == 1){
            if(enemy2.position.x+speed_enemy < 6){
                enemy2.position.x += speed_enemy
                last_mov2_x = 1;
            }
            else{
                enemy2.position.x -= speed_enemy
                last_mov2_x = 0;
            }
        }
        else if(last_mov2_x == 0){
            if(enemy2.position.x-speed_enemy > -6){
                enemy2.position.x -= speed_enemy
                last_mov2_x = 0;
            }
            else{
                enemy2.position.x += speed_enemy
                last_mov2_x = 1;
            }
        }
        if(last_mov2_y == 1){
            if(enemy2.position.y+speed_enemy < 3.2){
                enemy2.position.y += speed_enemy
                last_mov2_y = 1;
            }
            else{
                enemy2.position.y -= speed_enemy
                last_mov2_y = 0;
            }
        }
        else if(last_mov2_y == 0){
            if(enemy2.position.y-speed_enemy > -2.2){
                enemy2.position.y -= speed_enemy
                last_mov2_y = 0;
            }
            else{
                enemy2.position.y += speed_enemy
                last_mov2_y = 1;
            }
        }
    }
    
    if(tm%300 == 0){
        enemy_attack(tm);
    }

    tm+=1;
    starGeo1.verticesNeedUpdate = true;
    starGeo2.verticesNeedUpdate = true;
    stars.rotation.y += 0.002;
    stars1.rotation.y += 0.002;
    stars2.rotation.y += 0.002;

    if(collected==true && powerup){
        collected = false;
        x = Math.random()*8 - 4
        y = Math.random()*4 - 2
        powerup.position.set(x,y,0);
        powerup.scale.set(0.05,0.05,0.05);
        powerup.rotation.z = Math.PI;
        powerup.rotation.x = Math.PI/2;
    }
    else{
        if(powerup){
            powerup.rotation.y += Math.PI/100;
        }
        if(powerup && airplane){
            if(Math.abs(powerup.position.x - airplane.position.x)<= 0.3 && Math.abs(powerup.position.y - airplane.position.y)<= 0.3 && Math.abs(powerup.position.y - airplane.position.y)<= 0.3){
                collected = true;
                // scene.remove(powerup);
                score += 5;
            }
        }
    }

    if(num_enemys==0){
        you_won()
        return
    }
    else if(health==0){ 
        you_lost()
        return
    }

    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    // console.log(health+" "+score)
    document.getElementById("health").innerHTML = health;
    document.getElementById("score").innerHTML = score;
}

function you_won(){
    while(scene.children.length > 0){ 
        scene.remove(scene.children[0]); 
    }
    renderer.render(scene, camera);
    document.getElementById("health").innerHTML = health;
    document.getElementById("score").innerHTML = score;
    document.getElementById("blank").innerHTML = "You WOn";
}

function you_lost(){
    while(scene.children.length > 0){ 
        scene.remove(scene.children[0]); 
    }
    renderer.render(scene, camera);
    document.getElementById("health").innerHTML = health;
    document.getElementById("score").innerHTML = score;
    document.getElementById("blank").innerHTML = "You Lost";
}

function enemy_attack(t){
    let b;
    loader.load('./assets/missile.glb', function ( gltf ) {
        b = gltf.scene;
        if(t%300 == 0)
            b.position.set(enemy.position.x, enemy.position.y, enemy.position.z);
        else if(t%200 == 0)
            b.position.set(enemy1.position.x, enemy1.position.y, enemy1.position.z);
        else
            b.position.set(enemy2.position.x, enemy2.position.y, enemy2.position.z);

        b.scale.set(0.03,0.03,0.03);
        b.rotation.x = Math.PI/2;
        enemy_bullets.push(b);
        scene.add(gltf.scene);
    }, undefined, function ( error ) {
        console.error( error );
    });
}

function shoot(){
    let b;
    loader.load( './assets/missile.glb', function ( gltf ) {
        b = gltf.scene;
        b.position.set(airplane.position.x, airplane.position.y, airplane.position.z);
        b.scale.set(0.02,-0.02,0.02);
        b.rotation.x = Math.PI/2;
        bullets.push(b);
        scene.add( gltf.scene );
    }, undefined, function ( error ) {
        console.error( error );
    });
}

function MoveAirplane(event){

    if(event.key == "ArrowRight"){
        airplane.position.x += 0.1
    }
    if(event.key == "ArrowLeft"){
        airplane.position.x -= 0.1
    }
    if(event.key == "ArrowUp"){
        airplane.position.y += 0.1
    }
    if(event.key == "ArrowDown"){
        airplane.position.y -= 0.1
    }
    if(event.key == "o"){
        airplane.position.z += 0.1
    }
    if(event.key == "i"){
        airplane.position.z -= 0.1
    }
    if(event.key == "s"){
        shoot();
    }
    if(airplane.position.x > 6){
        airplane.position.x = 6
    }
    if(airplane.position.x < -6){
        airplane.position.x = -6
    }
    if(airplane.position.y < -2.2){
        airplane.position.y = -2.2
    }
    if(airplane.position.y > 3.2){
        airplane.position.y = 3.2
    }
    if(airplane.position.z < -2.2){
        airplane.position.z = -2.2
    }
    if(airplane.position.z > 2.2){
        airplane.position.z = 2.2
    }
}
        
function init(){
    
    scene = new THREE.Scene();

    renderer = new THREE.WebGLRenderer({antialias : true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();

    window.addEventListener('resize', () =>{
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    });

    starGeo1 = new THREE.Geometry();
    for(let i=0; i<4000; i++){
        star = new THREE.Vector3(
            Math.random()*600 - 300,
            Math.random()*600 - 300,
            Math.random()*600 - 300,
        );
        star.velocity = 0;
        star.acceleration = 0.02;
        starGeo1.vertices.push(star);
    }

    let temp = new THREE.TextureLoader();
    let sprite = temp.load('./assets/star.png');

    let starMaterial = new THREE.PointsMaterial({
        color: 0xFFFFFF,
        size: 0.7,
        map: sprite
    });
    stars = new THREE.Points(starGeo1, starMaterial);
    stars.rotation.x = -Math.PI/2;
    scene.add(stars);

    starGeo2 = new THREE.Geometry();
    for(let i=0; i<1000; i++){
        star = new THREE.Vector3(
            Math.random()*600 - 300,
            Math.random()*600 - 300,
            Math.random()*600 - 300,
        );
        star.velocity = 0;
        star.acceleration = 0.02;
        starGeo2.vertices.push(star);
    }

    let temp1 = new THREE.TextureLoader();
    let sprite1 = temp1.load('./assets/star_yellow.png');

    let starMaterial1 = new THREE.PointsMaterial({
        color: 0xFFFFFF,
        size: 0.7,
        map: sprite1
    });

    stars1 = new THREE.Points(starGeo2, starMaterial1);
    stars1.rotation.x = -Math.PI/2;
    scene.add(stars1);

    starGeo3 = new THREE.Geometry();
    for(let i=0; i<1000; i++){
        star = new THREE.Vector3(
            Math.random()*600 - 300,
            Math.random()*600 - 300,
            Math.random()*600 - 300,
        );
        star.velocity = 0;
        star.acceleration = 0.02;
        starGeo3.vertices.push(star);
    }

    let temp2 = new THREE.TextureLoader();
    let sprite2 = temp2.load('./assets/red_star.png');

    let starMaterial2 = new THREE.PointsMaterial({
        color: 0xFFFFFF,
        size: 1,
        map: sprite2
    });

    stars2 = new THREE.Points(starGeo2, starMaterial2);
    stars2.rotation.x = -Math.PI/2;
    scene.add(stars2);

    loader = new THREE.GLTFLoader();

    loader.load( './assets/jet.glb', function ( gltf ) {
        airplane = gltf.scene;
        airplane.scale.set(0.2,0.2,0.25);
        airplane.rotation.x = Math.PI/4;
        scene.add( gltf.scene );
    }, undefined, function ( error ) {
        console.error( error );
    });

    loader.load('./assets/ufo2.glb', function ( gltf ) {
        enemy = gltf.scene;
        enemy.position.set(0,0,-5);
        enemy.scale.set(0.25,0.25,0.25);
        //enemy.rotation.x = Math.PI/4;
        scene.add( gltf.scene );
    }, undefined, function ( error ) {
        console.error( error );
    });

    loader.load('./assets/ufo2.glb', function ( gltf ) {
        enemy1 = gltf.scene;
        enemy1.position.set(-5,0,-5);
        enemy1.scale.set(0.25,0.25,0.25);
        //enemy.rotation.x = Math.PI/4;
        scene.add( gltf.scene );
    }, undefined, function ( error ) {
        console.error( error );
    });

    loader.load('./assets/ufo2.glb', function ( gltf ) {
        enemy2 = gltf.scene;
        enemy2.position.set(0,3,-5);
        enemy2.scale.set(0.25,0.25,0.25);
        //enemy.rotation.x = Math.PI/4;
        scene.add( gltf.scene );
    }, undefined, function ( error ) {
        console.error( error );
    });

    loader.load('./assets/star.glb', function ( gltf ) {
        powerup = gltf.scene;
        powerup.position.set(0,3,-5);
        powerup.scale.set(0.25,0.25,0.25);
        //enemy.rotation.x = Math.PI/4;
        scene.add( gltf.scene );
    }, undefined, function ( error ) {
        console.error( error );
    });

    var light = new THREE.AmbientLight(0xFFFFFF)
    scene.add(light);

    animate();
    window.addEventListener('keydown', MoveAirplane);
}

init();
