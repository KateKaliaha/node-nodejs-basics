import { readFile, readdir } from "node:fs/promises"

const read = async () => {
    try {
        const folderPath = new URL("./files", import.meta.url)
        const folder = await readdir(folderPath)
        if (!folder.includes("fileToRead.txt")) {
            throw new Error("FS operation failed")
        }
        const filePath = new URL("./files/fileToRead.txt", import.meta.url)
        await readFile(filePath, { encoding: "utf8" })
            .then((contents) => {
                if (!contents) {
                    throw new Error("FS operation failed")
                }
                console.log(contents)
            })
            .catch((err) => {
                console.error(err.message)
            })
    } catch (err) {
        console.error(err.message)
    }
}

await read()
