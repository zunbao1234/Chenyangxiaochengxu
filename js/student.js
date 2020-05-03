/* Bmob.initialize("26c13956e0a177dbad634a5fdb6a5e24", "a52e71b567544c595c6774e19cb062fe");

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
					var a =JSON.parse(JSON.stringify(obj));
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
} */
var _0x33f6=['V1B3SkQ=','SlVzd1k=','U1Jqa2o=','SmFSanE=','WW5Hc0Y=','c3BsaXQ=','d2Fybg==','ZGVidWc=','dHJhY2U=','bG9n','aW5mbw==','akhHTUw=','UVlFQm8=','aFNDZkY=','ZlpKSGg=','TGhmb3o=','cGFyc2U=','c3RyaW5naWZ5','T09iT1Q=','Y0h5Sm4=','bGVuZ3Ro','dG9hc3Q=','eGhWVUQ=','Z2pqbnk=','Y29uc29sZQ==','enVNTVU=','YXBwbHk=','d3NoRnA=','ZVBwQ1A=','Mnw4fDR8NnwzfDF8MHw3fDU=','ZXhjZXB0aW9u','ZXJyb3I=','VmZTdHI=','cnV5dFo=','NHwyfDN8NXwxfDB8Ng==','MjZjMTM5NTZlMGExNzdkYmFkNjM0YTVmZGI2YTVlMjQ=','YTUyZTcxYjU2NzU0NGM1OTVjNjc3NGUxOWNiMDYyZmU=','I2xvYWREaXY=','I2J0bg==','cmVzdWx0R3JhZGU=','5o+Q5Lqk5oiQ5Yqf','Zm9ybQ==','cGFnZXR3by5odG1s','W25hbWU9c3R1UGhvbmVd','5omL5py65Y+36L6T5YWl5pyJ6K+v','Wlh2emg=','aW5kZXguaHRtbA==','V05Lc2o=','Q3dnSEc=','R2h3cmE=','c2VyaWFsaXplQXJyYXk=','cHlrckE=','UkRUckM=','dmFs','dGVzdA==','Z0VRVWs=','dUhhbEM=','a1FpSUs=','T2JqZWN0','ZXh0ZW5k','c3R1ZGVudFNjb3Jl','YXR0cg==','c2F2ZQ==','dmFsdWU=','ZVZGRUI=','UXlNTEs=','aGlkZQ==','ZGlzYWJsZWQ=','ZXJZcWk=','Vm1vQVI=','WkxsTlI=','cmVzZXQ=','aHJlZg==','cnFQR08=','ZGVDRXI=','eFRFSkc=','Y2xpY2s=','VnBSWlU=','aVN4YUk=','elZqTlc=','a0FySkE=','cHVzaA==','d21oQm8=','c2V0SXRlbQ==','QnV4UEo=','eVVHUHE=','a2dqcnE=','SWlKYWY=','U0NYblU=','cVlwWUI=','SHhtZUE=','Y3JlYXRlIG9iamVjdCBmYWls','WUxRd1c=','Sm1FUkg=','WXRWcko=','VkxBT1k=','dGFoSUU=','Mnw3fDN8NHw4fDZ8MHw1fDE=','6K+35aGr5YaZ5a6M5pW05L+h5oGv','dGV4dA==','enlCaWQ=','TGVMY0I=','T05GSUI='];(function(_0x26090a,_0x325782){var _0x4fec3a=function(_0x42571e){while(--_0x42571e){_0x26090a['push'](_0x26090a['shift']());}};var _0x393d77=function(){var _0x36911e={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x4fed10,_0x2586ea,_0x23bec0,_0x555167){_0x555167=_0x555167||{};var _0x26fa9d=_0x2586ea+'='+_0x23bec0;var _0x272c84=0x0;for(var _0x272c84=0x0,_0x675b63=_0x4fed10['length'];_0x272c84<_0x675b63;_0x272c84++){var _0x52d54f=_0x4fed10[_0x272c84];_0x26fa9d+=';\x20'+_0x52d54f;var _0x32caec=_0x4fed10[_0x52d54f];_0x4fed10['push'](_0x32caec);_0x675b63=_0x4fed10['length'];if(_0x32caec!==!![]){_0x26fa9d+='='+_0x32caec;}}_0x555167['cookie']=_0x26fa9d;},'removeCookie':function(){return'dev';},'getCookie':function(_0x3f708e,_0x42dc96){_0x3f708e=_0x3f708e||function(_0xea5987){return _0xea5987;};var _0x15795f=_0x3f708e(new RegExp('(?:^|;\x20)'+_0x42dc96['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x11e8f5=function(_0x11cfae,_0x2a5644){_0x11cfae(++_0x2a5644);};_0x11e8f5(_0x4fec3a,_0x325782);return _0x15795f?decodeURIComponent(_0x15795f[0x1]):undefined;}};var _0x195cf9=function(){var _0x489044=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x489044['test'](_0x36911e['removeCookie']['toString']());};_0x36911e['updateCookie']=_0x195cf9;var _0x36f4af='';var _0x37adef=_0x36911e['updateCookie']();if(!_0x37adef){_0x36911e['setCookie'](['*'],'counter',0x1);}else if(_0x37adef){_0x36f4af=_0x36911e['getCookie'](null,'counter');}else{_0x36911e['removeCookie']();}};_0x393d77();}(_0x33f6,0x190));var _0x33fb=function(_0x3e0394,_0x1ecb35){_0x3e0394=_0x3e0394-0x0;var _0x2bf575=_0x33f6[_0x3e0394];if(_0x33fb['QhDFeh']===undefined){(function(){var _0x4dcb74=function(){var _0x2b16cf;try{_0x2b16cf=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x4462a0){_0x2b16cf=window;}return _0x2b16cf;};var _0x403324=_0x4dcb74();var _0x526931='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x403324['atob']||(_0x403324['atob']=function(_0x21fbdb){var _0x4c8cb8=String(_0x21fbdb)['replace'](/=+$/,'');for(var _0x366522=0x0,_0x2f4b71,_0x1ee996,_0x4b3fb7=0x0,_0x44e917='';_0x1ee996=_0x4c8cb8['charAt'](_0x4b3fb7++);~_0x1ee996&&(_0x2f4b71=_0x366522%0x4?_0x2f4b71*0x40+_0x1ee996:_0x1ee996,_0x366522++%0x4)?_0x44e917+=String['fromCharCode'](0xff&_0x2f4b71>>(-0x2*_0x366522&0x6)):0x0){_0x1ee996=_0x526931['indexOf'](_0x1ee996);}return _0x44e917;});}());_0x33fb['MjQOHA']=function(_0x62172b){var _0x29af38=atob(_0x62172b);var _0x451990=[];for(var _0x3b9b26=0x0,_0x294b15=_0x29af38['length'];_0x3b9b26<_0x294b15;_0x3b9b26++){_0x451990+='%'+('00'+_0x29af38['charCodeAt'](_0x3b9b26)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x451990);};_0x33fb['NEHrdy']={};_0x33fb['QhDFeh']=!![];}var _0x5c362b=_0x33fb['NEHrdy'][_0x3e0394];if(_0x5c362b===undefined){var _0x1f29d3=function(_0x131658){this['hyKYvX']=_0x131658;this['WLZzJq']=[0x1,0x0,0x0];this['dqPwgn']=function(){return'newState';};this['mxBzTK']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['iXmBxH']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x1f29d3['prototype']['sAdTZV']=function(){var _0x26ea1d=new RegExp(this['mxBzTK']+this['iXmBxH']);var _0x4f22f8=_0x26ea1d['test'](this['dqPwgn']['toString']())?--this['WLZzJq'][0x1]:--this['WLZzJq'][0x0];return this['xqtTgU'](_0x4f22f8);};_0x1f29d3['prototype']['xqtTgU']=function(_0x53400a){if(!Boolean(~_0x53400a)){return _0x53400a;}return this['qHYfHg'](this['hyKYvX']);};_0x1f29d3['prototype']['qHYfHg']=function(_0x5f21d6){for(var _0xe10247=0x0,_0x41f793=this['WLZzJq']['length'];_0xe10247<_0x41f793;_0xe10247++){this['WLZzJq']['push'](Math['round'](Math['random']()));_0x41f793=this['WLZzJq']['length'];}return _0x5f21d6(this['WLZzJq'][0x0]);};new _0x1f29d3(_0x33fb)['sAdTZV']();_0x2bf575=_0x33fb['MjQOHA'](_0x2bf575);_0x33fb['NEHrdy'][_0x3e0394]=_0x2bf575;}else{_0x2bf575=_0x5c362b;}return _0x2bf575;};var _0xf52d05=function(){var _0x14d6fc=!![];return function(_0x2b73d6,_0x56b73a){var _0x2ba973=_0x14d6fc?function(){if(_0x56b73a){var _0x33521a=_0x56b73a['apply'](_0x2b73d6,arguments);_0x56b73a=null;return _0x33521a;}}:function(){};_0x14d6fc=![];return _0x2ba973;};}();var _0x5ed605=_0xf52d05(this,function(){var _0x17650a=function(){return'\x64\x65\x76';},_0xbd054b=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x546ab3=function(){var _0x2fa129=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x2fa129['\x74\x65\x73\x74'](_0x17650a['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x25e3f6=function(){var _0x3309f4=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x3309f4['\x74\x65\x73\x74'](_0xbd054b['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0xcf70c2=function(_0xc3212b){var _0x1dff7b=~-0x1>>0x1+0xff%0x0;if(_0xc3212b['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x1dff7b)){_0x77963(_0xc3212b);}};var _0x77963=function(_0x5cdb8e){var _0x4ed9e5=~-0x4>>0x1+0xff%0x0;if(_0x5cdb8e['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x4ed9e5){_0xcf70c2(_0x5cdb8e);}};if(!_0x546ab3()){if(!_0x25e3f6()){_0xcf70c2('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0xcf70c2('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0xcf70c2('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x5ed605();var _0x4fb1ea=function(){var _0x48bd75={'VLAOY':'mVeZn','YLQwW':_0x33fb('0x0'),'JmERH':function(_0x45c4b7,_0x155781){return _0x45c4b7!==_0x155781;},'YtVrJ':'DGxke'};var _0x10b23d=!![];return function(_0x3b2e96,_0x587dd9){var _0x329fd5={'AbGCa':_0x48bd75[_0x33fb('0x1')],'tahIE':function(_0x2b5074,_0x54a644){return _0x2b5074+_0x54a644;}};if(_0x48bd75[_0x33fb('0x2')](_0x48bd75['YtVrJ'],_0x48bd75[_0x33fb('0x3')])){alert(_0x329fd5['AbGCa']);}else{var _0x143a6f=_0x10b23d?function(){if(_0x587dd9){if(_0x48bd75[_0x33fb('0x4')]===_0x48bd75[_0x33fb('0x4')]){var _0x48086f=_0x587dd9['apply'](_0x3b2e96,arguments);_0x587dd9=null;return _0x48086f;}else{C=_0x329fd5[_0x33fb('0x5')](xuanxian['C'],'C');}}}:function(){};_0x10b23d=![];return _0x143a6f;}};}();var _0x2e1e05=_0x4fb1ea(this,function(){var _0x5e2907={'lxScV':_0x33fb('0x6'),'OObOT':function(_0x5ca1e5,_0x515231){return _0x5ca1e5==_0x515231;},'cHyJn':function(_0x25e0b4,_0x38c9d2){return _0x25e0b4!=_0x38c9d2;},'xhVUD':_0x33fb('0x7'),'gjjny':_0x33fb('0x8'),'crKgC':function(_0x1e5c72,_0x54d23d){return _0x1e5c72+_0x54d23d;},'wshFp':function(_0x495e6b,_0x18ad95){return _0x495e6b===_0x18ad95;},'ePpCP':_0x33fb('0x9'),'SRjkj':function(_0x7f2c14,_0x4ecb87){return _0x7f2c14===_0x4ecb87;},'JaRjq':_0x33fb('0xa'),'YnGsF':_0x33fb('0xb'),'jHGML':function(_0x6f9244,_0x5e71f4){return _0x6f9244+_0x5e71f4;},'QYEBo':'return\x20(function()\x20','hSCfF':function(_0x1e5bdd){return _0x1e5bdd();},'fZJHh':function(_0x530f09,_0x172ce7){return _0x530f09!==_0x172ce7;},'Lhfoz':'wCgmH','zuMMU':'zhezu','VfStr':_0x33fb('0xc'),'ruytZ':_0x33fb('0xd')};var _0x5b4eb1=function(){};var _0xff8ada;try{if(_0x5e2907[_0x33fb('0xe')](_0x5e2907[_0x33fb('0xf')],_0x5e2907[_0x33fb('0x10')])){var _0x122a26=_0x5e2907['lxScV'][_0x33fb('0x11')]('|'),_0x3040cb=0x0;while(!![]){switch(_0x122a26[_0x3040cb++]){case'0':_0x18350a['exception']=_0x5b4eb1;continue;case'1':return _0x18350a;case'2':var _0x18350a={};continue;case'3':_0x18350a[_0x33fb('0x12')]=_0x5b4eb1;continue;case'4':_0x18350a[_0x33fb('0x13')]=_0x5b4eb1;continue;case'5':_0x18350a[_0x33fb('0x14')]=_0x5b4eb1;continue;case'6':_0x18350a['error']=_0x5b4eb1;continue;case'7':_0x18350a[_0x33fb('0x15')]=_0x5b4eb1;continue;case'8':_0x18350a[_0x33fb('0x16')]=_0x5b4eb1;continue;}break;}}else{var _0x191e4c=Function(_0x5e2907[_0x33fb('0x17')](_0x5e2907[_0x33fb('0x17')](_0x5e2907[_0x33fb('0x18')],'{}.constructor(\x22return\x20this\x22)(\x20)'),');'));_0xff8ada=_0x5e2907[_0x33fb('0x19')](_0x191e4c);}}catch(_0x5447a1){if(_0x5e2907[_0x33fb('0x1a')](_0x5e2907[_0x33fb('0x1b')],_0x5e2907[_0x33fb('0x1b')])){var _0x105fe4=JSON[_0x33fb('0x1c')](JSON[_0x33fb('0x1d')](dom))['value'];if(_0x105fe4==''||_0x5e2907[_0x33fb('0x1e')](_0x105fe4,undefined)||_0x5e2907[_0x33fb('0x1f')](arr[_0x33fb('0x20')],0xb)){$[_0x33fb('0x21')](_0x5e2907[_0x33fb('0x22')],_0x5e2907[_0x33fb('0x23')]);return![];}}else{_0xff8ada=window;}}if(!_0xff8ada[_0x33fb('0x24')]){if(_0x5e2907[_0x33fb('0x25')]!==_0x5e2907[_0x33fb('0x25')]){if(fn){var _0x5312d9=fn[_0x33fb('0x26')](context,arguments);fn=null;return _0x5312d9;}}else{_0xff8ada['console']=function(_0x702ef2){if(_0x5e2907[_0x33fb('0x27')](_0x5e2907[_0x33fb('0x28')],_0x33fb('0x9'))){var _0x394927=_0x33fb('0x29')[_0x33fb('0x11')]('|'),_0x134414=0x0;while(!![]){switch(_0x394927[_0x134414++]){case'0':_0x57b1ad[_0x33fb('0x2a')]=_0x702ef2;continue;case'1':_0x57b1ad[_0x33fb('0x2b')]=_0x702ef2;continue;case'2':var _0x57b1ad={};continue;case'3':_0x57b1ad['info']=_0x702ef2;continue;case'4':_0x57b1ad['warn']=_0x702ef2;continue;case'5':return _0x57b1ad;case'6':_0x57b1ad[_0x33fb('0x13')]=_0x702ef2;continue;case'7':_0x57b1ad['trace']=_0x702ef2;continue;case'8':_0x57b1ad[_0x33fb('0x15')]=_0x702ef2;continue;}break;}}else{B=_0x5e2907['crKgC'](xuanxian['B'],'B');}}(_0x5b4eb1);}}else{if(_0x5e2907[_0x33fb('0x1a')](_0x5e2907[_0x33fb('0x2c')],_0x5e2907[_0x33fb('0x2d')])){var _0x10c433=_0x33fb('0x2e')[_0x33fb('0x11')]('|'),_0x35cb5e=0x0;while(!![]){switch(_0x10c433[_0x35cb5e++]){case'0':_0xff8ada[_0x33fb('0x24')]['exception']=_0x5b4eb1;continue;case'1':_0xff8ada[_0x33fb('0x24')]['error']=_0x5b4eb1;continue;case'2':_0xff8ada[_0x33fb('0x24')][_0x33fb('0x12')]=_0x5b4eb1;continue;case'3':_0xff8ada[_0x33fb('0x24')][_0x33fb('0x13')]=_0x5b4eb1;continue;case'4':_0xff8ada[_0x33fb('0x24')][_0x33fb('0x15')]=_0x5b4eb1;continue;case'5':_0xff8ada['console'][_0x33fb('0x16')]=_0x5b4eb1;continue;case'6':_0xff8ada[_0x33fb('0x24')]['trace']=_0x5b4eb1;continue;}break;}}else{_0xff8ada['console'][_0x33fb('0x15')]=_0x5b4eb1;_0xff8ada[_0x33fb('0x24')][_0x33fb('0x12')]=_0x5b4eb1;_0xff8ada[_0x33fb('0x24')][_0x33fb('0x13')]=_0x5b4eb1;_0xff8ada[_0x33fb('0x24')][_0x33fb('0x16')]=_0x5b4eb1;_0xff8ada['console'][_0x33fb('0x2b')]=_0x5b4eb1;_0xff8ada[_0x33fb('0x24')][_0x33fb('0x2a')]=_0x5b4eb1;_0xff8ada[_0x33fb('0x24')]['trace']=_0x5b4eb1;}}});_0x2e1e05();Bmob['initialize'](_0x33fb('0x2f'),_0x33fb('0x30'));$(function(){var _0x239e8b={'uHalC':function(_0x367da0,_0x48f0a9){return _0x367da0==_0x48f0a9;},'JhKra':_0x33fb('0x7'),'eVFEB':function(_0x4c7fd6,_0xd02bed){return _0x4c7fd6(_0xd02bed);},'QyMLK':_0x33fb('0x31'),'CwgHG':_0x33fb('0x32'),'kArJA':function(_0x204c8f,_0x34766d){return _0x204c8f<_0x34766d;},'erYqi':function(_0x5ee445,_0x2e374a){return _0x5ee445(_0x2e374a);},'VmoAR':_0x33fb('0x33'),'ZLlNR':_0x33fb('0x34'),'Ghwra':_0x33fb('0x35'),'rqPGO':_0x33fb('0x36'),'deCEr':_0x33fb('0x0'),'SElcI':function(_0x32d3df,_0x17fc27){return _0x32d3df(_0x17fc27);},'pykrA':function(_0x5128f3,_0x1a4b1d){return _0x5128f3(_0x1a4b1d);},'RDTrC':_0x33fb('0x37'),'gEQUk':_0x33fb('0x38'),'kQiIK':'往下执行','WNKsj':function(_0x84b600,_0x5f48a7){return _0x84b600(_0x5f48a7);},'zVjNW':'disabled','wmhBo':function(_0x393d5b,_0x241203){return _0x393d5b+_0x241203;},'bVnPk':_0x33fb('0x8'),'tvAmG':function(_0x594ebe,_0x41ec4c){return _0x594ebe===_0x41ec4c;},'VpRZU':_0x33fb('0x39'),'iSxaI':_0x33fb('0x3a'),'xTEJG':function(_0x31d457,_0x6fb9ce){return _0x31d457(_0x6fb9ce);},'LhjRu':'#return'};_0x239e8b[_0x33fb('0x3b')]($,_0x239e8b[_0x33fb('0x3c')])['click'](function(){let _0x41e865=_0x239e8b['SElcI']($,_0x239e8b[_0x33fb('0x3d')])[_0x33fb('0x3e')]();var _0x202685=_0x239e8b[_0x33fb('0x3f')]($,_0x239e8b[_0x33fb('0x40')])[_0x33fb('0x41')]();let _0x22d4c1=/^((13[0-9])|(17[0-1,6-8])|(15[^4,\\D])|(18[0-9]))\d{8}$/;if(!_0x22d4c1[_0x33fb('0x42')](_0x202685)){$['toast'](_0x239e8b[_0x33fb('0x43')],_0x33fb('0x8'));return;}$['each'](_0x41e865,function(_0x1b369a,_0x3781b3){var _0x4cd2fb=JSON[_0x33fb('0x1c')](JSON['stringify'](_0x3781b3))['value'];if(_0x239e8b[_0x33fb('0x44')](_0x4cd2fb,'')||_0x239e8b[_0x33fb('0x44')](_0x4cd2fb,undefined)||_0x41e865[_0x33fb('0x20')]!=0xb){$[_0x33fb('0x21')](_0x239e8b['JhKra'],'text');return![];}});if(_0x239e8b['uHalC'](_0x41e865['length'],0xb)){console[_0x33fb('0x15')](_0x239e8b[_0x33fb('0x45')],_0x41e865);var _0x6da6f4=Bmob[_0x33fb('0x46')][_0x33fb('0x47')](_0x33fb('0x48'));var _0x51bd57=new _0x6da6f4();_0x239e8b[_0x33fb('0x3f')]($,_0x239e8b['QyMLK'])['show']();_0x239e8b[_0x33fb('0x3f')]($,_0x33fb('0x32'))[_0x33fb('0x49')]('disabled','disabled');_0x51bd57[_0x33fb('0x4a')]({'stu_name':_0x41e865[0x0][_0x33fb('0x4b')],'stu_pho':_0x41e865[0x1]['value'],'stu_hjlx':_0x41e865[0x2][_0x33fb('0x4b')],'stu_hjszq':_0x41e865[0x3][_0x33fb('0x4b')],'stu_sch':_0x41e865[0x4][_0x33fb('0x4b')],'sco_chi':_0x41e865[0x5][_0x33fb('0x4b')],'sco_math':_0x41e865[0x6][_0x33fb('0x4b')],'sco_english':_0x41e865[0x7][_0x33fb('0x4b')],'sco_wz':_0x41e865[0x8][_0x33fb('0x4b')],'sco_lz':_0x41e865[0x9][_0x33fb('0x4b')],'sco_sdt':_0x41e865[0xa][_0x33fb('0x4b')]},{'success':function(_0x7d016c){_0x239e8b[_0x33fb('0x4c')]($,_0x239e8b[_0x33fb('0x4d')])[_0x33fb('0x4e')]();_0x239e8b[_0x33fb('0x4c')]($,_0x239e8b['CwgHG'])['attr'](_0x33fb('0x4f'),'');var _0x579712=[];for(var _0x4f917c=0x0;_0x239e8b['kArJA'](_0x4f917c,0x6);_0x4f917c++){_0x579712['push'](_0x41e865[_0x4f917c+0x5][_0x33fb('0x4b')]);}let _0x1071c6=_0x239e8b[_0x33fb('0x50')](getWordCnt,_0x579712);localStorage['setItem'](_0x239e8b[_0x33fb('0x51')],panduan(JSON['parse'](JSON[_0x33fb('0x1d')](_0x1071c6))));$[_0x33fb('0x21')](_0x239e8b[_0x33fb('0x52')],_0x33fb('0x8'));$(_0x239e8b[_0x33fb('0x3d')])[0x0][_0x33fb('0x53')]();location[_0x33fb('0x54')]=_0x239e8b[_0x33fb('0x55')];},'error':function(_0x3dbbc4,_0x29aa6d){_0x239e8b[_0x33fb('0x50')](alert,_0x239e8b[_0x33fb('0x56')]);}});}});_0x239e8b[_0x33fb('0x57')]($,_0x239e8b['LhjRu'])[_0x33fb('0x58')](function(){if(_0x239e8b['tvAmG'](_0x239e8b[_0x33fb('0x59')],'ZXvzh')){location['href']=_0x239e8b[_0x33fb('0x5a')];}else{_0x239e8b[_0x33fb('0x3f')]($,_0x239e8b[_0x33fb('0x4d')])[_0x33fb('0x4e')]();_0x239e8b[_0x33fb('0x3b')]($,_0x33fb('0x32'))['attr'](_0x239e8b[_0x33fb('0x5b')],'');var _0x55f367=[];for(var _0x4a6788=0x0;_0x239e8b[_0x33fb('0x5c')](_0x4a6788,0x6);_0x4a6788++){_0x55f367[_0x33fb('0x5d')](arr[_0x239e8b[_0x33fb('0x5e')](_0x4a6788,0x5)][_0x33fb('0x4b')]);}let _0x314872=_0x239e8b[_0x33fb('0x3b')](getWordCnt,_0x55f367);localStorage[_0x33fb('0x5f')](_0x239e8b[_0x33fb('0x51')],_0x239e8b[_0x33fb('0x3b')](panduan,JSON[_0x33fb('0x1c')](JSON['stringify'](_0x314872))));$[_0x33fb('0x21')]('提交成功',_0x239e8b['bVnPk']);_0x239e8b[_0x33fb('0x3b')]($,_0x239e8b[_0x33fb('0x3d')])[0x0][_0x33fb('0x53')]();location[_0x33fb('0x54')]=_0x239e8b[_0x33fb('0x55')];}});});function getWordCnt(_0x540f71){var _0x3f8207={'BuxPJ':function(_0x612af7,_0x554bb2){return _0x612af7+_0x554bb2;}};var _0x3731e0={};for(var _0x5a1638=0x0,_0xc91ab0=_0x540f71[_0x33fb('0x20')];_0x5a1638<_0xc91ab0;_0x5a1638++){var _0x564c29=_0x540f71[_0x5a1638];_0x3731e0[_0x564c29]=_0x3f8207[_0x33fb('0x60')](_0x3731e0[_0x564c29],0x1)||0x1;}return _0x3731e0;}function panduan(_0x15fee4){var _0x2df2e1={'kgjrq':function(_0x9b0361,_0x3a9df2){return _0x9b0361+_0x3a9df2;},'IiJaf':function(_0x2f7a33,_0x975c0f){return _0x2f7a33+_0x975c0f;},'SCXnU':function(_0x3429f1,_0x508590){return _0x3429f1===_0x508590;},'qYpYB':_0x33fb('0x61'),'fJZbb':function(_0x3068db,_0x41f540){return _0x3068db+_0x41f540;},'HxmeA':function(_0x50f5b7,_0x5523be){return _0x50f5b7+_0x5523be;}};let _0x416ac5='';let _0x43d227='';let _0x21db89='';let _0x561ba3='';if(_0x15fee4['A']){_0x416ac5=_0x15fee4['A']+'A';}if(_0x15fee4['B']){_0x43d227=_0x2df2e1[_0x33fb('0x62')](_0x15fee4['B'],'B');}if(_0x15fee4['C']){_0x21db89=_0x2df2e1[_0x33fb('0x63')](_0x15fee4['C'],'C');}if(_0x15fee4['D']){if(_0x2df2e1[_0x33fb('0x64')](_0x2df2e1[_0x33fb('0x65')],_0x2df2e1[_0x33fb('0x65')])){_0x561ba3=_0x2df2e1[_0x33fb('0x63')](_0x15fee4['D'],'D');}else{$[_0x33fb('0x21')](_0x33fb('0x7'),'text');return![];}}return _0x2df2e1['IiJaf'](_0x2df2e1['fJZbb'](_0x2df2e1[_0x33fb('0x66')](_0x416ac5,_0x43d227),_0x21db89),_0x561ba3);}
