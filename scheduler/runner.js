const { ToadScheduler, SimpleIntervalJob, AsyncTask } = require('toad-scheduler');
const request = require('request');
const config = require('./config.json');

const scheduler = new ToadScheduler();

const options = {
    url: `${config.api}api/messages/`,
    method: 'DELETE'
};

const task = new AsyncTask(
    'cleanup',
    () => {
        return new Promise(function (resolve, reject) {

            request(options, function (error, response, body) {
                if (error) reject(error);
                else {
                    resolve('OK');
                }
            });
        });
    },
    (err) => { console.log(err); }
);
const job = new SimpleIntervalJob({ seconds: 30, }, task);

scheduler.addSimpleIntervalJob(job);