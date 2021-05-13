//ボタンオブジェクト取得
const $button = document.getElementById("caluculate");
//フォームオブジェクトを取得
const $form = document.getElementById("form");

//ボタンを押すと実行
$button.addEventListener("click",() => {
	caluculate();
});

//フォームに入力すると実行
$form.addEventListener("keyup",() => {
	caluculate();
});

//計算系
const caluculate = () => {
	//フォーム内の値を取得
	const Num = $form.value;
	
	const oneVol = [7,1,1,0.075,0.8,9.075,9.875];
	let resultVol = [];
	let oneVolIndex = 0;
	//計算と格納
	while(oneVolIndex < oneVol.length){
		let a = oneVol[oneVolIndex] * Num;
		let b = a * 1000;
		let result = Math.round(b) / 1000;
		
		resultVol.push(result);
		oneVolIndex++;
	};
	
	//id="multiple"オブジェクト配列を取得
	const $multiple = document.getElementById("multiple");
	//最上段右の項目を書き換え
	$multiple.textContent = "x" + Num;
	
	//name="result"オブジェクト配列を取得
	const $result = document.getElementsByName("result");
	//右列の項目を書き換え
	let resultIndex = 0;
	while(resultIndex < $result.length){
		$result[resultIndex].textContent = resultVol[resultIndex] + "μL";
		resultIndex++;
	};
};
