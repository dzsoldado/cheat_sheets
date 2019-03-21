const os = require("os");

// Platform
console.log(os.platform());

// CPU Arch
console.log(os.arch());

// Cpu core info
console.log(os.cpus());

// Memory
console.log(os.freemem());
console.log(os.totalmem());

// Home directory
console.log(os.homedir());

// Uptime
console.log(os.uptime());