const mongoose = require('mongoose');
const Schema = moongose.Schema;

const agendamento = new Schema({
  clienteId: {
    type: mongoose.Types.ObjectId,
    ref: 'Cliente',
    required: true,
  },
  salaoId: {
    type: mongoose.Types.ObjectId,
    ref: 'Barber',
    required: true,
  },
  servicoId: {
    type: mongoose.Types.ObjectId,
    ref: 'Servico',
    required: true,
  },
  colaboradorId: {
    type: moongose.Types.ObjesctId,
    ref: 'Colaborador',
    required: true,
  },
  data: Date,
  comissao: Number,
  valor: Number,
  transactionId: String,
  dataCadastro: Date,
});

module.exports = moongose.model('Agendamento', agendamento)