function Node(e, n){
	
    this.element = e;

    this.nextNode = n;

    this.getElement = function(){
    	return this.element;
    };

    this.getNextNode = function(){
    	return this.nextNode;
    };

    this.setElement = function(e){
    	this.element = e;
    };

    this.setNextNode= function(n){
    	this.nextNode = n;
    }
};
