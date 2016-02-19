var firstQ = prompt("You are hiking and you hit an intersection. Choose which path would you take, type 'l' for left and type 'r' ");
// var path = "";
console.log(firstQ)

if (firstQ == "l" || firstQ == "L"){
  // path = firstQ
  var secondQ = prompt("You choose the left path, you waklk for 10 min and find a little girl crying. Decide what would you do: (s) Stab her because you know little girls are mean, (t) Turn and run away, or (h) if you'd ask if she needed help")
    if (secondQ == "s" || secondQ == "S"){
      console.log("so you stab her and she melted")
    }
    else if (secondQ == "t" || secondQ == "T"){
      console.log("you turned away, bye-bye")
    }
    else if (secondQ == "h" || secondQ == "h"){
      console.log("She was lost, and you helped her to find her way home")

    }
    else {
      prompt("invalid answer")
    }

}
else if (firstQ == "r" || firstQ == "R"){
  var secondQ = prompt("You choose the right path, you walked for 10 min and find a blue lagoon. Decide what would you do: (d) dive into it! (f) fish for a while (n) nothing, you just keep going")
    if (secondQ == "d" || secondQ == "D"){
      console.log("the water the water was so warm you decided to stay there")
    }
    if (secondQ == "f" ||secondQ == "F"){
      console.log("you fished a mermaid")
    }
    if (secondQ == "n" || secondQ == "N"){
      console.log("you walked 3 more miles and then went home")
    }
}
else {
  prompt("invalid answer")
}
