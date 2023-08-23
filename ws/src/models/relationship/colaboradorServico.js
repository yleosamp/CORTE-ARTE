const mongoose = require('mongoose');
const Schema = moongose.Schema;

const colaboradorServico = new Schema({
  colaboradorId: {
    type: moongose.Types.ObjectId,
    ref: 'Colaborador',
    required: true,
  },
  servicoId: {
    type: moongose.Types.ObjectId,
    ref: 'Servico',
    required: true,
  },
  status: {
    type: String,
    enum: ['I', 'A'],
    default: 'A',
  },
  dataCadastro: Date,
});

module.exports = moongose.model('ColaboradorServico', colaboradorServico)