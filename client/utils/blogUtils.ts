const toSnippet = (text: string) => {
  const ls = text.split(' ');

  const snippet = ls.slice(0, ls.length <= 10 ? ls.length - 3 : 9).join(' ');

  return `${snippet} ...`;
}

const toImage = (contentType: string, data: string): string => {
  return `data:${contentType};base64,${data}`;
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export {
  toSnippet,
  toImage,
  formatDate
}