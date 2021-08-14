let users;
import 'mongodb'
import { ObjectId } from 'mongodb';
import {genHash} from '../service/encrypt.service';

export default class UsersDAO {

  static async injectDB(conn) {
    if (users) {
        return
    }
    try {
        users = await conn.db(process.env.APP_NS).collection("users")
    } catch (e) {
        console.error(
            `Unable to establish a collection handle in usersDAO: ${e}`,
        )
    }
}

    /**
     * 
     * @param {Object} userInfo 
     * @param {Function} callback 
     * 
     */
    
    static async findOrCreate(db, userInfo){
      users = db.collection('users');
      const {googleId, displayName, username, password} = userInfo
      await users.updateOne({googleId: googleId,}, {$set: {googleId: googleId, username: displayName}}, {upsert: true});
      try {
          let result = await users.findOne({googleId: googleId})
          return({error: null, result: result});
      }
      catch (e) {
          let error = "An error occured while finding document: " + e.toString();
          return({error: error, result: null});
      }
    }
    /**
     * 
     * @param {Object} userInfo
     * @returns {DAOResponse} 
     */

    static async createUser(db, userInfo) {
      users = db.collection('users');
        const {email, name, password} = userInfo;
        try {
            let {hash} = await genHash(password);
            let result = await users.insertOne({name, email, hash})
            return({error: null, result: result})
        }
        catch (e) {
            return({error:e.toString(), result: null})
        }
    }
    /** 
     * @param {String} id - id of a user
     * @returns {DAOResponse} Returns an error or a document
    */
    static async findById(db, id) {
      users = db.collection('users');
        try {
            let doc = await users.findOne({_id: ObjectId(id)})
            return({error: null, result: doc});
        } catch(e) {
            return({error: e, result: null});
        }

    }
    /** 
     * @param {String} email - email of a user
     * @returns {DAOResponse}
    */

    static async findByEmail(db, email) {
      users = db.collection('users');
        try {
            let doc = await users.findOne({email})
            return({error: null, result: doc});
        } catch(e) {
            return({error: e.toString(), result: null});
        }
    }
    /**
     * @param {Object} UserInfo
     * @returns {DAOResponse}
     */

    static async deleteUser(db, UserInfo) {
      users = db.collection('users');
        try {
            const { _id:id } = UserInfo
            let doc = await users.deleteOne({_id: id})
            return({error: null, result: doc})
        }
        catch (e) {
            return({error: e, result: null})
        }
    }
    
}

/**
 * @typedef DAOResponse
 * @property {string | null} error
 * @property {Object} result - result of query
 */
