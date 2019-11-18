import objectRefCounter from './src/objectRefCounter.mjs';

const ref = objectRefCounter();

const moduleA = {
  name: 'Jero',
  age: 30,
}; 

const moduleB = {
  name: 'Matthias',
  age: 10,
};

const moduleC = {
  name: 'Douglas',
  age: 65,
}

ref.add(moduleA);
ref.add(moduleA);
ref.add(moduleB);
ref.add(moduleC);

const countA = ref.getCount(moduleA);
const countB = ref.getCount(moduleB);
const countC = ref.getCount(moduleC);


console.log('countB', countB);
