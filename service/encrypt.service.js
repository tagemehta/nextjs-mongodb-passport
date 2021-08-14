const bcrypt = require("bcrypt");
/**
 * @param {String} secret string to hash
 * @returns {HashResponse} response
 */

export async function genHash(secret) {
    try {
        const hashPwd = await bcrypt.hash(secret, 10);
        return({error: null, hash: hashPwd})
    } 
    catch (e) {
        return({error: e, hash: null})
    }
    
}
/**
 * 
 * @param {String} secret 
 * @param {String} hash 
 * @return {Boolean} result of comparison {result}
 */

export async function compareHash(secret, hash) {
    try {
        const result = await bcrypt.compare(secret, hash)
        return({result: result})
    }
    catch (e) {
        return({error: e, result: null})
    }
}

/**
 * @typedef HashResponse
 * @param {Error} error
 * @param {hash} hash
 */