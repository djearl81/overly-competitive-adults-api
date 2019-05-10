'use strict';

module.exports = {
  method: 'GET',
  path: `/games`,
  options: {
    tags: ['api'],
  
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
    ]
  }
  }
}