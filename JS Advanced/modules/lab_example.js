let revModule = (function() {
  let counter = 0; // private
  function increase(num) { counter += num; }
  function decrease(num) { counter -= num; }
  function value() { return counter; }
  return { increase, decrease, value }; // public
})();

revModule.decrease(3);
let b = revModule.value();
console.log(b);
