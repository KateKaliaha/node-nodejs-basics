import * as os from "os"
import { Worker } from "worker_threads"

const performCalculations = async () => {
    const numberCores = os.cpus()
    const arr = []
    numberCores.forEach((_, ind) => {
        arr.push(
            new Promise((res, rej) => {
                new Worker("./src/wt/worker.js", {
                    workerData: 10 + ind,
                })
                    .on("message", (message) =>
                        res({ status: "resolved", data: message })
                    )
                    .on("error", () => rej({ status: "error", data: null }))
            })
        )
    })

    const result = await Promise.allSettled(arr)
    console.log(result.map((el) => el.value))
}

await performCalculations()
