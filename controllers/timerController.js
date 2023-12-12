const Timer = require('../models/timerModel');

exports.postTimer = async (req, res) => {
    try {
        const { user_id } = req.params;
        const { timer } = req.body;

        const newTimer = new Timer({
            user_id,
            timer,
        });

        await newTimer.save();

        res.status(201).json({ message: "Nouveau temps enregistré" });
    } catch (error) {
        console.log(error);
        console.log(req.params)
        res.status(500).json({ message: "Erreur serveur" });
    }
};