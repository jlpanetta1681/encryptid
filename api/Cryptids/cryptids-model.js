const db = require('../data/db-config')

function addCryptids(data) {
    console.log(data)
    return db('cryptids').insert(data, ['*'])
}
function updateCryptids(data) {
    return db('cryptids').where({cryptids_id: data.cryptids_id}).update(data,['*'])
}

function getAll() {
    return db('cryptids')
}
function getOne() {
    return db('cryptids').where({is_filled:0}).first()
}
module.exports = {
    getAll,
    addCryptids,
    updateCryptids,
    getOne
}
