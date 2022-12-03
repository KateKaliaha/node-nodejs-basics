import { readdir } from "node:fs/promises"
import * as url from "url"

const __dirname = url.fileURLToPath(new URL(".", import.meta.url))

const list = async () => {
    try {
        const filesFolder = await readdir(__dirname)
        if (filesFolder.filter((file) => file === "files").length === 0) {
            throw new Error("FS operation failed")
        }
        await readdir(`${__dirname}files`)
            .then((files) => {
                if (files.length === 0) {
                    throw new Error("FS operation failed")
                }
                if (files.length === 0) {
                    throw new Error("FS operation failed")
                }
                console.log(
                    files.filter((file) => file.split(".").length === 2)
                )
            })
            .catch((err) => {
                console.error(err)
            })
    } catch (err) {
        console.error(err)
    }
}

await list()
