const getTime = () => {
  const now = new Date();
  return now.toISOString().replace('T', ' ').split('.')[0];
};

exports.info = (msg) => {
  console.log(`${getTime()} info: ${msg}`);
};

exports.error = (msg) => {
  console.error(`${getTime()} error: ${msg}`);
};

const pino = require('pino');

const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true, 
      translateTime: 'SYS:standard',
      ignore: 'pid,hostname',
    },
  },
});

module.exports = logger;