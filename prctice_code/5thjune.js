const ARRAY_OF_OBJECTS = [
    { id: 1, title: 'Title 1' },
    { id: 2, title: 'Title 2' },
    { id: 3, title: 'Title 3' },
  ];
  
  const someFunction = () => {
    // You need to change title for 2nd element of ARRAY_OF_OBJECTS and use it only in this place.
    // ARRAY_OF_OBJECTS[1]['title'] =  'randhir'; 
    const newArr =  ARRAY_OF_OBJECTS.map((curr, i, arr)=>{
      if(i===1){
        return curr['title'] = 'randhir';
      }else{
        return curr;
      }
    });

    console.log(newArr);

};
  
  const anotherFunction = () => {
    // here we use original ARRAY_OF_OBJECTS
    console.log({ ARRAY_OF_OBJECTS });
  };
  
  // someFunction();
  // anotherFunction();

  function bar() {
    console.log(a); // What will be printed here?
    var a = 5;
    function inner() {
      console.log(a); // What will be printed here?
    }
    inner();
  }
  // bar();


  var a = 1;
function outer() {
  console.log(a); // What will be printed here?
  var a = 2;
  console.log(a); // What will be printed here?
}
// outer();
console.log(a); // What will be printed here?

var x = 10;

function foo() {
  console.log(x);
  var x = 20;
}

foo();