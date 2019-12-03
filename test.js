var testObj = {
  id: 1,
  content: "some content",
  date: "Tue Nov 26"
};

var modObj = {
  newContent: "updated content"
}

console.log(testObj);
console.log(modObj);

function update(){
  let keys = Object.keys(modObj);
  keys.forEach(key => {
    testObj[key] = modObj[key];
  });
  console.log("=====Updated Object=====");
  console.log(testObj);
}

update();