import { rm } from "node:fs/promises"
import * as url from "url"

const __dirname = url.fileURLToPath(new URL(".", import.meta.url))

const remove = async () => {
    const path = `${__dirname}files/fileToRemove.txt`
    rm(`${__dirname}files/fileToRemove.txt`).catch(() => {
        console.log("FS operation failed")
    })
}

await remove()
