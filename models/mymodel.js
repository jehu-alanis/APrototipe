const db = require('../config/firebase');

const myCollection = db.collection('myCollection');

const getAllDocuments = async () => {
  const snapshot = await myCollection.get();
  const docs = snapshot.docs.map(doc => doc.data());
  return docs;
};

module.exports = { getAllDocuments };