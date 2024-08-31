const fs = require('fs');
const path = require('path');

const componentName = process.argv[2];
const flags = process.argv[3] || '';

const addReduxFlag = flags.includes('r');
const addTestFlag = flags.includes('t');
const addMaterialUIFlag = flags.includes('m');
const addStylesFlag = flags.includes('s');

const componentPath = path.join('src', 'components', componentName);
const componentFilePath = path.join(componentPath, `${componentName}.tsx`);
const styleFilePath = path.join(componentPath, 'style.scss');

// Create component directory
fs.mkdirSync(componentPath, { recursive: true });

// Create component file
let componentContent = `const ${componentName} = () => {\n  return (\n    <div className="${componentName.toLowerCase()}">\n      ${componentName} Component\n    </div>\n  );\n};\n\nexport default ${componentName};\n`;

// Add Redux Integration
if (addReduxFlag) {
  const reduxFilesPath = path.join(componentPath, 'redux');
  fs.mkdirSync(reduxFilesPath, { recursive: true });
  // Create Redux files (actions.js, reducer.js, initialState.js)
  // ... (Redux file creation logic)
  componentContent = `import { connect } from 'react-redux';\n\nconst ${componentName} = ({ /* Redux state and actions */ }) => {\n  return (\n    <div className="${componentName.toLowerCase()}">\n      ${componentName} Component\n    </div>\n  );\n};\n\nconst mapStateToProps = (state) => ({\n  /* Map state properties to component props */\n});\n\nconst mapDispatchToProps = {\n  /* Define action creators */\n};\n\nexport default connect(mapStateToProps, mapDispatchToProps)(${componentName});\n`;
}

// Add Material-UI Integration
if (addMaterialUIFlag) {
  const materialUIImport = "import { makeStyles } from '@material-ui/core/styles';\nimport { Button, Typography } from '@material-ui/core';";
  const materialUIStyles = "\nconst useStyles = makeStyles(theme => ({\n  root: {\n    // Add your Material-UI styles here\n  },\n}));";
  const materialUIComponent = `\nconst ${componentName} = () => {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <Typography variant="h4">Material-UI ${componentName}</Typography>\n      <Button color="primary" variant="contained">Click Me</Button>\n    </div>\n  );\n};`;

  // Update the component content with Material-UI imports and component structure
  componentContent = `${materialUIImport}${materialUIStyles}${materialUIComponent}\n\nexport default ${componentName};\n`;
}

// Add Style file
if (addStylesFlag) {
  fs.writeFileSync(styleFilePath, `.${componentName.toLowerCase()} {\n  /* Add your styles here */\n}\n`);
}

// Write component content to file
fs.writeFileSync(componentFilePath, componentContent);

console.log(`Component '${componentName}' created successfully!`);