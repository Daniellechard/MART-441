$(document).ready(function(){

var colors = new Array();

// When the document is ready, this function is called which gathers our data from the json file.
//Then a new object is created with that newly called data.

  $.getJSON("https://github.com/Daniellechard/MART-441/blob/master/HW-9/data/colorsInfo.json", function(data){

        $.each(data, function(i, field){

        var names = new Color(field.color, field.category, field.type);

        colors.push(names);
      });
    });

// When you click the button it selects a random num and pulls the information from the array we create above.
  $("#btn_info").click(function(){

  let random_num = Math.floor(Math.random() * colors.length);

          console.log(colors.length);
          $("#color").text("Name: " + colors[random_num].color);
          $("#category").text(" Mass: " + colors[random_num].category);
          $("#type").text(" Year: " + colors[random_num].type);

    });

    $("#button2").click(function(){
      $("#show_info").toggle();
    })
})



// I made this constructor to push my data into an array
class Colors {

  constructor(color, category, type){

    this.color = color;
    this.category = category;
    this.type = type;
  }
    toString(){
      let str;
      str = "Color: " + this.color + " Category: " + this.category + " Type: " + this.type + "<br>";
      return str;
    }

    get details(){
      return "Color: " + this.color + " Category: " + this.category + " Type: " + this.type + "<br>";
    }
}
