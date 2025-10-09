# Street Developer

I created this just for fun while also showing how we can reverse-engineering designs that we often see in public places.

## How to

### View a showcase

This project uses Yarn Workspaces, and each workspace can have different tech stack or tools. To serve a specific folder in **showcase** directory, you can execute

- `yarn workspace [folder name] install`
- then, `yarn workspace [folder name] start`

for example:

- `yarn workspace tozai-line-train-route-map install`
- then, `yarn workspace tozai-line-train-route-map start`

Though some folders, like above example, can be viewed just by double clicking its `index.html.`
