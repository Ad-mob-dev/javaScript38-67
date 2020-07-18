function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

var sentence = prompt("Enter Sentence to remove vowels sentences must be of 25 characters");
sentence = sentence.slice(0,25);
document.write("Original Sentence ---> : " + "<strong>"+sentence+"</strong> <br>");
document.write("After vowel Removal ---> : " + "<strong>"+disemvowel(sentence)+"</strong>");