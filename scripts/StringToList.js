const StringToList = (text) => {
  let textList = [];
  let beginning = 0;
  let numAdded = 0;
  for(let i = 0; i < text.length; i++) {
    if(text.charAt(i) == ",") {
      textList[numAdded] = text.substr(beginning, i - beginning);
      numAdded++;
      beginning = i + 2;
    }
  }
  textList.push(text.substr(beginning));
  
  return textList;
}

module.exports = StringToList;