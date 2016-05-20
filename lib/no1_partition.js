exports.version = '1.0.0';
exports.infoSync = function(){
	var infos = [];
	var execSync = require('child_process').execSync;
	var os = require('os');
	var $ = require('jquery');
	var output = execSync('wmic logicaldisk get DeviceID,FreeSpace,FileSystem,Size');
	var wmicResult = output.toString();
	var wmicResultLines = wmicResult.split(os.EOL);
	$.each(wmicResultLines,function(index,val){
		var trimed=$.trim(val);
		if(trimed!=""&&trimed!=''&&trimed!=undefined&&trimed!=null&&(trimed.indexOf("DeviceID")==-1)){
			var info = {};
			var options = trimed.split(" ");
			var optionsTrim = [];
			$.each(options,function(index, optionStr){
				var temp_option = $.trim(optionStr);
				if(temp_option!=""&&temp_option!=''&&temp_option!=undefined&&temp_option!=null){
					optionsTrim[optionsTrim.length] = temp_option;
				}
			});
			info.name = optionsTrim[0];
			info.fileSystem = optionsTrim[1];
			info.freeB = parseInt(optionsTrim[2]);
			info.freeKB = parseFloat(info.freeB) /1024;
			info.freeMB = parseFloat(info.freeKB) /1024;
			info.freeGB = parseFloat(info.freeMB) /1024;
			info.sizeB = parseInt(optionsTrim[3]);
			info.sizeKB = parseFloat(info.sizeB) /1024;
			info.sizeMB = parseFloat(info.sizeKB) /1024;
			info.sizeGB = parseFloat(info.sizeMB) /1024;
			infos[infos.length] = info;
		}

	});
	return infos;
}