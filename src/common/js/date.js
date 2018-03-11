const moment = require('moment');

export function formatDate(date, fmt){
  //const time = moment.unix(date/1000);
  return moment(date).format(fmt);
};