/* Exports */
var e = module.exports;

/* Variables */
var roles = [];
var roleNames = ['idle', 'harvester', 'upgrader'];

/* Functions */
function initRoles() {
    roleNames.forEach(function(v,k){
        roles[v] = require('role.' + v);
    });
}

/** @param {Creep} creep **/
e.run = function(creep)
{
    var role = creep.memory.role;
    
    if (roleNames.indexOf(role) == -1) {
        roles['idle'].run(creep); //if the assigned role is not found
    } else {
        roles[role].run(creep); //run the assigned role.run()
    }
};

/* Execution */
initRoles();