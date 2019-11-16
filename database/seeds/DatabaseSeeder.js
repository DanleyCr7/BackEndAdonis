'use strict'

const User = use('App/Models/User')

class DatabaseSeeder {
  async run() {
    const user = await User.create({
      username: 'Danrley Silva',
      email: 'Danrleysil46@gmail.com',
      password: '123456',
    })

    await user.teams().create({
      name: 'Nassau',
      user_id: user.id
    })
  }
}

module.exports = DatabaseSeeder
