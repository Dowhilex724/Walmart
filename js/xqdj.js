
	$(document).ready(function(){
	var $miaobian=$('#xt>li');
	var $huantu=$('.dt>img');
	var $miaobian1=$('.panel-specs>div');
	$miaobian.click(function(){miaobian(this);});
	$miaobian1.click(function(){miaobian1(this);});
	function miaobian(thisMb){
		for(var i=0; i<$miaobian.length; i++){
			$miaobian[i].style.borderColor = '#dedede';
		}
		thisMb.style.borderColor = '#cd2426';

		$huantu[0].src = thisMb.children[0].src;
	}
	function miaobian1(thisMb1){
		for(var i=0; i<$miaobian1.length; i++){
			$miaobian1[i].style.borderColor = '#dedede';
		}
//		thisMb.style.borderColor = '#cd2426';
		$miaobian.css('border-color','#dedede');
		thisMb1.style.borderColor = '#cd2426';
		$huantu[0].src = thisMb1.children[0].src;
	}
		$(".c56").click(function(){
			var value=parseInt($('#wzz').val())+1;
       		$('#wzz').val(value);
		})

		$(".c55").click(function(){	
			var num = $("#wzz").val()
			if(num>0){
				$("#wzz").val(num-1);
			}			
			
		})

		})

