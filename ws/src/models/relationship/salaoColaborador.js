const mongoose = require('mongoose');
const Schema = moongose.Schema;

const salaoColaborador = new Schema({
  salaoId: {
    type: mongoose.Types.ObjectId,
    ref: 'Barber',
    required: true,
  },
  colaboradorId: {
    type: moongose.Types.ObjectId,
    ref: 'Colaborador',
    required: true,
  },
  status: {
    type: String,
    enum: ['I', 'A'],
    default: 'A',
  },
  dataCadastro: Date,
});

module.exports = moongose.model('SalaoColaborador', salaoColaborador)