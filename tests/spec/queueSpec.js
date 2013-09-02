describe("Queue",function(){


	it("Should be Able to handle an empty Queue",function(){
		var myQueue = new Queue()	
		expect(myQueue.deQueue()).toBeNull();
	});


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


	it("Should be Able to take two Strings",function(){
		var myQueue = new Queue()
		myQueue.enQueue("dave");
		myQueue.enQueue("pil");
		
		expect(myQueue.deQueue()).toEqual("dave");
	});

	it("Should be Able to take 10 strings",function(){
		var myQueue = new Queue()
		myQueue.enQueue("dave1");
		myQueue.enQueue("dave2");
		myQueue.enQueue("dave3");
		myQueue.enQueue("dave4");
		myQueue.enQueue("dave5");
		myQueue.enQueue("dave6");
		myQueue.enQueue("dave7");
		myQueue.enQueue("dave8");
		myQueue.enQueue("dave9");
		myQueue.enQueue("dave10");
		expect(myQueue.deQueue()).toEqual("dave1");
	});


	it("Should be Able to take two booleans",function(){
		var myQueue = new Queue()
		myQueue.enQueue(false);
		myQueue.enQueue(true);
		
		expect(myQueue.deQueue()).toEqual(false);
	});

	it("Should be Able to take 10 booleans",function(){
		var myQueue = new Queue()
		myQueue.enQueue(false);
		myQueue.enQueue(true);
		myQueue.enQueue(false);
		myQueue.enQueue(true);
		myQueue.enQueue(true);
		myQueue.enQueue(false);
		myQueue.enQueue(true);
		myQueue.enQueue(false);
		myQueue.enQueue(true);
		myQueue.enQueue(true);
		expect(myQueue.deQueue()).toEqual(false);
	});

	it("Should be Able to queue two numbers, and deQueue 2 numbers",function(){
		var myQueue = new Queue()
		myQueue.enQueue(3);
		myQueue.enQueue(4);
		
		myQueue.deQueue();

		expect(myQueue.deQueue()).toEqual(4);
	});

	

	it("Should be Able to  queue 10 number and deQueue 10 numbers",function(){
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

		myQueue.deQueue();
		myQueue.deQueue();
		myQueue.deQueue();
		myQueue.deQueue();
		myQueue.deQueue();
		myQueue.deQueue();
		myQueue.deQueue();
		myQueue.deQueue();
		myQueue.deQueue();


		expect(myQueue.deQueue()).toEqual(10);
	});

it("Should be Able to queue two Strings and deQueue 2 strings",function(){
		var myQueue = new Queue()
		myQueue.enQueue("dave");
		myQueue.enQueue("pil");

		myQueue.deQueue();
		
		expect(myQueue.deQueue()).toEqual("pil");
	});



it("Should be Able to queue 10 strings and deQueue 10 string",function(){
		var myQueue = new Queue()
		myQueue.enQueue("dave1");
		myQueue.enQueue("dave2");
		myQueue.enQueue("dave3");
		myQueue.enQueue("dave4");
		myQueue.enQueue("dave5");
		myQueue.enQueue("dave6");
		myQueue.enQueue("dave7");
		myQueue.enQueue("dave8");
		myQueue.enQueue("dave9");
		myQueue.enQueue("dave10");

		myQueue.deQueue();
		myQueue.deQueue();
		myQueue.deQueue();
		myQueue.deQueue();
		myQueue.deQueue();
		myQueue.deQueue();
		myQueue.deQueue();
		myQueue.deQueue();
		myQueue.deQueue();


		expect(myQueue.deQueue()).toEqual("dave10");
	});

it("Should be Able to queue two booleans and deQueue 2 booleans",function(){
		var myQueue = new Queue()
		myQueue.enQueue(false);
		myQueue.enQueue(true);

		myQueue.deQueue();
		
		expect(myQueue.deQueue()).toEqual(true);
	});

	it("Should be Able to queue 10 booleans and deQueue 10 booleans",function(){
		var myQueue = new Queue()
		myQueue.enQueue(false);
		myQueue.enQueue(true);
		myQueue.enQueue(false);
		myQueue.enQueue(true);
		myQueue.enQueue(true);
		myQueue.enQueue(false);
		myQueue.enQueue(true);
		myQueue.enQueue(false);
		myQueue.enQueue(true);
		myQueue.enQueue(true);

		myQueue.deQueue();
		myQueue.deQueue();
		myQueue.deQueue();
		myQueue.deQueue();
		myQueue.deQueue();
		myQueue.deQueue();
		myQueue.deQueue();
		myQueue.deQueue();
		myQueue.deQueue();
		
		expect(myQueue.deQueue()).toEqual(true);
	});




	it("Should be Able to queueing deQueueing and queueing and deQueueing",function(){
		var myQueue = new Queue()
		myQueue.enQueue(1);
		myQueue.enQueue(2);

		myQueue.deQueue();

		myQueue.enQueue(3);

		expect(myQueue.deQueue()).toEqual(2);
	});



it("Should be Able to queueing deQueueing to empty and then enqueuing and deQueueing a single item ",function(){
		var myQueue = new Queue()
		myQueue.enQueue(1);
		myQueue.enQueue(2);

		myQueue.deQueue();
		myQueue.deQueue();	

		myQueue.enQueue(3);

		expect(myQueue.deQueue()).toEqual(3);
	});


it("Should be able to handle different types",function(){
		var myQueue = new Queue()
		myQueue.enQueue(1);
		myQueue.enQueue("Dave");
		myQueue.enQueue(true);

		myQueue.deQueue();

		expect(myQueue.deQueue()).toEqual("Dave");
	});








})