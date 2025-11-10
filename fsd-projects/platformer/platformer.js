$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "#97da60ff"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(200, 100, 300, 59, "#ffffffff" );
    createPlatform(250, 150, 300, 59, "#ffffffff" );
      createPlatform(1200, 69, 150, 150, "#ebbc2fff" );
    createPlatform(1000, 100, 300, 59, "#ffffffff" );
    createPlatform(950, 150, 300, 59, "#ffffffff" );  
    createPlatform(150, 650, 300, 400, "#a16d3bff" );
    createPlatform(450, 600, 350, 400, "#a16d3bff" );
    createPlatform(1050, 600, 350, 400, "#926236ff" );
    createPlatform(1050, 600, 350, 30, "#97da60ff" );
    createPlatform(800, 720, 600, 400, "#3b42a1ff" );
    createPlatform(150, 650, 300, 30, "#97da60ff" );

    createPlatform(450, 570, 350, 30, "#82b856ff" );



    // TODO 3 - Create Collectables
    createCollectable("database", 200, 170, 0.5, 0.7);
    createCollectable("database", 700, 170, 0.5, 0.7);
    createCollectable("database", 930, 370);


    
    // TODO 4 - Create Cannons

    createCannon("top", 900, 3000);
    createCannon("right", 500, 3000);
    createCannon("bottom", 200, 3000);
    createCannon("bottom", 800, 3000);



    

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});