import { version } from '../package.json';
import ModuleA from './ModuleA';
import ModuleB from './ModuleB';
// import './css/main.css';

const moduleA = new ModuleA(version);
const moduleB = new ModuleB(version);

moduleA.print();

export default {
  version,
  moduleA,
  moduleB,
};
