var xhr = new XMLHttpRequest();

xhr.open("GET", "file", true); //true = async

xhr.onreadystatechange = function() {
     if (xhr.readyState === 4) {
          var status = xhr.status;
          if ((status >= 200 && status < 300) || status === 304) {
               alert(" someth");
          }
          alert(xhr.responseText);
     }
};

xhr.send(null); // cause its GET method
