var idPidArr = {
  '1': 2,
  '2': 0,
  '3': 2,
  '4': 43,
  '5': 2,
  '6': 2,
  '7': 0,
  '8': 0,
  '9': 1,
  '10': 1,
  '11': 1,
  '12': 1,
  '13': 1,
  '14': 1,
  '15': 0,
  '16': 1,
  '17': 102,
  '18': 43,
  '19': 43,
  '20': 3,
  '21': 3,
  '22': 43,
  '23': 43,
  '24': 5,
  '25': 43,
  '26': 43,
  '27': 43,
  '28': 4,
  '29': 4,
  '30': 4,
  '31': 43,
  '32': 111,
  '33': 5,
  '34': 43,
  '35': 5,
  '36': 88,
  '37': 43,
  '38': 43,
  '39': 43,
  '40': 6,
  '41': 70,
  '42': 6,
  '43': 0,
  '44': 43,
  '45': 43,
  '46': 8,
  '47': 8,
  '48': 43,
  '49': 8,
  '50': 43,
  '51': 67,
  '52': 125,
  '53': 43,
  '54': 43,
  '55': 124,
  '56': 0,
  '57': 6,
  '58': 6,
  '59': 111,
  '60': 43,
  '61': 43,
  '62': 56,
  '63': 43,
  '64': 4,
  '65': 43,
  '66': 43,
  '67': 102,
  '68': 43,
  '69': 4,
  '70': 102,
  '71': 56,
  '72': 124,
  '73': 43,
  '74': 43,
  '75': 8,
  '76': 17,
  '77': 43,
  '78': 0,
  '79': 43,
  '80': 43,
  '81': 103,
  '82': 15,
  '83': 17,
  '84': 3,
  '85': 15,
  '86': 3,
  '87': 43,
  '88': 43,
  '89': 111,
  '90': 43,
  '91': 15,
  '92': 6,
  '93': 6,
  '94': 43,
  '95': 53,
  '96': 103,
  '97': 111,
  '98': 6,
  '99': 70,
  '100': 15,
  '101': 6,
  '102': 0,
  '103': 43,
  '104': 103,
  '105': 103,
  '106': 103,
  '107': 7,
  '108': 7,
  '109': 7,
  '110': 7,
  '111': 102,
  '112': 8,
  '113': 1,
  '114': 103,
  '115': 103,
  '116': 43,
  '117': 43,
  '118': 43,
  '119': 125,
  '120': 111,
  '121': 70,
  '122': 111,
  '123': 70,
  '124': 8,
  '125': 8,
  '126': 124,
  '127': 125,
  '128': 88,
  '129': 43,
  '130': 3,
  '131': 43,
  '132': 43,
  '133': 86,
  '134': 21,
  '135': 21,
  '136': 86,
  '137': 20,
  '138': 20 };

var bmid = 20;

var pids = new Set([bmid]);
do {
    var len = pids.size;

    for(var id in idPidArr) {
      console.log(id);
        if (pids.has(idPidArr[id])) {
            pids.add(Number(id));
            delete idPidArr[id]; // 感谢 @zhoutk 提醒
        }
    }
} while (pids.size>len);

console.log(Array.from(pids));
