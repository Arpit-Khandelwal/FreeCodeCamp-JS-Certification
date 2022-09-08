function check(ch)
{
  if((ch>='0' && ch<='9')||(ch>='a' && ch<='z')||(ch>='A'&&ch<='Z'))
  return true;
  else return false;
}
function palindrome(str) {
  str = str.toLowerCase()
  var ch;
  var l=0,r=str.length-1;
  while(l<r)
  {
    while(!check(str[l]))l++;
    while(!check(str[r]))r--;
    if(str[l++]!=str[r--]) return false;
  }

  return true;

}
