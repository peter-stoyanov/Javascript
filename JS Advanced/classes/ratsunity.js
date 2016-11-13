function test() {

     class Rat {
          constructor(name) {
               this.name = name;
               this.ratlist = [];
          }


          unite(otherRat) {
               if (otherRat instanceof Rat) {
                    ratlist.push(otherRat);
               }
          }

          getRats() {
               return this.ratlist;
          }

          toString() {
               //return '' + this.name;
               var output = '';
             output += this.name + '\n';
             for (var rat of this.ratlist) {
                 output += `##${rat}\n`;
           }

           return output.trim();
          }

     }

     var r = new Rat("Pesho");
     console.log(r.name);



}
