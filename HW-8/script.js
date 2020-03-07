
  var imageArray = new Array();

  class Images {
      constructor(selector, imagePath) {
          this.selector = selector;
          this.imagePath = imagePath;

      }

      get theImageSelector() {
          return this.selector;
      }

      get theImagePath() {
          return this.imagePath;
      }
  }

  function initializeArray() {
      var image1 = new Images("#imagesIds", "images/wed1.jpg");
      var image2 = new Images("#imagesIds", "images/wed2.jpg");
      var image3 = new Images("#imagesIds", "images/wed3.jpg");
      var image4 = new Images("#imagesIds", "images/wed4.jpg");
      var image5 = new Images("#imagesIds", "images/wed5.jpg");

      imageArray.push(image1, image2, image3, image4, image5);
  }

  function getRandomIndex(){
      return Math.floor(Math.random() * imageArray.length);
  }


  $(document).ready(function() {

      $("button").click(function(){
          $(imageArray[getRandomIndex()].theImageSelector).attr("src", imageArray[getRandomIndex()].theImagePath).fadeIn("slow").fadeOut("slow");
 $("#l5").toggle();
      });
  });

  function moveText() {
      for (var i = 0; i < 20; i++){
      $("#l1").fadeOut("slow").fadeIn("slow").fadeOut("slow").fadeIn("slow");
    }
     for (var j = 1; j < 20; j ++){
      $("#l2").fadeOut("slow").fadeIn("slow").fadeOut("slow").fadeIn("slow");
     }
     for (var k = 1; k < 20; k ++){
      $("#l3").fadeOut("slow").fadeIn("slow").fadeOut("slow").fadeIn("slow");
     }
     for (var l = 1; l < 20; l ++){
      $("#l4").fadeOut("slow").fadeIn("slow").fadeOut("slow").fadeIn("slow");
     }



  }
  function moveSquare(){
      for (var i = 0; i < 4; i ++) {
        // purple
          $("#square0").animate({top:185}).animate({left:450}).fadeOut().fadeIn().animate({top:750}).animate({left:1200}).fadeOut().fadeIn();
      }

      for (var j = 0; j < 4; j ++) {
        // green
          $("#square1").animate({left:200}).animate({top:800}).fadeOut().fadeIn().animate({left:1400}).animate({top:110}).fadeOut().fadeIn();
      }

      for (var k = 0; k < 5; k ++) {
        // pink
      $("#square2").animate({left:450}).fadeOut().fadeIn().animate({left:1200}).fadeOut().fadeIn();
      }

      for (var l = 0; l < 5; l ++) {
        // pink
      $("#square3").animate({left:650}).animate({top:650}).fadeOut().fadeIn().animate({left:1200}).fadeOut().fadeIn();
      }
  }
