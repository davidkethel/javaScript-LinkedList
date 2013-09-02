
function Stack() {

    this.top;
   

    this.push = function (elem) {
        
        if (this.top == undefined) {
            this.top = new Node(elem);

        } else {
            

            var oldTop = this.top;
            var newNode = new Node(elem, oldTop);
            this.top = newNode;
        }
        
    };

    this.pop = function () {
        if ( this.top == undefined) {
            return null;
        } else {

            var oldtop = this.top;
            oldtop.setNextNode(null);

            this.top = oldtop.getNextNode();

            return oldtop.getElement();
        }
    };

};