function Node(e, n){
	
	this.element;

	this.nextNode;

    this.element = e;

    this.nextNode = n;

    this.getElement = function(){
    	return this.element;
    };

    this.getNextNode = function(){
    	return this.nextNode;
    };	
};
