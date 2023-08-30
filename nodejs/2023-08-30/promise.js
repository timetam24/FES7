function sayHello() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("hello"), 1000);
  });
}

async function test() {
  const hello = await sayHello();
  console.log(hello);
}

test();
