'use strict'

exports.handler = function (event, context, callback) {

    var id = process.env.id.toLowerCase();
    var digit = id.substring(id.length - 1, id.length);

    if (digit % 2 === 0) {
        var lang_resp = '<p>Bonjour</p>'
    } else {
        var lang_resp = '<p>Hello</p>'
    }

    var response = {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/html; charset=utf-8'
        },

        body: lang_resp
    };
    callback(null, response)
};