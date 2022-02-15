'use strict';

import kaboom from 'kaboom';

kaboom();

loadRoot("http://localhost:3001/");
loadSprite('crapper', 'images/sprites/crapper.png');

add([
    sprite('crapper'),
]);