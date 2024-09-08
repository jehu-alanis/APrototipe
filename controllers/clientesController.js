const ClienteModel = require('../models/clienteModel');

// Controlador para crear un nuevo cliente
exports.crearCliente = async (req, res) => {
  try {
    const { nombre, numeroPedido, graduacionOD, graduacionOI, tipoArmazon, tipoMica, tipoReflejo } = req.body;
    const cliente = await ClienteModel.crear({
      nombre,
      numeroPedido,
      graduacionOD,
      graduacionOI,
      tipoArmazon,
      tipoMica,
      tipoReflejo,
    });
    res.status(201).json({ message: 'Registro creado exitosamente', cliente });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para obtener todos los clientes
exports.obtenerClientes = async (req, res) => {
  try {
    const clientes = await ClienteModel.obtenerTodos();
    res.status(200).json(clientes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para obtener un cliente por ID
exports.obtenerClientePorId = async (req, res) => {
  try {
    const cliente = await ClienteModel.obtenerPorId(req.params.id);
    res.status(200).json(cliente);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// Controlador para actualizar un cliente
exports.actualizarCliente = async (req, res) => {
  try {
    const { nombre, numeroPedido, graduacionOD, graduacionOI, tipoArmazon, tipoMica, tipoReflejo } = req.body;
    const cliente = await ClienteModel.actualizar(req.params.id, {
      nombre,
      numeroPedido,
      graduacionOD,
      graduacionOI,
      tipoArmazon,
      tipoMica,
      tipoReflejo,
    });
    res.status(200).json({ message: 'Registro actualizado exitosamente', cliente });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para eliminar un cliente
exports.eliminarCliente = async (req, res) => {
  try {
    const result = await ClienteModel.eliminar(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
