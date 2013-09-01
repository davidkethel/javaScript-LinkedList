describe("Node", function(){

it("It should be able to hold a number", function(){
	var myNode = new Node(3,null)
	expect(myNode.getElement()).toEqual(3);
});


it("It should be able to hold a string", function(){
	var myNode = new Node("Dave",null)
	expect(myNode.getElement()).toEqual("Dave");
});


it("It should be able to hold a boolean", function(){
	var myNode = new Node(true,null)
	expect(myNode.getElement()).toEqual(true);
});


it("It should be able to hold a function", function(){
	
	var myFunc = function(){
		return 1 + 1;
	}

	var myNode = new Node(myFunc,null)
	expect(myNode.getElement()).toEqual(myFunc);
});

});