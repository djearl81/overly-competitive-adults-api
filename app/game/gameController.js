// var Game =  require('./gameModel');
var gameService =  require('../game/gameService');

exports.list = (req, h) => {
  return gameService.getGames()
}

exports.insert = (req, h) => {
  return gameService.insertGame(req.payload)
}

exports.update = (req, h) => {
  return gameService.updateGame(req.params.id, req.payload)
}

exports.findById = (req, h) => {
  return gameService.getGameById(req.params.id)
}