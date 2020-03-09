
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
          $(imageArray[getRandomIndex()].theImageSelector).attr("src", imageArray[getRandomIndex()].theImagePath).fadeIn("slow").fadeOut(4000);
 $("#l5").toggle();
      });
  });

  function moveText() {
      for (var i = 0; i < 20; i++){
      $("#l1").fadeOut(5000).fadeIn(35000);
    }
     for (var j = 1; j < 20; j ++){
      $("#l2").fadeOut(10000).fadeIn(40000);
     }
     for (var k = 1; k < 20; k ++){
      $("#l3").fadeOut(15000).fadeIn(45000);
     }
     for (var l = 1; l < 20; l ++){
      $("#l4").fadeOut(20000).fadeIn(50000);
     }



  }
  function moveSquare(){
      for (var i = 0; i < 4; i ++)
      {
          $("#square0").animate({top:300}).animate({left:600}).fadeOut().fadeIn().animate({top:1000}).animate({left:1500}).fadeOut().fadeIn();
      }

      for (var j = 0; j < 4; j ++)
      {
          $("#square1").animate({top:300}).animate({left:500}).fadeOut().fadeIn().animate({top:1000}).animate({left:1400}).fadeOut().fadeIn();
      }

     for (var k = 0; k < 5; k ++)
     {
          $("#square2").animate({top:300}).animate({left:400}).fadeOut().fadeIn().animate({top:1000}).animate({left:1300}).fadeOut().fadeIn();
      }

    for (var l = 0; l < 5; l ++)
    {
     $("#square3").animate({top:300}).animate({left:300}).fadeOut().fadeIn().animate({top:1000}).animate({left:1200}).fadeOut().fadeIn();
    }
  }
