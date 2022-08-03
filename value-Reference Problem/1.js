/**
 * 
 * 
 * make a copy of the person object and in that copy 
 * change its name to "Rahul",  
 * pincode to 4567 
 * and first email in the list to 'asd@outlook.com'
 * 
 * make sure that original person is not affected by these operation
 * 
 *  your new person should look like this 
 * const newPerson = {
    name:"Rahul",
    mobile:999999999,
    address:{
        pincode:4567,
        city:"gurgaon",
        state:"haryana",
        emails:['asd@outlook.com', 'abc@yahoo.com', 'rty@hotmail.com']
    }
} 
 *  CAUTION: DO NOT USE JSON.parse(JSON.stringify())
    Hint: use destructuring at every level, i.e. copy each level shallowly
 */

const person = {
  name: "Akash",
  mobile: 999999999,
  address: {
    pincode: 1234,
    city: "gurgaon",
    state: "haryana",
    emails: ["asd@gmail.com", "abc@yahoo.com", "rty@hotmail.com"],
  },
};

const newPerson = {
  ...person,
  address: { ...person.address, emails: [...person.address.emails] },
};
newPerson.name = "Rahul";
newPerson.address.pincode = "4567";

newPerson.address.emails[0] = "asd@outlook.com";
console.log(newPerson);
// console.log(person); //Original Person

/*OUTPUT :
{
  name: 'Rahul',
  mobile: 999999999,
  address: {
    pincode: '4567',
    city: 'gurgaon',
    state: 'haryana',
    emails: [ 'asd@outlook.com', 'abc@yahoo.com', 'rty@hotmail.com' ]
  }
}
{
  name: 'Akash',
  mobile: 999999999,
  address: {
    pincode: 1234,
    city: 'gurgaon',
    state: 'haryana',
    emails: [ 'asd@gmail.com', 'abc@yahoo.com', 'rty@hotmail.com' ]
  }
}
*/
