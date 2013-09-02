function Queue(){
	
	this.firstNode;
	this.lastNode;

    this.enQueue = function(v) {

        if (this.firstNode == undefined) {
            this.firstNode = new Node(v);
            this.lastNode = this.firstNode;
        } else {


            var oldLastNode = this.lastNode;

            oldLastNode.setNextNode(new Node(v));

            this.lastNode = oldLastNode.getNextNode();
        }
    };
    this.deQueue = function() {

        if (this.firstNode == undefined) {
            return null;
        } else {
            var returnValue = this.firstNode.getElement();
            this.firstNode = this.firstNode.getNextNode();
            return returnValue;
        }
    };
}