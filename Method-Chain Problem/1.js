// return the full names of the facebook users who belong to guragon
// HINT: use higher order functions and chain them

const facebookProfiles = [
  {
    firstName: "Akash",
    lastName: "Agarwal",
    location: "rampur",
  },
  {
    firstName: "Pritesh",
    lastName: "Kumar",
    location: "gurgaon",
  },
  {
    firstName: "Sabiha",
    lastName: "Khan",
    location: "gurgaon",
  },
  {
    firstName: "Suyash",
    lastName: "Kashyap",
    location: "alwar",
  },
  {
    firstName: "Jay",
    location: "gurgaon",
  },
];

// function fullName(value) {
//   let a = [];
//   for (let i = 0; i < facebookProfiles.length; i++) {
//     if (facebookProfiles[i].location == value) {
//       a.push(
//         facebookProfiles[i].firstName + " " + facebookProfiles[i].lastName
//       );
//       return a;
//     }
//   }
// }
// const r = fullName("gurgaon");
// console.log(r);

function fullName(fp) {
  let fullname = fp
    .filter((x) => x.location === "gurgaon")
    .map((x) => x.firstName + " " + (x.lastName ? x.lastName : ""));
  return fullname;
}
console.log(fullName(facebookProfiles));

//OUTPUT: [ 'Pritesh Kumar', 'Sabiha Khan', 'Jay ' ]
