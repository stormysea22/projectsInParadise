const Widget = require("../models/widget.model");

module.exports = {
    index: (res, req) => {
        Widget.find()
            .then(data => res.json({ results:data }))
            .catch(err => res.status(404).json({errors:err.errors}))
    },

    create: (res, req) => {
        Widget.create(req.body)
            .then(data => res.json({ results:data }))
            .catch(err => res.status(404).json({errors:err.errors}))
    },

    show: (res, req) => {
        Widget.find({ _id:req.params.id })
            .then(data => res.json({ results:data }))
            .catch(err => res.status(404).json({errors:err.errors}))
    },

    update: (res, req) => {
        Widget.updateOne({ _id: req.params.id }, req.body, { runValidators: true })
            .then(data => res.json({ results:data }))
            .catch(err => res.status(404).json({errors:err.errors}))
    },

    destroy: (res, req) => {
        Widget.deleteOne({ _id: req.params.id })
            .then(data => res.json({ results:data }))
            .catch(err => res.status(404).json({errors:err.errors}))
    },
}