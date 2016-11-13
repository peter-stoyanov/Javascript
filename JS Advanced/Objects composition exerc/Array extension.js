(function (){
     Array.prototype.last = function() {
          return this[this.length - 1];
     };

     Array.prototype.skip = function(n){
          var result = [];
          for (var i = n; i < this.length; i++) {
               result.push(this[i]);
          }
          return result;
     };

     Array.prototype.take = function(n){
          var result = [];
          for (var i = 0; i < n; i++) {
               result.push(this[i]);
          }
          return result;
     };

     Array.prototype.sum = function(){
          var total = 0;
          for (var i = 0; i < this.length; i++) {
               total += this[i];
          }
          return total;
     };

     Array.prototype.average = function(){
          var average;
          var total = 0;
          for (var i = 0; i < this.length; i++) {
               total += this[i];
          }
          average = total / this.length;
          return average;
     };

})();
