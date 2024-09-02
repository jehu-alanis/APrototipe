const myModel = require('../models/mymodel');

const getDocuments = async (req, res) => {
  try {
    const documents = await myModel.getAllDocuments();
    res.render('myView', { documents });
  } catch (error) {
    res.status(500).send('Error al obtener los documentos');
  }
};

module.exports = { getDocuments };