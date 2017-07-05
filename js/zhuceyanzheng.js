


window.onload=function(){
	$("phone1").onblur=function(){
		if($("phone1").value==""){
			document.getElementById("hai").innerHTML="请输入手机号"
			document.getElementById("hai").style="font-size:14px;color:#f49f26;padding-left:6px;";
		}
		else if(!checkAll("Phone",$("phone1").value)){

			document.getElementById("hai").innerHTML="手机号格式错误";
			document.getElementById("hai").style="font-size:14px;color:#f49f26;padding-left:6px;";
			return false;
		}else{
			document.getElementById("hai").innerHTML="";
		}	
	
	
 	}
 	$("yanzheng").onblur=function(){
 		if($("yanzheng").value==""){
 			document.getElementById("hai1").innerHTML="请输入验证码"
			document.getElementById("hai1").style="font-size:14px;color:#f49f26;padding-left:6px;";
 		}
 	}
 	$("zhanghao1").onblur=function(){
 		if($("zhanghao1").value==""){
			document.getElementById("hai2").innerHTML="请输入密码"
			document.getElementById("hai2").style="font-size:14px;color:#f49f26;padding-left:6px;";
		}
		else if(!checkAll("password",$("zhanghao1").value)){
 		
 			document.getElementById("hai2").innerHTML="请输入密码,需字母数字符号两种以上组合";
			document.getElementById("hai2").style="font-size:14px;color:#f49f26;padding-left:6px;";
			return false;//阻止表单提交

 		}else{
 			document.getElementById("hai2").innerHTML="";
 		}

 	}
	$("mima").onblur=function(){
 		if($("zhanghao1").value==$("mima").value){
 				document.getElementById("hai5").innerHTML="";
 			}else{
 				document.getElementById("hai5").innerHTML="两次密码输入结果不相同";
 				document.getElementById("hai5").style="font-size:14px;color:#f49f26;padding-left:6px;";
 		}

 	}
}
