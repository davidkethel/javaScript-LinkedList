function List() {

    this.value = null;

    this.Append = function(value) {
        this.value = value;
    };
    
    this.Prepend = function (value) {
        this.value = value;
    };

    this.isEmpty = function() {

        if (this.value == null) {
            return true;
        } else {
            return false;
        }
    };

    this.Head = function () {
        if (this.value == null) {
            return null;
        } else {
            return this.value;
        }
    };


    this.Tail = function () {
        return null;
    };

}












