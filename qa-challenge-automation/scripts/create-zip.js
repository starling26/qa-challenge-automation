/**
 * Script to create submission ZIP file
 * Excludes: node_modules, test results, and other unnecessary files
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🗜️  Creating submission ZIP file...\n');

const zipName = 'magento-automation-suite.zip';
const excludePatterns = [
  'node_modules',
  'test-results',
  'playwright-report',
  'playwright/.cache',
  '.git',
  '.DS_Store',
  '*.log',
  'package-lock.json',
  zipName
];

// Build exclude command based on OS
const isWindows = process.platform === 'win32';

if (isWindows) {
  console.log('📦 Creating ZIP on Windows...');
  
  // For Windows, use PowerShell Compress-Archive
  const excludeFilter = excludePatterns.map(p => `'${p}'`).join(',');
  const psCommand = `
    $exclude = @(${excludeFilter})
    Get-ChildItem -Path . -Recurse | 
    Where-Object { 
      $_.FullName -notmatch ($exclude -join '|') 
    } | 
    Compress-Archive -DestinationPath ${zipName} -Force
  `;
  
  try {
    execSync(`powershell -Command "${psCommand}"`, { stdio: 'inherit' });
  } catch (error) {
    console.error('❌ PowerShell method failed, trying 7-Zip...');
    
    // Fallback to 7-Zip if available
    try {
      const excludeArgs = excludePatterns.map(p => `-xr!${p}`).join(' ');
      execSync(`7z a ${zipName} * ${excludeArgs}`, { stdio: 'inherit' });
    } catch (error2) {
      console.error('❌ 7-Zip not found. Please install 7-Zip or manually create the ZIP.');
      process.exit(1);
    }
  }
} else {
  // Unix-like systems (Mac, Linux)
  console.log('📦 Creating ZIP on Unix/Mac...');
  
  const excludeArgs = excludePatterns.map(p => `-x "${p}/*"`).join(' ');
  const command = `zip -r ${zipName} . ${excludeArgs}`;
  
  try {
    execSync(command, { stdio: 'inherit' });
  } catch (error) {
    console.error('❌ ZIP creation failed:', error.message);
    process.exit(1);
  }
}

// Verify ZIP was created
if (fs.existsSync(zipName)) {
  const stats = fs.statSync(zipName);
  const sizeMB = (stats.size / 1024 / 1024).toFixed(2);
  
  console.log('\n✅ SUCCESS!');
  console.log(`📦 ZIP file created: ${zipName}`);
  console.log(`📊 Size: ${sizeMB} MB`);
  console.log(`📍 Location: ${path.resolve(zipName)}`);
  console.log('\n📝 ZIP Contents:');
  console.log('   ✓ tests/');
  console.log('   ✓ playwright.config.ts');
  console.log('   ✓ package.json');
  console.log('   ✓ tsconfig.json');
  console.log('   ✓ README.md');
  console.log('   ✓ .gitignore');
  console.log('\n🚀 Your submission is ready!');
} else {
  console.error('\n❌ ZIP file was not created successfully.');
  process.exit(1);
}