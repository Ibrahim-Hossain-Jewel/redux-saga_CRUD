function* hello(){
  yield 'hello';
  yield 'hi'
}
function* jewel(){
  yield* hello();
}
console.log(jewel().next())
