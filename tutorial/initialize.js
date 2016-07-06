/* Exports */
var e = module.exports;

/* Imports */
var verbose = require('verbose');
var job = require('job');

/* Functions */
/** @param {Creep} creep **/
e.run = function (creep) {
    if (!creep.memory.verbose) {
        creep.memory.verbose = ['', 'role', 'warning', 'job']; //list of message types the creep is supposed to display
    }
    if (!creep.memory.jobs) {
        creep.memory.jobs = [];
    }
    if (!creep.memory.role) {
        creep.memory.role = 'none';
    }
    
    verbose.initializeCreep(creep);
    job.initializeCreep(creep);
};
