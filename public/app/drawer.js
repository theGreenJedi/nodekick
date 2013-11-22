(function() {
  var game = null;
  var stageHeight = 500;
  var stage, renderer = null;
  var sprites = { };

  function init() {
    stage = new PIXI.Stage(0xFFFFFF);
    renderer = PIXI.autoDetectRenderer(1280, 500);
    
    $("#stage").append(renderer.view);
    game = app.game;
  }

  function startDrawing() {
    requestAnimFrame(draw);
    setInterval(calc, 17);
  }

  function calc() {
    app.playerSprites.tick(game.players());
    app.deathAnimations.tick();
  }

  function draw() {
    renderer.render(stage);
    requestAnimFrame(draw);
  }

  app.drawer = { };
  app.drawer.init = init;
  app.drawer.stage = function() { return stage; };
  app.drawer.startDrawing = startDrawing;
})();
