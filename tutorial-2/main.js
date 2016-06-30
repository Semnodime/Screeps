/* Exports */
var e = module.exports;

/* Imports */
var role = require('role');

/* Game loop */
e.loop = function ()
{
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        role.run(creep);
    }
};
