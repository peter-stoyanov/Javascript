class MailBox {
    // TODO: implement this class
    constructor (){
         this.messages = [];
    }

    addMessage(subject, text) {
         let newMessage = {
              subject: subject,
              text: text
         };
         this.messages.push(newMessage);
         return this;
    }

    get messageCount() {
         return this.messages.length;
    }

    deleteAllMessages() {
         this.messages = [];
    }

    findBySubject(substr) {
         var results = [];
         var toSearch = substr;
         for(var i=0; i<this.messages.length; i++) {
            for(var key in this.messages[i]) {
              if(this.messages[i][key].indexOf(toSearch)!=-1) {
                results.push(this.messages[i]);
              }
            }
          }
          return results;
    }//end find substring

    toString() {
         var result = '';
         if (this.messages.length === 0) {
              result += '* (empty mailbox)';
         }else {
              for (var i = 0; i < this.messages.length; i++) {
                   result += `* [${this.messages[i].subject}] ${this.messages[i].text}\n`;
              }
         }
         return result;

    }
}

let mb = new MailBox();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
mb.addMessage("meeting", "Let's meet at 17/11");
mb.addMessage("beer", "Wanna drink beer tomorrow?");
mb.addMessage("question", "How to solve this problem?");
mb.addMessage("Sofia next week", "I am in Sofia next week.");
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
console.log("Messages holding 'rakiya': " +
    JSON.stringify(mb.findBySubject('rakiya')));
console.log("Messages holding 'ee': " +
    JSON.stringify(mb.findBySubject('ee')));

mb.deleteAllMessages();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);

console.log("New mailbox:\n" +
    new MailBox()
        .addMessage("Subj 1", "Msg 1")
        .addMessage("Subj 2", "Msg 2")
        .addMessage("Subj 3", "Msg 3")
        .toString());
