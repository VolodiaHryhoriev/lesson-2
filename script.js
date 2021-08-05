// TASK 1
let text = prompt('write some text');
let count = 0
for(let i=0; i<text.length; i++){
    if(text.charAt(i)==' '){
    count++;
    
}
};
console.log(count)



// TASK 2
let email = prompt('write your email');


 if (!email.includes('@') || email[email.length-1]=='@' || email[0]=='@') {
    console.log(false);
} else {
    console.log(email);
}







// TASK 3
let str = prompt('write some text');
let newString = '';
for (let i = 0; i < str.length; i++) {
    newString += str.charAt(i).toLowerCase();
}

let wordInText = 0;
let start = 0;

while (true) {
    let find = newString.indexOf('html', start);
    if (find === -1) break;
    wordInText++;
    start = find + 1;
}
console.log(wordInText);



// TASK 4
let link = prompt('write url');
let getHostname = (url) => {
    return new URL(url).hostname;
  }
console.log(getHostname(link))

