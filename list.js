function List() {

    this.firstNode = null;
    this.lastNode = null;

    this.Append = function(value) {
        if (this.firstNode == null) {
            this.firstNode = new Node(value);
            this.lastNode = this.firstNode;
        } else {
            var newNode = new Node(value);
            this.lastNode.setNextNode(newNode);
            this.lastNode = newNode;
        }
    };
    
    this.Prepend = function (value) {
        if (this.firstNode == null) {
            this.firstNode = new Node(value);
        } else {
            var newNode = new Node(value);
            newNode.setNextNode(this.firstNode);
            this.firstNode = newNode;
        }
    };

    this.isEmpty = function () {
        return this.firstNode == null;
    };

    this.Head = function () {        
        if (this.firstNode == null) {
            return null;
        } else {
            var oldHead = this.firstNode;
            this.firstNode = oldHead.getNextNode();
            oldHead.setNextNode(null);
            return oldHead.getElement();
        }
    };


    this.Tail = function () {
        if ( this.firstNode == null || this.firstNode.getNextNode() == null) {
            return null;
        } else {

            var returnList = new List();
            returnList.Append(this.firstNode.getNextNode().getElement());
            return returnList;
        }
    };

}












