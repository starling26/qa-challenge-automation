#!/usr/bin/env node

/**
 * QA Challenge Project Setup Script
 * This script creates the complete project structure
 * Run: node setup-project.js
 */

import fs from 'fs';
import path from 'path';

console.log('🚀 QA Challenge - Project Setup\n');

const projectName = 'qa-challenge-automation';

// Create project directory
if (!fs.existsSync(projectName)) {
  fs.mkdirSync(projectName);
  console.log(`✅ Created folder: ${projectName}/`);
} else {
  console.log(`⚠️  Folder ${projectName}/ already exists`);
}

// Define directory structure
const directories = [
  '.vscode',
  'tests',
  'scripts',
  'documentation',
  'screenshots',
  'screenshots/exercise1',
  'screenshots/exercise2'
];

// Create directories
console.log('\n📁 Creating directory structure...');
directories.forEach(dir => {
  const dirPath = path.join(projectName, dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`  ✓ ${dir}/`);
  }
});

console.log('\n📝 Creating placeholder files...');

// Create placeholder README
const readmePath = path.join(projectName, 'README.md');
fs.writeFileSync(readmePath, `# QA Challenge - Automation Suite

## ⚠️ SETUP REQUIRED

You need to copy the following files from the conversation artifacts:

### .vscode/ folder:
- [ ] settings.json
- [ ] extensions.json
- [ ] launch.json
- [ ] tasks.json

### tests/ folder:
- [ ] contact-form.spec.ts

### scripts/ folder:
- [ ] create-zip.js

### documentation/ folder:
- [ ] exercise1-template.md
- [ ] exercise2-template.md
- [ ] trello-structure.md
- [ ] quick-guide.md
- [ ] VSCODE-SETUP.md

### Root files:
- [ ] playwright.config.ts
- [ ] tsconfig.json
- [ ] package.json
- [ ] .gitignore
- [ ] .prettierrc
- [ ] PROJECT-STRUCTURE.txt
- [ ] GETTING-STARTED.md

## Next Steps:

1. Copy each file from the conversation artifacts
2. Paste into the corresponding folder
3. Run: npm install
4. Run: npx playwright install
5. Run: npm test

For detailed instructions, see GETTING-STARTED.md (once copied).
`);

console.log('  ✓ README.md (with instructions)');

// Create .gitkeep files to preserve empty directories
[
  'screenshots/exercise1/.gitkeep',
  'screenshots/exercise2/.gitkeep'
].forEach(file => {
  const filePath = path.join(projectName, file);
  fs.writeFileSync(filePath, '');
});

console.log('\n✅ Project structure created!\n');

console.log('📂 Your project structure:');
console.log(`
${projectName}/
├── .vscode/                (COPY FILES HERE)
├── tests/                  (COPY FILES HERE)
├── scripts/                (COPY FILES HERE)
├── documentation/          (COPY FILES HERE)
├── screenshots/
│   ├── exercise1/
│   └── exercise2/
└── README.md               (Instructions included)
`);

console.log('\n📋 NEXT STEPS:\n');
console.log('1. Open VS Code in this folder:');
console.log(`   cd ${projectName}`);
console.log('   code .\n');
console.log('2. Copy each artifact from the conversation');
console.log('3. Paste into the corresponding folder');
console.log('4. Follow README.md instructions\n');

console.log('💡 TIP: Use the "Manual Method" guide to copy each file systematically.\n');
console.log('🎉 Setup complete! Happy testing!\n');