var Game =  require('../models/game');

exports.list = (req, h) => {
  return Game.find({}).exec().then((Game) => {

    return { Games: Game };

  }).catch((err) => {

    return { err: err };

  });
}

exports.get = (req, h) => {

  return Game.findById(req.params.id).exec().then((Game) => {

    if(!Game) return { message: 'Game not Found' };

    return { Game: Game };

  }).catch((err) => {

    return { err: err };

  });
}


exports.create = (req, h) => {

  const GameData = {
    name: req.payload.name
  };

  return Game.create(GameData).then((Game) => {

     return { message: "Game created successfully", Game: Game };

  }).catch((err) => {

    return { err: err };

  });
}

exports.update = (req, h) => {

  return Game.findById(req.params.id).exec().then((Game) => {

    if (!Game) return { err: 'Game not found' };

    Game.name = req.payload.name;

    Game.save(GameData);

  }).then((data) => {

      return { message: "Game data updated successfully" };

  }).catch((err) => {

      return { err: err };

  });
}

exports.remove = (req, h) => {

  return Game.findById(req.params.id).exec(function (err, Game) {

    if (err) return { dberror: err };
    if (!Game) return { message: 'Game not found' };

    Game.remove(function (err) {
      if (err) return { dberror: err };

      return { success: true };
    });
  });
}