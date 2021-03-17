scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.over(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -200
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardHole, function (sprite, location) {
    game.over(false)
})
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(9)
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 3 3 3 3 3 3 3 3 . . . . 
    . . . 3 d 3 3 3 3 3 3 c 3 . . . 
    . . 3 c d 3 3 3 3 3 3 c c 3 . . 
    . 3 c c d d d d d d 3 c c d 3 d 
    . 3 c 3 a a a a a a a b c d 3 3 
    . 3 3 a b b a b b b a a b d 3 3 
    . 3 a b b b a b b b b a 3 3 3 3 
    . a a 3 3 3 a 3 3 3 3 3 a 3 3 3 
    . a a a a a a f a a a f a 3 d d 
    . a a a a a a f a a f a a a 3 d 
    . a a a a a a f f f a a a a a a 
    . a f f f f a a a a f f f a a a 
    . . f f f f f a a f f f f f a . 
    . . . f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 5))
controller.moveSprite(mySprite, 100, 0)
scene.cameraFollowSprite(mySprite)
game.onUpdateInterval(2000, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . 1 1 1 1 1 . 1 1 1 1 1 . . . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
        . . . . . 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, -20, 0)
    projectile.y = randint(0, 60)
})
forever(function () {
    mySprite.ay = 400
})
