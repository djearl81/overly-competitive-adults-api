var Game =  require('../models/gameModel');

exports.list = (req, h) => {
  return Game.find({}).exec().then((Game) => {

    return { Games: Game };

  }).catch((err) => {

    return { err: err };

  });
}