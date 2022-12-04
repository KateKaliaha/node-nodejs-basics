import { createHash } from "node:crypto"
import { readFile } from "node:fs/promises"

const calculateHash = async () => {
    try {
        const folderPath = new URL(
            "./files/fileToCalculateHashFor.txt",
            import.meta.url
        )
        const contents = await readFile(folderPath, { encoding: "utf8" }).catch(
            () => {
                throw new Error("FS operation failed")
            }
        )
        console.log(createHash("sha256").update(contents).digest("hex"))
    } catch (err) {
        console.error(err.message)
    }
}

await calculateHash()
