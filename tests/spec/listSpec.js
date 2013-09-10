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
    
	it("should be able to Prepend one number and not be empty", function () {
	    var myList = new List();
	    myList.Prepend(3);
	    expect(myList.isEmpty()).toEqual(false);
	});

	it("should be able to Prepend one number and then return it via Head", function () {
	    var myList = new List();
	    myList.Prepend(3);
	    expect(myList.Head()).toEqual(3);
	});

	it("should be able to Prepend one number and then return null via Tail", function () {
	    var myList = new List();
	    myList.Prepend(3);
	    expect(myList.Tail()).toEqual(null);
	});





    //Constructor
    
    //Is empty
    
    //Prepend
    
    //Append
    
    //Head
    
    //Tail

})