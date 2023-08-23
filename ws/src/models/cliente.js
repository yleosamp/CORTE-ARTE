const mongoose = require('mongoose');
const Schema = moongose.Schema;

const cliente = new Schema({
  nome: {
    type: String,
    required: true,
  },
  telefone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  senha: {
    type: String,
    required: true,
    default: null,
  },
  status: {
    type: String,
    enum: ['A', 'I'],
    default: 'A',
    required: true
  },
  sexo: {
    type: String,
    enum: ['M', 'F'],
    required: true,
  },
  dataNascimento: {
    type: Date,
    required: true,
  },
  foto: {
    type: String,
  },
  documento: {
    tipo: {
      type: String,
      required: true,
    },
    numero: {
      type: Number,
      required: true,
    },
  },
  endereco: {
    cidade: {
      type: String,
      required: true,
    },
    cep: {
      type: String,
      required: true,
    },
    numero: {
      type: Number,
      required: true,
    },
    uf: {
      type: String,
      required: true,
    },
  },
  dataCadastro: {
    type: Date,
     required: true,
  }
});

module.exports = moongose.model('Cliente', cliente)