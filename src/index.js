module.exports = function toReadable(number) {
    const hundr = Math.floor(number / 100);
    const dec = number % 100;

    if (number === 0) {
        return ZERO;
    }

    let d = getDozen(dec);
    let h = getHundreds(hundr);

    return (h + d).trim();
}


const ones = ['', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine', ' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen']
const tens = ['', '', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety']
const HUNDRED = ' hundred';
const ZERO = 'zero';

function getUnits(num) {
    return ones[num];
}

function getDozen(num) {
    if (num <= 19) {
        return ones[num]
    }
    let d = Math.floor(num / 10);
    let u = num % 10;
    return tens[d] + getUnits(u);
}

function getHundreds(num) {
    hund = "";
    if (num) {
        hund = getUnits(num) + HUNDRED;
    }
    return hund;
}
