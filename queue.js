function Queue(){
	
	this.firstNode;


	this.enQueue = function(v){

		if(this.firstNode == undefined){
			this.firstNode = new Node(v);
		}else{
			this.firstNode.setNextNode(new Node(v));
		}
	}


	this.deQueue = function(){
		return this.firstNode.getElement();
	}
}