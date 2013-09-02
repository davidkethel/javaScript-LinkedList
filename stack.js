
function Stack() {

    this.val;

    this.push = function(elem) {
        this.val = elem;
    };

    this.pop = function () {
        if (typeof this.val == "undefined") {
            return null;
        } else {
            return this.val;
        }
    };

};