describe("List",function(){

	it("should be able to do handle an empty List", function() {
	    var myList = new List();
	    expect(myList.isEmpty()).toEqual(true);
	});

    it("should be able to do handle an empty List when Head is called", function () {
	    var myList = new List();
	    expect(myList.Head()).toBeNull();
	});


	it("should be able to do handle an empty List when Tail is called", function () {
	    var myList = new List();
	    expect(myList.Tail()).toBeNull();
	});
    
	it("should be able to append one number and not be empty", function () {
	    var myList = new List();
	    myList.Append(3);
	    expect(myList.isEmpty()).toEqual(false);
	});
    
	it("should be able to append one number and then return it via Head", function () {
	    var myList = new List();
	    myList.Append(3);
	    expect(myList.Head()).toEqual(3);
	});
    
	it("should be able to append one number and then return null via Tail", function () {
	    var myList = new List();
	    myList.Append(3);
	    expect(myList.Tail()).toEqual(null);
	});
    
	it("should be able to append one number then Head() once and be be empty", function () {
	    var myList = new List();
	    myList.Append(3);
	    myList.Head();
	    expect(myList.isEmpty()).toEqual(true);
	});
    
	it("should be able to append 5 numbers then Head() five times and be be empty", function () {
	    var myList = new List();
	    myList.Append(3);
	    myList.Append(5);
	    myList.Append(2);
	    myList.Append(6);
	    myList.Append(7);
	    myList.Head();
	    myList.Head();
	    myList.Head();
	    myList.Head();
	    myList.Head();
	    expect(myList.isEmpty()).toEqual(true);
	});
    
	it("should be able to append two numbers and not be empty", function () {
	    var myList = new List();
	    myList.Append(3);
	    myList.Append(5);
	    expect(myList.isEmpty()).toEqual(false);
	});

	it("should be able to append Two numbers and then return the most recent via Head", function () {
	    var myList = new List();
	    myList.Append(3);
	    myList.Append(5);
	    expect(myList.Head()).toEqual(5);
	});
    
	it("should be able to append Two numbers and get the head twice and return the first", function () {
	    var myList = new List();
	    myList.Append(3);
	    myList.Append(5);

	    myList.Head();
	    expect(myList.Head()).toEqual(3);
	});
    
	it("should be able to append theww numbers and get the head once and return the middle one", function () {
	    var myList = new List();
	    myList.Append(3);
	    myList.Append(5);
	    myList.Append(7);

	    myList.Head();
	    expect(myList.Head()).toEqual(5);
	});









	//it("should be able to append two numbers and then return the first via tail", function () {
	//    var myList = new List();
	//    myList.Append(3);
	//    myList.Append(5);
        
	//    var expected = new List();
	//    expected.append(3);

    //    expect(myList.Tail()).toEqual(expected.append(3));
	//});







    //it("should be able to Prepend one number and not be empty", function () {
    //    var myList = new List();
    //    myList.Prepend(3);
    //    expect(myList.isEmpty()).toEqual(false);
    //});

    //it("should be able to Prepend one number and then return it via Head", function () {
    //    var myList = new List();
    //    myList.Prepend(3);
    //    expect(myList.Head()).toEqual(3);
    //});

    //it("should be able to Prepend one number and then return null via Tail", function () {
    //    var myList = new List();
    //    myList.Prepend(3);
    //    expect(myList.Tail()).toEqual(null);
    //});





    //Constructor
    
    //Is empty
    
    //Prepend
    
    //Append
    
    //Head
    
    //Tail

})