const mongoose = require('mongoose');
const Schema = moongose.Schema;

const servico = new Schema({
  salaoId: {
    type: mongoose.Types.ObjectId,
    ref: 'Barber',
  },
  titulo: {
    type: String,
    required: true,
  },
  preco: {
    type: Number,
    required: true,
  },
  comissao: {
    type: Number, // Porcentagem de comissão sobre o preço
    required: true,
  },
  duracao: {
    type: Number, // Duração em minutos
    required: true,
  },
  recorrencia: {
    type: Number, // Dias que o cliente voltará na barber
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['A', 'I', 'E'],
    default: 'A',
    required: true,
  },
  dataCadastro: {
    type: String,aa
    required: true,
  },
});

module.exports = moongose.model('Servico', servico)