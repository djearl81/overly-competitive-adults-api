// var Game =  require('./gameModel');

exports.list = (req, h) => {
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

  return exampleGames as JSON
}