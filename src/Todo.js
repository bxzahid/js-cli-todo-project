/**
 * Title: Todo
 * Description: Todo template
 * Author: Bx Zahid <zahidhasan.dev@gmail.com> (https://zahidhasan.dev)
 * Date: 22/02/2021
 */

const { generateID } = require("./helpers/utils");

// Making properties from the public to private
const _todoList = Symbol("todoList");

/**
 * @class
 * @classdesc A todo template.
 *
 * @property todoList
 * @method create
 * @method update
 * @method remove
 * @method search
 * @method done
 * @method list
 */
class Todo {
	/**
	 * @constructor
	 */
	constructor(todoList = []) {
		this[_todoList] = todoList;
	}

	/**
	 * Get all todo method.
	 *
	 * @return {array}
	 */
	get todoList() {
		return this[_todoList];
	}

	/**
	 * Create todo method.
	 *
	 * @param {string} todo
	 */
	create(todo) {
		const todoItem = {
			id: generateID(this.todoList),
			todo,
		};
		
		this[_todoList].unshift(todoItem);
	}

	/**
	 * Update todo method.
	 *
	 * @param {string} id
	 * @param {object} updatedData
	 */
	update(id, updatedData) {
		const index = this[_todoList].findIndex((todo) => todo.id === id);
		this[_todoList][index].todo = updatedData;
	}

	/**
	 * Remove todo method.
	 *
	 * @param {string} id
	 */
	remove(id) {
		const filteredTodo = this[_todoList].filter((todo) => todo.id !== id);
		this[_todoList] = filteredTodo;
	}

	/**
	 * Search todo method.
	 *
	 * @param {string} term
	 * @return {array}
	 */
	search(term) {
		const result = [];

		this[_todoList].map((item) => {
			if (item.todo.toLowerCase().includes(term.toLowerCase())) {
				result.push(item);
			}
		});
		return result;
	}

	/**
	 * Done todo method.
	 *
	 * @return {array}
	 */
	done() {
		return this[_todoList].shift();
	}

	/**
	 * List todo method.
	 *
	 * @return {array}
	 */
	list() {
		return this[_todoList];
	}

	/**
	 * @override
	 */
	toString() {
		return `Todo List: ${this[_todoList]}`;
	}
}

module.exports = Todo;
