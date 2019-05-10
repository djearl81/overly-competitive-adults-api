'use strict';

const Joi = require('joi')
var gameController = require('../game/gameController');

module.exports = {
  method: 'GET',
  path: `/games`,
  options: {
    tags: ['api'],
    handler: gameController.list,
    response: {
      schema: Joi.array()
    }
  }
}