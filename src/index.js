const digitals = require("./enums/dictionary");

module.exports = function toReadable (number) {
    switch(true){
        case number < 20:
            return digitals[number];
        case number < 100:
            const tenths = Math.floor(number/10) * 10;
            const num = number%10;
            return `${digitals[tenths]}${num === 0 ? '' : ' ' + digitals[num]}`;
        case number < 1000:
            const hundredths = Math.floor(number/100);
            const _tenths = number % 100;
            const readableTenths = _tenths === 0 ? '' : ' ' +  toReadable(_tenths);
            return `${digitals[hundredths]} hundred${readableTenths}`;
    }
}