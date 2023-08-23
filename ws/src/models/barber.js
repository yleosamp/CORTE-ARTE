const mongoose = require('mongoose');
const Schema = moongose.Schema;

const barber = new Schema({
  nome: {
    type: String,
    required: [true, 'O nome é obrigatório.'],
  },
  foto: String,
  capa: String,
  email: {
    type: String,
    required: [true, 'O e-mail é obrigatório.'],
  },
  senha: {
    type: String,
    default: null,
  },
  telefone: String,
  endereco: {
    cidade: String,
    uf: String,
    cep: String,
    numero: String,
    pais: String,
  },
  geo: {
    tipo: String,
    coordinates: Array,
  },
  dataCadastro: {
    type: Date,
    default: Date.now,
  },
});

barber.index({ geo: '2dsphere' });

module.exports = moongose.model('Barber', barber)