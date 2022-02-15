'use strict';

import kaboom from 'kaboom';

kaboom();

loadRoot("http://localhost:3001/");
loadSprite('crapper', 'images/sprites/crapper.png');
loadSprite('dirt', 'images/sprites/dirt.png');

add([
    pos(20, 280),
    sprite('crapper'),
]);

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
    "                           ",
    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
], {
    width: 32,
    height: 32,
    'x': () => [sprite('dirt')]
});