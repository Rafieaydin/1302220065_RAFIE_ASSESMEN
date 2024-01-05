// no 7
function decryptMessage(encryptedMessage, shift) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    var output = "";
    for (let i = 0; i < encryptedMessage.length; i++) {
        var char = (alphabet.toLowerCase().indexOf(encryptedMessage[i]) - shift + 26) % 26;
        if (alphabet.indexOf(encryptedMessage[i]) != -1){
            output += alphabet[char];
        }else{
            output += " ";
        }
    }
    return output
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
