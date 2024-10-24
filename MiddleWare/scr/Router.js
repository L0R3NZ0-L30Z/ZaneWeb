const Controller = require('./Controllers');

async function userRoutes(fastify, options) {
  fastify.get('/UserCounter', Controller.UserCounter);
  fastify.get('/GetReviews', Controller.GetReviews);
  fastify.post('/SingUp', {
    schema: {
      body: {
        type: 'object',
        required: ['password', 'email'],
        properties: {
          password: { type: 'string', minLength: 5 },
          email: {
            type: 'string',
            format: 'email',
          }
        }
      }
    }
  }, Controller.SingUp);
  fastify.post('/LoggedIn', {
    schema: {
      body: {
        type: 'object',
        required: ['password', 'email'],
        properties: {
          password: { type: 'string', minLength: 5 },
          email: {
            type: 'string',
            format: 'email',
          }
        }
      }
    }
  }, Controller.LoggedIn);
  fastify.post('/PostReviews', {
    schema: {
      body: {
        type: 'object',
        required: ['email'],
        properties: {
          email: {
            type: 'string',
            format: 'email',
          }
        }
      }
    }
  }, Controller.PostReviews);

}

module.exports = userRoutes;