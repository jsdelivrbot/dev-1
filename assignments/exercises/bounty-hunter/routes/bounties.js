const express = require('express');
const bountiesRoute = express.Router();
const Bounties = require('../models/bounties');


bountiesRoute.route('/')
    .get((req, res) => {
        // let query = {};
        Bounties.find(req.query, (err, bounties) => {
            if (err) return res.status(500).send(err);
            return res.send(bounties);
        });
    })

    .post((req, res) => {
        let newBounty = new Bounties(req.body);
        newBounty.save((err) => {
            if (err) return res.status(500).send(err);
            return res.send(newBounty);
        });
    });

bountiesRoute.route('/:id')
    .get((req, res) => {
        Bounties.findById(req.params.id, (err, bounty) => {
            if (err) return res.status(500).send(err);
            return res.send(bounty)
        })
    })
    .delete((req, res) => {
        Bounties.findByIdAndRemove(req.params.id, (err, deletedBounty) => {
            if (err) return res.status(500).send(err);
            return res.send(deletedBounty);
        })
    })
    .put((req, res) => {
        Bounties.findByIdAndUpdate(req.params.id, req.body, {new: true}, (eBounty) => {
            if (err) return res.status(500).send(err);
            return res.send(updatedBounty);
        })
    })

module.exports = bountiesRoute;