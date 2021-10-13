export const generateRandomFilename = (mimetype: string) => {
  const date = new Date();
  const formatedDate = date
    .toISOString()
    .replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g, '');
  return `${formatedDate}.${mimetype}`;
};
