import phantom from 'phantom';

export default async (url, type = 'html') => {
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
