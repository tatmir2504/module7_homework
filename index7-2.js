const user = {
    name: 'IVAN',
    age: '33',
   };

   function check(str, obj) {
	
	console.log(str in obj);
}
check('age', user);
