'use strict';

import kaboom from 'kaboom';

kaboom();

loadRoot("http://localhost:3001/");
loadSprite('crapper', 'images/sprites/crapper.png');
loadSprite('dirt', 'images/sprites/dirt.png');
loadSprite('enemy', 'images/sprites/enemy.png');

const CRAPPER_VELOCITY = 200;

const crapper = add([
    pos(20, 280),
    sprite('crapper'),
    area(),
    body(),
]);

keyDown('right', () => {
    crapper.move(CRAPPER_VELOCITY, 0);
});

keyDown('left', () => {
    crapper.move(-CRAPPER_VELOCITY, 0);
});

addLevel([
    "                           ",
    "                           ",
    "                           ",
    "                           ",
    "                           ",
    "                           ",
    "                           ",
    "                           ",
    "                           ",
    "              @             ",
    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
], {
    width: 32,
    height: 32,
    'x': () => [
        sprite('dirt'), 
        area(),
        solid(),
    ],
    '@': () => [
        sprite('enemy'), 
        area(), 
        body(),
    ]
});