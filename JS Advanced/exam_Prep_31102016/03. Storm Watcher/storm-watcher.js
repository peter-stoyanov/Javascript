

class Record {

     constructor(temp, rel_hum, pressure, wind){
          this.id = Record.getID();
          this.temperature = temp;
          this.humidity = rel_hum;
          this.pressure = pressure;
          this.windSpeed = wind;
     }
     static getID() {
          if (!Record.ID) {
               Record.ID = 0;
          }
          return Record.ID++;
     }

     toString(){
          let status = 'Not stormy';
          if (this.temperature < 20) {
               if (this.pressure < 700 || this.pressure > 900) {
                    if (this.windSpeed > 25) {
                         status = "Stormy";
                    }
               }
          }

          let result = '';
          result += `Reading ID: ${this.id}\n`;
          result += `Temperature: ${this.temperature}*C\n`;
          result += `Relative Humidity: ${this.humidity}%\n`;
          result += `Pressure: ${this.pressure}hpa\n`;
          result += `Wind Speed: ${this.windSpeed}m/s\n`;
          result += `Weather: ${status}`;
          return result;
     }
}//end class


//debug
let r = new Record(25,80,1000,150);
console.log(r);
let q = new Record(19,80,1000,150);
console.log(q);

console.log(q.toString());
