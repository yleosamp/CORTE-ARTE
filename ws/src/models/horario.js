const mongoose = require('mongoose');
const Schema = moongose.Schema;

const horario = new Schema({
  salaoId: {
    type: mongoose.Types.ObjectId,
    ref: 'Barber',
    required: true,
  },
  especialidades: [{
      type: mongoose.Types.ObjectId,
      ref: 'Servico',
      required: true,
    },
  ],
  colaboradores: [{
      type: mongoose.Types.ObjectId,
      ref: 'Colaborador',
      required: true,
    },
  ],
  dias: Number,
  inicio: Date,
  fim: Date,
  dataCadastro: Date,
});

module.exports = moongose.model('Horario', horario)