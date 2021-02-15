const path = require("path");
const { argv } = require("yargs");

const Todo = require("./Todo");
const { CREATE, UPDATE, REMOVE, SEARCH, DONE, LIST } = require("./command");
const { saveFile, readFile } = require("./utils");

(function init() {
	const fileName = "../db.json";
	const filePath = path.resolve(__dirname, fileName);

	const data = readFile(filePath) || [];

	// Todo object
	const todo = new Todo(data);

	const { _: baseCommand } = argv;

	switch (baseCommand[0]) {
		case CREATE: {
			if (!argv.hasOwnProperty("text")) {
				console.log(
					"\n\tPlease type right argument. Right argument: --text"
				);
				return;
			}

			todo.create(argv.text.toString());

			console.log("\n\tA new todo added...");
			saveFile(todo.todoList, filePath);
			break;
		}
		case UPDATE: {
			if (!argv.hasOwnProperty("id") || !argv.hasOwnProperty("text")) {
				console.log(
					"\n\tPlease type right argument. Right argument: --id, --text"
				);
				return;
			}

			todo.update(argv.id, argv.text);
			console.log("\n\tTodo updated...");
			saveFile(todo.todoList, filePath);
			break;
		}
		case REMOVE: {
			if (!argv.hasOwnProperty("id")) {
				console.log(
					"\n\tPlease type right argument. Right argument: --id"
				);
				return;
			}
			todo.remove(argv.id);
			saveFile(todo.todoList, filePath);
			break;
		}
		case SEARCH: {
			if (!argv.hasOwnProperty("term")) {
				console.log(
					"\n\tPlease type right argument. Right argument: --term"
				);
				return;
			}

			const items = todo.search(argv.term.toString());

			if (items.length === 0) {
				console.log("\n\tNo Todo Found");
				return;
			}

			items.map((todo) => {
				console.log(`\n\tId: ${todo.id}, Todo: ${todo.todo}`);
			});

			break;
		}
		case DONE: {
			todo.done();
			saveFile(todo.todoList, filePath);
			break;
		}
		case LIST: {
			if (todo.todoList.length === 0) {
				console.log("\n\tThere is no todo...");
				break;
			}

			console.log("\n\tYour Todo List:\n");

			todo.todoList.map((todo) => {
				console.log(`\tId: ${todo.id}, Todo: ${todo.todo}`);
			});

			break;
		}
		default:
			console.log("\n\tWrong Command!\n");
			console.log("\tRight Command List:");
			console.log("\tcreate | update | remove | search | done | list");
	}
})();