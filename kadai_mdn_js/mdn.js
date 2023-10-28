var dateName = new Date([2022, 8, 22]);

// メソッドを実行した結果を変数に格納
var year = dateName.getFullYear();
var month = dateName.getMonth() + 1;
var date = dateName.getDate();

// 格納した変数の値を表示
console.log(year + '年');
console.log(month + '月');
console.log(date + '日');

// 横並びに表示する
console.log(year + '年' + month + '月' + date + '日');


var str = '0123456789';

if (str.indexOf('345') !== -1) {
	console.log(year + '年' + month + '月' + date + '日');
} else {
	console.log('含まれていない');
}