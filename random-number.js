onmessage = function(evt) {
  let _data = evt.data;
  let str;
  var intArr = _data.split(';');
  console.log(intArr)
  str = '';
  for (let i = 0; i < intArr.length; i++) {
    if (parseInt(intArr[i]) % 3 == 0) {
      if (str != '') 
        str += ';';
        console.log(intArr[i])
      str+= intArr[i];
      
    }
  }
  console.log(str)
  postMessage(str);
}