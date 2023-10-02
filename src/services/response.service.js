const responseModel = require('../models/response.model')

class ResponseService {
    static getAll = async () => {
        const responses = await responseModel.find({})
        return responses;
    }
    static updateOne = async ({ id, method, path, httpCode, response }) => {
        const responseInString = JSON.stringify(response)
        const result = await responseModel.updateOne({ _id: id }, {
            method, path, httpCode, response: responseInString
        })
        return result;
    }
    static getOne = async ({ path, method }) => {
        const result = await responseModel.findOne({path, method})
        return result;
    }
    static create = async ({ method, path, httpCode, response }) => {
        const responseInString = JSON.stringify(response)
        const result = await responseModel.create({
            method, path, httpCode, response: responseInString
        })
        return result;
    }
}

module.exports = ResponseService