describe("Stack",function() {


    it("should be able to Handle an empty stack", function () {
        var myStack = new Stack();
        expect(myStack.pop()).toBeNull();
    });


    it("should be able to Push and Pop one number", function () {
        var myStack = new Stack();
        myStack.push(4);
        expect(myStack.pop()).toEqual(4);
    });

    it("should be able to Push and Pop one String", function () {
        var myStack = new Stack();
        myStack.push("Dave");
        expect(myStack.pop()).toEqual("Dave");
    });
    
    it("should be able to Push and Pop one Boolean", function () {
        var myStack = new Stack();
        myStack.push(false);
        expect(myStack.pop()).toEqual(false);
    });

    
    it("should be able to Push and Pop one Function", function () {
        var myStack = new Stack();

        var myFunc = function() {
            return 2 + 3;
        };

        myStack.push(myFunc);
        expect(myStack.pop()).toEqual(myFunc);
    });
    


    it("should be able to Push two numbers and Pop one", function () {
        var myStack = new Stack();
        myStack.push(4);
        myStack.push(2);
        
        expect(myStack.pop()).toEqual(2);
    });


    it("should be able to Push two strings and Pop one ", function () {
        var myStack = new Stack();
        myStack.push("Dave");
        myStack.push("Phil");
        
        expect(myStack.pop()).toEqual("Phil");
    });

    it("should be able to Push two booleans and Pop one ", function () {
        var myStack = new Stack();
        myStack.push(false);
        myStack.push(true);
        expect(myStack.pop()).toEqual(true);
    });


    it("should be able to Push two function and Pop one ", function () {
        var myStack = new Stack();

        var myFunc1 = function () {
            return 2 + 3;
        };

        var myFunc2 = function () {
            return 5 * 5 + 3;
        };

        myStack.push(myFunc1);
        myStack.push(myFunc2);
        expect(myStack.pop()).toEqual(myFunc2);
    });




});