/**
 * Created by kornelia on 21.01.17.
 */
/**
 *
 * @param _id
 * @param personalDetails
 * @param factureList
 * @constructor
 */
function Client(_id,personalDetails,factureList) {
    this._id = _id;
    this.personalDetails = personalDetails;
    this.factureList = factureList || [];
}

module.exports = Client;