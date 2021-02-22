/**
 * Title: Utils
 * Description: Utility functions
 * Author: Bx Zahid <zahidhasan.dev@gmail.com> (https://zahidhasan.dev)
 * Date: 22/02/2021
 */

// Module scaffolding
const utils = {};

/**
 * Generate a unique id.
 *
 * @name generateID
 * @param {array} arr
 * @return {array}
 */
utils.generateID = (arr) => {
	if (arr.length === 0) return 1;
	return arr[0].id + 1;
};

module.exports = utils