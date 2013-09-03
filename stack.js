
function Stack() {    
   

    this.push = function(elem) {

        if (this.top == undefined) {
            this.top = new Node(elem);

        } else {

            var oldTop = this.top;
            var newNode = new Node(elem);
            newNode.setNextNode(oldTop);
            this.top = newNode;
        }

    };

    this.pop = function() {
        if (this.top == undefined) {
            return null;
        } else {

            var oldtop = this.top;
            this.top = oldtop.getNextNode();
            oldtop.setNextNode(null);
            return oldtop.getElement();
        }
    };

};