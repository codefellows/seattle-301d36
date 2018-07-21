function test(callback) {
  console.log(callback);
  callback();
}


test(() => console.log('Hello World'));