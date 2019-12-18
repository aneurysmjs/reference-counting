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
