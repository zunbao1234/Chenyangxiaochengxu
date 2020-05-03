Bmob.initialize("26c13956e0a177dbad634a5fdb6a5e24", "a52e71b567544c595c6774e19cb062fe");

$(function() {
	$("#btn").click(function() {
		let arr = $('form').serializeArray()
		var phoneLength = $("[name=stuPhone]").val();
		let regs = /^((13[0-9])|(17[0-1,6-8])|(15[^4,\\D])|(18[0-9]))\d{8}$/;
		if (!regs.test(phoneLength)) {
			$.toast("手机号输入有误", "text");
			return;
		}
		$.each(arr, function(i, dom) {
			var _text = JSON.parse(JSON.stringify(dom)).value
			if (_text == "" || _text == undefined || arr.length != 11) {
				$.toast("请填写完整信息", "text");
				return false;
			}
		})
		if (arr.length == 11) {
			console.log("往下执行", arr);
			var _student = Bmob.Object.extend("studentScore");
			var _stu = new _student();
			$("#loadDiv").show();
			$("#btn").attr("disabled", "disabled");
			_stu.save({
				stu_name: arr[0].value,
				stu_pho: arr[1].value,
				stu_hjlx: arr[2].value,
				stu_hjszq: arr[3].value,
				stu_sch: arr[4].value,
				sco_chi: arr[5].value,
				sco_math: arr[6].value,
				sco_english: arr[7].value,
				sco_wz: arr[8].value,
				sco_lz: arr[9].value,
				sco_sdt: arr[10].value
			}, {
				success: function(_gameScore) {
					$("#loadDiv").hide();
					$("#btn").attr("disabled", "");
					var count =[];
					for(var i=0;i<6;i++){
						count.push(arr[i+5].value);
					}
					let obj=getWordCnt(count);
					localStorage.setItem("resultGrade",panduan(JSON.parse(JSON.stringify(obj))))
					$.toast("提交成功", "text");
					$('form')[0].reset();
					location.href = "pagetwo.html"
				},
				error: function(model, error) {
					alert("create object fail");
				}
			});
		}

	})
	$("#return").click(function() {
		location.href="index.html"
	})
})
function getWordCnt(arr){ 
        var obj = {}; 
        for(var i= 0, l = arr.length; i< l; i++){ 
            var item = arr[i]; 
            obj[item] = (obj[item] +1 ) || 1; 
        } 
        return obj; 
}
function panduan(xuanxian){
	let A ="";
	let B ="";
	let C ="";
	let D ="";
	if(xuanxian.A){
		A=xuanxian.A+"A";
	}
	if(xuanxian.B){
		B=xuanxian.B+"B";
	}
	if(xuanxian.C){
		C=xuanxian.C+"C";
	}
	if(xuanxian.D){
		D=xuanxian.D+"D";
	}
	return A+B+C+D;
}

