
(function sortTickets(dataArr, sortStrategy) {

     class Ticket {
          constructor(destination, price, status) {
               this.destination = destination;
               this.price = price;
               this.status = status;
          }

     }

     let database = [];
     for (let line of dataArr) {
          let [dest, pr, st] = line.split('|');
          let ticket = new Ticket(dest, pr, st);
          database.push(ticket);
     }
     //console.log(sortStrategy);
     switch (sortStrategy) {
          case 'destination':
               database.sort((a,b)=> (a.destination < b.destination) ? -1: (a.destination > b.destination) ? 1 : 0 );
               break;
          case 'price':
               database.sort((a,b)=> (Number(a.price) < Number(b.price)) ? -1: (Number(a.price) > Number(b.price)) ? 1 : 0 );
               break;
          case 'status':
               database.sort((a,b)=> (a.status < b.status) ? -1: (a.status > b.status) ? 1 : 0 );
               break;
          default:

     }
     //console.log(database);
     return database;

})(['Philadelphia|94.20|available',
 'New York City|95.99|available',
 'New York City|95.99|sold',
 'Boston|126.20|departed'],
'price'
);
