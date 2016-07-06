/* Exports */
var e = module.exports;

/* Functions */
/** @param {Creep} creep **/
e.run = function (creep) {
    creep.out('idle', 'Ich bin gelangweilt!', true);
    creep.out('idle', 'idleing :3', false);
};