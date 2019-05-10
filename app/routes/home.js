'use strict';

module.exports = {
    method: 'GET',
    path: '/',
    options: {
        tags: ['api'],
        handler: (request, h) => 'Hello'
      }
    
}