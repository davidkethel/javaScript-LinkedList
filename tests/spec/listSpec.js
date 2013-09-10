describe("List",function() {

    beforeEach(function() {

        this.addMatchers({
            toBeListequivalent: function (expected) {

                this.message = function() {
                    return "Lists are not equivalent";
                };

                var actual = this.actual;
                
                if (actual.isEmpty() !== expected.isEmpty()) {
                    return false;
                }

                var actualLength = 0;
                var currentActualNode = actual.firstNode;
                while (currentActualNode != null) {
                    actualLength++;
                    currentActualNode = currentActualNode.getNextNode();
                }
                var expectedLength = 0;
                var currentExpectedNode = expected.firstNode;
                while (currentExpectedNode != null) {
                    expectedLength++;
                    currentExpectedNode = currentExpectedNode.getNextNode();
                }

                if (actualLength != expectedLength) {
                    return false;
                }
                

                currentActualNode = actual.firstNode;
                currentExpectedNode = expected.firstNode;
                var equivalentSoFar = true;
                for (var i = 0; i < actualLength && equivalentSoFar; i++) {

                    equivalentSoFar = currentActualNode.getElement() === currentExpectedNode.getElement();
                    
                    currentActualNode = currentActualNode.getNextNode();
                    currentExpectedNode = currentExpectedNode.getNextNode();
                }
                
                return equivalentSoFar;
            }
        });
    });














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
    
    // Append - Head

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

	it("should be able to append Two numbers and then return the Top via Head", function () {
	    var myList = new List();
	    myList.Append(3);
	    myList.Append(5);
	    expect(myList.Head()).toEqual(3);
	});
    
	it("should be able to append Two numbers and get the head twice and return the last", function () {
	    var myList = new List();
	    myList.Append(3);
	    myList.Append(5);

	    myList.Head();
	    expect(myList.Head()).toEqual(5);
	});

	it("should be able to append three numbers and get the head three Times and return the last", function () {
	    var myList = new List();
	    myList.Append(3);
	    myList.Append(7);
	    myList.Append(5);

	    myList.Head();
	    myList.Head();
	    expect(myList.Head()).toEqual(5);
	});
    
    it("should be able to append three numbers and get the head once and return the middle one", function () {
	    var myList = new List();
	    myList.Append(3);
	    myList.Append(5);
	    myList.Append(7);

	    myList.Head();
	    expect(myList.Head()).toEqual(5);
	});

    // Prepend - Head
    
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
    
    it("should be able to Prepend one number then Head() once and be be empty", function () {
        var myList = new List();
        myList.Prepend(3);
        myList.Head();
        expect(myList.isEmpty()).toEqual(true);
    });

    it("should be able to Prepend 5 numbers then Head() five times and be be empty", function () {
        var myList = new List();
        myList.Prepend(3);
        myList.Prepend(5);
        myList.Prepend(2);
        myList.Prepend(6);
        myList.Prepend(7);
        myList.Head();
        myList.Head();
        myList.Head();
        myList.Head();
        myList.Head();
        expect(myList.isEmpty()).toEqual(true);
    });

    it("should be able to Prepend two numbers and not be empty", function () {
        var myList = new List();
        myList.Prepend(3);
        myList.Prepend(5);
        expect(myList.isEmpty()).toEqual(false);
    });

    it("should be able to Prepend Two numbers and then return the bottom via Head", function () {
        var myList = new List();
        myList.Prepend(3);
        myList.Prepend(5);
        expect(myList.Head()).toEqual(5);
    });

    it("should be able to Prepend Two numbers and get the head twice and return the first", function () {
        var myList = new List();
        myList.Prepend(3);
        myList.Prepend(5);

        myList.Head();
        expect(myList.Head()).toEqual(3);
    });

    it("should be able to Prepend three numbers and get the head three Times and return the last", function () {
        var myList = new List();
        myList.Prepend(3);
        myList.Prepend(7);
        myList.Prepend(5);

        myList.Head();
        myList.Head();
        expect(myList.Head()).toEqual(3);
    });

    it("should be able to Prepend three numbers and get the head once and return the middle one", function () {
        var myList = new List();
        myList.Prepend(3);
        myList.Prepend(5);
        myList.Prepend(7);

        myList.Head();
        expect(myList.Head()).toEqual(5);
    });


    // Append - Tail

    it("should be able to append one number and Tail will be null", function () {
        var myList = new List();
        myList.Append(3);
        expect(myList.Tail()).toEqual(null);
    });

    it("should be able to append two number and Tail will be a list with the last item", function () {
        var myList = new List();
        myList.Append(3);
        myList.Append(5);
        
        var expectedList = new List();
        expectedList.Append(5);
        expect(myList.Tail()).toBeListequivalent(expectedList);

    });




























    //it("should be able to append one number and then return null via Tail", function () {
    //    var myList = new List();
    //    myList.Append(3);
    //    expect(myList.Tail()).toEqual(null);
    //});



	//it("should be able to append two numbers and then return the first via tail", function () {
	//    var myList = new List();
	//    myList.Append(3);
	//    myList.Append(5);
        
	//    var expected = new List();
	//    expected.append(3);

    //    expect(myList.Tail()).toEqual(expected.append(3));
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