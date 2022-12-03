import { rename, readdir } from "node:fs/promises"
import * as url from "url"

const __dirname = url.fileURLToPath(new URL(".", import.meta.url))

const renameFunc = async () => {
    try {
        const copyFolder = await readdir(`${__dirname}/files`)
        if (
            copyFolder.filter((file) => file === "wrongFilename.txt").length ===
                0 ||
            copyFolder.filter((file) => file === "properFilename.md").length ===
                1
        ) {
            throw new Error("FS operation failed")
        }
        await rename(
            `${__dirname}/files/wrongFilename.txt`,
            `${__dirname}/files/properFilename.md`
        )
    } catch (err) {
        console.error(err)
    }
}

await renameFunc()
