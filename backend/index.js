const http = require('http');
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const server = http.createServer(app);

app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());

var port = '2303';
var ip = 'localhost';
var temp_model = require('./models/temp_model');

mongoose.connect('mongodb+srv://sgk2303:gokul1234@cluster0.dsp9o.mongodb.net/pyrates?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })

var dataSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    m_id: { type: Number },
    stats: { type: String },
    last_online: { type: Date },
});

var userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user_id: { type: Number },
    name: { type: String },
    email: { type: String },
    password: { type: String }
});

var previous_feed_set = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    m_id: { type: Number },
    set_feed: { type: Number },
    set_on: { type: Date }
}
);

var catalyst_temp = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    m_id: { type: Number },
    set_temp: { type: Number },
    set_on: { type: Date }
}
);

var catalyst_pressure = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    m_id: { type: Number },
    set_pressure: { type: Number },
    set_on: { type: Date }
}
);

app.post('/login', async (req, res) => {
    try {
        const userData = mongoose.model('User', userSchema);
        await userData.find({
            email: req.body.username,
            password: req.body.password
        }, (err, data) => {
            if (err || !data || !data.length) {
                res.send({ success: false, data: null });
            } else {
                res.send({ success: true, data: data });
            }
        });
    } catch (err) {
        console.log(err);
        res.send({ success: false, data: null });
    }
});

app.get('/current_reactor_temp', async (req, res) => {
    try {
        const current_reactor_tempData = temp_model;
        let result = await current_reactor_tempData.find(req.query).sort({ _id: -1 }).limit(1);
        res.send({
            temperture: result[0].set_temp,
            date: result[0].set_on,
            m_id: result[0].m_id
        });
    }
    catch (err) {
        console.log(err);
    }
});

app.get('/current_catalyst_temp', async (req, res) => {
    try {
        const current_catalyst_temp = mongoose.model('Temp2', catalyst_temp);
        let result = await current_catalyst_temp.find(req.query).sort({ _id: -1 }).limit(1);
        res.send({
            temperture: result[0].set_temp,
            date: result[0].set_on
        });
    }
    catch (err) {
        console.log(err);
    }
});

app.get('/current_catalyst_pressure', async (req, res) => {
    try {
        const current_catalyst_pressure = mongoose.model('Pressure', catalyst_pressure);
        let result = await current_catalyst_pressure.find(req.query).sort({ _id: -1 }).limit(1);
        res.send({
            pressure: result[0].set_pressure,
            date: result[0].set_on
        });
    }
    catch (err) {
        console.log(err);
    }
});

app.get('/current_stats', async (req, res) => {
    try {
        var course = mongoose.model('Current_Stat', dataSchema);
        let result = await course.find();
        res.json(result);
    }
    catch (err) {
        res.json({ message: err });
        res.status(400);
    }
});

app.get('/previous_feed_set', async (req, res) => {
    var feed = mongoose.model('Feed', previous_feed_set);
    let result = await feed.find(req.query, { _id: 0 }, { limit: 5, sort: { set_on: -1 } });
    res.json(result);
});

app.get('/previous_temp_set', async (req, res) => {
    var temp = temp_model;
    let result = await temp.find(req.query, { _id: 0 }, { limit: 5, sort: { on: -1 } });
    res.json(result);
});

app.post('/save', async (req, res) => {
    try {
        const course = mongoose.model('Current_stat', dataSchema);
        await course(req.body).save()
        res.json({ message: 'Post created' });
    }
    catch {
        res.json({ message: 'Error' });
    }
});

server.listen(port, ip, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Server is running on port " + port);
    }
})