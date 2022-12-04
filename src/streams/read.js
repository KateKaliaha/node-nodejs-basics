import fs from "node:fs"

const read = async () => {
    const folderPath = new URL("./files/fileToRead.txt", import.meta.url)
    fs.createReadStream(folderPath).pipe(process.stdout)
}

await read()
