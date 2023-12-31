// no 7
function decryptMessage(encryptedMessage, shift) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const encryptedLower = encryptedMessage.toLowerCase();
    let decryptedMessage = "";

    for (let i = 0; i < encryptedMessage.length; i++) {
        const char = encryptedMessage[i];
        if (alphabet.indexOf(char.toLowerCase()) !== -1) {
            const isUpperCase = char === char.toUpperCase();
            const index = (alphabet.indexOf(encryptedLower[i]) - shift + 26) % 26;
            const decryptedChar = isUpperCase ? alphabet[index].toUpperCase() : alphabet[index];
            decryptedMessage += decryptedChar;
        } else {
            decryptedMessage += char;
        }
    }

    return decryptedMessage;
}

const encryptedMessage1 = "xfqfr bfmdz";
const encryptedMessage2 = "gjxtp lzj rfz ifkyfw jxi snm";
const encryptedMessage3 = "gwt, gjxtp qz rfz rfpfs in bfwlty lfp?";
const encryptedMessage4 = "fpz xfdfsl pfrz, rfz lfp ofin ufhfwpz";
const encryptedMessage5 = "dfsl pnwnr xynhpjw otrtp pz pnhp ifwn lwzu";

const decryptedMessage1 = decryptMessage(encryptedMessage1, 5);
const decryptedMessage2 = decryptMessage(encryptedMessage2, 5);
const decryptedMessage3 = decryptMessage(encryptedMessage3, 5);
const decryptedMessage4 = decryptMessage(encryptedMessage4, 5);
const decryptedMessage5 = decryptMessage(encryptedMessage5, 5);

console.log(decryptedMessage1);
console.log(decryptedMessage2);
console.log(decryptedMessage3);
console.log(decryptedMessage4);
console.log(decryptedMessage5);
