controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ...........2.2.2...222..........
        ..........4.4.4..225552.........
        .........2.2.2.225522252........
        ........4.4.4.4.252292252.......
        .........2.2.2.225522252........
        ..........4.4.4..225552.........
        ...........2.2.2...222..........
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `, hahah, 200, 0)
    music.pewPew.play()
})
function changeScore (score: number) {
    info.changeScoreBy(score)
    music.beamUp.play()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.startEffect(effects.fire, 500)
    changeScore(1)
})
let allien: Sprite = null
let projectile: Sprite = null
let hahah: Sprite = null
scene.setBackgroundColor(9)
hahah = sprites.create(img`
    ........................
    ........................
    ........................
    ...........ccc..........
    ...........cccc.........
    .......ccc..ccccccc.....
    .......cccccc555555cc...
    ........ccb5555555555c..
    .....cc..b555555555555c.
    .....cccb55555bcc555555c
    ......cb555555555c55d55c
    ......b5555555555555555c
    ...cc.b555dd5555bb1bbbc.
    ....ccd55ddddd55bbb335c.
    ...ccbddddddddd5bb3335c.
    .ccccdddddddddd55b3335c.
    cdcccdddddb55bbd553335c.
    cddbddddddb555bb55555c..
    cddddddddddb5555bbccc...
    ccddddddbd55bb55cbc.....
    .ccddddbbbdd55ccbdc.....
    ...ccbbbcbddddccdddc....
    .....ccccdd555dccccc....
    ........cccccccc........
    `, SpriteKind.Player)
controller.moveSprite(hahah, 200, 200)
hahah.setStayInScreen(true)
info.setLife(3)
game.onUpdateInterval(500, function () {
    allien = sprites.create(img`
        ..............ffffff....
        .............f2feeeeff..
        ............f222feeeeff.
        .......cc...feeeeffeeef.
        .......cdc.fe2222eeffff.
        .......cddcf2effff222ef.
        ........cddcffeeefffffff
        .........cddce44fbe44eff
        ..........cdceddf14d4eef
        ..........cccdeddd4eeef.
        ...........edd4e44eeff..
        ............ee442222f...
        .............f2e2222f...
        .............f554444f...
        ..............ffffff....
        ................fff.....
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Player)
    allien.setVelocity(-100, randint(0, 120))
    allien.setPosition(160, 0)
})
