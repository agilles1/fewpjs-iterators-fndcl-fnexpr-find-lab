function superbowlWin(a) {
 let year = undefined
     a.find(function(game) {
      if (game.result === 'W') { 
        console.log(game.year)
        year = game.year
        }
    })
    return year
}
