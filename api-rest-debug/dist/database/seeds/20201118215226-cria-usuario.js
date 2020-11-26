"use strict";const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [
      {
        nome: 'José',
        email: 'luiz@email.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Roberto',
        email: 'roberto@email.com',
        password_hash: await bcryptjs.hash('654321', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Matheus',
        email: 'matheus@email.com',
        password_hash: await bcryptjs.hash('abcdef', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),

  down: () => {},
};
