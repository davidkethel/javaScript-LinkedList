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



it("It should be able to set a number", function(){
	var myNode = new Node(3,null)
	myNode.setElement(5);
	expect(myNode.getElement()).toEqual(5);
});


it("It should be able to set a string", function(){
	var myNode = new Node("Dave",null)
	myNode.setElement("fred");
	expect(myNode.getElement()).toEqual("fred");
});


it("It should be able to set a boolean", function(){
	var myNode = new Node(true,null)
	myNode.setElement(false);
	expect(myNode.getElement()).toEqual(false);
});


it("It should be able to set a function", function(){

	var myFunc1 = function(){
		return 1 + 1;
	}

	var myFunc2 = function(){
		return 3+6;
	}
	var myNode = new Node(myFunc1,null)
	myNode.setElement(myFunc2)
	expect(myNode.getElement()).toEqual(myFunc2);
});


it("It should be able to have a null next node", function(){
	var myNode = new Node(1,null)
	expect(myNode.getNextNode()).toBeNull();
});


it("It should be able to have a next node", function(){
	var firstNode = new Node(1,null)
	var secondNode = new Node(3, firstNode);

	expect(secondNode.getNextNode()).toEqual(firstNode);
});


it("It should be able to view the contents of the next node", function(){
	var firstNode = new Node(1,null)
	var secondNode = new Node(3, firstNode);

	expect(secondNode.getNextNode().getElement()).toEqual(1);
});



it("It should be able to set the next node", function(){
	var firstNode = new Node(1,null)
	var secondNode = new Node(2, firstNode);

	var thirdNode = new Node(3,null);
	secondNode.setNextNode(thirdNode);

	expect(secondNode.getNextNode()).toEqual(thirdNode);
});


it("It should be able to view the contents of the set next node", function(){
	var firstNode = new Node(1,null)
	var secondNode = new Node(2, firstNode);

	var thirdNode = new Node(3,null);
	secondNode.setNextNode(thirdNode);

	expect(secondNode.getNextNode()).toEqual(thirdNode);


	expect(secondNode.getNextNode().getElement()).toEqual(3);
});




});