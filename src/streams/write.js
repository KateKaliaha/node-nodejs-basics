import fs from "node:fs"
const write = async () => {
    const folderPath = new URL("./files/fileToWrite.txt", import.meta.url)
    const writeStr = fs.createWriteStream(folderPath)
    process.stdin.pipe(writeStr)
}

await write()
