describe("Queue",function(){

	it("Should be Able to take one number",function(){
		var myQueue = new Queue()
		myQueue.enQueue(3);
		expect(myQueue.deQueue()).toEqual(3);
	});

	it("Should be Able to take one string",function(){
		var myQueue = new Queue()
		myQueue.enQueue("Dave");
		expect(myQueue.deQueue()).toEqual("Dave");
	});


	it("Should be Able to take one Boolean",function(){
		var myQueue = new Queue()
		myQueue.enQueue(true);
		expect(myQueue.deQueue()).toEqual(true);
	});


	it("Should be Able to take two numbers",function(){
		var myQueue = new Queue()
		myQueue.enQueue(3);
		myQueue.enQueue(4);
		
		expect(myQueue.deQueue()).toEqual(3);
	});

	it("Should be Able to take 10 numbers",function(){
		var myQueue = new Queue()
		myQueue.enQueue(1);
		myQueue.enQueue(2);
		myQueue.enQueue(3);
		myQueue.enQueue(4);
		myQueue.enQueue(5);
		myQueue.enQueue(6);
		myQueue.enQueue(7);
		myQueue.enQueue(8);
		myQueue.enQueue(9);
		myQueue.enQueue(10);
		expect(myQueue.deQueue()).toEqual(1);
	});









})