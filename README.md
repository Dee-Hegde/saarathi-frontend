## Development Setup

- Clone Repository: `git clone HTTPS/SSH Url`
- Move to root directory: `cd projectx_frontend`
- Install dependency: npm install
- Starting Project: npm start
- Open link in browser: http://localhost:3000/

## Folder Structure

projectx_frontend
│
│
└───assets
| └───images (Directory to store all image files)
|
└───components (Parent directory for app components)
│ └───resource folder (Resource folder for each specific component with CSS properties)
|
└───constants (Parent directory for constant data)
│ └───resource folder (Resource folder to store mock-data, data which can be used in components )
|
└───containers (Parent directory for react pages)
| └───resource folder (Resource folder for each specific page)
|
└───hooks (Directory for reusable pieces of logic that can be shared across different components)
| └───resource file (Resource file to track the screen is in mobile view or desktop, executes provided callback functions based on the view, and returns a boolean indicating the mobile status)
|
└───routes (Route directory for react pages)
| └───resource files (Resource files contain paths to navigate the pages)
|
└───services (Make all API function inside this directory)
| └───resource files (Resource files to make API functions to fetch the data)
|
└───styles (Directory to wrap all style dependencies of the application)
| └───global.scss (Parent style sheet where application level common styles are mentioned)
| └───variable.scss (all variables and mixins are mentioned here)
|
└───utils (Directory to common resource files)
└───resource files (to list common functions)

## Design Link

[Design Link] ()

## Testing Link

[Testing Link]()

## Developer Best Practice

- Maintain proper namespacing for folders, files, variable and function declarations.
- Always create feature or bug branches and then merge with stable master branch.
- Provide proper commit messages & split commits meaningfully.
