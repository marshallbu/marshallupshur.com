var console, Logger;

// make using console safe if it doesn't exist (IE....)
console = window.console || {
    log() {
        return void 0;
    },
    info() {
        return void 0;
    },
    debug() {
        return void 0;
    },
    warn() {
        return void 0;
    },
    error() {
        return void 0;
    },
    dir() {
        return void 0;
    },
    console() {
        return void 0;
    }
};

console.info = console.info || console.log;
console.debug = console.debug || console.log;
console.warn = console.warn || console.log;
console.error = console.error || console.log;
console.dir = console.dir || console.log;
console.table = console.table || console.log;

Logger = {
    info() {
        console.info.apply(console, arguments);
    },
    debug() {
        console.debug.apply(console, arguments);
    },
    warn() {
        console.warn.apply(console, arguments);
    },
    error() {
        console.error.apply(console, arguments);
    },
    dir() {
        console.dir.apply(console, arguments);
    },
    table() {
        console.table.apply(console, arguments);
    }
};

export default Logger;
