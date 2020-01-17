$(document).ready(function () {
  // イベントハンドラの登録などのコード
  console.log('aaaa');
  var text = 'モカ';
  for (let moka = 0; moka < 10000; moka++) {
    text += 'モカ';
    
  }
  text += 'モカ';
  text += 'モカ';
  text += 'モカ';
  $('h1').text(text);
  var text = text + $('h1').text(); // => 'Hello, world'
  
  
});