var mongoose = require('mongoose');

var current_reactor_temp = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    m_id: { type: Number },
    set_temp: { type: Number },
    set_on: { type: Date }
}
);

module.exports = mongoose.model('Sensor_temp', current_reactor_temp);