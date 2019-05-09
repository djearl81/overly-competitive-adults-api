'use strict'

const root = 'games'

exports.gameRoutes = (server) => {
  return server.route([{
    method: 'GET',
    path: `/${root}`,
    handler: function (request, h) {
    
      return [
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
    ];
  }
  }])
}