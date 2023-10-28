// textというidを持つHTML要素を取得し、定数を代入する
 const text = document.getElementById('text');

 // btnというidを持つHTML要素を取得し、変数に代入する
 const btn = document.getElementById('btn');

 // ボタンがクリックされたら表示を切り替える
 btn.addEventListener('click', () => {
  // textの要素の文字列を書き換える 
 text.textContent = 'ボタンをクリックしました'; 
 });