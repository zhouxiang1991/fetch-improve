import phantom from 'phantom';
import assert from 'chain-assert';

export default async (url, type = 'html') => {
  assert.url(url, 'url');
  assert.string(type, 'type');
  const instance = await phantom.create();
  const page = await instance.createPage();
  await page.open(url);
  let content;
  if (type === 'html') {
    content = await page.property('content');
  } else if (type === 'text') {
    content = await page.property('plainText');
  }
  await instance.exit();
  return content;
};
