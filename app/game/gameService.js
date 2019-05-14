// var Game =  require('./gameModel');

const exampleGames = [
    {
      id: 0,
      name: "tic-tac-toe"
    },
    {
      id: 1,
      name: "Monopoly Jr."
    },
    {
      id: 2,
      name: "Candy Land"
    }
  ]

exports.getGames = function() {
    return exampleGames
}

exports.insertGame = function(game) {
    newGame = {
        id: exampleGames.length,
        name: game.name
    }
    exampleGames.push(game)
    return newGame
}

exports.updateGame = function(id, game) {
    let oldGame
    let updatedGame
    
    let existingGameIndex = exampleGames.findIndex(existingGame => existingGame.id == id)

    if (existingGameIndex > -1) {
        oldGame = exampleGames[existingGameIndex]

        updatedGame = {
            id: id,
            name: game.name || exampleGames[existingGameIndex].name
        }
        
        exampleGames.splice(existingGameIndex, 1, updatedGame)
    }

    return {
        old: oldGame,
        updated: updatedGame
    }
}  

exports.getGameById = function(id) {
    return exampleGames.find(function(game) {
        return game.id == id
    })
}