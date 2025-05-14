input.onButtonPressed(Button.A, function () {
    bird.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    bird.change(LedSpriteProperty.Y, 1)
})
let bird: game.LedSprite = null
bird = game.createSprite(0, 2)
bird.set(LedSpriteProperty.Blink, 300)
let obstacle: game.LedSprite[] = []
let EmptyObstacleY = randint(0, 4)
for (let index = 0; index <= 4; index++) {
    if (index != EmptyObstacleY) {
        obstacle.push(game.createSprite(4, index))
    }
}
basic.forever(function () {
    while (obstacle.length > 0 && obstacle[0].get(LedSpriteProperty.X) == 0) {
        obstacle.removeAt(0).delete()
    }
    for (let obstacles of obstacle) {
        obstacles.change(LedSpriteProperty.X, -1)
    }
    basic.pause(1000)
})
