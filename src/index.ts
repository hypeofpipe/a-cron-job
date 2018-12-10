import * as cron from 'cron'

let counter = 0
const itsTimeToStop = 2

const cronJob = new cron.CronJob("*/1 * * * * *", () => {
    if (counter === itsTimeToStop) {
        return cronJob.stop()
    }
    counter++
    console.log('A cron job has started!')
}, () => {
    console.log("It's time to stop!")
}, true)

