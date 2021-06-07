const contentful = require('contentful');

const client = contentful.createClient({
  space: '07s2g79fhx8u',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const getContentByID = async id => {
  return await client.getEntry(id);
};

export const getAllContentByID = async id => {
  return await client.getEntries({ content_type: id });
};
