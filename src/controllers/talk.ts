const talks = [];
let id = 0;
const starttime = 36000;
const dayTime = [];
let roomId = 0;

let talkcontroller = {
  add: async function(talk) {
    talk.id = id;
    if (dayTime[talk.day][roomId]) {
      talk.start = dayTime[talk.day][roomId] + starttime;
      dayTime[talk.day][roomId] += talk.duration;
      // TODO: Mirar si ha llegado al final del dia
      if (dayTime[talk.day][roomId] + starttime > 72000) {
        roomId += 1;
      }
    } else {
      talk.start = starttime;
      dayTime[roomId][talk.day] = talk.duration;
    }

    talk.roomId = roomId;
    talk.end = dayTime[roomId][talk.day] + starttime;

    console.log(talk);
    if (talks[talk.day] === undefined) {
      talks[talk.day] = [];
    }
    await talks[talk.day].push(talk);
    id += 1;

    return true;
  },
  get: async function() {
    return talks;
  }
};
export default talkcontroller;
