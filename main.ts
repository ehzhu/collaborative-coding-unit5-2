let mySprite: Sprite = null
scene.setBackgroundColor(9)
let hahah = sprites.create(img`
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
mySprite.setStayInScreen(true)
