'use strict'

const db = require('../server/db')
const {
  User,
  HomePageImage,
  Location,
  Menu,
  PrivateEvents
} = require('../server/db/models')
const homePageImages = require('./listOfHomePageImages')
const menus = require('./listOfMenus')
const locations = require('./listOfLocation')
const privateEvents = require('./listOfPrivateEvents')

async function seed() {
  try {
    await db.sync({force: true})
    console.log('db synced!')

    const users = await Promise.all([
      User.create({email: 'cody@email.com', password: '123'}),
      User.create({email: 'murphy@email.com', password: '123'})
    ])

    const homeImages = await Promise.all(
      homePageImages.map(homePageImage => {
        return HomePageImage.create(homePageImage)
      })
    )
    const locationLists = await Promise.all(
      locations.map(eachLocation => {
        return Location.create(eachLocation)
      })
    )

    const menuLists = await Promise.all(
      menus.map(menu => {
        return Menu.create(menu)
      })
    )
    const privateEventsLists = await Promise.all(
      privateEvents.map(privateEvent => {
        return PrivateEvents.create(privateEvent)
      })
    )

    console.log(`seeded ${users.length} users`)
    console.log(`seeded ${homeImages.length} homePageImages`)
    console.log(`seeded ${locationLists.length} locationLists`)
    console.log(`seeded ${menuLists.length} menuLists`)
    console.log(`seeded ${privateEventsLists.length} privateEventsLists`)

    console.log(`seeded successfully`)
  } catch (err) {
    console.log(err)
  }
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
