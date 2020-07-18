function vowel() {
  var sentence = "Pleases read this application and give me gratuity";
  var count = 0;
  var found = false;

  for (var letter of sentence.toLowerCase()) {
    switch (letter) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        {
          if (found) {
            count++;
            found = false;
          } else {
           found = true;
          }
          break;
        }
      default:
        found = false
    }
  }
  document.write("sentence --> : "+ sentence+"<br>");
  return count;
}

document.write("The Number of occurence of two vowels in Succession is : "+ vowel());