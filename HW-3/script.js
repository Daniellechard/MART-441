confirm('Do you want to play?');
scene1= "You are hiking in the forest by yourself when you come upon a split in the path."


console.log(scene1);
userChoice= prompt('Do you go left or right?');

if(userChoice==='left'){
  console.log('Oh no! You spot a mama grizzly bear and her cubs grazing on huckleberry bushes a few feet away as you come around the corner of a large boulder.')
}
if(userChoice==='right'){
  console.log('The path looks clear and you spot a lake in the distance.')
}
else
{
  console.log('The user chose neither left or right. Error! Please try again.')
}


userChoiceLeft= prompt('Do you back away slowly or make loud noises to scare them away.')

if (userChoiceLeft==='back away'){
  console.log('You back away slowly before they notice you are there and continue on unscathed.')
}

if (userChoiceLeft=== 'scare them away'){
  console.log('You shout at the top of your lungs hoping the loud noise will scare them off but the mama bear goes into protective mode and mauls you to death. Game over.')
}
else
{
  console.log('The user chose neither back away or scare them away. Error! Please try again.')
}


userChoiceBackAway= prompt('You continue your hike until you spot hear a strange noise coming from the bushes. Do you inspect it or run away?');

if (userChoiceBackAway==='inspect it'){
  console.log('You cautiously move closer to the bush when you spot a baby fox tangled in the branches of the bush.')
}
if (userChoiceBackAway==='run away'){
  console.log('After your close encounter with the bears you decide it is better not to risk it and run away as fast a possible.')
}
else
{
  console.log('The user chose neither inspect it or run away. Error! Please try again.')
}


userChoiceRight= prompt('You make it to the lake you had spotted and it looks tempting on such a hot summer day. Do you decide to take a dip or go fishing')

if (userChoiceRight==='take a dip'){
  console.log('The water is refreshing and you bask in the coolness of the lake')
}
if (userChoiceRight==='go fishing'){
  console.log('You grab your compact fishing gear from your backpack and try your hand at fishing. Before long you have caught a medium sized silver looking fish.')
}
else
{
  console.log('The user chose neither take a dip or go fishing. Error! Please try again.')
}


userChoiceTakeADip= prompt('You finish drying off after your dip in the lake. Do you head back to your car or finish the rest of the hike?')

if (userChoiceTakeADip==='head back'){
  console.log('You decide to head back down the mountain to your car.')
}
if (userChoiceTakeADip==='finish the rest'){
  console.log('You pack up your things and continue your hike.')
}
else
{
  console.log('The user chose neither head back or finish the rest. Error! Please try again.')
}


userChoiceGoFishing= prompt('Do you decide to cook it and eat or release it back into the lake?')

if (userChoiceGoFishing==='eat it'){
  console.log('You start a fire and cook it up on a stick. Unfortunately, the fish was poisonus and you die. Game over.')
}
if (userChoiceGoFishing==='release it'){
  console.log('You release it back into the lake and watch it swim away.')
}
