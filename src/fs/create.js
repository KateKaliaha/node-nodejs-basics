import { writeFile, readdir } from "node:fs/promises"

const create = async () => {
    try {
        const folderPath = new URL("./files", import.meta.url)
        const filePath = new URL("./files/fresh.txt", import.meta.url)
        const folder = await readdir(folderPath)
        if (folder.includes("fresh.txt")) {
            throw new Error("FS operation failed")
        }
        writeFile(filePath, "I am fresh and young")
        console.log("File create")
    } catch (err) {
        console.error(err)
    }
}

await create()
