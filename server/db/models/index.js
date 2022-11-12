const User = require('./user')
const HomePageImage = require('./homePageImage')
const Location = require('./location')
// const HoursSweetsap=require('./hours');
const Menu = require('./menu')
const PrivateEvents = require('./privateEvents')
const Happening = require('./happening')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

HomePageImage.belongsTo(User)
Location.belongsTo(User)
// HoursSweetsap.belongsTo(User);
Menu.belongsTo(User)
PrivateEvents.belongsTo(User)
Happening.belongsTo(User)

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  HomePageImage,
  Location,
  // HoursSweetsap,
  Menu,
  PrivateEvents,
  Happening
}
