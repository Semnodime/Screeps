/* Exports */
var e = module.exports;

/* Functions */
/** @param {Creep} creep **/
e.run = function (creep) {
    if (creep.room.controller) {
        if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
            creep.moveTo(creep.room.controller);
        }
    }
};

