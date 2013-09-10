function List() {

    this.firstNode = null;
    
    this.Append = function (value) {
        if (this.firstNode == null) {
            this.firstNode = new Node(value);
        } else {
            var oldTop = this.firstNode;
            var newNode = new Node(value);
            newNode.setNextNode(oldTop);
            this.firstNode = newNode;
        }
    };
    
    this.Prepend = function (value) {
        if (this.firstNode == null) {
            this.firstNode = new Node(value);
        }
    };

    this.isEmpty = function() {
        return this.firstNode == null;
    };

    this.Head = function() {
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
        return null;
    };

}












