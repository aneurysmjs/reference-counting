import refManager from './src/refManager.mjs';

const ref = refManager();

const moduleA = {
  name: 'Jero',
  age: 30,
}; 

const moduleB = {
  name: 'Matthias',
  age: 10,
};

// const moduleC = {
//   name: 'Douglas',
//   age: 65,
// }


// import objectRefCounter from './src/objectRefCounter.mjs';

// const ref = objectRefCounter();

ref.add(moduleA);
ref.add(moduleB);
ref.add(moduleA);
ref.add(moduleA);
ref.add(moduleA);


ref.remove(moduleA);
ref.remove(moduleA);
ref.remove(moduleA);
ref.remove(moduleA);
ref.remove(moduleA);

ref.getCount(moduleA);
