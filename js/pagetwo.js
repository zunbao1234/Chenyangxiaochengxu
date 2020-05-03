/* $('#firstOneId').on('click', function() {
	selectedPicker(res=>{
		$(this).val(res[1]);
	});	
});
$('#firstTwoId').on('click', function() {
	selectedPicker(res=>{
		$(this).val(res[1]);
	});	
});
$('#firstThreeId').on('click', function() {
	selectedPicker(res=>{
		$(this).val(res[1]);
	});	
});
$('#secondOneId').on('click', function() {
	selectedPicker(res=>{
		$(this).val(res[1]);
	});	
});
$('#secondTwoId').on('click', function() {
	selectedPicker(res=>{
		$(this).val(res[1]);
	});	
});
$('#secondThreeId').on('click', function() {
	selectedPicker(res=>{
		$(this).val(res[1]);
	});	
});
$('#thirdOneId').on('click', function() {
	selectedPicker(res=>{
		$(this).val(res[1]);
	});	
});
$('#thirdTwoId').on('click', function() {
	selectedPicker(res=>{
		$(this).val(res[1]);
	});	
});
$('#thirdThreeId').on('click', function() {
	selectedPicker(res=>{
		$(this).val(res[1]);
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
 */
var _0x1fc8=['value','--请选择--','toast','请选择完整信息','text','Object','volunteerbatch','show','#btn','attr','disabled','save','#loadDiv','removeAttr','提交成功','href','pagefour.html','hide','提交失败','第一批','湖南师大附中','长沙市一中','长郡中学','雅礼中学','明德中学','周南中学','长沙市实验中学','麓山国际实验学校','南雅中学','第二批','长沙市六中景鹏班','长沙市十一中普通班','长沙市十一中音乐班','长沙市十一中美术班','长沙市十五中','长沙市二十一中一中合作班','长沙市二十一中','长沙铁路第一中学','湖南省地质中学','雷锋学校','长沙外国语学校','长郡梅溪湖中学','湖南师大附中梅溪湖中学','周南梅溪湖中学','长郡滨江中学','雅礼洋湖实验中学','第三批','麓山滨江实验学校滨江班','麓山滨江实验学校','长郡湘府中学湘府班','长郡湘府中学','长沙市一中开福中学','雅礼书院中学雅礼班','雅礼书院中学','湘一芙蓉中学','湖南师大附中博才实验中学','麓山外国语实验中学','长大附中雅礼合作班','长大附中','周南雨花中学周南合作班','周南雨花中学','明德雨花实实验中学明德合作班','明德雨花实验中学','稻田中学','岳麓实验中学','return\x20(function()\x20','{}.constructor(\x22return\x20this\x22)(\x20)','console','log','warn','debug','info','error','exception','trace','val','click','#firstThreeId','#secondTwoId','#thirdOneId','#thirdThreeId','26c13956e0a177dbad634a5fdb6a5e24','a52e71b567544c595c6774e19cb062fe','#return','student.html','form','serializeArray','each','stringify'];(function(_0x456888,_0xa327b5){var _0x172f2e=function(_0x53053d){while(--_0x53053d){_0x456888['push'](_0x456888['shift']());}};var _0x384c62=function(){var _0x1dabe2={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x4d30be,_0x3601e4,_0x45007c,_0x48425c){_0x48425c=_0x48425c||{};var _0x479786=_0x3601e4+'='+_0x45007c;var _0x59d7e1=0x0;for(var _0x59d7e1=0x0,_0x309fb2=_0x4d30be['length'];_0x59d7e1<_0x309fb2;_0x59d7e1++){var _0x1e5ba3=_0x4d30be[_0x59d7e1];_0x479786+=';\x20'+_0x1e5ba3;var _0xc75c70=_0x4d30be[_0x1e5ba3];_0x4d30be['push'](_0xc75c70);_0x309fb2=_0x4d30be['length'];if(_0xc75c70!==!![]){_0x479786+='='+_0xc75c70;}}_0x48425c['cookie']=_0x479786;},'removeCookie':function(){return'dev';},'getCookie':function(_0x3f0d60,_0x2aeca5){_0x3f0d60=_0x3f0d60||function(_0x4c1f79){return _0x4c1f79;};var _0x403725=_0x3f0d60(new RegExp('(?:^|;\x20)'+_0x2aeca5['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x3bd86a=function(_0x4f8035,_0x4b9725){_0x4f8035(++_0x4b9725);};_0x3bd86a(_0x172f2e,_0xa327b5);return _0x403725?decodeURIComponent(_0x403725[0x1]):undefined;}};var _0x2d78c1=function(){var _0x2a5817=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x2a5817['test'](_0x1dabe2['removeCookie']['toString']());};_0x1dabe2['updateCookie']=_0x2d78c1;var _0x228fa8='';var _0x4f6d32=_0x1dabe2['updateCookie']();if(!_0x4f6d32){_0x1dabe2['setCookie'](['*'],'counter',0x1);}else if(_0x4f6d32){_0x228fa8=_0x1dabe2['getCookie'](null,'counter');}else{_0x1dabe2['removeCookie']();}};_0x384c62();}(_0x1fc8,0xf3));var _0x1c0e=function(_0x2a96e4,_0x41c615){_0x2a96e4=_0x2a96e4-0x0;var _0x4940b7=_0x1fc8[_0x2a96e4];return _0x4940b7;};var _0x2e9cd6=function(){var _0x4fad45=!![];return function(_0x3568cf,_0xceef11){var _0x55cb5a=_0x4fad45?function(){if(_0xceef11){var _0x428e0f=_0xceef11['apply'](_0x3568cf,arguments);_0xceef11=null;return _0x428e0f;}}:function(){};_0x4fad45=![];return _0x55cb5a;};}();var _0x1c6ea8=_0x2e9cd6(this,function(){var _0x2410c8=function(){return'\x64\x65\x76';},_0x4731c1=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x386ca3=function(){var _0x1784a2=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x1784a2['\x74\x65\x73\x74'](_0x2410c8['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x44da9c=function(){var _0x1d5dd5=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x1d5dd5['\x74\x65\x73\x74'](_0x4731c1['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x460a51=function(_0x174818){var _0x2135b6=~-0x1>>0x1+0xff%0x0;if(_0x174818['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x2135b6)){_0x10be12(_0x174818);}};var _0x10be12=function(_0x47704d){var _0x273a88=~-0x4>>0x1+0xff%0x0;if(_0x47704d['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x273a88){_0x460a51(_0x47704d);}};if(!_0x386ca3()){if(!_0x44da9c()){_0x460a51('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x460a51('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x460a51('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x1c6ea8();var _0x16c332=function(){var _0x26347a=!![];return function(_0x3bfb80,_0x6fe0dc){var _0x3c74f4=_0x26347a?function(){if(_0x6fe0dc){var _0x5dc086=_0x6fe0dc['apply'](_0x3bfb80,arguments);_0x6fe0dc=null;return _0x5dc086;}}:function(){};_0x26347a=![];return _0x3c74f4;};}();var _0x2e28ae=_0x16c332(this,function(){var _0x57b2c3=function(){};var _0x22eb91;try{var _0x1dbea1=Function(_0x1c0e('0x0')+_0x1c0e('0x1')+');');_0x22eb91=_0x1dbea1();}catch(_0xbd30b7){_0x22eb91=window;}if(!_0x22eb91[_0x1c0e('0x2')]){_0x22eb91[_0x1c0e('0x2')]=function(_0x1dd614){var _0xa68587={};_0xa68587[_0x1c0e('0x3')]=_0x1dd614;_0xa68587[_0x1c0e('0x4')]=_0x1dd614;_0xa68587[_0x1c0e('0x5')]=_0x1dd614;_0xa68587[_0x1c0e('0x6')]=_0x1dd614;_0xa68587[_0x1c0e('0x7')]=_0x1dd614;_0xa68587[_0x1c0e('0x8')]=_0x1dd614;_0xa68587[_0x1c0e('0x9')]=_0x1dd614;return _0xa68587;}(_0x57b2c3);}else{_0x22eb91[_0x1c0e('0x2')][_0x1c0e('0x3')]=_0x57b2c3;_0x22eb91[_0x1c0e('0x2')]['warn']=_0x57b2c3;_0x22eb91[_0x1c0e('0x2')][_0x1c0e('0x5')]=_0x57b2c3;_0x22eb91['console'][_0x1c0e('0x6')]=_0x57b2c3;_0x22eb91[_0x1c0e('0x2')]['error']=_0x57b2c3;_0x22eb91[_0x1c0e('0x2')]['exception']=_0x57b2c3;_0x22eb91[_0x1c0e('0x2')][_0x1c0e('0x9')]=_0x57b2c3;}});_0x2e28ae();$('#firstOneId')['on']('click',function(){selectedPicker(_0x3d1891=>{$(this)[_0x1c0e('0xa')](_0x3d1891[0x1]);});});$('#firstTwoId')['on'](_0x1c0e('0xb'),function(){selectedPicker(_0x5a3469=>{$(this)['val'](_0x5a3469[0x1]);});});$(_0x1c0e('0xc'))['on'](_0x1c0e('0xb'),function(){selectedPicker(_0x532537=>{$(this)[_0x1c0e('0xa')](_0x532537[0x1]);});});$('#secondOneId')['on']('click',function(){selectedPicker(_0xde25db=>{$(this)[_0x1c0e('0xa')](_0xde25db[0x1]);});});$(_0x1c0e('0xd'))['on'](_0x1c0e('0xb'),function(){selectedPicker(_0x582e67=>{$(this)[_0x1c0e('0xa')](_0x582e67[0x1]);});});$('#secondThreeId')['on'](_0x1c0e('0xb'),function(){selectedPicker(_0x29a32f=>{$(this)['val'](_0x29a32f[0x1]);});});$(_0x1c0e('0xe'))['on'](_0x1c0e('0xb'),function(){selectedPicker(_0x5c0d9f=>{$(this)['val'](_0x5c0d9f[0x1]);});});$('#thirdTwoId')['on'](_0x1c0e('0xb'),function(){selectedPicker(_0x51f12a=>{$(this)[_0x1c0e('0xa')](_0x51f12a[0x1]);});});$(_0x1c0e('0xf'))['on']('click',function(){selectedPicker(_0x94cb84=>{$(this)[_0x1c0e('0xa')](_0x94cb84[0x1]);});});Bmob['initialize'](_0x1c0e('0x10'),_0x1c0e('0x11'));$(function(){$(_0x1c0e('0x12'))[_0x1c0e('0xb')](function(){location['href']=_0x1c0e('0x13');});$('#btn')[_0x1c0e('0xb')](function(){let _0x1317c8=$(_0x1c0e('0x14'))['serializeArray']();let _0x41d22c=$('[name=checkbox1]:checked')[_0x1c0e('0xa')]();if(_0x41d22c==undefined){_0x41d22c=0x0;}else{_0x41d22c=0x1;}console[_0x1c0e('0x3')]($(_0x1c0e('0x14'))[_0x1c0e('0x15')]());let _0x186ecc=0x1;$[_0x1c0e('0x16')](_0x1317c8,function(_0x527fc7,_0x465ce6){var _0xcb1cdc=JSON['parse'](JSON[_0x1c0e('0x17')](_0x465ce6))[_0x1c0e('0x18')];if(_0xcb1cdc==_0x1c0e('0x19')||_0xcb1cdc==undefined){$[_0x1c0e('0x1a')](_0x1c0e('0x1b'),_0x1c0e('0x1c'));return _0x186ecc=0x0;}});if(_0x186ecc!=0x0){var _0x583953=Bmob[_0x1c0e('0x1d')]['extend'](_0x1c0e('0x1e'));var _0x4e5249=new _0x583953();$('#loadDiv')[_0x1c0e('0x1f')]();$(_0x1c0e('0x20'))[_0x1c0e('0x21')]('disabled',_0x1c0e('0x22'));_0x4e5249[_0x1c0e('0x23')]({'zy_1':_0x1317c8[0x0][_0x1c0e('0x18')],'zy1_school1':_0x1317c8[0x1][_0x1c0e('0x18')],'zy1_school2':_0x1317c8[0x2][_0x1c0e('0x18')],'zy1_school3':_0x1317c8[0x3][_0x1c0e('0x18')],'zy_2':_0x1317c8[0x4]['value'],'zy2_school1':_0x1317c8[0x5][_0x1c0e('0x18')],'zy2_school2':_0x1317c8[0x6][_0x1c0e('0x18')],'zy2_school3':_0x1317c8[0x7]['value'],'zy_3':_0x1317c8[0x8]['value'],'zy3_school1':_0x1317c8[0x9][_0x1c0e('0x18')],'zy3_school2':_0x1317c8[0xa][_0x1c0e('0x18')],'zy3_school3':_0x1317c8[0xb][_0x1c0e('0x18')],'istrue':_0x41d22c},{'success':function(_0x71147f){$(_0x1c0e('0x24'))['hide']();$(_0x1c0e('0x20'))[_0x1c0e('0x25')](_0x1c0e('0x22'));$[_0x1c0e('0x1a')](_0x1c0e('0x26'),'text');$(_0x1c0e('0x14'))[0x0]['reset']();location[_0x1c0e('0x27')]=_0x1c0e('0x28');},'error':function(_0x17554f,_0x321c1b){$(_0x1c0e('0x24'))[_0x1c0e('0x29')]();$(_0x1c0e('0x20'))[_0x1c0e('0x25')]('disabled');$[_0x1c0e('0x1a')](_0x1c0e('0x2a'),_0x1c0e('0x1c'));}});}});});function selectedPicker(_0x28adfc){weui['picker']([{'label':'第一批','value':_0x1c0e('0x2b'),'children':[{'label':_0x1c0e('0x2c'),'value':_0x1c0e('0x2c')},{'label':_0x1c0e('0x2d'),'value':_0x1c0e('0x2d')},{'label':_0x1c0e('0x2e'),'value':_0x1c0e('0x2e')},{'label':_0x1c0e('0x2f'),'value':'雅礼中学'},{'label':'明德中学','value':_0x1c0e('0x30')},{'label':_0x1c0e('0x31'),'value':'周南中学'},{'label':_0x1c0e('0x32'),'value':_0x1c0e('0x32')},{'label':_0x1c0e('0x33'),'value':_0x1c0e('0x33')},{'label':_0x1c0e('0x34'),'value':_0x1c0e('0x34')}]},{'label':_0x1c0e('0x35'),'value':_0x1c0e('0x35'),'children':[{'label':_0x1c0e('0x36'),'value':'长沙市六中景鹏班'},{'label':'长沙市六中','value':'长沙市六中'},{'label':_0x1c0e('0x37'),'value':_0x1c0e('0x37')},{'label':_0x1c0e('0x38'),'value':'长沙市十一中音乐班'},{'label':_0x1c0e('0x39'),'value':'长沙市十一中美术班'},{'label':_0x1c0e('0x3a'),'value':_0x1c0e('0x3a')},{'label':_0x1c0e('0x3b'),'value':'长沙市二十一中一中合作班'},{'label':_0x1c0e('0x3c'),'value':_0x1c0e('0x3c')},{'label':_0x1c0e('0x3d'),'value':'长沙铁路第一中学'},{'label':_0x1c0e('0x3e'),'value':'湖南省地质中学'},{'label':_0x1c0e('0x3f'),'value':_0x1c0e('0x3f')},{'label':_0x1c0e('0x40'),'value':_0x1c0e('0x40')},{'label':_0x1c0e('0x41'),'value':_0x1c0e('0x41')},{'label':_0x1c0e('0x42'),'value':_0x1c0e('0x42')},{'label':_0x1c0e('0x43'),'value':'周南梅溪湖中学'},{'label':_0x1c0e('0x44'),'value':_0x1c0e('0x44')},{'label':_0x1c0e('0x45'),'value':'雅礼洋湖实验中学'}]},{'label':'第三批','value':_0x1c0e('0x46'),'children':[{'label':_0x1c0e('0x47'),'value':_0x1c0e('0x47')},{'label':_0x1c0e('0x48'),'value':_0x1c0e('0x48')},{'label':_0x1c0e('0x49'),'value':_0x1c0e('0x49')},{'label':_0x1c0e('0x4a'),'value':_0x1c0e('0x4a')},{'label':_0x1c0e('0x4b'),'value':_0x1c0e('0x4b')},{'label':_0x1c0e('0x4c'),'value':'雅礼书院中学雅礼班'},{'label':_0x1c0e('0x4d'),'value':_0x1c0e('0x4d')},{'label':_0x1c0e('0x4e'),'value':_0x1c0e('0x4e')},{'label':_0x1c0e('0x4f'),'value':_0x1c0e('0x4f')},{'label':'麓山外国语实验中学','value':_0x1c0e('0x50')},{'label':_0x1c0e('0x51'),'value':_0x1c0e('0x51')},{'label':'长大附中','value':_0x1c0e('0x52')},{'label':_0x1c0e('0x53'),'value':_0x1c0e('0x53')},{'label':_0x1c0e('0x54'),'value':'周南雨花中学'},{'label':_0x1c0e('0x55'),'value':_0x1c0e('0x55')},{'label':_0x1c0e('0x56'),'value':_0x1c0e('0x56')},{'label':_0x1c0e('0x57'),'value':_0x1c0e('0x57')},{'label':_0x1c0e('0x58'),'value':_0x1c0e('0x58')}]}],{'onChange':function(_0x2365db){if(_0x28adfc)_0x28adfc(_0x2365db);},'onConfirm':function(_0x326f68){console[_0x1c0e('0x3')](_0x326f68);}});}