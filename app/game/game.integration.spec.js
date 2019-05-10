var gameController = require('../game/gameController')

const baseUrl = 'http://localhost:8080'
const got = require('got');
const pathToTest = 'games'


test('List Games returns a list of game objects with all properties having values.', async () => {
    // Arrange

    // Act
    const result = await got(`${baseUrl}/${pathToTest}`)

    // Assert
    expect(result.statusCode).toBe(200)
    JSON.parse(result.body).forEach(game => {
        expect(game.id)
        expect(game.name)
    })
})