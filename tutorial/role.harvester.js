/* Exports */
var e = module.exports;

/* Functions */
/** @param {Creep} creep **/
e.run = function (creep) {
    if (creep.carry.energy < creep.carryCapacity) {
        var sources = creep.room.find(FIND_SOURCES);
        if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
            creep.moveTo(sources[0]);
        }
    }
    else {
        for (var spawnIndex in Game.spawns) {
            var spawn = Game.spawns[spawnIndex];
            if (creep.carry.energy == 0) {
                break;
            }
            if (spawn.owner == 'GreenCoder' && spawn.energy < spawn.energyCapacity) {
                switch (creep.transfer(spawn, RESOURCE_ENERGY)) {
                    case ERR_NOT_IN_RANGE:
                        creep.moveTo(spawn);
                        break;
                }
            }
        }
    }
};
