import { fork } from "node:child_process"
const spawnChildProcess = async (...args) => {
    const filePath = new URL("./files/script.js", import.meta.url)

    const child = fork(filePath, ...args)
}

spawnChildProcess(["arg1", "arg2", "arg3", "arg4"])
