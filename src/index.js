import { createRoot } from 'react-dom/client';
import { App } from 'app';

const $root = document.querySelector('#root');

if ($root) {
  const root = createRoot($root);
  root.render(<App title={'Base React App'}/>);
};
