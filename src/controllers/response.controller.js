'use strict'

const ResponseService = require('../services/response.service');

class ResponseController {
    getAll = async (req, res, next) => {
        try {
            console.log(`[P]::getResponses::`, req.body);
            /*
                200 OK
                201 CREATED
            */
            return res.status(200).json(await ResponseService.getAll())
        } catch (error) {
            next(error)
        }
    }
    updateOne = async (req, res, next) => {
        try {
            console.log(`[P]::updateOne::`, req.body);
            /*
                200 OK
                201 CREATED
            */
            return res.status(201).json(await ResponseService.updateOne(req.body))
        } catch (error) {
            next(error)
        }
    }
    getOneByPath = async (req, res, next) => {
        try {
            console.log(`[P]::getOneByPath::`, req.query);
            /*
                200 OK
                201 CREATED
            */
            return res.status(200).json(await ResponseService.getOne(req.query))
        } catch (error) {
            next(error)
        }
    }
    create = async (req, res, next) => {
        try {
            console.log(`[P]::create::`, req.body);
            /*
                200 OK
                201 CREATED
            */
            const response = await ResponseService.create(req.body)
            return res.status(200).json(response)
        } catch (error) {
            next(error)
        }
    }
    getResponse = async (req, res, next) => {
        try {
            console.log(`[P]::getOneByPath::`, req.path);
            /*
                200 OK
                201 CREATED
            */
            const path = req.path.replace(req.params['id'], '0')
            const path = path.replace(req.params['id1'], '0')
            const response = await ResponseService.getOne({ path, method: req.method.toLowerCase() })
            return res.status(response.httpCode).json(
                JSON.parse(response.response)
            )
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new ResponseController()