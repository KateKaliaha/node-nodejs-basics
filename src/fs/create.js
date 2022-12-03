import { writeFile, open, readdir } from "node:fs"
import * as url from "url"

const __dirname = url.fileURLToPath(new URL(".", import.meta.url))

const create = async () => {
    readdir(`${__dirname}/files`, (err, files) => {
        ;(err) => {
            if (err) throw err
        }
        if (files.includes("fresh.txt")) {
            console.error("Error: FS operation failed")
        } else {
            writeFile(
                `${__dirname}/files/fresh.txt`,
                "I am fresh and young",
                "utf8",
                (err) => {
                    if (err) throw err
                    console.log("File create")
                }
            )
        }
    })
}

await create()
