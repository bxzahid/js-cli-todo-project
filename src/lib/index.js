/**
 * Title: Library
 * Description: Library functions for save & read file
 * Author: Bx Zahid <zahidhasan.dev@gmail.com> (https://zahidhasan.dev)
 * Date: 22/02/2021
 */

// Dependencies
const fs = require("fs");

// Module scaffolding
const lib = {};

/**
 * Write data from file
 *
 * @name saveFile
 * @param {object} data
 * @param {string} fileName
 */
lib.saveFile = (data, fileName, callback) => {
	fs.writeFile(fileName, JSON.stringify(data), (err) => {
		callback(err);
	});
};

/**
 * Read data from file
 *
 * @name readFile
 * @param {string} fileName
 */
lib.readFile = (fileName, callback) => {
	try {
		const data = fs.readFileSync(fileName, "utf-8");
		callback(data && JSON.parse(data));
	} catch (err) {
		callback(err.message);
	}
};

module.exports = lib;
