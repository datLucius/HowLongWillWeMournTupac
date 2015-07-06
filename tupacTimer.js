var now;
var then;
var tupacTime;

function tuTime(){
  now  = Date.now();
  then = "07/23/1996 14:20:30";
  tupacTime = moment.utc(moment(now,"DD/MM/YYYY HH:mm:ss").diff(moment(then,"DD/MM/YYYY HH:mm:ss");
  return tupacTime;
};
