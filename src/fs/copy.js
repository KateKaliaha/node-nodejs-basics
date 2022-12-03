import { mkdir, readdir, stat, copyFile, constants } from "node:fs/promises"
import * as url from "url"

const __dirname = url.fileURLToPath(new URL(".", import.meta.url))

async function startCopyFile(_source, _destination) {
    const copyFolder = await readdir(`${_source}`)
    for (let i = 0; i < copyFolder.length; i++) {
        if (
            await stat(`${_source}/${copyFolder[i]}`).then((stats) =>
                stats.isDirectory()
            )
        ) {
            const createNewDest = await mkdir(
                `${_destination}/${copyFolder[i]}`,
                {
                    recursive: true,
                }
            )
            const createNewSource = `${_source}/${copyFolder[i]}`
            startCopyFile(createNewSource, createNewDest)
        } else {
            await copyFile(
                `${_source}/${copyFolder[i]}`,
                `${_destination}/${copyFolder[i]}`,
                constants.COPYFILE_EXCL
            )
        }
    }
}

const copy = async () => {
    try {
        const files = await readdir(__dirname)

        if (files.filter((file) => file === "files").length === 0) {
            throw new Error("File not exists")
        }
        if (files.includes("files-copy")) {
            throw new Error("File exists")
        }
        const projectFolder = `${__dirname}files-copy`
        await mkdir(projectFolder, { recursive: true })
        startCopyFile(`${__dirname}files`, projectFolder)
    } catch (err) {
        console.error(err)
    }
}

copy()
