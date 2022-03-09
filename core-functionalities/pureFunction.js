const c = 5;
/**
 * Function with side effect
 * @param {int} a first parameters
 * @param {int} b second parameters
 */
function parent1(a, b) {
  const data = a + b;
  console.log(data); //This is not a pure function because it does not return a value
}
/**
 *Function with side effect
 * @param {int} a first parameters
 * @param {int} b second parameters
 */
function parent2(a, b) {
  const data = a + b;
  return data - c; //This is not a pure function because c is globally decalred
}
/**
 *Pure function
 * @param {int} a first parameters
 * @param {int} b second parameters
 */
function parent3(a, b) {
  return a + b; //This is pure function beacuse all its value are passed through parameters
}
