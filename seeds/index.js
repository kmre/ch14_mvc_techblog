const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('***Seed Users***');
  await seedUsers();
  console.log('***/Seed Users - Seed Posts***');

  await seedPosts();
  console.log('***/Seed Posts - Seed Comments***');

  await seedComments();
  console.log('***/Seed Comments***');

  process.exit(0);
};

seedAll();
