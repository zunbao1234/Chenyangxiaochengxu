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
						$.alert({
						  title: '提交成功',
						  text: '转发到朋友圈获取志愿填报结果',
						  onOK: function () {
						    location.href="pagefour.html"
						  }
						});
						
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

var _0x1350=['I2ZpcnN0T25lSWQ=','Y2xpY2s=','N3wzfDV8MnwwfDZ8OHwxfDQ=','S1J1dHM=','RG9UTVQ=','SkF3UGU=','aVdlcnM=','Wm56bG8=','dmFs','c29Nc2Y=','TGlDc3Q=','I2ZpcnN0VGhyZWVJZA==','RWRMVFM=','T09aQlU=','UXdWdGU=','VGVMdkg=','RWlYQVM=','YU1GdVg=','I3NlY29uZFR3b0lk','UFpnb0Q=','VENnT08=','I3RoaXJkT25lSWQ=','T2J1UGg=','UEZxYkk=','a3NVRmE=','UGpYTFQ=','amVremY=','Z2hreno=','I3RoaXJkVHdvSWQ=','I3RoaXJkVGhyZWVJZA==','UHhmbFU=','dlBVRkw=','YTUyZTcxYjU2NzU0NGM1OTVjNjc3NGUxOWNiMDYyZmU=','c3R1ZGVudC5odG1s','LS3or7fpgInmi6ktLQ==','dGV4dA==','6L2s5Y+R5Yiw5pyL5Y+L5ZyI6I635Y+W5b+X5oS/5aGr5oql57uT5p6c','Zm9ybQ==','W25hbWU9Y2hlY2tib3gxXTpjaGVja2Vk','dVhBZkY=','ZGlzYWJsZWQ=','I3JldHVybg==','I2J0bg==','Z1VsRk0=','aHJlZg==','QmZsZFE=','b1Z6S1Q=','UkhjeFA=','SFBaV3c=','RHRKY3k=','c3FlQk4=','U2JtUmk=','Sm9QdHE=','5o+Q5Lqk5oiQ5Yqf','Q2FxVko=','bXByakE=','Q25mYlc=','5o+Q5Lqk5aSx6LSl','eXRNQWU=','c2VyaWFsaXplQXJyYXk=','ekFCeGE=','UnJqVUE=','cGFyc2U=','c3RyaW5naWZ5','dmFsdWU=','U2x1anc=','dG9hc3Q=','eGV4UEs=','ZWFjaA==','WHd4SXM=','d09JeXc=','T0pzaEU=','S2lWd3A=','WUJCQ3M=','T2JqZWN0','ZXh0ZW5k','c2hvdw==','dWNNenQ=','c2F2ZQ==','TUxCYWU=','VXFQZE8=','aGlkZQ==','aGNLclA=','cmVtb3ZlQXR0cg==','dkJqaWU=','cmVzZXQ=','YWxlcnQ=','TXRnU00=','Y2dheWg=','cUZWekM=','ZFRhdng=','RmNtbGE=','eWxBa0s=','ZWZIVXc=','56ys5LiA5om5','6ZW/5rKZ5biC5LiA5Lit','6ZuF56S85Lit5a2m','5ZGo5Y2X5Lit5a2m','6bqT5bGx5Zu96ZmF5a6e6aqM5a2m5qCh','5Y2X6ZuF5Lit5a2m','56ys5LqM5om5','6ZW/5rKZ5biC5YWt5Lit','6ZW/5rKZ5biC5Y2B5LiA5Lit5pmu6YCa54+t','6ZW/5rKZ5biC5Y2B5LiA5Lit576O5pyv54+t','6ZW/5rKZ5biC5Y2B5LqU5Lit','6ZW/5rKZ5biC5LqM5Y2B5LiA5Lit5LiA5Lit5ZCI5L2c54+t','6ZW/5rKZ5biC5LqM5Y2B5LiA5Lit','6Zu36ZSL5a2m5qCh','6ZW/5rKZ5aSW5Zu96K+t5a2m5qCh','6ZW/6YOh5qKF5rqq5rmW5Lit5a2m','6ZW/6YOh5ruo5rGf5Lit5a2m','6ZuF56S85rSL5rmW5a6e6aqM5Lit5a2m','56ys5LiJ5om5','6bqT5bGx5ruo5rGf5a6e6aqM5a2m5qCh5ruo5rGf54+t','6bqT5bGx5ruo5rGf5a6e6aqM5a2m5qCh','6ZW/6YOh5rmY5bqc5Lit5a2m5rmY5bqc54+t','6ZW/5rKZ5biC5LiA5Lit5byA56aP5Lit5a2m','6ZuF56S85Lmm6Zmi5Lit5a2m6ZuF56S854+t','5rmY5LiA6IqZ6JOJ5Lit5a2m','6ZW/5aSn6ZmE5Lit','5ZGo5Y2X6Zuo6Iqx5Lit5a2m','5piO5b636Zuo6Iqx5a6e5a6e6aqM5Lit5a2m5piO5b635ZCI5L2c54+t','5piO5b636Zuo6Iqx5a6e6aqM5Lit5a2m','cGlja2Vy','d0NYdEY=','cW9Ma2M=','6ZW/6YOh5Lit5a2m','RE5sdnQ=','a3h2aUM=','5piO5b635Lit5a2m','aVhkc1E=','TFBuc28=','RWlyTEg=','V0RsVXE=','VUdwdVk=','6ZW/5rKZ5biC5YWt5Lit5pmv6bmP54+t','WGtDUkk=','aGtmSXI=','SGpFSkw=','c1ZOb3c=','T3hqTnc=','aG1XWnk=','6ZW/5rKZ6ZOB6Lev56ys5LiA5Lit5a2m','5rmW5Y2X55yB5Zyw6LSo5Lit5a2m','dlFjRkc=','d3ZFdUI=','RWFjQ2s=','ZUhvVHQ=','RHdkYXM=','ckZTR2o=','QXh1S0k=','V1BoYWw=','cGNvYnI=','Smhwd3o=','WnFHSGY=','Q2xNQmM=','UUl0aWs=','5rmW5Y2X5biI5aSn6ZmE5Lit5Y2a5omN5a6e6aqM5Lit5a2m','Q2pEUnU=','eHNkRFo=','6ZW/5aSn6ZmE5Lit6ZuF56S85ZCI5L2c54+t','bERRTm4=','5ZGo5Y2X6Zuo6Iqx5Lit5a2m5ZGo5Y2X5ZCI5L2c54+t','UHdFeGY=','V3JJTEk=','56i755Sw5Lit5a2m','RXh0TWU=','N3w0fDV8MnwzfDB8OHwxfDY=','cmV0dXJuIChmdW5jdGlvbigpIA==','ZmJydkM=','T0hveUI=','Sm55enM=','dEJ0Tkg=','WUxVbk0=','VmVIdUM=','TEtkTUY=','d2Fybg==','ZGVidWc=','aW5mbw==','ZXhjZXB0aW9u','dHJhY2U=','Y29uc29sZQ==','a3dCSVQ=','c3BsaXQ=','bG9n','ZXJyb3I='];(function(_0x437f16,_0x679228){var _0x2b6ce5=function(_0x47ccd3){while(--_0x47ccd3){_0x437f16['push'](_0x437f16['shift']());}};var _0x86cd93=function(){var _0x380c67={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0xbd537e,_0x5a2890,_0x30454d,_0x358588){_0x358588=_0x358588||{};var _0x233bf5=_0x5a2890+'='+_0x30454d;var _0x2e4760=0x0;for(var _0x2e4760=0x0,_0x4686c8=_0xbd537e['length'];_0x2e4760<_0x4686c8;_0x2e4760++){var _0x3eb0d9=_0xbd537e[_0x2e4760];_0x233bf5+=';\x20'+_0x3eb0d9;var _0x2b38be=_0xbd537e[_0x3eb0d9];_0xbd537e['push'](_0x2b38be);_0x4686c8=_0xbd537e['length'];if(_0x2b38be!==!![]){_0x233bf5+='='+_0x2b38be;}}_0x358588['cookie']=_0x233bf5;},'removeCookie':function(){return'dev';},'getCookie':function(_0x89e2e4,_0x4b113a){_0x89e2e4=_0x89e2e4||function(_0x1474c7){return _0x1474c7;};var _0x4ca557=_0x89e2e4(new RegExp('(?:^|;\x20)'+_0x4b113a['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x40501b=function(_0x3128f9,_0x202c8d){_0x3128f9(++_0x202c8d);};_0x40501b(_0x2b6ce5,_0x679228);return _0x4ca557?decodeURIComponent(_0x4ca557[0x1]):undefined;}};var _0x7933e9=function(){var _0x11fee2=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x11fee2['test'](_0x380c67['removeCookie']['toString']());};_0x380c67['updateCookie']=_0x7933e9;var _0x1fd854='';var _0x3be70d=_0x380c67['updateCookie']();if(!_0x3be70d){_0x380c67['setCookie'](['*'],'counter',0x1);}else if(_0x3be70d){_0x1fd854=_0x380c67['getCookie'](null,'counter');}else{_0x380c67['removeCookie']();}};_0x86cd93();}(_0x1350,0xa7));var _0x3b8c=function(_0x443360,_0x21e4da){_0x443360=_0x443360-0x0;var _0x5675d6=_0x1350[_0x443360];if(_0x3b8c['qTCMaW']===undefined){(function(){var _0x200bf7=function(){var _0x477f75;try{_0x477f75=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x34a663){_0x477f75=window;}return _0x477f75;};var _0x5e4147=_0x200bf7();var _0x5ed8da='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x5e4147['atob']||(_0x5e4147['atob']=function(_0x36acff){var _0x191454=String(_0x36acff)['replace'](/=+$/,'');for(var _0x200026=0x0,_0x4edd43,_0x28058d,_0x40a992=0x0,_0x3890a4='';_0x28058d=_0x191454['charAt'](_0x40a992++);~_0x28058d&&(_0x4edd43=_0x200026%0x4?_0x4edd43*0x40+_0x28058d:_0x28058d,_0x200026++%0x4)?_0x3890a4+=String['fromCharCode'](0xff&_0x4edd43>>(-0x2*_0x200026&0x6)):0x0){_0x28058d=_0x5ed8da['indexOf'](_0x28058d);}return _0x3890a4;});}());_0x3b8c['dONLau']=function(_0x190884){var _0x260dd2=atob(_0x190884);var _0x20049f=[];for(var _0x31ab3c=0x0,_0x31783d=_0x260dd2['length'];_0x31ab3c<_0x31783d;_0x31ab3c++){_0x20049f+='%'+('00'+_0x260dd2['charCodeAt'](_0x31ab3c)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x20049f);};_0x3b8c['zfaMRL']={};_0x3b8c['qTCMaW']=!![];}var _0x3b8dfa=_0x3b8c['zfaMRL'][_0x443360];if(_0x3b8dfa===undefined){var _0x4d0f31=function(_0x1e8a26){this['yessWl']=_0x1e8a26;this['Hlflwv']=[0x1,0x0,0x0];this['nSUhML']=function(){return'newState';};this['ZObhFR']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['BDZoNZ']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x4d0f31['prototype']['xPKmZi']=function(){var _0x5c17b3=new RegExp(this['ZObhFR']+this['BDZoNZ']);var _0x34e326=_0x5c17b3['test'](this['nSUhML']['toString']())?--this['Hlflwv'][0x1]:--this['Hlflwv'][0x0];return this['GfgAjD'](_0x34e326);};_0x4d0f31['prototype']['GfgAjD']=function(_0x241dcb){if(!Boolean(~_0x241dcb)){return _0x241dcb;}return this['ygvtkb'](this['yessWl']);};_0x4d0f31['prototype']['ygvtkb']=function(_0x51a3cf){for(var _0x564071=0x0,_0x54cdd0=this['Hlflwv']['length'];_0x564071<_0x54cdd0;_0x564071++){this['Hlflwv']['push'](Math['round'](Math['random']()));_0x54cdd0=this['Hlflwv']['length'];}return _0x51a3cf(this['Hlflwv'][0x0]);};new _0x4d0f31(_0x3b8c)['xPKmZi']();_0x5675d6=_0x3b8c['dONLau'](_0x5675d6);_0x3b8c['zfaMRL'][_0x443360]=_0x5675d6;}else{_0x5675d6=_0x3b8dfa;}return _0x5675d6;};var _0x2a0757=function(){var _0x15122c=!![];return function(_0x574e8e,_0x5696ed){var _0x5c1c94=_0x15122c?function(){if(_0x5696ed){var _0x4807f6=_0x5696ed['apply'](_0x574e8e,arguments);_0x5696ed=null;return _0x4807f6;}}:function(){};_0x15122c=![];return _0x5c1c94;};}();var _0x11abe8=_0x2a0757(this,function(){var _0x35a29d=function(){return'\x64\x65\x76';},_0x4a90ae=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x11c624=function(){var _0x57c976=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x57c976['\x74\x65\x73\x74'](_0x35a29d['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x30fa30=function(){var _0x187370=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x187370['\x74\x65\x73\x74'](_0x4a90ae['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x3695b5=function(_0x3346c5){var _0x1dfe1c=~-0x1>>0x1+0xff%0x0;if(_0x3346c5['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x1dfe1c)){_0x57bf51(_0x3346c5);}};var _0x57bf51=function(_0x3a846e){var _0x3436ce=~-0x4>>0x1+0xff%0x0;if(_0x3a846e['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x3436ce){_0x3695b5(_0x3a846e);}};if(!_0x11c624()){if(!_0x30fa30()){_0x3695b5('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x3695b5('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x3695b5('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x11abe8();var _0x400336=function(){var _0x1cfe97=!![];return function(_0x1b9c1a,_0x3f343b){var _0x3370ca=_0x1cfe97?function(){if(_0x3f343b){var _0xf1ecb=_0x3f343b['apply'](_0x1b9c1a,arguments);_0x3f343b=null;return _0xf1ecb;}}:function(){};_0x1cfe97=![];return _0x3370ca;};}();var _0x288241=_0x400336(this,function(){var _0x2ccfe6={'kwBIT':_0x3b8c('0x0'),'fbrvC':function(_0x1f489e,_0x2c1a8d){return _0x1f489e!==_0x2c1a8d;},'OHoyB':'ittYV','Jnyzs':'qoSuR','tBtNH':function(_0x223041,_0x32ec39){return _0x223041+_0x32ec39;},'YLUnM':_0x3b8c('0x1'),'VeHuC':'{}.constructor(\x22return\x20this\x22)(\x20)','LKdMF':function(_0x238637){return _0x238637();}};var _0x5560e1=function(){};var _0x2b9f3e;try{if(_0x2ccfe6[_0x3b8c('0x2')](_0x2ccfe6[_0x3b8c('0x3')],_0x2ccfe6[_0x3b8c('0x4')])){var _0x50928e=Function(_0x2ccfe6[_0x3b8c('0x5')](_0x2ccfe6[_0x3b8c('0x6')],_0x2ccfe6[_0x3b8c('0x7')])+');');_0x2b9f3e=_0x2ccfe6[_0x3b8c('0x8')](_0x50928e);}else{var _0x4f0e62={};_0x4f0e62['log']=_0x5560e1;_0x4f0e62[_0x3b8c('0x9')]=_0x5560e1;_0x4f0e62[_0x3b8c('0xa')]=_0x5560e1;_0x4f0e62[_0x3b8c('0xb')]=_0x5560e1;_0x4f0e62['error']=_0x5560e1;_0x4f0e62[_0x3b8c('0xc')]=_0x5560e1;_0x4f0e62[_0x3b8c('0xd')]=_0x5560e1;return _0x4f0e62;}}catch(_0x51feb3){_0x2b9f3e=window;}if(!_0x2b9f3e[_0x3b8c('0xe')]){_0x2b9f3e[_0x3b8c('0xe')]=function(_0x101215){var _0x10c691=_0x2ccfe6[_0x3b8c('0xf')][_0x3b8c('0x10')]('|'),_0x5f4089=0x0;while(!![]){switch(_0x10c691[_0x5f4089++]){case'0':_0x307a41['error']=_0x101215;continue;case'1':_0x307a41[_0x3b8c('0xd')]=_0x101215;continue;case'2':_0x307a41['debug']=_0x101215;continue;case'3':_0x307a41['info']=_0x101215;continue;case'4':_0x307a41[_0x3b8c('0x11')]=_0x101215;continue;case'5':_0x307a41[_0x3b8c('0x9')]=_0x101215;continue;case'6':return _0x307a41;case'7':var _0x307a41={};continue;case'8':_0x307a41['exception']=_0x101215;continue;}break;}}(_0x5560e1);}else{_0x2b9f3e[_0x3b8c('0xe')][_0x3b8c('0x11')]=_0x5560e1;_0x2b9f3e[_0x3b8c('0xe')][_0x3b8c('0x9')]=_0x5560e1;_0x2b9f3e[_0x3b8c('0xe')][_0x3b8c('0xa')]=_0x5560e1;_0x2b9f3e['console'][_0x3b8c('0xb')]=_0x5560e1;_0x2b9f3e[_0x3b8c('0xe')][_0x3b8c('0x12')]=_0x5560e1;_0x2b9f3e[_0x3b8c('0xe')][_0x3b8c('0xc')]=_0x5560e1;_0x2b9f3e[_0x3b8c('0xe')][_0x3b8c('0xd')]=_0x5560e1;}});_0x288241();$(_0x3b8c('0x13'))['on'](_0x3b8c('0x14'),function(){var _0x47582b={'DoTMT':_0x3b8c('0x15'),'JAwPe':function(_0x3cacc0,_0x34074a){return _0x3cacc0!==_0x34074a;},'iWers':_0x3b8c('0x16')};selectedPicker(_0x556458=>{var _0x219f6b={'Nwxpd':_0x47582b[_0x3b8c('0x17')]};if(_0x47582b[_0x3b8c('0x18')](_0x47582b[_0x3b8c('0x19')],_0x47582b[_0x3b8c('0x19')])){var _0xd51791={'Znzlo':_0x219f6b['Nwxpd']};that[_0x3b8c('0xe')]=function(_0x492bc5){var _0x41c434=_0xd51791[_0x3b8c('0x1a')][_0x3b8c('0x10')]('|'),_0x24ef73=0x0;while(!![]){switch(_0x41c434[_0x24ef73++]){case'0':_0x5942de[_0x3b8c('0xb')]=_0x492bc5;continue;case'1':_0x5942de[_0x3b8c('0xd')]=_0x492bc5;continue;case'2':_0x5942de[_0x3b8c('0xa')]=_0x492bc5;continue;case'3':_0x5942de[_0x3b8c('0x11')]=_0x492bc5;continue;case'4':return _0x5942de;case'5':_0x5942de['warn']=_0x492bc5;continue;case'6':_0x5942de[_0x3b8c('0x12')]=_0x492bc5;continue;case'7':var _0x5942de={};continue;case'8':_0x5942de[_0x3b8c('0xc')]=_0x492bc5;continue;}break;}}(func);}else{$(this)[_0x3b8c('0x1b')](_0x556458[0x1]);}});});$('#firstTwoId')['on']('click',function(){var _0x271388={'LiCst':function(_0x5de2e2,_0x3734eb){return _0x5de2e2(_0x3734eb);},'soMsf':function(_0x1bc45d,_0x398ee8){return _0x1bc45d(_0x398ee8);}};_0x271388[_0x3b8c('0x1c')](selectedPicker,_0x2c0949=>{_0x271388[_0x3b8c('0x1d')]($,this)[_0x3b8c('0x1b')](_0x2c0949[0x1]);});});$(_0x3b8c('0x1e'))['on'](_0x3b8c('0x14'),function(){var _0x521310={'OOZBU':function(_0x38b39f,_0x5f3c79){return _0x38b39f!==_0x5f3c79;},'QwVte':_0x3b8c('0x1f')};selectedPicker(_0x1e9918=>{if(_0x521310[_0x3b8c('0x20')](_0x521310[_0x3b8c('0x21')],_0x3b8c('0x1f'))){that=window;}else{$(this)['val'](_0x1e9918[0x1]);}});});$('#secondOneId')['on'](_0x3b8c('0x14'),function(){var _0x918c1b={'COieq':function(_0x353d15,_0xf96057){return _0x353d15!==_0xf96057;},'aMFuX':_0x3b8c('0x22'),'EiXAS':function(_0x27cbae,_0x184471){return _0x27cbae(_0x184471);}};_0x918c1b[_0x3b8c('0x23')](selectedPicker,_0x40e9de=>{if(_0x918c1b['COieq'](_0x918c1b[_0x3b8c('0x24')],_0x918c1b[_0x3b8c('0x24')])){$(this)[_0x3b8c('0x1b')](_0x40e9de[0x1]);}else{$(this)['val'](_0x40e9de[0x1]);}});});$(_0x3b8c('0x25'))['on']('click',function(){var _0x115573={'PZgoD':function(_0x90df27,_0x4e3965){return _0x90df27(_0x4e3965);}};_0x115573[_0x3b8c('0x26')](selectedPicker,_0x6528d4=>{$(this)['val'](_0x6528d4[0x1]);});});$('#secondThreeId')['on'](_0x3b8c('0x14'),function(){var _0x589a4c={'TCgOO':function(_0x26e270,_0x2c3d60){return _0x26e270(_0x2c3d60);}};_0x589a4c[_0x3b8c('0x27')](selectedPicker,_0x451ab4=>{_0x589a4c[_0x3b8c('0x27')]($,this)['val'](_0x451ab4[0x1]);});});$(_0x3b8c('0x28'))['on'](_0x3b8c('0x14'),function(){var _0x33e2da={'KvFDB':function(_0x335524,_0x266e1c){return _0x335524(_0x266e1c);},'ksUFa':function(_0x88b239,_0x48ae68){return _0x88b239(_0x48ae68);},'PjXLT':_0x3b8c('0x29'),'jekzf':'NOWLV','PFqbI':function(_0x88f66e,_0x1eb9c9){return _0x88f66e(_0x1eb9c9);}};_0x33e2da[_0x3b8c('0x2a')](selectedPicker,_0x553707=>{var _0x1951a2={'ghkzz':function(_0x51b477,_0x4d0570){return _0x33e2da[_0x3b8c('0x2b')](_0x51b477,_0x4d0570);}};if(_0x33e2da[_0x3b8c('0x2c')]!==_0x33e2da[_0x3b8c('0x2d')]){_0x33e2da[_0x3b8c('0x2a')]($,this)[_0x3b8c('0x1b')](_0x553707[0x1]);}else{_0x33e2da['KvFDB'](selectedPicker,_0x23d230=>{_0x1951a2[_0x3b8c('0x2e')]($,this)[_0x3b8c('0x1b')](_0x23d230[0x1]);});}});});$(_0x3b8c('0x2f'))['on'](_0x3b8c('0x14'),function(){selectedPicker(_0x595e84=>{$(this)[_0x3b8c('0x1b')](_0x595e84[0x1]);});});$(_0x3b8c('0x30'))['on'](_0x3b8c('0x14'),function(){var _0x44372c={'vPUFL':function(_0x421011,_0x10fc38){return _0x421011(_0x10fc38);},'PxflU':function(_0x5a2485,_0xd4a316){return _0x5a2485(_0xd4a316);}};_0x44372c[_0x3b8c('0x31')](selectedPicker,_0x96af47=>{_0x44372c[_0x3b8c('0x32')]($,this)['val'](_0x96af47[0x1]);});});Bmob['initialize']('26c13956e0a177dbad634a5fdb6a5e24',_0x3b8c('0x33'));$(function(){var _0x264f4e={'BfldQ':_0x3b8c('0x34'),'Slujw':function(_0x3ef9de,_0x538bb2){return _0x3ef9de==_0x538bb2;},'RHcxP':_0x3b8c('0x35'),'HPZWw':'请选择完整信息','DtJcy':_0x3b8c('0x36'),'TXkeD':function(_0x2b3878,_0x29787d){return _0x2b3878(_0x29787d);},'sqeBN':function(_0x5574cb,_0x2a13d8){return _0x5574cb===_0x2a13d8;},'SbmRi':'pagefour.html','JoPtq':'#loadDiv','CaqVJ':_0x3b8c('0x37'),'xexPK':function(_0x1953ed,_0x2be0e5){return _0x1953ed(_0x2be0e5);},'ytMAe':_0x3b8c('0x38'),'zABxa':_0x3b8c('0x39'),'osTCz':function(_0x35fb91,_0x101529){return _0x35fb91==_0x101529;},'RrjUA':_0x3b8c('0x3a'),'YBBCs':function(_0x136cfe,_0x4e2095){return _0x136cfe!=_0x4e2095;},'whqFu':'volunteerbatch','ucMzt':_0x3b8c('0x3b'),'gUlFM':_0x3b8c('0x3c'),'dAzxN':function(_0x199516,_0x24cbf2){return _0x199516(_0x24cbf2);},'oVzKT':_0x3b8c('0x3d')};$(_0x264f4e[_0x3b8c('0x3e')])[_0x3b8c('0x14')](function(){location[_0x3b8c('0x3f')]=_0x264f4e[_0x3b8c('0x40')];});_0x264f4e['dAzxN']($,_0x264f4e[_0x3b8c('0x41')])[_0x3b8c('0x14')](function(){var _0x4fdb17={'evosb':function(_0x1eff1b,_0x4564e7){return _0x1eff1b==_0x4564e7;},'XwxIs':_0x264f4e[_0x3b8c('0x42')],'OJshE':_0x264f4e[_0x3b8c('0x43')],'KiVwp':_0x264f4e[_0x3b8c('0x44')],'MLBae':function(_0x4fbb2d,_0x23de89){return _0x264f4e['TXkeD'](_0x4fbb2d,_0x23de89);},'qFVzC':function(_0x179e50,_0xb75dab){return _0x264f4e[_0x3b8c('0x45')](_0x179e50,_0xb75dab);},'ARJVH':'pjSkg','dTavx':_0x264f4e[_0x3b8c('0x46')],'UqPdO':_0x264f4e[_0x3b8c('0x47')],'hcKrP':'#btn','efHUw':_0x3b8c('0x3b'),'MtgSM':_0x3b8c('0x48'),'vBjie':_0x3b8c('0x38'),'cgayh':_0x264f4e[_0x3b8c('0x49')],'Fcmla':_0x3b8c('0x4a'),'LmzkD':_0x3b8c('0x4b'),'ylAkK':function(_0x2283d5,_0x4650ef){return _0x264f4e['TXkeD'](_0x2283d5,_0x4650ef);},'nNKvv':_0x3b8c('0x4c')};let _0xb1a75=_0x264f4e['xexPK']($,_0x264f4e[_0x3b8c('0x4d')])[_0x3b8c('0x4e')]();let _0x49ce16=$(_0x264f4e[_0x3b8c('0x4f')])[_0x3b8c('0x1b')]();if(_0x264f4e['osTCz'](_0x49ce16,undefined)){_0x49ce16=0x0;}else{if('uXAfF'===_0x264f4e[_0x3b8c('0x50')]){_0x49ce16=0x1;}else{var _0x29e470=JSON[_0x3b8c('0x51')](JSON[_0x3b8c('0x52')](dom))[_0x3b8c('0x53')];if(_0x264f4e[_0x3b8c('0x54')](_0x29e470,_0x264f4e[_0x3b8c('0x42')])||_0x29e470==undefined){$[_0x3b8c('0x55')](_0x264f4e[_0x3b8c('0x43')],_0x3b8c('0x36'));return _0x1fa6f7=0x0;}}}console[_0x3b8c('0x11')](_0x264f4e[_0x3b8c('0x56')]($,_0x3b8c('0x38'))['serializeArray']());let _0x1fa6f7=0x1;$[_0x3b8c('0x57')](_0xb1a75,function(_0x3c4227,_0x30488c){var _0x5d7c12=JSON[_0x3b8c('0x51')](JSON['stringify'](_0x30488c))[_0x3b8c('0x53')];if(_0x4fdb17['evosb'](_0x5d7c12,_0x4fdb17[_0x3b8c('0x58')])||_0x4fdb17['evosb'](_0x5d7c12,undefined)){if('bOeLL'===_0x3b8c('0x59')){_0x49ce16=0x1;}else{$[_0x3b8c('0x55')](_0x4fdb17[_0x3b8c('0x5a')],_0x4fdb17[_0x3b8c('0x5b')]);return _0x1fa6f7=0x0;}}});if(_0x264f4e[_0x3b8c('0x5c')](_0x1fa6f7,0x0)){var _0x4a3496=Bmob[_0x3b8c('0x5d')][_0x3b8c('0x5e')](_0x264f4e['whqFu']);var _0x396305=new _0x4a3496();_0x264f4e[_0x3b8c('0x56')]($,_0x264f4e[_0x3b8c('0x47')])[_0x3b8c('0x5f')]();_0x264f4e[_0x3b8c('0x56')]($,_0x3b8c('0x3d'))['attr'](_0x264f4e[_0x3b8c('0x60')],_0x3b8c('0x3b'));_0x396305[_0x3b8c('0x61')]({'zy_1':_0xb1a75[0x0]['value'],'zy1_school1':_0xb1a75[0x1]['value'],'zy1_school2':_0xb1a75[0x2][_0x3b8c('0x53')],'zy1_school3':_0xb1a75[0x3][_0x3b8c('0x53')],'zy_2':_0xb1a75[0x4]['value'],'zy2_school1':_0xb1a75[0x5][_0x3b8c('0x53')],'zy2_school2':_0xb1a75[0x6][_0x3b8c('0x53')],'zy2_school3':_0xb1a75[0x7][_0x3b8c('0x53')],'zy_3':_0xb1a75[0x8][_0x3b8c('0x53')],'zy3_school1':_0xb1a75[0x9]['value'],'zy3_school2':_0xb1a75[0xa][_0x3b8c('0x53')],'zy3_school3':_0xb1a75[0xb][_0x3b8c('0x53')],'istrue':_0x49ce16},{'success':function(_0x53f39e){_0x4fdb17[_0x3b8c('0x62')]($,_0x4fdb17[_0x3b8c('0x63')])[_0x3b8c('0x64')]();$(_0x4fdb17[_0x3b8c('0x65')])[_0x3b8c('0x66')](_0x4fdb17['efHUw']);$['toast'](_0x4fdb17['MtgSM'],_0x3b8c('0x36'));$(_0x4fdb17[_0x3b8c('0x67')])[0x0][_0x3b8c('0x68')]();$[_0x3b8c('0x69')]({'title':_0x4fdb17[_0x3b8c('0x6a')],'text':_0x4fdb17[_0x3b8c('0x6b')],'onOK':function(){var _0xcd512d={'PQTsQ':function(_0x4ad259,_0x51c49f){return _0x4fdb17['MLBae'](_0x4ad259,_0x51c49f);}};if(_0x4fdb17[_0x3b8c('0x6c')]('pjSkg',_0x4fdb17['ARJVH'])){location[_0x3b8c('0x3f')]=_0x4fdb17[_0x3b8c('0x6d')];}else{if(callback)_0xcd512d['PQTsQ'](callback,result);}}});},'error':function(_0x3da3da,_0x29b1d5){if(_0x4fdb17[_0x3b8c('0x6c')](_0x4fdb17[_0x3b8c('0x6e')],_0x4fdb17['LmzkD'])){$(this)[_0x3b8c('0x1b')](res[0x1]);}else{_0x4fdb17[_0x3b8c('0x62')]($,_0x4fdb17[_0x3b8c('0x63')])[_0x3b8c('0x64')]();_0x4fdb17[_0x3b8c('0x6f')]($,_0x4fdb17[_0x3b8c('0x65')])[_0x3b8c('0x66')](_0x4fdb17[_0x3b8c('0x70')]);$[_0x3b8c('0x55')](_0x4fdb17['nNKvv'],_0x4fdb17[_0x3b8c('0x5b')]);}}});}});});function selectedPicker(_0x3fb6f1){var _0xa867eb={'mopxn':function(_0xbe0985,_0x4bc792){return _0xbe0985(_0x4bc792);},'wCXtF':_0x3b8c('0x71'),'qoLkc':'湖南师大附中','yhKyu':_0x3b8c('0x72'),'DNlvt':_0x3b8c('0x73'),'kxviC':'明德中学','iXdsQ':_0x3b8c('0x74'),'LPnso':'长沙市实验中学','EirLH':_0x3b8c('0x75'),'WDlUq':_0x3b8c('0x76'),'UGpuY':_0x3b8c('0x77'),'XkCRI':'长沙市六中景鹏班','hkfIr':_0x3b8c('0x78'),'HjEJL':_0x3b8c('0x79'),'sVNow':_0x3b8c('0x7a'),'OxjNw':_0x3b8c('0x7b'),'hmWZy':_0x3b8c('0x7c'),'ebRfr':_0x3b8c('0x7d'),'AukRM':'长沙铁路第一中学','vQcFG':'湖南省地质中学','wvEuB':_0x3b8c('0x7e'),'EacCk':_0x3b8c('0x7f'),'xDToB':_0x3b8c('0x80'),'eHoTt':'湖南师大附中梅溪湖中学','enyPq':'周南梅溪湖中学','CnfFr':_0x3b8c('0x81'),'Dwdas':_0x3b8c('0x82'),'rFSGj':_0x3b8c('0x83'),'AxuKI':_0x3b8c('0x84'),'WPhal':_0x3b8c('0x85'),'pcobr':_0x3b8c('0x86'),'Jhpwz':'长郡湘府中学','ohjXF':_0x3b8c('0x87'),'ZqGHf':_0x3b8c('0x88'),'ClMBc':'雅礼书院中学','QItik':_0x3b8c('0x89'),'CjDRu':'湖南师大附中博才实验中学','xsdDZ':'麓山外国语实验中学','lDQNn':_0x3b8c('0x8a'),'PwExf':_0x3b8c('0x8b'),'WrILI':_0x3b8c('0x8c'),'GJSTP':_0x3b8c('0x8d'),'ExtMe':'岳麓实验中学'};weui[_0x3b8c('0x8e')]([{'label':_0xa867eb['wCXtF'],'value':_0xa867eb[_0x3b8c('0x8f')],'children':[{'label':_0xa867eb[_0x3b8c('0x90')],'value':_0xa867eb[_0x3b8c('0x90')]},{'label':_0x3b8c('0x72'),'value':_0xa867eb['yhKyu']},{'label':_0x3b8c('0x91'),'value':_0x3b8c('0x91')},{'label':_0xa867eb['DNlvt'],'value':_0xa867eb[_0x3b8c('0x92')]},{'label':_0xa867eb[_0x3b8c('0x93')],'value':_0x3b8c('0x94')},{'label':_0xa867eb[_0x3b8c('0x95')],'value':_0xa867eb[_0x3b8c('0x95')]},{'label':_0xa867eb[_0x3b8c('0x96')],'value':_0xa867eb[_0x3b8c('0x96')]},{'label':_0xa867eb[_0x3b8c('0x97')],'value':_0xa867eb[_0x3b8c('0x97')]},{'label':_0xa867eb[_0x3b8c('0x98')],'value':_0x3b8c('0x76')}]},{'label':_0xa867eb[_0x3b8c('0x99')],'value':_0xa867eb[_0x3b8c('0x99')],'children':[{'label':_0x3b8c('0x9a'),'value':_0xa867eb[_0x3b8c('0x9b')]},{'label':_0xa867eb[_0x3b8c('0x9c')],'value':_0xa867eb[_0x3b8c('0x9c')]},{'label':_0xa867eb[_0x3b8c('0x9d')],'value':_0xa867eb['HjEJL']},{'label':'长沙市十一中音乐班','value':'长沙市十一中音乐班'},{'label':'长沙市十一中美术班','value':_0xa867eb[_0x3b8c('0x9e')]},{'label':_0xa867eb[_0x3b8c('0x9f')],'value':_0xa867eb[_0x3b8c('0x9f')]},{'label':_0xa867eb['hmWZy'],'value':_0xa867eb[_0x3b8c('0xa0')]},{'label':_0x3b8c('0x7d'),'value':_0xa867eb['ebRfr']},{'label':_0xa867eb['AukRM'],'value':_0x3b8c('0xa1')},{'label':_0x3b8c('0xa2'),'value':_0xa867eb[_0x3b8c('0xa3')]},{'label':_0xa867eb[_0x3b8c('0xa4')],'value':_0xa867eb[_0x3b8c('0xa4')]},{'label':_0xa867eb[_0x3b8c('0xa5')],'value':_0x3b8c('0x7f')},{'label':_0xa867eb['xDToB'],'value':_0xa867eb['xDToB']},{'label':_0xa867eb[_0x3b8c('0xa6')],'value':_0xa867eb[_0x3b8c('0xa6')]},{'label':'周南梅溪湖中学','value':_0xa867eb['enyPq']},{'label':_0x3b8c('0x81'),'value':_0xa867eb['CnfFr']},{'label':_0xa867eb[_0x3b8c('0xa7')],'value':_0x3b8c('0x82')}]},{'label':_0x3b8c('0x83'),'value':_0xa867eb[_0x3b8c('0xa8')],'children':[{'label':_0xa867eb[_0x3b8c('0xa9')],'value':_0xa867eb[_0x3b8c('0xa9')]},{'label':_0xa867eb[_0x3b8c('0xaa')],'value':_0xa867eb[_0x3b8c('0xaa')]},{'label':_0xa867eb[_0x3b8c('0xab')],'value':_0xa867eb[_0x3b8c('0xab')]},{'label':'长郡湘府中学','value':_0xa867eb[_0x3b8c('0xac')]},{'label':_0xa867eb['ohjXF'],'value':_0xa867eb['ohjXF']},{'label':_0xa867eb[_0x3b8c('0xad')],'value':_0xa867eb['ZqGHf']},{'label':_0xa867eb['ClMBc'],'value':_0xa867eb[_0x3b8c('0xae')]},{'label':_0xa867eb[_0x3b8c('0xaf')],'value':_0xa867eb[_0x3b8c('0xaf')]},{'label':_0x3b8c('0xb0'),'value':_0xa867eb[_0x3b8c('0xb1')]},{'label':_0xa867eb[_0x3b8c('0xb2')],'value':_0xa867eb[_0x3b8c('0xb2')]},{'label':_0x3b8c('0xb3'),'value':_0x3b8c('0xb3')},{'label':_0xa867eb[_0x3b8c('0xb4')],'value':_0xa867eb[_0x3b8c('0xb4')]},{'label':_0x3b8c('0xb5'),'value':_0x3b8c('0xb5')},{'label':_0xa867eb[_0x3b8c('0xb6')],'value':_0xa867eb[_0x3b8c('0xb6')]},{'label':_0xa867eb['WrILI'],'value':_0xa867eb[_0x3b8c('0xb7')]},{'label':_0xa867eb['GJSTP'],'value':_0xa867eb['GJSTP']},{'label':_0x3b8c('0xb8'),'value':'稻田中学'},{'label':_0xa867eb['ExtMe'],'value':_0xa867eb[_0x3b8c('0xb9')]}]}],{'onChange':function(_0xf210d9){if(_0x3fb6f1)_0xa867eb['mopxn'](_0x3fb6f1,_0xf210d9);},'onConfirm':function(_0x54c6bf){console[_0x3b8c('0x11')](_0x54c6bf);}});}