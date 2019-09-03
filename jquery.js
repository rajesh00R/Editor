$(document).ready(function(){
var ht=1,cs=1,js=1,out=1;
resetSize();
$('textarea').on('change keyup paste',function(){
	updateOutput();
});
function updateOutput(){
	var str=$('#ed1').val();
	var str1=$('#ed2').val();
	var str2=$('#ed3').val();
	var style="<style>"+str1+"</style>";
	var script = '<script type=\"text/javascript\">'+str2+'</script>';
	$('#editor4').html(str);
  	$('#editor4').append(script);
  	$('#editor4').append(style);
}

$('#htmlbtn').click(function(){
	if(ht==1){
		ht=0;
	}
	else{
		ht=1;
	}
	resetSize();
});

$('#cssbtn').click(function(){
		if(cs==1){
		cs=0;
	}
	else{
		cs=1;	
	}
	resetSize();
});

$('#jsbtn').click(function(){
		if(js==1){
		js=0;
	}
	else{
		js=1;
	}
	resetSize();
});

$('#outputbtn').click(function(){
		if(out==1){
		out=0;
	}
	else{
		out=1;
	}
	resetSize();
});

function resetSize(){
	var x=$(window).width();
	var y=ht+cs+js+out;
	var wid=(Math.floor(x/y)-15);
	if(ht==1){
		$('#htmlbtn').css("background-color","blue");
		$('#editor1').css("display","block");
		$('#editor1').width(wid);
	}else{
		$('#editor1').css("display","none");
		$('#htmlbtn').css("background-color","grey");
	}
	if(cs==1){
		$('#cssbtn').css("background-color","blue");
		$('#editor2').css("display","block");
		$('#editor2').width(wid);
	}else{
		$('#cssbtn').css("background-color","grey");
		$('#editor2').css("display","none");
	}
	if(js==1){
		$('#jsbtn').css("background-color","blue");
		$('#editor3').css("display","block");
		$('#editor3').width(wid);
	}else{
		$('#jsbtn').css("background-color","grey");
		$('#editor3').css("display","none");
	}
	if(out==1){
		$('#outputbtn').css("background-color","blue");
		$('#editor4').css("display","block");
		$('#editor4').width(wid);
	}else{
		$('#outputbtn').css("background-color","grey");
		$('#editor4').css("display","none");
	}

}

});