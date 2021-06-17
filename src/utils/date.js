export const getShortDate = iso => {
  const date = new Date(iso);
  return `${date.toLocaleString('default', {
    month: 'short',
  })} ${date.getFullYear()}`;
};

export const getLongDate = iso => {
  const date = new Date(iso);
  return `${date.getMonth()} ${date.toLocaleString('default', {
    month: 'short',
  })} ${date.getFullYear()}`;
};
