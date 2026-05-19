@namespace
class SpriteKind:
    Chest = SpriteKind.create()
    OPEN_CHEST = SpriteKind.create()
    npc = SpriteKind.create()

def on_on_overlap(sprite, otherSprite):
    global talking
    talking = True
    story.set_sound_enabled(True)
    story.print_character_text("What brings you here", "Wandering Merchant")
    story.show_player_choices("I want to buy a sword", "nevermind")
    talking = False
sprites.on_overlap(SpriteKind.player, SpriteKind.npc, on_on_overlap)

def run(mySprite: Sprite):
    if dash == False:
        characterAnimations.loop_frames(mySprite,
            [img("""
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
                    """),
                img("""
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
                    """),
                img("""
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
                    """)],
            100,
            characterAnimations.rule(Predicate.MOVING_RIGHT))
        characterAnimations.loop_frames(mySprite,
            [img("""
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
                """)],
            100,
            characterAnimations.rule(Predicate.NOT_MOVING, Predicate.FACING_RIGHT))
        characterAnimations.loop_frames(mySprite,
            [img("""
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
                    """),
                img("""
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
                    """),
                img("""
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
                    """)],
            100,
            characterAnimations.rule(Predicate.MOVING_DOWN))
        characterAnimations.loop_frames(mySprite,
            [img("""
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
                """)],
            100,
            characterAnimations.rule(Predicate.FACING_DOWN, Predicate.NOT_MOVING))
        characterAnimations.loop_frames(mySprite,
            [img("""
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
                    """),
                img("""
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
                    """),
                img("""
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
                    """)],
            100,
            characterAnimations.rule(Predicate.MOVING_LEFT))
        characterAnimations.loop_frames(mySprite,
            [img("""
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
                """)],
            100,
            characterAnimations.rule(Predicate.FACING_LEFT, Predicate.NOT_MOVING))
        characterAnimations.loop_frames(mySprite,
            [img("""
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
                    """),
                img("""
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
                    """),
                img("""
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
                    """)],
            100,
            characterAnimations.rule(Predicate.MOVING_UP))
        characterAnimations.loop_frames(mySprite,
            [img("""
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
                """)],
            100,
            characterAnimations.rule(Predicate.FACING_UP, Predicate.NOT_MOVING))
def coin_replace():
    textSprite.set_text("x" + ("" + str(coins)))
    textSprite.top = 0
    textSprite.right = scene.screen_width()

def on_a_pressed():
    story.clear_all_text()
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def coin():
    global textSprite
    textSprite = textsprite.create("Coins", 11, 5)
    textSprite.set_border(1, 5, 1)
    textSprite.set_icon(img("""
        . . b b b b . .
        . b 5 5 5 5 b .
        b 5 d 3 3 d 5 b
        b 5 3 5 5 1 5 b
        c 5 3 5 5 1 d c
        c d d 1 1 d d c
        . f d d d d f .
        . . f f f f . .
        """))
    textSprite.set_flag(SpriteFlag.RELATIVE_TO_CAMERA, True)
    textSprite.top = 0
    textSprite.right = scene.screen_width()

def on_combos_attach_combo():
    global dash, stamata
    if stamata == False:
        if characterAnimations.matches_rule(mySprite2,
            characterAnimations.rule(Predicate.FACING_RIGHT, Predicate.MOVING)) or characterAnimations.matches_rule(mySprite2, characterAnimations.rule(Predicate.FACING_RIGHT)):
            dash = True
            stamata = False
            statusbar.value += -25
            controller.move_sprite(mySprite2, 0, 0)
            mySprite2.set_velocity(150, 0)
            animation.run_image_animation(mySprite2,
                [img("""
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
                        """),
                    img("""
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
                        """),
                    img("""
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
                        """)],
                50,
                False)
            
            def on_after():
                mySprite2.set_velocity(0, 0)
                controller.move_sprite(mySprite2, 100, 100)
            timer.after(250, on_after)
            
            dash = False
        if characterAnimations.matches_rule(mySprite2,
            characterAnimations.rule(Predicate.FACING_UP, Predicate.MOVING)) or characterAnimations.matches_rule(mySprite2, characterAnimations.rule(Predicate.FACING_UP)):
            dash = True
            stamata = False
            statusbar.value += -25
            controller.move_sprite(mySprite2, 0, 0)
            mySprite2.set_velocity(0, -150)
            animation.run_image_animation(mySprite2,
                [img("""
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
                        """),
                    img("""
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
                        """),
                    img("""
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
                        """)],
                50,
                False)
            
            def on_after2():
                mySprite2.set_velocity(0, 0)
                controller.move_sprite(mySprite2, 100, 100)
            timer.after(250, on_after2)
            
            dash = False
        if characterAnimations.matches_rule(mySprite2,
            characterAnimations.rule(Predicate.FACING_LEFT, Predicate.MOVING)) or characterAnimations.matches_rule(mySprite2, characterAnimations.rule(Predicate.FACING_LEFT)):
            dash = True
            stamata = False
            statusbar.value += -25
            controller.move_sprite(mySprite2, 0, 0)
            mySprite2.set_velocity(-150, 0)
            animation.run_image_animation(mySprite2,
                [img("""
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
                        """),
                    img("""
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
                        """),
                    img("""
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
                        """)],
                50,
                False)
            
            def on_after3():
                mySprite2.set_velocity(0, 0)
                controller.move_sprite(mySprite2, 100, 100)
            timer.after(250, on_after3)
            
            dash = False
        if characterAnimations.matches_rule(mySprite2,
            characterAnimations.rule(Predicate.FACING_DOWN, Predicate.MOVING)) or characterAnimations.matches_rule(mySprite2, characterAnimations.rule(Predicate.FACING_DOWN)):
            dash = True
            stamata = False
            statusbar.value += -25
            controller.move_sprite(mySprite2, 0, 0)
            mySprite2.set_velocity(0, 150)
            animation.run_image_animation(mySprite2,
                [img("""
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
                        """),
                    img("""
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
                        """),
                    img("""
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
                        """)],
                50,
                False)
            
            def on_after4():
                mySprite2.set_velocity(0, 0)
                controller.move_sprite(mySprite2, 100, 100)
            timer.after(250, on_after4)
            
            dash = False
controller.combos.attach_combo("ba", on_combos_attach_combo)

def on_on_overlap2(sprite2, otherSprite2):
    global OPEN_STARTER_CHEST, coins
    sprites.destroy(STARTER_CHEST)
    OPEN_STARTER_CHEST = sprites.create(img("""
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
            """),
        SpriteKind.OPEN_CHEST)
    OPEN_STARTER_CHEST.set_position(116, 500)
    
    def on_after5():
        sprites.destroy(OPEN_STARTER_CHEST)
    timer.after(5000, on_after5)
    
    coins += 10
    coin_replace()
sprites.on_overlap(SpriteKind.player, SpriteKind.Chest, on_on_overlap2)

def dash_stop():
    pass

def on_on_zero(status):
    global stamata
    stamata = True
    
    def on_after6():
        global stamata
        stamata = False
    timer.after(12500, on_after6)
    
statusbars.on_zero(StatusBarKind.energy, on_on_zero)

OPEN_STARTER_CHEST: Sprite = None
stamata = False
coins = 0
textSprite: TextSprite = None
dash = False
talking = False
statusbar: StatusBarSprite = None
mySprite2: Sprite = None
STARTER_CHEST: Sprite = None
tiles.set_current_tilemap(tilemap("""
    level2
    """))
STARTER_CHEST = sprites.create(img("""
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
        """),
    SpriteKind.Chest)
STARTER_CHEST.set_position(116, 500)
weapon_dealer = sprites.create(img("""
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
        """),
    SpriteKind.npc)
weapon_dealer.set_position(300, 90)
mySprite2 = sprites.create(img("""
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
        """),
    SpriteKind.player)
scene.camera_follow_sprite(mySprite2)
controller.move_sprite(mySprite2, 100, 100)
run(mySprite2)
coin()
coin_replace()
statusbar = statusbars.create(20, 4, StatusBarKind.energy)
statusbar.set_bar_size(30, 5)
statusbar.set_status_bar_flag(StatusBarFlag.SMOOTH_TRANSITION, True)
statusbar.set_bar_border(1, 15)
statusbar.set_color(9, 11, 2)
statusbar.set_position(17, 110)
statusbar2 = statusbars.create(20, 4, StatusBarKind.health)
statusbar2.set_bar_size(30, 5)
statusbar2.set_status_bar_flag(StatusBarFlag.SMOOTH_TRANSITION, True)
statusbar2.set_bar_border(1, 15)
statusbar2.set_color(7, 11, 2)
statusbar2.set_position(140, 110)

def on_on_update():
    if talking == True:
        controller.move_sprite(mySprite2, 0, 0)
game.on_update(on_on_update)

def on_update_interval():
    statusbar.value += 1
game.on_update_interval(500, on_update_interval)
