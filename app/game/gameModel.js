'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameModel = new Schema({
  id: { type: Number, required: true, index: { unique: true } },
  name: { type: String, required: true},
});

module.exports = mongoose.model('Game', gameModel, 'games'); 