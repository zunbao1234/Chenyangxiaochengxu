$('#firstOneId').on('click', function() {
	selectedPicker(res=>{
		$(this).val(res);
	});	
});
$('#firstTwoId').on('click', function() {
	selectedPicker(res=>{
		$(this).val(res);
	});	
});
$('#firstThreeId').on('click', function() {
	selectedPicker(res=>{
		$(this).val(res);
	});	
});
$('#secondOneId').on('click', function() {
	selectedPicker(res=>{
		$(this).val(res);
	});	
});
$('#secondTwoId').on('click', function() {
	selectedPicker(res=>{
		$(this).val(res);
	});	
});
$('#secondThreeId').on('click', function() {
	selectedPicker(res=>{
		$(this).val(res);
	});	
});
$('#thirdOneId').on('click', function() {
	selectedPicker(res=>{
		$(this).val(res);
	});	
});
$('#thirdTwoId').on('click', function() {
	selectedPicker(res=>{
		$(this).val(res);
	});	
});
$('#thirdThreeId').on('click', function() {
	selectedPicker(res=>{
		$(this).val(res);
	});	
});
Bmob.initialize("26c13956e0a177dbad634a5fdb6a5e24", "a52e71b567544c595c6774e19cb062fe");
$(function() {
	$("#return").click(function() {
		location.href="student.html"
	})
	$("#btn").click(function() {
		let arr=$('form').serializeArray();
		let _selected=$('[name=checkbox1]:checked').val();
		if(_selected==undefined){
			_selected=0;
		}else{
			_selected=1;
		}
		console.log($('form').serializeArray(),);
		let panduan =1;
		$.each(arr, function(i, dom) {
			var _text = JSON.parse(JSON.stringify(dom)).value;
			if (_text == "--请选择--" || _text == undefined) {
				$.toast("请选择完整信息", "text");
				return panduan=0;
			}
		});
		if(panduan!=0){
			 	var _volunteer = Bmob.Object.extend("volunteerbatch");
			 	var _vol = new _volunteer();
			 	$("#loadDiv").show();
			 	$("#btn").attr("disabled", "disabled");
			 	_vol.save({
			 		zy_1:arr[0].value,
			 		zy1_school1:arr[1].value,
			 		zy1_school2:arr[2].value,
			 		zy1_school3:arr[3].value,
			 		
			 		zy_2:arr[4].value,
			 		zy2_school1:arr[5].value,
			 		zy2_school2:arr[6].value,
			 		zy2_school3:arr[7].value,
			 		
			 		zy_3:arr[8].value,
			 		zy3_school1:arr[9].value,
			 		zy3_school2:arr[10].value,
			 		zy3_school3:arr[11].value,
			 		istrue:_selected
			 	}, {
			 		success: function(_gameScore) {
			 			$("#loadDiv").hide();
			 			$("#btn").removeAttr("disabled");
			 			$.toast("提交成功", "text");
			 			$('form')[0].reset();
						location.href="pagefour.html"
			 		},
			 		error: function(model, error) {
						$("#loadDiv").hide();
						$("#btn").removeAttr("disabled");
						$.toast("提交失败", "text");
			 		}
			 	});
		}
		
	})
})

function selectedPicker(callback){
	weui.picker([{
		label: '第一批',
		value: '第一批',
		children: [{
			label: '湖南师大附中',
			value: '湖南师大附中',
		}, {
			label: '长沙市一中',
			value: '长沙市一中',
		}, {
			label: '长郡中学',
			value: '长郡中学',
		},{
			label: '雅礼中学',
			value: '雅礼中学',
		},{
			label: '明德中学',
			value: '明德中学',
		},{
			label: '周南中学',
			value: '周南中学',
		},{
			label: '长沙市实验中学',
			value: '长沙市实验中学',
		},{
			label: '麓山国际实验学校',
			value: '麓山国际实验学校',
		},{
			label: '南雅中学',
			value: '南雅中学',
		}]
	}, {
		label: '第二批',
		value: '第二批',
		children: [{
			label: '长沙市六中景鹏班',
			value: '长沙市六中景鹏班',
		}, {
			label: '长沙市六中',
			value: '长沙市六中',
		}, {
			label: '长沙市十一中普通班',
			value: '长沙市十一中普通班',
		}, {
			label: '长沙市十一中音乐班',
			value: '长沙市十一中音乐班',
		}, {
			label: '长沙市十一中美术班',
			value: '长沙市十一中美术班',
		}, {
			label: '长沙市十五中',
			value: '长沙市十五中',
		}, {
			label: '长沙市二十一中一中合作班',
			value: '长沙市二十一中一中合作班',
		},{
			label: '长沙市二十一中',
			value: '长沙市二十一中',
		}, {
			label: '长沙铁路第一中学',
			value: '长沙铁路第一中学',
		},{
			label: '湖南省地质中学',
			value: '湖南省地质中学',
		},{
			label: '雷锋学校',
			value: '雷锋学校',
		},{
			label: '长沙外国语学校',
			value: '长沙外国语学校',
		},{
			label: '长郡梅溪湖中学',
			value: '长郡梅溪湖中学',
		},{
			label: '湖南师大附中梅溪湖中学',
			value: '湖南师大附中梅溪湖中学',
		},{
			label: '周南梅溪湖中学',
			value: '周南梅溪湖中学',
		},{
			label: '长郡滨江中学',
			value: '长郡滨江中学',
		},{
			label: '雅礼洋湖实验中学',
			value: '雅礼洋湖实验中学',
		}]
	}, {
		label: '第三批',
		value: '第三批',
		children: [{
			label: '麓山滨江实验学校滨江班',
			value: '麓山滨江实验学校滨江班',
		}, {
			label: '麓山滨江实验学校',
			value: '麓山滨江实验学校',
		}, {
			label: '长郡湘府中学湘府班',
			value: '长郡湘府中学湘府班',
		},{
			label: '长郡湘府中学',
			value: '长郡湘府中学',
		},{
			label: '长沙市一中开福中学',
			value: '长沙市一中开福中学',
		},{
			label: '雅礼书院中学雅礼班',
			value: '雅礼书院中学雅礼班',
		},{
			label: '雅礼书院中学',
			value: '雅礼书院中学',
		},{
			label: '湘一芙蓉中学',
			value: '湘一芙蓉中学',
		},{
			label: '湖南师大附中博才实验中学',
			value: '湖南师大附中博才实验中学',
		},{
			label: '麓山外国语实验中学',
			value: '麓山外国语实验中学',
		},{
		 	label: '长大附中雅礼合作班',
		 	value: '长大附中雅礼合作班',
		},{
		 	label: '长大附中',
		 	value: '长大附中',
		},{
		 	label: '周南雨花中学周南合作班',
		 	value: '周南雨花中学周南合作班',
		},{
		 	label: '周南雨花中学',
		 	value: '周南雨花中学',
		},{
		 	label: '明德雨花实实验中学明德合作班',
		 	value: '明德雨花实实验中学明德合作班',
		},{
		 	label: '明德雨花实验中学',
		 	value: '明德雨花实验中学',
		},{
		 	label: '稻田中学',
		 	value: '稻田中学',
		},{
		 	label: '岳麓实验中学',
		 	value: '岳麓实验中学',
		}]
	}], {
		onChange: function(result) {
			if(callback)callback(result);
		},
		onConfirm: function(result) {
			console.log(result);
		}
	});
}
