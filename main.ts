namespace SpriteKind {
    export const Chest = SpriteKind.create()
    export const OPEN_CHEST = SpriteKind.create()
    export const npc = SpriteKind.create()
    export const image = SpriteKind.create()
    export const button = SpriteKind.create()
    export const npc2 = SpriteKind.create()
    export const Map = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    scene.setBackgroundColor(11)
    tiles.setCurrentTilemap(tilemap`level3`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.npc, function (sprite, otherSprite) {
    talking = true
    story.setSoundEnabled(true)
    story.printCharacterText("What brings you here", "Wandering Merchant")
    story.showPlayerChoices("i want to go to the city", "nevermind")
    if (story.checkLastAnswer("i want to go to the city")) {
        if (coins < 10) {
            story.printCharacterText("You don't have enough coins.", "Wandering Merchant")
            talking = false
            controller.moveSprite(mySprite2, 100, 100)
            weapon_dealer.setKind(SpriteKind.npc2)
            pause(5000)
            weapon_dealer.setKind(SpriteKind.npc)
        } else if (coins == 10) {
            coins += -10
            coin_replace()
            sprites.destroy(weapon_dealer)
            scene.setBackgroundColor(11)
            tiles.setCurrentTilemap(tilemap`level3`)
            controller.moveSprite(mySprite2, 100, 100)
            talking = false
            game.showLongText("There are some bandits here click to punch and defeat them.", DialogLayout.Bottom)
            Bandits()
        } else {
        	
        }
    } else if (story.checkLastAnswer("nevermind")) {
        talking = false
        controller.moveSprite(mySprite2, 100, 100)
        weapon_dealer.setKind(SpriteKind.npc2)
        pause(5000)
        weapon_dealer.setKind(SpriteKind.npc)
    } else {
    	
    }
    talking = false
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    up = 1
})
browserEvents.H.onEvent(browserEvents.KeyEvent.Pressed, function () {
    Bandit_bar.value += 200
})
browserEvents.M.onEvent(browserEvents.KeyEvent.Pressed, function () {
    myMinimap = minimap.minimap(MinimapScale.Quarter, 2, 0)
    Veiwable_map = sprites.create(minimap.getImage(myMinimap), SpriteKind.Map)
    Veiwable_map.setPosition(scene.cameraProperty(CameraProperty.X), scene.cameraProperty(CameraProperty.Y))
})
function run (mySprite: Sprite) {
    if (dash == false) {
        if (punch == true) {
            characterAnimations.loopFrames(
            mySprite,
            [img`
                . . . . . . . . . . . . . 
                . . . f f f f f f . . . . 
                . f f f f f f f f f . . . 
                . f f f f f f c f f f . . 
                f f f f c f f f c f f f . 
                f c f f c c f f f c c f f 
                f c c f f f f e f f f f f 
                f f f f f f f e e f f f . 
                f f e e f b f e e f f f . 
                f f e 4 e 1 f 4 4 f f . . 
                . f f f e 4 4 4 4 f . . . 
                . 4 4 4 e e e e f f . . . 
                . e 4 4 e 7 7 7 7 f . . . 
                . f e e f 6 6 6 6 f f . . 
                . f f f f f f f f f f . . 
                . . f f . . . f f f . . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . f f f f f f . . . . 
                . f f f f f f f f f . . . 
                . f f f f f f c f f f . . 
                f f f f c f f f c f f f . 
                f c f f c c f f f c c f f 
                f c c f f f f e f f f f f 
                f f f f f f f e e f f f . 
                f f e e f b f e e f f . . 
                . f e 4 e 1 f 4 4 f f . . 
                . f f f e e 4 4 4 f . . . 
                . . f e 4 4 e e f f . . . 
                . . f e 4 4 e 7 7 f . . . 
                . f f f e e f 6 6 f f . . 
                . f f f f f f f f f f . . 
                . . f f . . . f f f . . . 
                `,img`
                . . . f f f f f . . . . . 
                . f f f f f f f f f . . . 
                . f f f f f f c f f f . . 
                f f f f c f f f c f f . . 
                f c f f c c f f f c c f f 
                f c c f f f f e f f f f f 
                f f f f f f f e e f f f . 
                f f e e f b f e e f f . . 
                . f e 4 e 1 f 4 4 f . . . 
                . f f f e 4 4 4 4 f . . . 
                . . f e e e e e f f . . . 
                . . e 4 4 e 7 7 7 f . . . 
                . . e 4 4 e 7 7 7 f . . . 
                . . f e e f 6 6 6 f . . . 
                . . . f f f f f f . . . . 
                . . . . f f f . . . . . . 
                `],
            100,
            characterAnimations.rule(Predicate.MovingRight)
            )
            characterAnimations.loopFrames(
            mySprite,
            [img`
                . . . f f f f f . . . . . 
                . f f f f f f f f f . . . 
                . f f f f f f c f f f . . 
                f f f f c f f f c f f . . 
                f c f f c c f f f c c f f 
                f c c f f f f e f f f f f 
                f f f f f f f e e f f f . 
                f f e e f b f e e f f . . 
                . f e 4 e 1 f 4 4 f . . . 
                . f f f e 4 4 4 4 f . . . 
                . . f e e e e e f f . . . 
                . . e 4 4 e 7 7 7 f . . . 
                . . e 4 4 e 7 7 7 f . . . 
                . . f e e f 6 6 6 f . . . 
                . . . f f f f f f . . . . 
                . . . . f f f . . . . . . 
                `],
            100,
            characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight)
            )
            characterAnimations.loopFrames(
            mySprite,
            [img`
                . . . . f f f f . . . . . 
                . . f f f f f f f f . . . 
                . f f f f f f c f f f . . 
                f f f f f f c c f f f c . 
                f f f c f f f f f f f c . 
                c c c f f f e e f f c c . 
                f f f f f e e f f c c f . 
                f f f b f e e f b f f f . 
                . f 4 1 f 4 4 f 1 4 f . . 
                . f e 4 4 4 4 4 4 e f . . 
                . f f f e e e e f f f . . 
                f e f b 7 7 7 7 b f e f . 
                e 4 f 7 7 7 7 7 7 f 4 e . 
                e e f 6 6 6 6 6 6 f e e . 
                . . . f f f f f f . . . . 
                . . . f f . . f f . . . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . . . f f f f . . . . 
                . . . f f f f f f f f . . 
                . . f f f f f f c f f f . 
                f f f f f f f c c f f f c 
                f f f f c f f f f f f f c 
                . c c c f f f e e f f c c 
                . f f f f f e e f f c c f 
                . f f f b f e e f b f f f 
                . f f 4 1 f 4 4 f 1 4 f f 
                . . f e 4 4 4 4 4 e e f e 
                . f e f b 7 7 7 e 4 4 4 e 
                . e 4 f 7 7 7 7 e 4 4 e . 
                . . . f 6 6 6 6 6 e e . . 
                . . . f f f f f f f . . . 
                . . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . . f f f f . . . . . 
                . . f f f f f f f f . . . 
                . f f f c f f f f f f . . 
                c f f f c c f f f f f f f 
                c f f f f f f f c f f f f 
                c c f f e e f f f c c c . 
                f c c f f e e f f f f f . 
                f f f b f e e f b f f f . 
                f f 4 1 f 4 4 f 1 4 f f . 
                e f e e 4 4 4 4 4 e f . . 
                e 4 4 4 e 7 7 7 b f e f . 
                . e 4 4 e 7 7 7 7 f 4 e . 
                . . e e 6 6 6 6 6 f . . . 
                . . . f f f f f f f . . . 
                . . . . . . . f f f . . . 
                `],
            100,
            characterAnimations.rule(Predicate.MovingDown)
            )
            characterAnimations.loopFrames(
            mySprite,
            [img`
                . . . . . . . . . . . . . 
                . . . . . f f f f . . . . 
                . . . f f f f f f f f . . 
                . . f f f f f f c f f f . 
                f f f f f f f c c f f f c 
                f f f f c f f f f f f f c 
                . c c c f f f e e f f c c 
                . f f f f f e e f f c c f 
                . f f f b f e e f b f f f 
                . f f 4 1 f 4 4 f 1 4 f f 
                . . f e 4 4 4 4 4 e e f e 
                . f e f b 7 7 7 e 4 4 4 e 
                . e 4 f 7 7 7 7 e 4 4 e . 
                . . . f 6 6 6 6 6 e e . . 
                . . . f f f f f f f . . . 
                . . . f f f . . . . . . . 
                `],
            100,
            characterAnimations.rule(Predicate.FacingDown, Predicate.NotMoving)
            )
            characterAnimations.loopFrames(
            mySprite,
            [img`
                . . . . . f f f f f . . . 
                . . . f f f f f f f f f . 
                . . f f f c f f f f f f . 
                . . f f c f f f c f f f f 
                f f c c f f f c c f f c f 
                f f f f f e f f f f c c f 
                . f f f e e f f f f f f f 
                . . f f e e f b f e e f f 
                . . . f 4 4 f 1 e 4 e f . 
                . . . f 4 4 4 4 e f f f . 
                . . . f f e e e e e f . . 
                . . . f 7 7 7 e 4 4 e . . 
                . . . f 7 7 7 e 4 4 e . . 
                . . . f 6 6 6 f e e f . . 
                . . . . f f f f f f . . . 
                . . . . . . f f f . . . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . . f f f f f f . . . 
                . . . f f f f f f f f f . 
                . . f f f c f f f f f f . 
                . f f f c f f f c f f f f 
                f f c c f f f c c f f c f 
                f f f f f e f f f f c c f 
                . f f f e e f f f f f f f 
                . . f f e e f b f e e f f 
                . . f f 4 4 f 1 e 4 e f . 
                . . . f 4 4 4 e e f f f . 
                . . . f f e e 4 4 e f . . 
                . . . f 7 7 e 4 4 e f . . 
                . . f f 6 6 f e e f f f . 
                . . f f f f f f f f f f . 
                . . . f f f . . . f f . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . . f f f f f f . . . 
                . . . f f f f f f f f f . 
                . . f f f c f f f f f f . 
                . f f f c f f f c f f f f 
                f f c c f f f c c f f c f 
                f f f f f e f f f f c c f 
                . f f f e e f f f f f f f 
                . f f f e e f b f e e f f 
                . . f f 4 4 f 1 e 4 e f f 
                . . . f 4 4 4 4 e f f f . 
                . . . f f e e e e 4 4 4 . 
                . . . f 7 7 7 7 e 4 4 e . 
                . . f f 6 6 6 6 f e e f . 
                . . f f f f f f f f f f . 
                . . . f f f . . . f f . . 
                `],
            100,
            characterAnimations.rule(Predicate.MovingLeft)
            )
            characterAnimations.loopFrames(
            mySprite,
            [img`
                . . . . . f f f f f . . . 
                . . . f f f f f f f f f . 
                . . f f f c f f f f f f . 
                . . f f c f f f c f f f f 
                f f c c f f f c c f f c f 
                f f f f f e f f f f c c f 
                . f f f e e f f f f f f f 
                . . f f e e f b f e e f f 
                . . . f 4 4 f 1 e 4 e f . 
                . . . f 4 4 4 4 e f f f . 
                . . . f f e e e e e f . . 
                . . . f 7 7 7 e 4 4 e . . 
                . . . f 7 7 7 e 4 4 e . . 
                . . . f 6 6 6 f e e f . . 
                . . . . f f f f f f . . . 
                . . . . . . f f f . . . . 
                `],
            100,
            characterAnimations.rule(Predicate.FacingLeft, Predicate.NotMoving)
            )
            characterAnimations.loopFrames(
            mySprite,
            [img`
                . . . . f f f f . . . . . 
                . . f f c c c c f f . . . 
                . f f c c c c c c f f . . 
                f f c c c c c c c c f f . 
                f f c c f c c c c c c f . 
                f f f f f c c c f c c f . 
                f f f f c c c f c c f f . 
                f f f f f f f f f f f f . 
                f f f f f f f f f f f f . 
                . f f f f f f f f f f . . 
                . f f f f f f f f f f . . 
                f e f f f f f f f f e f . 
                e 4 f 7 7 7 7 7 7 c 4 e . 
                e e f 6 6 6 6 6 6 f e e . 
                . . . f f f f f f . . . . 
                . . . f f . . f f . . . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . . . f f f f . . . . 
                . . . f f c c c c f f . . 
                . f f f c c c c c c f f . 
                f f c c c c c c c c c f f 
                f c c c c f c c c c c c f 
                . f f f f c c c c f c c f 
                . f f f f c c f c c c f f 
                . f f f f f f f f f f f f 
                . f f f f f f f f f f f f 
                . . f f f f f f f f f f . 
                . . e f f f f f f f f f . 
                . . e f f f f f f f f e f 
                . . 4 c 7 7 7 7 7 e 4 4 e 
                . . e f f f f f f f e e . 
                . . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . . . f f f f . . . . 
                . . . f f c c c c f f . . 
                . . f f c c c c c c f f . 
                . f f f c c c c c c c f f 
                f f f c c c c c c c c c f 
                f f c c c f c c c c c c f 
                . f f f f f c c c f c f f 
                . f f f f c c f f c f f f 
                . . f f f f f f f f f f f 
                . . f f f f f f f f f f . 
                . . f f f f f f f f f e . 
                . f e f f f f f f f f e . 
                . e 4 4 e 7 7 7 7 7 c 4 . 
                . . e e f f f f f f f e . 
                . . . . . . . . f f f . . 
                `],
            100,
            characterAnimations.rule(Predicate.MovingUp)
            )
            characterAnimations.loopFrames(
            mySprite,
            [img`
                . . . . f f f f . . . . . 
                . . f f c c c c f f . . . 
                . f f c c c c c c f f . . 
                f f c c c c c c c c f f . 
                f f c c f c c c c c c f . 
                f f f f f c c c f c c f . 
                f f f f c c c f c c f f . 
                f f f f f f f f f f f f . 
                f f f f f f f f f f f f . 
                . f f f f f f f f f f . . 
                . f f f f f f f f f f . . 
                f e f f f f f f f f e f . 
                e 4 f 7 7 7 7 7 7 c 4 e . 
                e e f 6 6 6 6 6 6 f e e . 
                . . . f f f f f f . . . . 
                . . . f f . . f f . . . . 
                `],
            100,
            characterAnimations.rule(Predicate.FacingUp, Predicate.NotMoving)
            )
        }
        if (punch == false) {
            characterAnimations.setCharacterAnimationsEnabled(mySprite2, false)
        }
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    story.clearAllText()
})
function coin_replace () {
    textSprite.setText("x" + ("" + coins))
    textSprite.top = 0
    textSprite.right = scene.screenWidth()
}
function coin () {
    textSprite = textsprite.create("Coins", 11, 5)
    textSprite.setBorder(1, 5, 1)
    textSprite.setIcon(img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `)
    textSprite.setFlag(SpriteFlag.RelativeToCamera, true)
    textSprite.top = 0
    textSprite.right = scene.screenWidth()
}
controller.combos.attachCombo("ba", function () {
    if (stamata == false) {
        if (characterAnimations.matchesRule(mySprite2, characterAnimations.rule(Predicate.FacingRight, Predicate.Moving)) || characterAnimations.matchesRule(mySprite2, characterAnimations.rule(Predicate.FacingRight))) {
            dash = true
            stamata = false
            statusbar.value += -25
            controller.moveSprite(mySprite2, 0, 0)
            mySprite2.setVelocity(150, 0)
            animation.runImageAnimation(
            mySprite2,
            [img`
                . . . . . . . . . . . . . 
                . . . f f f f f f . . . . 
                . f f f f f f f f f . . . 
                . f f f f f f c f f f . . 
                f f f f c f f f c f f f . 
                f c f f c c f f f c c f f 
                f c c f f f f e f f f f f 
                f f f f f f f e e f f f . 
                f f e e f b f e e f f f . 
                f f e 4 e 1 f 4 4 f f . . 
                . f f f e 4 4 4 4 f . . . 
                . 4 4 4 e e e e f f . . . 
                . e 4 4 e 7 7 7 7 f . . . 
                . f e e f 6 6 6 6 f f . . 
                . f f f f f f f f f f . . 
                . . f f . . . f f f . . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . f f f f f f . . . . 
                . f f f f f f f f f . . . 
                . f f f f f f c f f f . . 
                f f f f c f f f c f f f . 
                f c f f c c f f f c c f f 
                f c c f f f f e f f f f f 
                f f f f f f f e e f f f . 
                f f e e f b f e e f f . . 
                . f e 4 e 1 f 4 4 f f . . 
                . f f f e e 4 4 4 f . . . 
                . . f e 4 4 e e f f . . . 
                . . f e 4 4 e 7 7 f . . . 
                . f f f e e f 6 6 f f . . 
                . f f f f f f f f f f . . 
                . . f f . . . f f f . . . 
                `,img`
                . . . f f f f f . . . . . 
                . f f f f f f f f f . . . 
                . f f f f f f c f f f . . 
                f f f f c f f f c f f . . 
                f c f f c c f f f c c f f 
                f c c f f f f e f f f f f 
                f f f f f f f e e f f f . 
                f f e e f b f e e f f . . 
                . f e 4 e 1 f 4 4 f . . . 
                . f f f e 4 4 4 4 f . . . 
                . . f e e e e e f f . . . 
                . . e 4 4 e 7 7 7 f . . . 
                . . e 4 4 e 7 7 7 f . . . 
                . . f e e f 6 6 6 f . . . 
                . . . f f f f f f . . . . 
                . . . . f f f . . . . . . 
                `],
            50,
            false
            )
            timer.after(250, function () {
                mySprite2.setVelocity(0, 0)
                controller.moveSprite(mySprite2, 100, 100)
            })
            dash = false
        }
        if (characterAnimations.matchesRule(mySprite2, characterAnimations.rule(Predicate.FacingUp, Predicate.Moving)) || characterAnimations.matchesRule(mySprite2, characterAnimations.rule(Predicate.FacingUp))) {
            dash = true
            stamata = false
            statusbar.value += -25
            controller.moveSprite(mySprite2, 0, 0)
            mySprite2.setVelocity(0, -150)
            animation.runImageAnimation(
            mySprite2,
            [img`
                . . . . f f f f . . . . . 
                . . f f c c c c f f . . . 
                . f f c c c c c c f f . . 
                f f c c c c c c c c f f . 
                f f c c f c c c c c c f . 
                f f f f f c c c f c c f . 
                f f f f c c c f c c f f . 
                f f f f f f f f f f f f . 
                f f f f f f f f f f f f . 
                . f f f f f f f f f f . . 
                . f f f f f f f f f f . . 
                f e f f f f f f f f e f . 
                e 4 f 7 7 7 7 7 7 c 4 e . 
                e e f 6 6 6 6 6 6 f e e . 
                . . . f f f f f f . . . . 
                . . . f f . . f f . . . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . . . f f f f . . . . 
                . . . f f c c c c f f . . 
                . f f f c c c c c c f f . 
                f f c c c c c c c c c f f 
                f c c c c f c c c c c c f 
                . f f f f c c c c f c c f 
                . f f f f c c f c c c f f 
                . f f f f f f f f f f f f 
                . f f f f f f f f f f f f 
                . . f f f f f f f f f f . 
                . . e f f f f f f f f f . 
                . . e f f f f f f f f e f 
                . . 4 c 7 7 7 7 7 e 4 4 e 
                . . e f f f f f f f e e . 
                . . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . . . f f f f . . . . 
                . . . f f c c c c f f . . 
                . . f f c c c c c c f f . 
                . f f f c c c c c c c f f 
                f f f c c c c c c c c c f 
                f f c c c f c c c c c c f 
                . f f f f f c c c f c f f 
                . f f f f c c f f c f f f 
                . . f f f f f f f f f f f 
                . . f f f f f f f f f f . 
                . . f f f f f f f f f e . 
                . f e f f f f f f f f e . 
                . e 4 4 e 7 7 7 7 7 c 4 . 
                . . e e f f f f f f f e . 
                . . . . . . . . f f f . . 
                `],
            50,
            false
            )
            timer.after(250, function () {
                mySprite2.setVelocity(0, 0)
                controller.moveSprite(mySprite2, 100, 100)
            })
            dash = false
        }
        if (characterAnimations.matchesRule(mySprite2, characterAnimations.rule(Predicate.FacingLeft, Predicate.Moving)) || characterAnimations.matchesRule(mySprite2, characterAnimations.rule(Predicate.FacingLeft))) {
            dash = true
            stamata = false
            statusbar.value += -25
            controller.moveSprite(mySprite2, 0, 0)
            mySprite2.setVelocity(-150, 0)
            animation.runImageAnimation(
            mySprite2,
            [img`
                . . . . . f f f f f . . . 
                . . . f f f f f f f f f . 
                . . f f f c f f f f f f . 
                . . f f c f f f c f f f f 
                f f c c f f f c c f f c f 
                f f f f f e f f f f c c f 
                . f f f e e f f f f f f f 
                . . f f e e f b f e e f f 
                . . . f 4 4 f 1 e 4 e f . 
                . . . f 4 4 4 4 e f f f . 
                . . . f f e e e e e f . . 
                . . . f 7 7 7 e 4 4 e . . 
                . . . f 7 7 7 e 4 4 e . . 
                . . . f 6 6 6 f e e f . . 
                . . . . f f f f f f . . . 
                . . . . . . f f f . . . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . . f f f f f f . . . 
                . . . f f f f f f f f f . 
                . . f f f c f f f f f f . 
                . f f f c f f f c f f f f 
                f f c c f f f c c f f c f 
                f f f f f e f f f f c c f 
                . f f f e e f f f f f f f 
                . . f f e e f b f e e f f 
                . . f f 4 4 f 1 e 4 e f . 
                . . . f 4 4 4 e e f f f . 
                . . . f f e e 4 4 e f . . 
                . . . f 7 7 e 4 4 e f . . 
                . . f f 6 6 f e e f f f . 
                . . f f f f f f f f f f . 
                . . . f f f . . . f f . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . . f f f f f f . . . 
                . . . f f f f f f f f f . 
                . . f f f c f f f f f f . 
                . f f f c f f f c f f f f 
                f f c c f f f c c f f c f 
                f f f f f e f f f f c c f 
                . f f f e e f f f f f f f 
                . f f f e e f b f e e f f 
                . . f f 4 4 f 1 e 4 e f f 
                . . . f 4 4 4 4 e f f f . 
                . . . f f e e e e 4 4 4 . 
                . . . f 7 7 7 7 e 4 4 e . 
                . . f f 6 6 6 6 f e e f . 
                . . f f f f f f f f f f . 
                . . . f f f . . . f f . . 
                `],
            50,
            false
            )
            timer.after(250, function () {
                mySprite2.setVelocity(0, 0)
                controller.moveSprite(mySprite2, 100, 100)
            })
            dash = false
        }
        if (characterAnimations.matchesRule(mySprite2, characterAnimations.rule(Predicate.FacingDown, Predicate.Moving)) || characterAnimations.matchesRule(mySprite2, characterAnimations.rule(Predicate.FacingDown))) {
            dash = true
            stamata = false
            statusbar.value += -25
            controller.moveSprite(mySprite2, 0, 0)
            mySprite2.setVelocity(0, 150)
            animation.runImageAnimation(
            mySprite2,
            [img`
                . . . . f f f f . . . . . 
                . . f f f f f f f f . . . 
                . f f f f f f c f f f . . 
                f f f f f f c c f f f c . 
                f f f c f f f f f f f c . 
                c c c f f f e e f f c c . 
                f f f f f e e f f c c f . 
                f f f b f e e f b f f f . 
                . f 4 1 f 4 4 f 1 4 f . . 
                . f e 4 4 4 4 4 4 e f . . 
                . f f f e e e e f f f . . 
                f e f b 7 7 7 7 b f e f . 
                e 4 f 7 7 7 7 7 7 f 4 e . 
                e e f 6 6 6 6 6 6 f e e . 
                . . . f f f f f f . . . . 
                . . . f f . . f f . . . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . . . f f f f . . . . 
                . . . f f f f f f f f . . 
                . . f f f f f f c f f f . 
                f f f f f f f c c f f f c 
                f f f f c f f f f f f f c 
                . c c c f f f e e f f c c 
                . f f f f f e e f f c c f 
                . f f f b f e e f b f f f 
                . f f 4 1 f 4 4 f 1 4 f f 
                . . f e 4 4 4 4 4 e e f e 
                . f e f b 7 7 7 e 4 4 4 e 
                . e 4 f 7 7 7 7 e 4 4 e . 
                . . . f 6 6 6 6 6 e e . . 
                . . . f f f f f f f . . . 
                . . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . . f f f f . . . . . 
                . . f f f f f f f f . . . 
                . f f f c f f f f f f . . 
                c f f f c c f f f f f f f 
                c f f f f f f f c f f f f 
                c c f f e e f f f c c c . 
                f c c f f e e f f f f f . 
                f f f b f e e f b f f f . 
                f f 4 1 f 4 4 f 1 4 f f . 
                e f e e 4 4 4 4 4 e f . . 
                e 4 4 4 e 7 7 7 b f e f . 
                . e 4 4 e 7 7 7 7 f 4 e . 
                . . e e 6 6 6 6 6 f . . . 
                . . . f f f f f f f . . . 
                . . . . . . . f f f . . . 
                `],
            50,
            false
            )
            timer.after(250, function () {
                mySprite2.setVelocity(0, 0)
                controller.moveSprite(mySprite2, 100, 100)
            })
            dash = false
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    left = 2
})
function Bandits () {
    Bandit1 = sprites.create(img`
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f f e e e e e e f f . 
        f f f f 4 e e e f f f f 
        f f f 4 4 4 e e f f f f 
        f f f 4 4 4 4 e e f f f 
        f 4 e 4 4 4 4 4 4 e 4 f 
        f 4 4 f f 4 4 f f 4 4 f 
        f e 4 d d d d d d 4 e f 
        . f e d d b b d d e f . 
        . f f e 4 4 4 4 e f f . 
        e 4 f b 1 1 1 1 b f 4 e 
        4 d f 1 1 1 1 1 1 f d 4 
        4 4 f 6 6 6 6 6 6 f 4 4 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `, SpriteKind.Enemy)
    Bandit1.follow(mySprite2, 75)
    Bandit_bar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    Bandit_bar.max = 200
    Bandit_bar.value += 200
    Bandit_bar.setBarBorder(1, 15)
    Bandit_bar.attachToSprite(Bandit1, 0, 0)
    characterAnimations.loopFrames(
    Bandit1,
    [img`
        . . . f f f f f . . . . 
        . . f e e e e e f f . . 
        . f e e e e e e e f f . 
        f e e e e e e e f f f f 
        f e e 4 e e e f f f f f 
        f e e 4 4 e e e f f f f 
        f f e 4 4 4 4 4 f f f f 
        f f e 4 4 f f 4 e 4 f f 
        . f f d d d d 4 d 4 f . 
        . . f b b d d 4 f f f . 
        . . f e 4 4 4 e e f . . 
        . . f 1 1 1 e d d 4 . . 
        . . f 1 1 1 e d d e . . 
        . . f 6 6 6 f e e f . . 
        . . . f f f f f f . . . 
        . . . . . f f f . . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . . f e e e e e f f f . 
        . f e e e e e e e f f f 
        f e e e e e e e f f f f 
        f e e 4 e e e f f f f f 
        f e e 4 4 e e e f f f f 
        f f e 4 4 4 4 4 f f f f 
        . f e 4 4 f f 4 e 4 f f 
        . . f d d d d 4 d 4 f . 
        . . f b b d e e f f f . 
        . . f e 4 e d d 4 f . . 
        . . f 1 1 e d d e f . . 
        . f f 6 6 f e e f f f . 
        . f f f f f f f f f f . 
        . . f f f . . . f f . . 
        `,img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . . f e e e e e f f f . 
        . f e e e e e e e f f f 
        f e e e e e e e f f f f 
        f e e 4 e e e f f f f f 
        f e e 4 4 e e e f f f f 
        f f e 4 4 4 4 4 f f f f 
        . f e 4 4 f f 4 e 4 f f 
        . . f d d d d 4 d 4 f f 
        . . f b b d d 4 f f f . 
        . . f e 4 4 4 e d d 4 . 
        . . f 1 1 1 1 e d d e . 
        . f f 6 6 6 6 f e e f . 
        . f f f f f f f f f f . 
        . . f f f . . . f f . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    Bandit1,
    [img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . f f f e e e e e f . . 
        f f f e e e e e e e f . 
        f f f f e e e e e e e f 
        f f f f f e e e 4 e e f 
        f f f f e e e 4 4 e e f 
        f f f f 4 4 4 4 4 e f f 
        f f 4 e 4 f f 4 4 e f . 
        f f 4 d 4 d d d d f . . 
        . f f f 4 d d b b f . . 
        . 4 d d e 4 4 4 e f . . 
        . e d d e 1 1 1 1 f . . 
        . f e e f 6 6 6 6 f f . 
        . f f f f f f f f f f . 
        . . f f . . . f f f . . 
        `,img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . f f f e e e e e f . . 
        f f f e e e e e e e f . 
        f f f f e e e e e e e f 
        f f f f f e e e 4 e e f 
        f f f f e e e 4 4 e e f 
        f f f f 4 4 4 4 4 e f f 
        f f 4 e 4 f f 4 4 e f . 
        . f 4 d 4 d d d d f . . 
        . f f f e e d b b f . . 
        . . f 4 d d e 4 e f . . 
        . . f e d d e 1 1 f . . 
        . f f f e e f 6 6 f f . 
        . f f f f f f f f f f . 
        . . f f . . . f f f . . 
        `,img`
        . . . . f f f f f . . . 
        . . f f e e e e e f . . 
        . f f e e e e e e e f . 
        f f f f e e e e e e e f 
        f f f f f e e e 4 e e f 
        f f f f e e e 4 4 e e f 
        f f f f 4 4 4 4 4 e f f 
        f f 4 e 4 f f 4 4 e f f 
        . f 4 d 4 d d d d f f . 
        . f f f 4 d d b b f . . 
        . . f e e 4 4 4 e f . . 
        . . 4 d d e 1 1 1 f . . 
        . . e d d e 1 1 1 f . . 
        . . f e e f 6 6 6 f . . 
        . . . f f f f f f . . . 
        . . . . f f f . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    Bandit1,
    [img`
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f f e e e e e e f f . 
        f f f f 4 e e e f f f f 
        f f f 4 4 4 e e f f f f 
        f f f 4 4 4 4 e e f f f 
        f 4 e 4 4 4 4 4 4 e 4 f 
        f 4 4 f f 4 4 f f 4 4 f 
        f e 4 d d d d d d 4 e f 
        . f e d d b b d d e f . 
        . f f e 4 4 4 4 e f f . 
        e 4 f b 1 1 1 1 b f 4 e 
        4 d f 1 1 1 1 1 1 f d 4 
        4 4 f 6 6 6 6 6 6 f 4 4 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . f f f e e e e f f f . 
        f f f e e e e e e f f f 
        f f f f 4 e e e f f f f 
        f f f 4 4 4 e e f f f f 
        f f f 4 4 4 4 e e f f f 
        f 4 e 4 4 4 4 4 4 e 4 f 
        f 4 4 f f 4 4 f f 4 4 f 
        f e 4 d d d d d d 4 e f 
        . f e d d b b d 4 e f e 
        f f f e 4 4 4 4 d d 4 e 
        e 4 f b 1 1 1 e d d e . 
        . . f 6 6 6 6 f e e . . 
        . . f f f f f f f . . . 
        . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . f f f e e e e f f f . 
        f f f e e e e e e f f f 
        f f f f 4 e e e f f f f 
        f f f 4 4 4 e e f f f f 
        f f f 4 4 4 4 e e f f f 
        f 4 e 4 4 4 4 4 4 e 4 f 
        f 4 4 f f 4 4 f f 4 4 f 
        f e 4 d d d d d d 4 e f 
        e f e 4 d b b d d e f . 
        e 4 d d 4 4 4 4 e f f f 
        . e d d e 1 1 1 b f 4 e 
        . . e e f 6 6 6 6 f . . 
        . . . f f f f f f f . . 
        . . . . . . . f f f . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingDown)
    )
    characterAnimations.loopFrames(
    Bandit1,
    [img`
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f e e e e e e e f f . 
        f f e f e e e e e e f f 
        f f f e e e e e e e e f 
        f f f e e e e e e f e f 
        f f f f e e e e f f f f 
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        . f f f f f f f f f f . 
        . e f f f f f f f f e . 
        e 4 f b b b b b b f 4 e 
        4 d f d d d d d d c d 4 
        4 4 f 6 6 6 6 6 6 f 4 4 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f e e e e e e e f f . 
        f e e f e e e e e e f f 
        f f f e e e e e e e e f 
        f f e e e e e e e f e f 
        f f f e e e e f f f f f 
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        . f f f f f f f f f f . 
        . e f f f f f f f f e . 
        . 4 f b b b b b f e 4 e 
        . 4 f d d d d d e d d 4 
        . e f f f f f f e e 4 . 
        . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f e e e e e e e f f . 
        f f e f e e e e e e f f 
        f f f e e e e e e e e f 
        f f f f e e e e e f e f 
        f f f f f e e e e f f f 
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        . f f f f f f f f f f . 
        . e f f f f f f f f e . 
        e 4 e f b b b b b f 4 . 
        4 d d e d d d d d f 4 . 
        . 4 e e f f f f f f e . 
        . . . . . . . f f f . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingUp)
    )
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Chest, function (sprite2, otherSprite2) {
    if (controller.B.isPressed()) {
        sprites.destroy(STARTER_CHEST)
        OPEN_STARTER_CHEST = sprites.create(img`
            . b b b b b b b b b b b b b b . 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e e 4 4 4 4 4 4 4 4 4 4 e e b 
            b b b b b b b d d b b b b b b b 
            . b b b b b b c c b b b b b b . 
            b c c c c c b c c b c c c c c b 
            b c c c c c c b b c c c c c c b 
            b c c c c c c c c c c c c c c b 
            b c c c c c c c c c c c c c c b 
            b b b b b b b b b b b b b b b b 
            b e e e e e e e e e e e e e e b 
            b e e e e e e e e e e e e e e b 
            b c e e e e e e e e e e e e c b 
            b b b b b b b b b b b b b b b b 
            . b b . . . . . . . . . . b b . 
            `, SpriteKind.OPEN_CHEST)
        OPEN_STARTER_CHEST.setPosition(116, 500)
        timer.after(5000, function () {
            sprites.destroy(OPEN_STARTER_CHEST)
        })
        coins += 10
        coin_replace()
    }
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    sprites.destroy(Bandit1, effects.fire, 100)
    coins += 1
    coin_replace()
})
browserEvents.A.onEvent(browserEvents.KeyEvent.Pressed, function () {
	
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    right = 1
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    down = 1
})
function MOUSECLICK () {
    if (left == 2) {
        punch = false
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . b b b b b . . . . . . . . . 
            . . . . . . . b . . . . . . . . 
            . . . . . . b . . . . . . . . . 
            . . . . . . . b . . . . . . . . 
            . . b b b b b . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . b b b b b . . . . 
            . . . . . . . . . . . . b . . . 
            . . . . . . . . . . . b . . . . 
            . . . . . . . . . . . . b . . . 
            . . . . . . . b b b b b . . . . 
            `, mySprite2, -175, 0)
        pause(50)
        sprites.destroy(projectile)
        animation.runImageAnimation(
        mySprite2,
        [img`
            . . . . . . . . f f f f f . . . 
            . . . . . . f f f f f f f f f . 
            . . . . . f f f c f f f f f f . 
            . . . . . f f c f f f c f f f f 
            . . . f f c c f f f c c f f c f 
            . . . f f f f f e f f f f c c f 
            . . . . f f f e e f f f f f f f 
            . . . . . f f e e f b f e e f f 
            . . . . . . f 4 4 f 1 e 4 e f . 
            . . . . . . f 4 4 4 4 e f f f . 
            . . . . . . f f e e e e e f . . 
            . . . . . . f 7 7 7 e 4 4 e . . 
            . . . . . . f 7 7 7 e 4 4 e . . 
            . . . . . . f 6 6 6 f e e f . . 
            . . . . . . . f f f f f f . . . 
            . . . . . . . . . f f f . . . . 
            `,img`
            . . . . . . . . f f f f f . . . 
            . . . . . . f f f f f f f f f . 
            . . . . . f f f c f f f f f f . 
            . . . . . f f c f f f c f f f f 
            . . . f f c c f f f c c f f c f 
            . . . f f f f f e f f f f c c f 
            . . . . f f f e e f f f f f f f 
            . . . . . f f e e f b f e e f f 
            . . . . . . f 4 4 f 1 e 4 e f . 
            . . . . . . f 4 4 4 4 e f f f . 
            . . . . . . f f e e e e e f . . 
            . . . . . . f 7 7 e 4 4 e f . . 
            . . . . . . f 7 7 e 4 4 e f . . 
            . . . . . . f 6 6 6 e e 6 f . . 
            . . . . . . . f f f f f f . . . 
            . . . . . . . . . f f f . . . . 
            `,img`
            . . . . . . . . f f f f f . . . 
            . . . . . . f f f f f f f f f . 
            . . . . . f f f c f f f f f f . 
            . . . . . f f c f f f c f f f f 
            . . . f f c c f f f c c f f c f 
            . . . f f f f f e f f f f c c f 
            . . . . f f f e e f f f f f f f 
            . . . . . f f e e f b f e e f f 
            . . . . . . f 4 4 f 1 e 4 e f . 
            . . . . . . f 4 4 4 4 e f f f . 
            . . . . . . f e e e e e e f . . 
            . . . . . . f e 4 4 e 7 7 f . . 
            . . . . . . f e 4 4 e 7 7 f . . 
            . . . . . . f 6 e e 6 6 6 f . . 
            . . . . . . . f f f f f f . . . 
            . . . . . . . . . f f f . . . . 
            `,img`
            . . . . . . . . f f f f f . . . 
            . . . . . . f f f f f f f f f . 
            . . . . . f f f c f f f f f f . 
            . . . . . f f c f f f c f f f f 
            . . . f f c c f f f c c f f c f 
            . . . f f f f f e f f f f c c f 
            . . . . f f f e e f f f f f f f 
            . . . . . f f e e f b f e e f f 
            . . . . . . f 4 4 f 1 e 4 e f . 
            . . . . . . f 4 4 4 4 e f f f . 
            . . . . e e f f e e e e e f . . 
            . . . e 4 4 e 7 7 7 7 7 7 f . . 
            . . . e 4 4 e 7 7 7 7 7 7 f . . 
            . . . . e e f 6 6 6 6 6 6 f . . 
            . . . . . . . f f f f f f . . . 
            . . . . . . . . . f f f . . . . 
            `,img`
            . . . . . . . . f f f f f . . . 
            . . . . . . f f f f f f f f f . 
            . . . . . f f f c f f f f f f . 
            . . . . . f f c f f f c f f f f 
            . . . f f c c f f f c c f f c f 
            . . . f f f f f e f f f f c c f 
            . . . . f f f e e f f f f f f f 
            . . . . . f f e e f b f e e f f 
            . . . . . . f 4 4 f 1 e 4 e f . 
            . . . . . . f 4 4 4 4 e f f f . 
            . . . . e e f f e e e e e f . . 
            . . . e 4 4 e 7 7 7 7 7 7 f . . 
            . . . e 4 4 e 7 7 7 7 7 7 f . . 
            . . . . e e f 6 6 6 6 6 6 f . . 
            . . . . . . . f f f f f f . . . 
            . . . . . . . . . f f f . . . . 
            `,img`
            . . . . . . . . f f f f f . . . 
            . . . . . . f f f f f f f f f . 
            . . . . . f f f c f f f f f f . 
            . . . . . f f c f f f c f f f f 
            . . . f f c c f f f c c f f c f 
            . . . f f f f f e f f f f c c f 
            . . . . f f f e e f f f f f f f 
            . . . . . f f e e f b f e e f f 
            . . . . . . f 4 4 f 1 e 4 e f . 
            . . . . . . f 4 4 4 4 e f f f . 
            . . . . . . f e e e e e e f . . 
            . . . . . . f e 4 4 e 7 7 f . . 
            . . . . . . f e 4 4 e 7 7 f . . 
            . . . . . . f 6 e e 6 6 6 f . . 
            . . . . . . . f f f f f f . . . 
            . . . . . . . . . f f f . . . . 
            `,img`
            . . . . . . . . f f f f f . . . 
            . . . . . . f f f f f f f f f . 
            . . . . . f f f c f f f f f f . 
            . . . . . f f c f f f c f f f f 
            . . . f f c c f f f c c f f c f 
            . . . f f f f f e f f f f c c f 
            . . . . f f f e e f f f f f f f 
            . . . . . f f e e f b f e e f f 
            . . . . . . f 4 4 f 1 e 4 e f . 
            . . . . . . f 4 4 4 4 e f f f . 
            . . . . . e f f e e e e e f . . 
            . . . . e 4 f 7 7 e 4 4 e f . . 
            . . . . e 4 f 7 7 e 4 4 e f . . 
            . . . . . e f 6 6 6 e e 6 f . . 
            . . . . . . . f f f f f f . . . 
            . . . . . . . . . f f f . . . . 
            `,img`
            . . . . . . . . f f f f f . . . 
            . . . . . . f f f f f f f f f . 
            . . . . . f f f c f f f f f f . 
            . . . . . f f c f f f c f f f f 
            . . . f f c c f f f c c f f c f 
            . . . f f f f f e f f f f c c f 
            . . . . f f f e e f f f f f f f 
            . . . . . f f e e f b f e e f f 
            . . . . . . f 4 4 f 1 e 4 e f . 
            . . . . . . f 4 4 4 4 e f f f . 
            . . . . e e f f e e e e e f . . 
            . . . e 4 4 f 7 7 7 e 4 4 e . . 
            . . . e 4 4 f 7 7 7 e 4 4 e . . 
            . . . . e e f 6 6 6 f e e f . . 
            . . . . . . . f f f f f f . . . 
            . . . . . . . . . f f f . . . . 
            `,img`
            . . . . . . . . f f f f f . . . 
            . . . . . . f f f f f f f f f . 
            . . . . . f f f c f f f f f f . 
            . . . . . f f c f f f c f f f f 
            . . . f f c c f f f c c f f c f 
            . . . f f f f f e f f f f c c f 
            . . . . f f f e e f f f f f f f 
            . . . . . f f e e f b f e e f f 
            . . . . . . f 4 4 f 1 e 4 e f . 
            . . . . . . f 4 4 4 4 e f f f . 
            . . . . . e f f e e e e e f . . 
            . . . . e 4 f 7 7 e 4 4 e f . . 
            . . . . e 4 f 7 7 e 4 4 e f . . 
            . . . . . e f 6 6 6 e e 6 f . . 
            . . . . . . . f f f f f f . . . 
            . . . . . . . . . f f f . . . . 
            `,img`
            . . . . . . . . f f f f f . . . 
            . . . . . . f f f f f f f f f . 
            . . . . . f f f c f f f f f f . 
            . . . . . f f c f f f c f f f f 
            . . . f f c c f f f c c f f c f 
            . . . f f f f f e f f f f c c f 
            . . . . f f f e e f f f f f f f 
            . . . . . f f e e f b f e e f f 
            . . . . . . f 4 4 f 1 e 4 e f . 
            . . . . . . f 4 4 4 4 e f f f . 
            . . . . . . f e e e e e e f . . 
            . . . . . . f e 4 4 e 7 7 f . . 
            . . . . . . f e 4 4 e 7 7 f . . 
            . . . . . . f 6 e e 6 6 6 f . . 
            . . . . . . . f f f f f f . . . 
            . . . . . . . . . f f f . . . . 
            `,img`
            . . . . . . . . f f f f f . . . 
            . . . . . . f f f f f f f f f . 
            . . . . . f f f c f f f f f f . 
            . . . . . f f c f f f c f f f f 
            . . . f f c c f f f c c f f c f 
            . . . f f f f f e f f f f c c f 
            . . . . f f f e e f f f f f f f 
            . . . . . f f e e f b f e e f f 
            . . . . . . f 4 4 f 1 e 4 e f . 
            . . . . . . f 4 4 4 4 e f f f . 
            . . . . . . f f e e e e e f . . 
            . . . . . . f 7 7 7 e 4 4 e . . 
            . . . . . . f 7 7 7 e 4 4 e . . 
            . . . . . . f 6 6 6 f e e f . . 
            . . . . . . . f f f f f f . . . 
            . . . . . . . . . f f f . . . . 
            `],
        50,
        false
        )
        punch = true
        left = 0
    } else if (right == 1) {
        punch = false
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . b b b b b . . . . . . . . . 
            . . . . . . . b . . . . . . . . 
            . . . . . . b . . . . . . . . . 
            . . . . . . . b . . . . . . . . 
            . . b b b b b . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . b b b b b . . . . 
            . . . . . . . . . . . . b . . . 
            . . . . . . . . . . . b . . . . 
            . . . . . . . . . . . . b . . . 
            . . . . . . . b b b b b . . . . 
            `, mySprite2, 175, 0)
        pause(50)
        sprites.destroy(projectile)
        animation.runImageAnimation(
        mySprite2,
        [img`
            . . . f f f f f . . . . . . . . 
            . f f f f f f f f f . . . . . . 
            . f f f f f f c f f f . . . . . 
            f f f f c f f f c f f . . . . . 
            f c f f c c f f f c c f f . . . 
            f c c f f f f e f f f f f . . . 
            f f f f f f f e e f f f . . . . 
            f f e e f b f e e f f . . . . . 
            . f e 4 e 1 f 4 4 f . . . . . . 
            . f f f e 4 4 4 4 f . . . . . . 
            . . f e e e e e f f . . . . . . 
            . . e 4 4 e 7 7 7 f . . . . . . 
            . . e 4 4 e 7 7 7 f . . . . . . 
            . . f e e f 6 6 6 f . . . . . . 
            . . . f f f f f f . . . . . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . f f f f f . . . . . . . . 
            . f f f f f f f f f . . . . . . 
            . f f f f f f c f f f . . . . . 
            f f f f c f f f c f f . . . . . 
            f c f f c c f f f c c f f . . . 
            f c c f f f f e f f f f f . . . 
            f f f f f f f e e f f f . . . . 
            f f e e f b f e e f f . . . . . 
            . f e 4 e 1 f 4 4 f . . . . . . 
            . f f f e 4 4 4 4 f . . . . . . 
            . . f e e e e e f f . . . . . . 
            . . f e 4 4 e 7 7 f . . . . . . 
            . . f e 4 4 e 7 7 f . . . . . . 
            . . f 6 e e 6 6 6 f . . . . . . 
            . . . f f f f f f . . . . . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . f f f f f . . . . . . . . 
            . f f f f f f f f f . . . . . . 
            . f f f f f f c f f f . . . . . 
            f f f f c f f f c f f . . . . . 
            f c f f c c f f f c c f f . . . 
            f c c f f f f e f f f f f . . . 
            f f f f f f f e e f f f . . . . 
            f f e e f b f e e f f . . . . . 
            . f e 4 e 1 f 4 4 f . . . . . . 
            . f f f e 4 4 4 4 f . . . . . . 
            . . f e e e e e e f . . . . . . 
            . . f 7 7 e 4 4 e f . . . . . . 
            . . f 7 7 e 4 4 e f . . . . . . 
            . . f 6 6 6 e e 6 f . . . . . . 
            . . . f f f f f f . . . . . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . f f f f f . . . . . . . . 
            . f f f f f f f f f . . . . . . 
            . f f f f f f c f f f . . . . . 
            f f f f c f f f c f f . . . . . 
            f c f f c c f f f c c f f . . . 
            f c c f f f f e f f f f f . . . 
            f f f f f f f e e f f f . . . . 
            f f e e f b f e e f f . . . . . 
            . f e 4 e 1 f 4 4 f . . . . . . 
            . f f f e 4 4 4 4 f . . . . . . 
            . . f e e e e e f f e e . . . . 
            . . f 7 7 7 7 7 7 e 4 4 e . . . 
            . . f 7 7 7 7 7 7 e 4 4 e . . . 
            . . f 6 6 6 6 6 6 f e e . . . . 
            . . . f f f f f f . . . . . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . f f f f f . . . . . . . . 
            . f f f f f f f f f . . . . . . 
            . f f f f f f c f f f . . . . . 
            f f f f c f f f c f f . . . . . 
            f c f f c c f f f c c f f . . . 
            f c c f f f f e f f f f f . . . 
            f f f f f f f e e f f f . . . . 
            f f e e f b f e e f f . . . . . 
            . f e 4 e 1 f 4 4 f . . . . . . 
            . f f f e 4 4 4 4 f . . . . . . 
            . . f e e e e e f f e e . . . . 
            . . f 7 7 7 7 7 7 e 4 4 e . . . 
            . . f 7 7 7 7 7 7 e 4 4 e . . . 
            . . f 6 6 6 6 6 6 f e e . . . . 
            . . . f f f f f f . . . . . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . f f f f f . . . . . . . . 
            . f f f f f f f f f . . . . . . 
            . f f f f f f c f f f . . . . . 
            f f f f c f f f c f f . . . . . 
            f c f f c c f f f c c f f . . . 
            f c c f f f f e f f f f f . . . 
            f f f f f f f e e f f f . . . . 
            f f e e f b f e e f f . . . . . 
            . f e 4 e 1 f 4 4 f . . . . . . 
            . f f f e 4 4 4 4 f . . . . . . 
            . . f e e e e e e f . . . . . . 
            . . f 7 7 e 4 4 e f . . . . . . 
            . . f 7 7 e 4 4 e f . . . . . . 
            . . f 6 6 6 e e 6 f . . . . . . 
            . . . f f f f f f . . . . . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . f f f f f . . . . . . . . 
            . f f f f f f f f f . . . . . . 
            . f f f f f f c f f f . . . . . 
            f f f f c f f f c f f . . . . . 
            f c f f c c f f f c c f f . . . 
            f c c f f f f e f f f f f . . . 
            f f f f f f f e e f f f . . . . 
            f f e e f b f e e f f . . . . . 
            . f e 4 e 1 f 4 4 f . . . . . . 
            . f f f e 4 4 4 4 f . . . . . . 
            . . f e e e e e f f e . . . . . 
            . . f e 4 4 e 7 7 f 4 e . . . . 
            . . f e 4 4 e 7 7 f 4 e . . . . 
            . . f 6 e e 6 6 6 f e . . . . . 
            . . . f f f f f f . . . . . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . f f f f f . . . . . . . . 
            . f f f f f f f f f . . . . . . 
            . f f f f f f c f f f . . . . . 
            f f f f c f f f c f f . . . . . 
            f c f f c c f f f c c f f . . . 
            f c c f f f f e f f f f f . . . 
            f f f f f f f e e f f f . . . . 
            f f e e f b f e e f f . . . . . 
            . f e 4 e 1 f 4 4 f . . . . . . 
            . f f f e 4 4 4 4 f . . . . . . 
            . . f e e e e e f f e e . . . . 
            . . e 4 4 e 7 7 7 f 4 4 e . . . 
            . . e 4 4 e 7 7 7 f 4 4 e . . . 
            . . f e e f 6 6 6 f e e . . . . 
            . . . f f f f f f . . . . . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . f f f f f . . . . . . . . 
            . f f f f f f f f f . . . . . . 
            . f f f f f f c f f f . . . . . 
            f f f f c f f f c f f . . . . . 
            f c f f c c f f f c c f f . . . 
            f c c f f f f e f f f f f . . . 
            f f f f f f f e e f f f . . . . 
            f f e e f b f e e f f . . . . . 
            . f e 4 e 1 f 4 4 f . . . . . . 
            . f f f e 4 4 4 4 f . . . . . . 
            . . f e e e e e f f e . . . . . 
            . . f e 4 4 e 7 7 f 4 e . . . . 
            . . f e 4 4 e 7 7 f 4 e . . . . 
            . . f 6 e e 6 6 6 f e . . . . . 
            . . . f f f f f f . . . . . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . f f f f f . . . . . . . . 
            . f f f f f f f f f . . . . . . 
            . f f f f f f c f f f . . . . . 
            f f f f c f f f c f f . . . . . 
            f c f f c c f f f c c f f . . . 
            f c c f f f f e f f f f f . . . 
            f f f f f f f e e f f f . . . . 
            f f e e f b f e e f f . . . . . 
            . f e 4 e 1 f 4 4 f . . . . . . 
            . f f f e 4 4 4 4 f . . . . . . 
            . . f e e e e e e f . . . . . . 
            . . f 7 7 e 4 4 e f . . . . . . 
            . . f 7 7 e 4 4 e f . . . . . . 
            . . f 6 6 6 e e 6 f . . . . . . 
            . . . f f f f f f . . . . . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . f f f f f . . . . . . . . 
            . f f f f f f f f f . . . . . . 
            . f f f f f f c f f f . . . . . 
            f f f f c f f f c f f . . . . . 
            f c f f c c f f f c c f f . . . 
            f c c f f f f e f f f f f . . . 
            f f f f f f f e e f f f . . . . 
            f f e e f b f e e f f . . . . . 
            . f e 4 e 1 f 4 4 f . . . . . . 
            . f f f e 4 4 4 4 f . . . . . . 
            . . f e e e e e f f . . . . . . 
            . . e 4 4 e 7 7 7 f . . . . . . 
            . . e 4 4 e 7 7 7 f . . . . . . 
            . . f e e f 6 6 6 f . . . . . . 
            . . . f f f f f f . . . . . . . 
            . . . . f f f . . . . . . . . . 
            `],
        50,
        false
        )
        punch = true
        right = 0
    } else if (up == 1) {
        punch = false
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . b . b . . . 
            . . . . . . . . . b . b . b . . 
            . . . . . . . . . b . . . b . . 
            . . . . . . . . . b . . . b . . 
            . . . . . . . . . b . . . b . . 
            . . . b . b . . . b . . . b . . 
            . . b . b . b . . . . . . . . . 
            . . b . . . b . . . . . . . . . 
            . . b . . . b . . . . . . . . . 
            . . b . . . b . . . . . . . . . 
            . . b . . . b . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite2, 0, -175)
        pause(50)
        sprites.destroy(projectile)
        animation.runImageAnimation(
        mySprite2,
        [img`
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . f f f f . . . . . 
            . . f f c c c c f f . . . 
            . f f c c c c c c f f . . 
            f f c c c c c c c c f f . 
            f f c c f c c c c c c f . 
            f f f f f c c c f c c f . 
            f f f f c c c f c c f f . 
            f f f f f f f f f f f f . 
            f f f f f f f f f f f f . 
            . f f f f f f f f f f . . 
            . f f f f f f f f f f . . 
            f e f f f f f f f f e f . 
            e 4 f 7 7 7 7 7 7 c 4 e . 
            e e f 6 6 6 6 6 6 f e e . 
            . . . f f f f f f . . . . 
            . . . f f . . f f . . . . 
            `,img`
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . f f f f . . . . . 
            . . f f c c c c f f . . . 
            . f f c c c c c c f f . . 
            f f c c c c c c c c f f . 
            f f c c f c c c c c c f . 
            f f f f f c c c f c c f . 
            f f f f c c c f c c f f . 
            f f f f f f f f f f f f . 
            f f f f f f f f f f f f . 
            . f f f f f f f f f f . . 
            f e f f f f f f f f f . . 
            e 4 f f f f f f f f e f . 
            e e f 7 7 7 7 7 7 c 4 e . 
            . . f 6 6 6 6 6 6 f e e . 
            . . . f f f f f f . . . . 
            . . . f f . . f f . . . . 
            `,img`
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . f f f f . . . . . 
            . . f f c c c c f f . . . 
            . f f c c c c c c f f . . 
            f f c c c c c c c c f f . 
            f f c c f c c c c c c f . 
            f f f f f c c c f c c f . 
            f f f f c c c f c c f f . 
            f f f f f f f f f f f f . 
            f f f f f f f f f f f f . 
            . f f f f f f f f f f . . 
            . f f f f f f f f f f . . 
            . . f f f f f f f f e f . 
            . . f 7 7 7 7 7 7 c 4 e . 
            . . f 6 6 6 6 6 6 f e e . 
            . . . f f f f f f . . . . 
            . . . f f . . f f . . . . 
            `,img`
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . f f f f . . . . . 
            . . f f c c c c f f . . . 
            . f f c c c c c c f f . . 
            f f c c c c c c c c f f . 
            f f c c f c c c c c c f . 
            f f f f f c c c f c c f . 
            f f f f c c c f c c f f . 
            f f f f f f f f f f f f . 
            f f f f f f f f f f f f . 
            . f f f f f f f f f f . . 
            . f f f f f f f f f f . . 
            . . f f f f f f f f e f . 
            . . f 7 7 7 7 7 7 c 4 e . 
            . . f 6 6 6 6 6 6 f e e . 
            . . . f f f f f f . . . . 
            . . . f f . . f f . . . . 
            `,img`
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . f f f f . . . . . 
            . . f f c c c c f f . . . 
            . f f c c c c c c f f . . 
            f f c c c c c c c c f f . 
            f f c c f c c c c c c f . 
            f f f f f c c c f c c f . 
            f f f f c c c f c c f f . 
            f f f f f f f f f f f f . 
            f f f f f f f f f f f f . 
            . f f f f f f f f f f . . 
            . f f f f f f f f f f . . 
            . . f f f f f f f f e f . 
            . . f 7 7 7 7 7 7 c 4 e . 
            . . f 6 6 6 6 6 6 f e e . 
            . . . f f f f f f . . . . 
            . . . f f . . f f . . . . 
            `,img`
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . f e e . . . . . . . . . 
            . e 4 e f f f f . . . . . 
            . e f f c c c c f f . . . 
            . f f c c c c c c f f . . 
            f f c c c c c c c c f f . 
            f f c c f c c c c c c f . 
            f f f f f c c c f c c f . 
            f f f f c c c f c c f f . 
            f f f f f f f f f f f f . 
            f f f f f f f f f f f f . 
            . f f f f f f f f f f . . 
            . f f f f f f f f f f . . 
            . . f f f f f f f f e f . 
            . . f 7 7 7 7 7 7 c 4 e . 
            . . f 6 6 6 6 6 6 f e e . 
            . . . f f f f f f . . . . 
            . . . f f . . f f . . . . 
            `,img`
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            `],
        50,
        false
        )
        punch = true
        down = 0
    } else if (down == 1) {
        punch = false
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . b . . . b . . . 
            . . . . . . . . b . . . b . . . 
            . . . . . . . . b . . . b . . . 
            . . . . . . . . b . . . b . . . 
            . . . . . . . . b . b . b . . . 
            . b . . . b . . . b . b . . . . 
            . b . . . b . . . . . . . . . . 
            . b . . . b . . . . . . . . . . 
            . b . . . b . . . . . . . . . . 
            . b . b . b . . . . . . . . . . 
            . . b . b . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite2, 0, 175)
        pause(50)
        sprites.destroy(projectile)
        animation.runImageAnimation(
        mySprite2,
        [img`
            . . . . f f f f . . . . . 
            . . f f f f f f f f . . . 
            . f f f f f f c f f f . . 
            f f f f f f c c f f f c . 
            f f f c f f f f f f f c . 
            c c c f f f e e f f c c . 
            f f f f f e e f f c c f . 
            f f f b f e e f b f f f . 
            . f 4 1 f 4 4 f 1 4 f . . 
            . f e 4 4 4 4 4 4 e f . . 
            . f f f e e e e f f f . . 
            f e f b 7 7 7 7 b f e f . 
            e 4 f 7 7 7 7 7 7 f 4 e . 
            e e f 6 6 6 6 6 6 f e e . 
            . . . f f f f f f . . . . 
            . . . f f . . f f . . . . 
            `],
        50,
        false
        )
        punch = true
        down = 0
    } else {
    	
    }
}
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
browserEvents.MouseLeft.onEvent(browserEvents.MouseButtonEvent.Pressed, function (x, y) {
    MOUSECLICK()
})
statusbars.onZero(StatusBarKind.Energy, function (status) {
    stamata = true
    timer.after(12500, function () {
        stamata = false
    })
})
function dash_stop () {
	
}
function MOUSECLICK2 () {
	
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    Bandit_bar.value += -10
    if (characterAnimations.matchesRule(Bandit1, characterAnimations.rule(Predicate.FacingRight, Predicate.MovingRight))) {
        Bandit1.setVelocity(-100, 0)
        pause(5000)
    }
    if (characterAnimations.matchesRule(Bandit1, characterAnimations.rule(Predicate.FacingLeft, Predicate.MovingLeft))) {
        Bandit1.setVelocity(100, 0)
        pause(5000)
    }
    if (characterAnimations.matchesRule(Bandit1, characterAnimations.rule(Predicate.FacingUp, Predicate.MovingUp))) {
        Bandit1.setVelocity(0, -100)
        pause(5000)
    }
    if (characterAnimations.matchesRule(Bandit1, characterAnimations.rule(Predicate.FacingDown, Predicate.MovingDown))) {
        Bandit1.setVelocity(0, 100)
        pause(5000)
    }
})
let projectile: Sprite = null
let down = 0
let right = 0
let OPEN_STARTER_CHEST: Sprite = null
let Bandit1: Sprite = null
let left = 0
let stamata = false
let textSprite: TextSprite = null
let dash = false
let Veiwable_map: Sprite = null
let myMinimap: minimap.Minimap = null
let Bandit_bar: StatusBarSprite = null
let up = 0
let coins = 0
let talking = false
let statusbar: StatusBarSprite = null
let mySprite2: Sprite = null
let weapon_dealer: Sprite = null
let STARTER_CHEST: Sprite = null
let punch = false
punch = true
browserEvents.setCursorVisible(true)
tiles.setCurrentTilemap(tilemap`level2`)
STARTER_CHEST = sprites.create(img`
    . . b b b b b b b b b b b b . . 
    . b e 4 4 4 4 4 4 4 4 4 4 e b . 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e e 4 4 4 4 4 4 4 4 4 4 e e b 
    b e e e e e e e e e e e e e e b 
    b e e e e e e e e e e e e e e b 
    b b b b b b b d d b b b b b b b 
    c b b b b b b c c b b b b b b c 
    c c c c c c b c c b c c c c c c 
    b e e e e e c b b c e e e e e b 
    b e e e e e e e e e e e e e e b 
    b c e e e e e e e e e e e e c b 
    b b b b b b b b b b b b b b b b 
    . b b . . . . . . . . . . b b . 
    `, SpriteKind.Chest)
STARTER_CHEST.setPosition(116, 500)
weapon_dealer = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f e e e e f f . . . 
    . f f e d e e e e f f . . 
    f e e d e e e e e e f f . 
    f e d e e e e e e e e f . 
    f e e e e e 4 4 e e e f f 
    f f e e e 4 4 e e f f f . 
    f f e b 8 4 4 8 b f f f . 
    . f 4 1 8 4 4 8 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f 8 8 8 8 8 8 f e f . 
    e 4 f 8 8 8 8 8 8 f 4 e . 
    e e f f f 5 5 f f f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.npc)
weapon_dealer.setPosition(300, 90)
mySprite2 = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 7 7 7 7 b f e f . 
    e 4 f 7 7 7 7 7 7 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite2)
punch = true
controller.moveSprite(mySprite2, 100, 75)
run(mySprite2)
coin()
coin_replace()
statusbar = statusbars.create(20, 4, StatusBarKind.Energy)
statusbar.setBarSize(30, 5)
statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
statusbar.setBarBorder(1, 15)
statusbar.setColor(9, 11, 2)
statusbar.setPosition(17, 110)
let statusbar2 = statusbars.create(20, 4, StatusBarKind.Health)
statusbar2.setBarSize(30, 5)
statusbar2.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
statusbar2.setBarBorder(1, 15)
statusbar2.setColor(7, 11, 2)
statusbar2.setPosition(140, 110)
game.onUpdate(function () {
    if (talking == true) {
        controller.moveSprite(mySprite2, 0, 0)
    }
})
game.onUpdate(function () {
	
})
game.onUpdateInterval(500, function () {
    statusbar.value += 1
})
