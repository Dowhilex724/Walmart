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