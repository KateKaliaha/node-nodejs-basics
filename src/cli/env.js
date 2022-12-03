const parseEnv = () => {
    const variables = process.env
    const arr = []
    for (let key in variables) {
        if (key.startsWith("RSS_")) {
            arr.push(`${key}=${variables[key]}`)
        }
    }
    console.log(arr.join("; "))
}

parseEnv()
