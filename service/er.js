// javascript:$.getScript('https://wenleks.github.io/service/er.js');

var oDiv = document.createElement("DIV");
oDiv.id = "superblock";
oDiv.setAttribute('style', 'position:absolute; top:50px; right:50px; width:200px; height:200px; font-size:12px; padding:5px; background-color: #faf3e8; color:#cccccc; border-radius: 3px; border:1px solid #cccccc;');
document.body.appendChild(oDiv);

$('#superblock').html('<span style="cursor:pointer;" onclick="goqwe()">жми</span>');

function goqwe() {
	alert ('нажал');
}
