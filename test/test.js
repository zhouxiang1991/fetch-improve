import fetch from '../src/';

(async () => {
  const a = await fetch('https://www.baidu.com', 'text');
  console.log(a);
})();
