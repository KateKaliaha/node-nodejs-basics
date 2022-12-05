import fs from "fs"
import zlib from "zlib"

const decompress = async () => {
    const sourcePath = new URL("./files/archive.gz", import.meta.url)
    const destinationPath = new URL(
        "./files/fileToCompress.txt",
        import.meta.url
    )
    fs.createReadStream(sourcePath)
        .pipe(zlib.createGunzip())
        .pipe(fs.createWriteStream(destinationPath))
}

await decompress()
