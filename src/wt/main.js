// const performCalculations = async () => {
//     // Write your code here
// };

// await performCalculations();

import * as os from "os"
import { resolve } from "path"
import { Worker } from "worker_threads"

const performCalculations = async () => {
    const numberCores = os.cpus()
    const arr = []
    numberCores.forEach((el, ind) => {
        arr.push(
            new Promise((res, rej) => {
                new Worker("./src/wt/worker.js", {
                    workerData: 10 + ind,
                })
                    .on("message", (message) =>
                        res(console.log({ status: "resolved", data: message }))
                    )
                    .on("error", () =>
                        rej(console.log({ status: "error", data: null }))
                    )
            })
        )
    })

    await Promise.allSettled(arr)
}

await performCalculations()
