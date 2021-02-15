## JS CLI Todo Project

### Setup Process

```bash
git clone https://github.com/bxzahid/js-cli-todo-project.git
cd js-cli-todo-project
```

Install all the dependencies

```bash
npm install
```

or

```bash
yarn
```

## There are six operation we can do in this project:

-   **Create a todo**

    ### node src/index.js create --text="My first todo"

    -   `create` - Create command for creating a todo.
    -   `--text` - Todo text.

-   **Update a todo**

    ### node src/index.js update --id="1" --text="My updated todo"

    -   `update` - Update command for updating a todo.
    -   `--id` - Which todo we want to update.
    -   `--text` - Updated todo text.

-   **Remove a todo**

    ### node src/index.js remove --id="1"

    -   `remove` - Remove command for removing a todo.
    -   `--id` - Which todo we want to remove.

-   **Search a todo**

    ### node src/index.js search --term="My todo"

    -   `search` - Search command for finding a todo.
    -   `--term` - Which pattern we use for searching a todo.

-   **Done todo**

    ### node src/index.js done"

    -   `done` - Done command for removing a todo which was last created.

-   **Show all todo**

    ### node src/index.js list"

    -   `list` - List command for showing all todo.
