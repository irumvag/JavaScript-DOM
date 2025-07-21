console.log("Exercise 1 - Word Cloud");
let myParagraphelem=document.getElementById('myParagraph');
let words=myParagraphelem.innerText;
console.log(words.split(''));
words.split('').filter(a=>![',','.',';'].includes(a));
console.log(words);