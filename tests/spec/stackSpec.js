describe("Stack", function () {


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

        var myFunc = function () {
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





    it("should be able to Push two numbers and Pop two numbers", function () {
        var myStack = new Stack();
        myStack.push(4);
        myStack.push(2);

        myStack.pop();

        expect(myStack.pop()).toEqual(4);
    });


    it("should be able to Push two strings and Pop two string ", function () {
        var myStack = new Stack();
        myStack.push("Dave");
        myStack.push("Phil");

        myStack.pop();
        expect(myStack.pop()).toEqual("Dave");
    });

    it("should be able to Push two booleans and Pop two booleans ", function () {
        var myStack = new Stack();
        myStack.push(false);
        myStack.push(true);

        myStack.pop();

        expect(myStack.pop()).toEqual(false);
    });

    it("should be able to Push two function and Pop two function ", function () {
        var myStack = new Stack();

        var myFunc1 = function () {
            return 2 + 3;
        };

        var myFunc2 = function () {
            return 5 * 5 + 3;
        };

        myStack.push(myFunc1);
        myStack.push(myFunc2);

        myStack.pop();

        expect(myStack.pop()).toEqual(myFunc1);
    });

    it("should be able to Push two numbers and Pop down to empty", function () {
        var myStack = new Stack();
        myStack.push(4);
        myStack.push(2);

        myStack.pop();
        myStack.pop();

        expect(myStack.pop()).toBeNull();
    });

    it("should be able to Push two strings and Pop down to empty", function () {
        var myStack = new Stack();
        myStack.push("Dave");
        myStack.push("Phil");

        myStack.pop();
        myStack.pop();
        expect(myStack.pop()).toBeNull();
    });

    it("should be able to Push two booleans and Pop down to empty ", function () {
        var myStack = new Stack();
        myStack.push(false);
        myStack.push(true);

        myStack.pop();
        myStack.pop();

        expect(myStack.pop()).toBeNull();
    });

    it("should be able to Push two function and Pop down to empty ", function () {
        var myStack = new Stack();

        var myFunc1 = function () {
            return 2 + 3;
        };

        var myFunc2 = function () {
            return 5 * 5 + 3;
        };

        myStack.push(myFunc1);
        myStack.push(myFunc2);

        myStack.pop();
        myStack.pop();

        expect(myStack.pop()).toBeNull();
    });


    it("should be able to Push three numbers and Pop one, push one and pop", function () {
        var myStack = new Stack();
        myStack.push(4);
        myStack.push(2);
        myStack.push(1);

        myStack.pop();
        myStack.push(3);

        expect(myStack.pop()).toEqual(3);
    });

    it("should be able to Push two strings and Pop one, push one and pop", function () {
        var myStack = new Stack();
        myStack.push("Dave");
        myStack.push("Phil");
        myStack.push("Lisa");

        myStack.pop();
        myStack.push("Freed");

        expect(myStack.pop()).toEqual("Freed");
    });

    it("should be able to Push two booleans and Pop one, push one and pop", function () {
        var myStack = new Stack();
        myStack.push(false);
        myStack.push(true);
        myStack.push(false);

        myStack.pop();

        myStack.push(true);
        
        expect(myStack.pop()).toEqual(true);
    });

    it("should be able to Push two function and Pop one, push one and Pop ", function () {
        var myStack = new Stack();

        var myFunc1 = function () {
            return 2 + 3;
        };

        var myFunc2 = function () {
            return 5 * 5 + 3;
        };

        var myFunc3 = function () {
            return 5 * 5 + 3 + 9 - 4;
        };


        var myFunc4 = function () {
            return 445 + 3 + 9 - 4;
        };
        
        myStack.push(myFunc1);
        myStack.push(myFunc2);
        myStack.push(myFunc3);

        myStack.pop();

        myStack.push(myFunc4);

        expect(myStack.pop()).toEqual(myFunc4);
    });
});