/**
 *  js基础语法测试
 */
 var scope = "Global";

 scope1 = "Global"; // 全局变量 不用var声明
 
 function checkscope() {
	 var scope = "Local";
	 index = 0; //  在函数内部声明全局变量
	 alert(scope); // "Local":全局变量被局部变量所覆盖
 }
 
// checkscope();//"Local"
 
 //alert(index); // 0;
 
 function checkscope2() {
	 var scope = "Local";
	 function nested() {
		 var scope = "nested";
		 return scope;
	 }
	 return nested();
 }
 
// alert(checkscope2()); nested
 
 function checkscope3(o) {
	 var i = o;
	 alert(j); //undefined
	 if(typeof o == "object") {
		 var j = 0;
		 for(var k=0;k<2;k++) {
			 alert("inside : k="+k);
		 }
		 alert("outside : k="+k); // 2
	 }
	 alert("outside : j="+j); // 0
 }
 /**
  * result:
  * inside k=0
  * inside k=1
  * outside k=2
  * outside j=0; 
  * javascript 不是块级作用域，而是函数级作用域
  * 函数内生命的变量在函数体内始终可见。
  */
// checkscope3({});
 
 function checkscope4() {
	 alert(scope); //"Global"
 }
 
 function checkscope5() {
	 alert(scope); //undefined
	 var scope = "Local";
	 alert(scope); // Local
 }
/**
 * 函数checkscope5中，var sope 会被置于函数顶
 * 相当于:
 * var scope
 * alert(scope)
 * scope = "Local"
 * alert(scope)
 */
 checkscope5();