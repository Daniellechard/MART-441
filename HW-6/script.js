var pics = ["image1","image2","image3","image4", "image5","image6", "image7", "image8", "image9", "image10"];

var blankPics = "images/blank.jpg";

var firstNum= -1;
var secondNum = -1;

var playerInfo= {"firstname":"","lastname":"","age":"","score":""};

var actualPics = new Array();
var attempts = 0;




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
  if (firstNum >= 0)
  {
    secondNum = number;
  document.getElementById(pics[number]).src = actualPics[secondNum];
}
else if(firstNum < 0)
{
  firstNum = number;
  document.getElementById(pics[number]).src = actualPics[firstNum];
}

if (actualPics[secondNum] == actualPics[firstNum] && firstNum >= 0 && secondNum >= 0)
{
  setTimeout(picsDissapear, 1000);
}
else if(actualPics[secondNum] == actualPics[firstNum] && firstNum) >= 0 && secondNum >=0)
{
  firstNum = -1;
  secondNum = -1;
  attempts++;
  return attempts;
  }
}

function picsDissapear()
{
  console.log(firstNum);
  document.getElementById(pics[firstNum]).src = blankPics;
  document.getElementById(pics[secondNum]).src = blankPics;
  firstNum = -1;
  secondNum = -1;
}

function addPlayerInfo()
{
  var firstName = document.getElementById(firstNameText).value;
  var lastName = document.getElementById(lastNameText).value;
  var age = document.getElementById(ageText).value;

  playerInfo.firstName = firstName;
  playerInfo.lastName = lastName;
  playerInfo.age = age;

  localStorage.setItem("player", JSON.stringify(playerInfo));
  window.location = "game.html";

}

function player()
{
  playerInformation = localStorage.getItem("player");
  playerInfo = JSON.parse(playerInformation);

}

funtion endPage(){
  playerInfo.score = attempts;
  localStorage.setItem("player", JSON.stringify(playerInfo));
  window.location = "end.html";

}

function loadScore (){
  document.getElementById('fNames').innerHTML = playerInfo.firstname + "" + playerInfo.lastname;
  document.getElementById('age').innerHTML = "Age:" + playerInfo.age;
  document.getElementById("score").innerHTML = "Your Score: " + playerInfo,score;
}
