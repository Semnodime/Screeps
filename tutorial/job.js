/* Exports */
var e = module.exports;

/* Imports */
//needs verbose.initializeCreep!

/* Variables */
var roleNames = ['idle', 'harvester', 'upgrader',];
var roles = [];

/* Functions */
function initRoles() {
    roleNames.forEach(function (v) {
        roles[v] = require('role.' + v);
    });
}

e.initializeCreep = function(creep){
    /** @param job String =the suffix of a role.*-module  */
    creep.jobadd = function jobadd(job) {
        creep.memory.jobs.push(job);
    };  
    
    creep.jobshow = function jobshow() {
        var _ = '\t|';
        var out = 'Jobs of ' + creep.name + '\t[' + creep.memory.role + ']' + _;
    
        if (!creep.memory.jobs.length) {
            out += ' ' + 'NOTHING' + _;
        } else {
            creep.memory.jobs.forEach(function (job) {
                out += ' ' + job + _;
            });
        }
        console.log(out);
    };
    
    creep.jobrun = function jobrun() {
        if (creep.memory.jobs.length) {
            var job = creep.memory.jobs[creep.memory.jobs.length - 1];
            creep.out('', 'I should do a task: ' + job, true);
        } else {
            var role = creep.memory.role;
    
            if (roleNames.indexOf(role) == -1) {
                creep.warning('Wx0000', role + ' --> set to ' + 'idle');
                creep.memory.role = 'idle'; // change role value not role pointer
            }
            roles[role].run(creep); //run the assigned role.run()
        }
    };
    
}

/* Execution */
initRoles();