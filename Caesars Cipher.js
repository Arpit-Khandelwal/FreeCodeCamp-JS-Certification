function rot13(str) {
  var i,s='';
  for(i in str)
  {
    var ch = str[i];
    if(ch>='A' && ch<='Z')
    {
      var decoded= str.charCodeAt(i);
      decoded -= 65;
      decoded += 13;
      decoded %= 26;
      decoded += 65;
      s += String.fromCharCode(decoded);
    }
    else s+=str[i];
  }
  return s;

}
