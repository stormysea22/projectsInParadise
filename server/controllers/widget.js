const Widget = require("../models/widget");

module.exports = {
    index: (req, res) => {
        Widget.find()
            .then(data => res.json({ results:data }))
            .catch(err => res.status(404).json({errors:err.errors}))
    },

    create: (req, res) => {
        Widget.create(req.body)
            .then(data => res.json({ results:data }))
            .catch(err => res.status(404).json({errors:err.errors}))
    },

    show: (req, res) => {
        Widget.find({ _id:req.params.id })
            .then(data => res.json({ results:data }))
            .catch(err => res.status(404).json({errors:err.errors}))
    },

    update: (req, res) => {
        Widget.updateOne({ _id: req.params.id }, req.body, { runValidators: true })
            .then(data => res.json({ results:data }))
            .catch(err => res.status(404).json({errors:err.errors}))
    },

    destroy: (req, res) => {
        Widget.deleteOne({ _id: req.params.id })
            .then(data => res.json({ results:data }))
            .catch(err => res.status(404).json({errors:err.errors}))
    },
}