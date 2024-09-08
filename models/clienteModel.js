const db = require('../config/firebase');
const collectionName = 'clientes';

class ClienteModel {
  // Crear un nuevo cliente
  static async crear(data) {
    try {
      const docRef = await db.collection(collectionName).add(data);
      return { id: docRef.id, ...data };
    } catch (error) {
      throw new Error('Error al crear el registro');
    }
  }

  // Obtener todos los clientes
  static async obtenerTodos() {
    try {
      const snapshot = await db.collection(collectionName).get();
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      throw new Error('Error al obtener los registros');
    }
  }

  // Obtener un cliente por ID
  static async obtenerPorId(id) {
    try {
      const doc = await db.collection(collectionName).doc(id).get();
      if (!doc.exists) {
        throw new Error('Registro no encontrado');
      }
      return { id: doc.id, ...doc.data() };
    } catch (error) {
      throw new Error('Error al obtener el registro');
    }
  }

  // Actualizar un cliente
  static async actualizar(id, data) {
    try {
      await db.collection(collectionName).doc(id).update(data);
      return { id, ...data };
    } catch (error) {
      throw new Error('Error al actualizar el registro');
    }
  }

  // Eliminar un cliente
  static async eliminar(id) {
    try {
      await db.collection(collectionName).doc(id).delete();
      return { id, message: 'Registro eliminado exitosamente' };
    } catch (error) {
      throw new Error('Error al eliminar el registro');
    }
  }
}

module.exports = ClienteModel;
