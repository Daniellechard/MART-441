function storyFunction(choice) {
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;

    if (choice == 1 && answer1 == "Yes") {
        document.getElementById("story").innerHTML = "You are hiking in the forest by yourself when you come upon a split in the path.";
        document.getElementById("choice1").innerHTML = "Go left" ;
        document.getElementById("choice2").innerHTML = "Go right";
    } else if (choice == 2 && answer2 == "No") {
        document.getElementById("story").innerHTML = "Oh come on, it's a beautiful day!";
        document.getElementById("choice1").innerHTML = "Go left";
        document.getElementById("choice2").innerHTML = "Go right";
    } else if (choice == 1 && answer1 == "Go left") {
        document.getElementById("story").innerHTML = "Oh no! You spot a mama grizzly bear and her cubs grazing on huckleberry bushes a few feet away as you come around the corner of a large boulder.";
        document.getElementById("choice1").innerHTML = "Back away slowly";
        document.getElementById("choice2").innerHTML = "Scare them away with loud noises";
    } else if (choice == 2 && answer2 == "Go right") {
        document.getElementById("story").innerHTML = "The path looks clear and you hike to a lake you spot in the distance.";
        document.getElementById("choice1").innerHTML = "Take a dip";
        document.getElementById("choice2").innerHTML = "Go fishing";
    }else if (choice == 1 && answer1 == "Take a dip") {
        document.getElementById("story").innerHTML = "The water is refreshing and you bask in the coolness of the lake";
        document.getElementById("choice1").innerHTML = "Explore the lake";
        document.getElementById("choice2").innerHTML = "Get out and dry off";
    }else if (choice == 2 && answer2 == "Turn back to your car") {
        document.getElementById("story").innerHTML = "You make it back down to your car and decide to";
        document.getElementById("choice1").innerHTML = "Go home";
        document.getElementById("choice2").innerHTML = "Grab a bite to eat";
    }else if (choice == 1 && answer1 == "Take a dip") {
        document.getElementById("story").innerHTML = "The water is refreshing and you bask in the coolness of the lake";
        document.getElementById("choice1").innerHTML = "Explore the lake";
        document.getElementById("choice2").innerHTML = "Get out and dry off";
    } else if (choice == 2 && answer2 == "Go fishing") {
        document.getElementById("story").innerHTML = "You grab your compact fishing gear from your backpack and try your hand at fishing. Before long you have caught a medium sized silver looking fish.";
        document.getElementById("choice1").innerHTML = "Cook it and eat it";
        document.getElementById("choice2").innerHTML = "Release it back into the lake";
    } else if (choice == 1 && answer1 == "Explore the lake") {
        document.getElementById("story").innerHTML = "You swim around for awhile until you notice a small opening in the tall cliff that looks like it might be an underwater cave";
        document.getElementById("choice1").innerHTML = "Go in the cave";
        document.getElementById("choice2").innerHTML = "Turn back and get out of the lake";
    } else if (choice == 2 && answer2 == "Get out and dry off") {
        document.getElementById("story").innerHTML = "You dry off quickly in the sun and continue your hike until you hear a rustling in the bushes";
        document.getElementById("choice1").innerHTML = "Inspect it";
        document.getElementById("choice2").innerHTML = "Leave it alone";
    } else if (choice == 1 && answer1 == "Cook it and eat it") {
        document.getElementById("story").innerHTML = "You start a small fire, roast the fish and it. You start to feel sick.";
        document.getElementById("choice1").innerHTML = "Brush it off";
        document.getElementById("choice2").innerHTML = "Try and get help";
    } else if (choice == 2 && answer2 == "Release it back into the lake") {
        document.getElementById("story").innerHTML = "You release it back into the lake and watch it swim away. When you look back up you notice another person as they make their way up to the edge of the lake ";
        document.getElementById("choice1").innerHTML = "Give a friendly wave as you pack up your stuff and leave";
        document.getElementById("choice2").innerHTML = "Go over and say hi";
    } else if (choice == 1 && answer1 == "Go in the cave") {
        document.getElementById("story").innerHTML = "You cautiously swim into the cave opening only to discover that it is pitch black inside. As you swim out of the cave you hear a dog barking and you spot it at the shore on the other side of the lake.";
        document.getElementById("choice1").innerHTML = "Swim over to it";
        document.getElementById("choice2").innerHTML = "Swim back to your stuff, dry off, and head back to your car";
    } else if (choice == 2 && answer2 == "Swim back to your stuff, dry off, and head back to your car") {
        document.getElementById("story").innerHTML = "You pack up your belongings and head back to your car. Once you start it up you decide to";
        document.getElementById("choice1").innerHTML = "Go home";
        document.getElementById("choice2").innerHTML = "Grab a bite to eat";
    } else if (choice == 1 && answer1 == "Swim over to it") {
        document.getElementById("story").innerHTML = "You swim over to the dog and he gets excited and starts running into the woods. Turning back to look and make sure you are following";
        document.getElementById("choice1").innerHTML = "Follow the dog";
        document.getElementById("choice2").innerHTML = "Try to get the dog to follow you back, it's obviously lost";
    } else if (choice == 1 && answer1 == "Back away slowly") {
        document.getElementById("story").innerHTML = "You manage to back away before they notice you";
        document.getElementById("choice1").innerHTML = "Continue hiking down a different path";
        document.getElementById("choice2").innerHTML = "Turn back to your car";
    }else if (choice == 2 && answer2 == "Scare them away with loud noises") {
        document.getElementById("story").innerHTML = "The mama bear goes into protective mode and rears up on her hind legs as she roars";
        document.getElementById("choice1").innerHTML = "Lay down and play dead";
        document.getElementById("choice2").innerHTML = "Run as fast as you can";
    } else if (choice == 1 && answer1 == "Continue hiking down a different path") {
        document.getElementById("story").innerHTML = "You redirect to a trail in the opposite direction of the bears and make it to the top of the mountain";
        document.getElementById("choice1").innerHTML = "Sit down and enjoy the view";
        document.getElementById("choice2").innerHTML = "Snap a selfie";
          ///endings/restart option
          //LEFT CHOICES
          //loud noise choices
    }else if (choice == 1 && answer1 == "Lay down and play dead") {
        document.getElementById("story").innerHTML = "You quickly curl into a ball and pretend to be dead. Mama bear walks up, sniffs and paws at you but grows disinterested when she sees no reaction and walks away with her cubs in tow"+ "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    }else if (choice == 2 && answer2 == "Run as fast as you can") {
        document.getElementById("story").innerHTML = "You run away as fast as you can but she catches up to you. You died."+ "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
}
//backaway/continue
else if (choice == 1 && answer1 == "Sit down and enjoy the view") {
        document.getElementById("story").innerHTML = "You soak up the moment and add the view of the sunset to your memory bank"+ "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    }else if (choice == 2 && answer2 == "Snap a selfie") {
        document.getElementById("story").innerHTML = "As you try to find your best angle you step on some loose rocks on the cliff edge and fall down the steep precipice. You died."+ "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    }
  //backaway/turnbacktoyourcar
    else if (choice == 1 && answer1 == "Go home") {
        document.getElementById("story").innerHTML = "After that close call you are ready to head back to the comforts of home"+ "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    }else if (choice == 2 && answer2 == "Grab a bite to eat") {
        document.getElementById("story").innerHTML = "You head into town to grab a bite with friends and share your close encounter"+ "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    }

    //RIGHT CHOICES
    //Go fishing/ Cook it and eat it/Brush it off
    else if (choice == 1 && answer1 == "Brush it off") {
        document.getElementById("story").innerHTML = "You brush it off but it turns out that the fish was highly poisonus. You died."+ "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    }
    //Go fishing/Cook it and eat it/ Try and get help
    else if (choice == 2 && answer2 == "Try and get help") {
        document.getElementById("story").innerHTML = "You run back to your car as fast as you can and are able to make it to the hospital just in time to get treatment from eating a rare poisonus fish"+ "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    }
    //Go fishing/Release it
    else if (choice == 1 && answer1 == "Give a friendly wave as you pack up your stuff and leave") {
        document.getElementById("story").innerHTML = "You head back to your car and go home."+ "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    }
    //Go fishing/Release it
    else if (choice == 2 && answer2 == "Go over and say hi") {
        document.getElementById("story").innerHTML = "You start up conversation and it turns out you two have a lot in common. You are friends for years many years"+ "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    }
    //Take a dip/Explore the lake/Go in the cave/Swim over to it
    else if (choice == 1 && answer1 == "Follow the dog") {
        document.getElementById("story").innerHTML = "You follow the dog and find a badly injured hiker passed out on the trail. You are able to wake her and call a rescue team to help carry her out."+ "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    }
    //Take a dip/Explore the lake/Go in the cave/Swim over to it
    else if (choice == 2 && answer2 == "Try to get the dog to follow you back, it's obviously lost") {
        document.getElementById("story").innerHTML = "You convince the dog to follow you back and you adopt him after he remains unclimed at the shelter for a few weeks"+ "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    }
    //Take a dip/Get out and dry off/Inspect it
    else if (choice == 1 && answer1 == "Inspect it") {
        document.getElementById("story").innerHTML = "You inch closer until you see a baby fox stuck in the brambles. You are able to untagle him and he looks at you gratefully before he scampers off into the woods."+ "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    }
    //Take a dip/Get out and dry off/Leave it alone
    else if (choice == 2 && answer2 == "Leave it alone") {
        document.getElementById("story").innerHTML = "The sounds spook you so you decide to head back to your car and go home."+ "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    }
    else if (choice == 1 && answer1 == "Yes restart") {
      document.getElementById("story").innerHTML = "You are hiking in the forest by yourself when you come upon a split in the path.";
      document.getElementById("choice1").innerHTML = "Go left" ;
      document.getElementById("choice2").innerHTML = "Go right";
    }else if (choice == 2 && answer2 == "No quit") {
      document.getElementById("story").innerHTML = "Thanks for playing";
    }


}
