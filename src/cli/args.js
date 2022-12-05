const parseArgs = () => {
    const args = process.argv.slice(2)
    const newArr = []
    args.map((item, index) => {
        if (index % 2 === 0) {
            newArr.push(item.slice(2) + " is " + args[index + 1])
        }
    })

    console.log(newArr.join(", "))
}

parseArgs()
