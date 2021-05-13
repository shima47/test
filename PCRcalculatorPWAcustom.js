//ボタンオブジェクト取得
const $button = document.getElementById("caluculate");
//フォームオブジェクトを取得
const $form = document.getElementById("form");
//name="oneVol"オブジェクト配列を取得
const $oneVol = document.getElementsByName("oneVol");

//ボタンを押すと実行
$button.addEventListener("click",() => {
	caluculate();
});

//フォームに入力すると実行
$form.addEventListener("keyup",() => {
	caluculate();
});

//容量変更すると実行
$oneVol.forEach((oneVolForm) => {
	oneVolForm.addEventListener("keyup",() => {
		caluculate();
	});
});

//計算系
const caluculate = () => {
	//フォーム内の値を取得
	const Num = $form.value;

	//oneVolを配列に格納
	let oneVol = [];
	let oneVolIndex = 0;
	while(oneVolIndex < $oneVol.length){
		oneVol.push($oneVol[oneVolIndex].value);
		oneVolIndex++;
	}

	//計算と格納
	let resultVol = [];
	oneVolIndex = 0;
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
