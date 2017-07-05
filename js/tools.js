//获取对象*****
function $(id){
	return document.getElementById(id);	
	
}



//1.函数名：求任意数的阶乘
//功能：阶乘
//参数：任意数的阶乘
//返回值:任意数的阶乘
function jiecheng(num){
	var x=1;
	for(var i=1;i<=num;i++){
		x=x*i;
	}
	 return x;			
}

//2.函数名：用递归做的任意数的阶乘
//功能：阶乘
//参数：任意数的阶乘
//返回值：任意数的阶乘

function jie(a){
		if(a==1){
			return 1;
		}
		return a*jie(a-1);	
}


//4 函数名：用递归做的斐波那契额数
//功能：
//参数：
//返回值：
function fbnq(n){//第三步实现结束递归的代码
	var n3=n1+n2;
	console.log(n3);
	i++;//记录产生斐波那契数的个数
	if(i>n){
	 return;		
	}
	n1=n2;
	n2=n3;
	return fbnq(n);		
}


//5 函数名：求两个数的最大公约数
//功能：
//参数：已知两个数
//返回值：最大公约数

function convention(x,y){		
	var z=x%y;
	if(z==0){
		return y;			
	}
	x=y;
	y=z;
	return convention(x,y);
}

//6查找是否有n 
/*
功能：在数组中查找某个元素
参数1：数组
参数2：目标元素
返回值：Boolean
*/
function has(arr,n){
	var isZhengchu=false;
	for(var i=0;i<arr.length;i++){  //循环遍历
		if(arr[i]==n){
			return true;
		}
	}
	return false;
}

/*7
功能：任意两个整数之间的随机数
参数1：开始数
参数2：结束数
返回值：两个整数之间的随机数
*/
function numRandom(min,max){
	var num=max-min;
	num=parseInt(Math.random()*(num+1));
	return num+min;
}

/*8
功能：返回汉字星期
参数：日期对象
返回值：字符串星期（汉字）如：星期一
*/
function getWeek(date){
	switch(date.getDay()){//getDay()星期，从0开始
		case 0:return "星期日";
		case 1:return "星期一";
		case 2:return "星期二";
		case 3:return "星期三";
		case 4:return "星期四";
		case 5:return "星期五";
		case 6:return "星期六";
		default:break;
	}
}

/*9
功能：返回日期（yyyy年MM月dd日）
参数：日期对象
返回值：字符串日期（yyyy年MM月dd日）
*/
function formatDate(date){
	var year=date.getFullYear();//2017
	var month=date.getMonth()+1;//month从0开始
	var day=date.getDate();////返回天
	return year+"年"+month+"月"+day+"日";
}