'use strict';

const Joi = require('joi')
var gameController = require('../game/gameController');

module.exports = [
  
  {
    method: 'GET',
    path: `/games`,
    options: {
      tags: ['api'],
      handler: gameController.list,
      response: {
        schema: Joi.array()
      }
    }
  },


  {
    method: 'POST',
    path: `/games`,
    options: {
      tags: ['api'],
      handler: gameController.insert,
      validate: {
        payload: {
          id: Joi.forbidden().description('The game id'),
          name: Joi.string().required().description('The name of the game.')
        }
      },
      response: {
        schema: Joi.object()
      }
    }
  },

  {
    method: 'Put',
    path: `/games/{id}`,
    options: {
      tags: ['api'],
      handler: gameController.update,
      validate: {
        params: {
          id: Joi.number().required().description('Game ID')
        },
        payload: {
          id: Joi.forbidden().description('The game id. Not allowed in payload.'),
          name: Joi.string().required().description('The name of the game.')
        }
      },
      response: {
        schema: Joi.object()
      }
    }
  },


  {
    method: 'GET',
    path: `/games/{id}`,
    options: {
      tags: ['api'],
      handler: gameController.findById,
      validate: {
        params: {
          id: Joi.number().required().description('Game ID')
        }
      },
      response: {
        schema: Joi.object()
      }
    }
  }
]