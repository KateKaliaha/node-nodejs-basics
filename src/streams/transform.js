const readStream = process.stdin
const writeStream = process.stdout

const transform = async () => {
    TransformStream._transform = (str) => {
        return str.toString().trim().split("").reverse().join("") + "\n"
    }

    for await (const chunk of readStream) {
        writeStream.write(TransformStream._transform(chunk))
    }
}

await transform()
