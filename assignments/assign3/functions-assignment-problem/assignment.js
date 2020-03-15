const sayHello = (age, name = "haerang") => {
  const text = `my age is ${age} and name is ${name}.`;
  return text;
};

const another = name => "hi " + name;

console.log(another("sara"));
const checkInput = (cb, ...strings) => {
  let hasEmptyText = false;
  for (const text of strings) {
    if (text === "") {
      hasEmptyText = true;
      break;
    }
  }
  if (!hasEmptyText) {
    cb();
  }
};

checkInput(
  () => {
    console.log("All not empty");
  },
  "adf",
  "df",
  ""
);

console.log(sayHello(27));
