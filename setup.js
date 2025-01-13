const fs = require('fs');
const path = require('path');

// Define the structure
const structure = {
  src: {
    features: [
      'fontSize.js',
      'letterSpacing.js',
      'highContrast.js',
      'resetSettings.js',
    ],
    templates: [
      'panelButtonTemplate.js',
      'panelTemplate.js',
    ],
    states: [
      'stateManager.js',
      'applyStates.js',
    ],
    utils: [
      'displayCurrentState.js',
      'focusManagement.js',
      'themeLoader.js',
    ],
    themes: [
      'darkTheme.css',
      'defaultTheme.css',
      'highContrastTheme.css',
    ],
    'index.js': null,
    'styles.css': null,
  },
};

// Function to create files and directories recursively
function createStructure(basePath, structure) {
  for (const [key, value] of Object.entries(structure)) {
    const currentPath = path.join(basePath, key);

    if (Array.isArray(value)) {
      // Create a directory and its files
      if (!fs.existsSync(currentPath)) {
        fs.mkdirSync(currentPath, { recursive: true });
      }
      value.forEach((file) => {
        const filePath = path.join(currentPath, file);
        if (!fs.existsSync(filePath)) {
          fs.writeFileSync(filePath, '', 'utf8');
        }
      });
    } else if (value === null) {
      // Create a single file
      if (!fs.existsSync(currentPath)) {
        fs.writeFileSync(currentPath, '', 'utf8');
      }
    } else {
      // Recursive for nested objects
      if (!fs.existsSync(currentPath)) {
        fs.mkdirSync(currentPath, { recursive: true });
      }
      createStructure(currentPath, value);
    }
  }
}

// Run the script
createStructure('.', structure);

console.log('Project structure generated successfully!');
