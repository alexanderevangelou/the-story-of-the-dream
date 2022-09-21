namespace SpriteKind {
    export const collect = SpriteKind.create()
    export const goal = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    music.powerDown.play()
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(space_robot, assets.tile`myTile`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    music.powerDown.play()
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(space_robot, assets.tile`myTile`)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    space_robot.setImage(img`
        . . c 1 c c 1 c . 
        . . c c c c c c . 
        . . c c c c c c . 
        . . . c 7 c . . . 
        . c c c 5 c c c . 
        . c . c 2 c . c . 
        . c . c 9 c . c . 
        b c b c c c b c b 
        . b . c c c . b . 
        . . . c c c . . . 
        . . . c c c . . . 
        . . . c . c . . . 
        . . . c . c . . . 
        `)
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`broken platform`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    sprite.destroy(effects.fire, 100)
    music.smallCrash.play()
    tiles.setWallAt(location, false)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    robot_laser = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, space_robot, 50, 0)
    robot_laser.setKind(SpriteKind.Projectile)
    space_robot.setImage(img`
        . . c c c c c c . . . . 
        . . c c c 1 c 1 . . . . 
        . . c c c c c c . . . . 
        . . . c 7 c . . . . b . 
        . c c c 5 c c c c c c b 
        . c . c 2 c . . . . b . 
        . c . c 9 c . . . . . . 
        b c b c c c . . . . . . 
        . b . c c c . . . . . . 
        . . . c c c . . . . . . 
        . . . c c c . . . . . . 
        . . . c . c . . . . . . 
        . . . c . c . . . . . . 
        `)
    robot_laser.setFlag(SpriteFlag.GhostThroughWalls, true)
    music.zapped.play()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (space_robot.tileKindAt(TileDirection.Bottom, assets.tile`myTile2`)) {
        space_robot.vy = -125
    } else {
    	
    }
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    space_robot.setImage(img`
        . . c c c c c c . 
        . . c 1 c c 1 c . 
        . . c c c c c c . 
        . . . c 7 c . . . 
        . c c c 5 c c c . 
        . c . c 2 c . c . 
        . c . c 9 c . c . 
        b c b c c c b c b 
        . b . c c c . b . 
        . . . c c c . . . 
        . . . c c c . . . 
        . . . c . c . . . 
        . . . c . c . . . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    space_robot.setImage(img`
        . . c c c c c c . 
        . . 1 c 1 c c c . 
        . . c c c c c c . 
        . . . c 7 c . . . 
        . c c c 5 c c c . 
        . c . c 2 c . c . 
        . c . c 9 c . c . 
        b c b c c c b c b 
        . b . c c c . b . 
        . . . c c c . . . 
        . . . c c c . . . 
        . . . c . c . . . 
        . . . c . c . . . 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    space_robot.setImage(img`
        . . c c c c c c . 
        . . c 1 c c 1 c . 
        . . c c c c c c . 
        . . . c 7 c . . . 
        . c c c 5 c c c . 
        . c . c 2 c . c . 
        . c . c 9 c . c . 
        b c b c c c b c b 
        . b . c c c . b . 
        . . . c c c . . . 
        . . . c c c . . . 
        . . . c . c . . . 
        . . . c . c . . . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    space_robot.setImage(img`
        . . c c c c c c . 
        . . c 1 c c 1 c . 
        . . c c c c c c . 
        . . . c 7 c . . . 
        . c c c 5 c c c . 
        . c . c 2 c . c . 
        . c . c 9 c . c . 
        b c b c c c b c b 
        . b . c c c . b . 
        . . . c c c . . . 
        . . . c c c . . . 
        . . . c . c . . . 
        . . . c . c . . . 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    space_robot.setImage(img`
        . c c c c c c . . 
        . c c c 1 c 1 . . 
        . c c c c c c . . 
        . . . c 7 c . . . 
        . c c c 5 c c c . 
        . c . c 2 c . c . 
        . c . c 9 c . c . 
        b c b c c c b c b 
        . b . c c c . b . 
        . . . c c c . . . 
        . . . c c c . . . 
        . . . c . c . . . 
        . . . c . c . . . 
        `)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.collect, function (sprite, otherSprite) {
    music.baDing.play()
    info.changeScoreBy(1)
    otherSprite.destroy()
    if (info.score() >= 31) {
        music.powerUp.play()
        dream_portal = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 8 7 7 7 7 . . 
            . . . . . . . . 6 6 6 6 6 7 6 . 
            . . . . . . . 6 8 8 7 8 8 8 8 6 
            . . . . . . . 6 8 8 9 9 9 9 9 6 
            . . . . . . . 9 9 9 9 8 8 8 9 6 
            . . . . . . 8 9 2 9 9 8 2 8 9 6 
            . . . . . . 8 9 9 9 9 8 8 8 9 6 
            . . . . . 8 8 6 8 8 9 9 9 9 9 6 
            . . . . 8 8 8 6 8 8 8 8 8 7 8 6 
            . . . . 9 9 9 9 9 6 6 6 6 7 6 8 
            . . . . 9 8 8 8 9 8 8 8 8 7 8 8 
            . . . . 9 8 2 8 9 8 7 7 7 8 8 . 
            . . . . 9 8 8 8 9 8 8 8 8 8 . . 
            . . . . 9 9 9 9 9 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.goal)
        tiles.placeOnRandomTile(dream_portal, assets.tile`myTile3`)
    }
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    space_robot.setImage(img`
        . . c c c c c c . 
        . . c 1 c c 1 c . 
        . . c c c c c c . 
        . . . c 7 c . . . 
        . c c c 5 c c c . 
        . c . c 2 c . c . 
        . c . c 9 c . c . 
        b c b c c c b c b 
        . b . c c c . b . 
        . . . c c c . . . 
        . . . c c c . . . 
        . . . c . c . . . 
        . . . c . c . . . 
        `)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    space_robot.setImage(img`
        . . c c c c c c . 
        . . c c c c c c . 
        . . c 1 c c 1 c . 
        . . . c 7 c . . . 
        . c c c 5 c c c . 
        . c . c 2 c . c . 
        . c . c 9 c . c . 
        b c b c c c b c b 
        . b . c c c . b . 
        . . . c c c . . . 
        . . . c c c . . . 
        . . . c . c . . . 
        . . . c . c . . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    space_robot.setFlag(SpriteFlag.Invisible, true)
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    space_robot.setImage(img`
        . . c c c c c c . 
        . . c 1 c c 1 c . 
        . . c c c c c c . 
        . . . c 7 c . . . 
        . c c c 5 c c c . 
        . c . c 2 c . c . 
        . c . c 9 c . c . 
        b c b c c c b c b 
        . b . c c c . b . 
        . . . c c c . . . 
        . . . c c c . . . 
        . . . c . c . . . 
        . . . c . c . . . 
        `)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.goal, function (sprite, otherSprite) {
    game.showLongText("you got all the coins so you got out of the dream by activating the dream portal", DialogLayout.Center)
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    game.showLongText("you got through the lier portal hopeing to b somewere safe but the portal was out of control", DialogLayout.Center)
    game.over(false)
    music.powerDown.play()
})
let dream_portal: Sprite = null
let robot_laser: Sprite = null
let space_robot: Sprite = null
let Coin: Sprite = null
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffffffffffcffffffffffcffffffffffffffffffffff
    ffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffcffffffffffffffffcbcffffffffffffffffffffc
    fffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffff
    fffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffffffffffff
    fff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbfffffffffffffff3fffffffffffffffffffffbbbffffffffffff
    ffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffffffb3bffffffffffffffffffffcbcffffffffffff
    f33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccfffffffffffffffffffff33333ffffffffffffccffffffffffffffffffff
    ff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffffff3b3fffffffffffffccffffffffffffffffffff
    ffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffffffbfbfffffffffffffffffffffffffffffcfffff
    fffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcffff
    fffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcffffffffffffffffcffffffffffffffffffffffcfffff
    ffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffffffffffffffcbcfffffffffffffffffffffffffff
    fffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcfffffffffffffcfffffffffffffffffffffffffcffffffffffff
    fffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffcfffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffffffffffccfffffcffffffffffffffffffffffffff
    ffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffffffffffccfffffffffffffcccccccccccffffffff
    ffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccffff
    fffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccffffffffffffffccccccccccccccccccccccccccf
    ccfffffffffcccccccccccccccccccccccccccccccfffffffffcccccccccccccccccccccccccccccccfffffffffcccccccccccccccccccccccccccccccfffffffffccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccbbbbbbbb
    bbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbb
    bbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbbbbbbbbbbb3333333bbbbbbbbb33cbbbbbbbbbbbb
    bbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbbbbbbbbb33cccccbb33bbbbbbbccbbccbbbbbbbbb
    bbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbbbbbbbbbcccbbbbbcccbbbbbbbbccccbbbbbbbbbb
    3bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb333333333bbbbbbbcccccccccbbbbbbbbbbbbbbb33333333
    333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb333bbbbbbbcccccbbbbbbbbbbbbbbb333ccbbbbb
    cc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccccc3bbbbbbbbbbbbbbbbbbbbbbbbbbb3cccbbbccc
    cccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcccccbbbbbbbbbbbb333bbbbbb3bbbbbcccbbbbbcc
    cccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccccccbbbbbbbbbbbb333bbbbbbbbbbbbcccccccccc
    cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc
    bbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbbbbb333333bbb33ddddddddddddddddd33bbbbbbb
    bbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bbbbb33333ddddddddddddddddddddddddddddd3bb
    dddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddd
    dddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33ddddddddddddddd3333333333ddddddd33dddd33d
    dddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbddddddddddddd333ddddddddd33dddddbbbbbbbbd
    ddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbddddddddddddd333d3bbbbbbbbd33dddddbbbbbbdd
    ddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33dddddddddddddddddddddddd33bbbbbbbbbbbb33ddddddddddddd
    ddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbddddddddddddddddddddddddddbbbbbbbbbbbbbbdddddddddddddd
    ddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3dddddddddddddddddddddddddddd3bbbbbbbbbb3ddddddddddddddd
    d333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333ddddddddddddddddddd333333ddddddddd333333dddddddddddddddddd
    333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3333333333dddddddddddddddddddddddddddddd3
    33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd33333333dddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333d
    33ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd3333ddddddddddddddddddddd333dddddddddddd33
    d333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333ddddddddddddddddd333dddddddddddddddd
    ddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3dddd33ddddddddddddddd33dddd3bbbbbbbbbbb3d
    b3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbbb3dd3ddddddddddddddd3dd3bbbbbbbbbbbbbbbb
    bb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbbbb333ddddddddddddddd33bbbbbbbbbbbbbbbbbb
    bbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbbbbb3dddddddddddddddd3bbbbbbbbbbbbbbbbbbb
    b3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbbb3ddddddddddddddddddd3bbbbbbbbbbbbbbbbbb
    dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33dddddddddddddddddddddddd3bbbbbbbbbbbbb33
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddddddddddddd3333333333333ddddddddddddddddd
    dddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddd
    dddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddddddd3333333333333333ddd3333333dddddddddd
    dd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddddd3333333333333333333dddddd333333ddddddd
    3333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd3333333333333333333333333ddddddddddddddd333
    33333333333333333333333333dddddddd33333333333333333333333333333333dddddddd33333333333333333333333333333333dddddddd33333333333333333333333333333333dddddddd333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    `)
game.setDialogFrame(img`
    ..88888888888888888888..
    .8699999999999999999968.
    8696aaaaaaaaaaaaaaaa6968
    896aaaaaaaaaaaaaaaaaa698
    89a699999999999999996a98
    89a999999999999999999a98
    89a999999999999999999a98
    89a999999999999999999a98
    89a999999999999999999a98
    89a999999999999999999a98
    89a999999999999999999a98
    89a999999999999999999a98
    89a999999999999999999a98
    89a999999999999999999a98
    89a999999999999999999a98
    89a999999999999999999a98
    89a999999999999999999a98
    89a999999999999999999a98
    89a999999999999999999a98
    89a699999999999999996a98
    869aaaaaaaaaaaaaaaaaa968
    886999999999999999999688
    .8888888888888888888888.
    ..88888888888888888888..
    `)
game.setDialogCursor(img`
    . . c c c c c c . 
    . . c 1 c c 1 c . 
    . . c c c c c c . 
    . . . c 7 c . . . 
    . c c c 5 c c c . 
    . c . c 2 c . c . 
    . c . c 9 c . c . 
    b c b c c c b c b 
    . b . c c c . b . 
    . . . c c c . . . 
    . . . c c c . . . 
    . . . c . c . . . 
    . . . c . c . . . 
    `)
game.showLongText("One day there was a planet. the aliens on the planet saw an unidentified object in space and gone into hyperspace in the spaceship called the discovery. they saw it was empty space and made a dream of the planet that they came from. one of the aliens had another dream were the alien was on the moon. but in the dream the alien was a robot and cannot wake up unless he got every single dream coin. Can you get these coins?", DialogLayout.Full)
tiles.setCurrentTilemap(tilemap`level1`)
for (let value of tiles.getTilesByType(assets.tile`myTile9`)) {
    Coin = sprites.create(img`
        . . 6 6 6 6 . . 
        . 6 7 7 7 7 6 . 
        6 7 9 6 6 9 7 6 
        6 7 6 7 7 1 7 6 
        8 7 6 7 7 1 9 8 
        8 9 9 1 1 9 9 8 
        . f 9 9 9 9 f . 
        . . f f f f . . 
        `, SpriteKind.collect)
    animation.runImageAnimation(
    Coin,
    [img`
        . . 6 6 6 6 . . 
        . 6 7 7 7 7 6 . 
        6 7 9 6 6 9 7 6 
        6 7 6 7 7 1 7 6 
        8 7 6 7 7 1 9 8 
        8 9 9 1 1 9 9 8 
        . f 9 9 9 9 f . 
        . . f f f f . . 
        `,img`
        . . 6 6 6 . . . 
        . 6 7 7 7 6 . . 
        6 7 9 6 9 7 6 . 
        6 7 6 7 1 7 6 . 
        8 7 6 7 1 9 8 . 
        8 7 9 1 9 9 8 . 
        . f 9 9 9 f . . 
        . . f f f . . . 
        `,img`
        . . . 6 6 . . . 
        . . 6 7 7 6 . . 
        . 6 7 9 1 7 6 . 
        . 6 7 6 1 7 6 . 
        . 8 7 6 1 9 8 . 
        . 8 7 1 9 9 8 . 
        . . f 9 9 f . . 
        . . . f f . . . 
        `,img`
        . . . 6 6 . . . 
        . . 6 7 7 6 . . 
        . . 6 1 1 6 . . 
        . . 6 7 7 6 . . 
        . . 6 9 9 6 . . 
        . . 8 9 9 8 . . 
        . . 8 6 6 8 . . 
        . . . f f . . . 
        `,img`
        . . . 6 6 . . . 
        . . 6 7 7 6 . . 
        . 6 7 1 9 7 6 . 
        . 6 7 1 6 7 6 . 
        . 8 9 1 6 7 8 . 
        . 8 9 9 1 7 8 . 
        . . f 9 9 f . . 
        . . . f f . . . 
        `,img`
        . . . 6 6 6 . . 
        . . 6 7 7 7 6 . 
        . 6 7 9 6 9 7 6 
        . 6 7 1 7 6 7 6 
        . 8 9 1 7 6 7 8 
        . 8 9 9 1 9 7 8 
        . . f 9 9 9 f . 
        . . . f f f . . 
        `],
    100,
    true
    )
    tiles.placeOnTile(Coin, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
space_robot = sprites.create(img`
    . c c c c c c . . 
    . c c c 1 c 1 . . 
    . c c c c c c . . 
    . . . c 7 c . . . 
    . c c c 5 c c c . 
    . c . c 2 c . c . 
    . c . c 9 c . c . 
    b c b c c c b c b 
    . b . c c c . b . 
    . . . c c c . . . 
    . . . c c c . . . 
    . . . c . c . . . 
    . . . c . c . . . 
    `, SpriteKind.Player)
space_robot.ay = 200
controller.moveSprite(space_robot, 100, 0)
scene.cameraFollowSprite(space_robot)
let currnet_level = 1
tiles.placeOnRandomTile(space_robot, assets.tile`myTile`)
