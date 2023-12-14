const Timer = require('../models/timerModel');


exports.postTimer = async (req, res) => {
    try {
        const { user_id } = req.params;
        const { timer } = req.body;

        const newTimer = new Timer({
            user_id,
            timer,
        });

        console.log(req.params);
        await newTimer.save();

        res.status(201).json({ message: "Nouveau temps enregistré" });
    } catch (error) {
        console.log(error);
        console.log(req.params)
        res.status(500).json({ message: "Erreur serveur" });
    }
};


exports.showTimer = async (req, res) => {
    try {
        const timer = await Timer.find({user_id: req.params.user_id});
        res.status(200).json(timer);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Erreur serveur'});

    }    
};


exports.avgTimer = async (req,res) => {
    try{
        const result = await Timer.find({user_id : req.params.user_id});
        let nbTimer = 0;
        const divide = result.length;
        result.forEach((timer) => {
            nbTimer += timer.timer;
        });
        res.status(200);
        res.json(nbTimer/divide);
    }catch (error) {
        res.status(500);
        res.json({message : "Erreur serveur"});
        console.log(error);
    }
}
