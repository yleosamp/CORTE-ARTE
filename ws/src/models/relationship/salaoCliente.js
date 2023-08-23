const mongoose = require('mongoose');
const Schema = moongose.Schema;

const salaoCliente = new Schema({
  salaoId: {
    type: moongose.Types.ObjectId,
    ref: 'Barber',
    required: true,
  },
  clienteId: {
    type: moongose.Types.ObjectId,
    ref: 'Cliente',
    required: true,
  },
  status: {
    type: String,
    enum: ['I', 'A'],
    default: 'A',
  },
  dataCadastro: Date,
});

module.exports = moongose.model('SalaoCliente', salaoCliente)