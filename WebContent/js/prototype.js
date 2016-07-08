//function Employee(name) {
//	this.name = name;
//	this.dept = "000";
//	this.sex = "male";
//}
//
//function workerBee() {
//	this.project = [];
//	this.hasCar = false;
//}
//
//workerBee.prototype = new Employee;
//
//function Engineer() {
//	this.dept = "111";
//	this.language = "javascript";
//}
//Engineer.prototype = new workerBee;
//
//var jay = new Engineer("Jay");
//
//alert(jay.dept);
//alert(jay.name);
//alert(jay.sex);
//alert(jay.hasCar);
//alert(jay.language);

function person(name) {
	this.name = name;
	this.array = [];
}

person.prototype.share = [];

var p1 = new person('Tom');
p1.array.push(1);
p1.share.push(11);

var p2 = new person('Jack');
p2.array.push(2);
p2.share.push(22);

alert(p1.array);
alert(p2.array);
alert(p1.share);
alert(p2.share);
