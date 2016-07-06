/* Exports */
var e = module.exports;

/* Variables */
Memory.warnings = {
    "Wx0000": "Unknown role ",
    "Wx0001": "Unknown Warning ",
};

/* Functions */
/** @param {Creep} creep **/
e.initializeCreep = function (creep) {

    creep.is_muted = function is_muted(level) {
        return (creep.memory.verbose.indexOf(level) == -1)
    };

    creep.set_muted = function set_muted(level, mute) {
        if (mute && !this.is_muted(level)) {
            creep.memory.verbose.splice(creep.memory.verbose.indexOf(level));
        } else if (!mute && this.is_muted(level)) {
            creep.memory.verbose.push(level);
        }
        return (this.is_muted(level) == mute);
    };

    creep.out = function out(level, message, log) {
        if (!this.is_muted(level)) {
            if (log) {
                message = creep.name + ":\t >>" + message + "<<";
                console.log(message);
            } else {
                creep.say(message);
            }
            return true;
        }
        return false;
    };

    creep.both = function both(level, message) {
        return this.out(level, message, true) && this.out(level, message, false);
    };

    creep.warning = function (code, optional) {
        if (Object.keys(Memory.warnings).indexOf(code) == -1) {
            code = "Wx0001";
        }
        this.out('warning', code, false);
        this.out('warning', "Warning \t" + code + "\t" + Memory.warnings[code] + optional, true);
    }
};



