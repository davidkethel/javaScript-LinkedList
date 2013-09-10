describe("list",function(){

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



    //Constructor
    
    //Is empty
    
    //Prepend
    
    //Append
    
    //Head
    
    //Tail

})