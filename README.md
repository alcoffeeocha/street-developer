# Street Developer

I created this just for fun while also showing how we can reverse-engineering designs that we often see in public places.

## How to

### View a showcase

To quickly view the showcase, you can find preview link in README.md of each folders inside `showcase` folder.

If you want to view and edit locally, read further...

This project uses Yarn Workspaces which is part of Yarn Package Manager from Node.js, so ensure you have installed latest LTS Node.js in your computer.

After installing Node.js, you can get yarn by using `npm install --global yarn` in your terminal/CLI.

Each workspace or showcase can have different tech stack or tools. To serve a specific folder in **showcase** directory, execute

- `yarn workspace [folder name] install`
- then, `yarn workspace [folder name] start`

for example:

- `yarn workspace tozai-line-train-route-map install`
- then, `yarn workspace tozai-line-train-route-map start`

Though some folders, like above showcase, can be viewed just by double clicking its `index.html.`.
