var pics = ["image1","image2","image3","image4", "image5","image6", "image7", "image8", "image9", "image10"];

var blankPics = "images/blank.jpg";

var actualPics = new Array();



function printBlankPics()
{
  randomPicsArray();
  for( var i = 0; i<pics.length; i++)
  {
    document.getElementById(pics[i]).src = blankPics;
  }
}

function randomPicsArray (){
  var actualPicsPath = ["images/bicycle.jpg", "images/desert.jpg", "images/hiker.jpg", "images/tent.jpg", "images/trees.jpg"];
  var count = [0,0,0,0,0,0,0,0,0,0];
  while(actualPics.length < 10)
  {
    var randomNumber = Math.floor(Math.random() * actualPicsPath.length)

    if(count[randomNumber] < 2)
    {
      actualPics.push(actualPicsPath[randomNumber]);
      count[randomNumber] = count[randomNumber] + 1;
    }
  }
}
function flipPic(number)
{
  document.getElementById(pics[number]).src = actualPics[number];
}
