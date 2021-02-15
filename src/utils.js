const fs = require("fs");

/**
 * Generate a unique id.
 *
 * @name generateID
 * @function
 * @param {array} arr
 * @return {array}
 */
const generateID = (arr) => {
	if (arr.length === 0) return 1;
	return arr[0].id + 1;
};

/**
 * Save file with data.
 * 
 * @name saveFile
 * @function
 * @param {object} data
 * @param {string} fileName
 */
const saveFile = (data, fileName) => {
	try {
		fs.writeFileSync(fileName, JSON.stringify(data));
	} catch (e) {
		console.log(e.message);
	}
};

/**
 * Read file.
 * 
 * @name readFile
 * @function
 * @param {string} fileName
 */
const readFile = (fileName) => {
	try {
		const data = fs.readFileSync(fileName, "utf-8");
		return data && JSON.parse(data);
	} catch (e) {
		console.log(e.message);
	}
};

module.exports = {
	generateID,
	saveFile,
	readFile,
};
