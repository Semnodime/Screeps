/* Exports */
var e = module.exports;

/* Imports */
var initialize = require('initialize');


/* Game loop */
e.loop = function () {
    for (var name in Game.creeps) {
        var creep = Game.creeps[name];
        initialize.run(creep);
        if (!creep.is_muted('job')) {
            creep.jobshow();
        }
        creep.jobrun();
    }
};
