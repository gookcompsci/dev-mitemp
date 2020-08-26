const CMD = "/home/igrid/xiaomiscan"
const { spawn } = require("child_process");
const mi = spawn(CMD);

mi.stdout.on("data", data => {
    var dat = {}
    try {
        dat = JSON.parse(data);
        console.log(dat.mac)
    } catch (error) {
        console.log(data)
    }
});

mi.stderr.on("data", data => {
    console.log(`stderr: ${data}`);
});

mi.on('error', (error) => {
    console.log(`error: ${error.message}`);
});

mi.on("close", code => {
    console.log(`child process exited with code ${code}`);
});