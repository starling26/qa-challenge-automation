# QA Challenge Automation - Complete Test Suite

## Project Description

Automated test suite to validate ParaBank website functionalities, with special focus on contact form validation and its validation rules.

Technologies Used

- Playwright: Modern web testing framework
- TypeScript: Statically typed JavaScript
- Node.js: Runtime environment
- ParaBank: Demo banking application for testing

Prerequisites

Before you begin, make sure you have installed:

- Node.js v18.17.0 or higher (v20.x recommended)
- Git v2.x.x or higher
- Visual Studio Code** (recommended)

 Verify Installations

Terminal

	 Verify Node.js
	node --version
	
	 Verify npm
	npm --version
	
	 Verify Git
	git --version


Tool Installation

If you don't have any of these tools installed:

Node.js:**
1. Go to https://nodejs.org
2. Download the LTS version
3. Run the installer
4. Verify: node --version

Git:
1. Go to https://git-scm.com/downloads
2. Download the installer for your operating system
3. Run the installer (use default options)
4. Verify: `git --version`

Visual Studio Code:
1. Go to https://code.visualstudio.com/
2. Download the installer for your operating system
3. Run the installer

Project Installation

1. Clone the Repository

Option A - Using Git (recommended):**
bash
git clone https://github.com/starling26/qa-challenge-automation.git
cd qa-challenge-automation
```

Option B - Download ZIP:

1. Go to https://github.com/starling26/qa-challenge-automation
2. Click the green Code button -> Download ZIP
3. Extract the ZIP file to your preferred location
4. Open terminal and navigate to the folder:
```bash
cd path/to/qa-challenge-automation
```

2. Install Dependencies

Terminal

	npm install
``
This process may take 2-5 minutes.

3. Install Playwright Browsers

Terminal
```
npx playwright install
```

If you encounter problems during installation:**

Terminal
	
	 Force installation
	npx playwright install --force
	
	 Install only Chromium
	npx playwright install chromium
	
	 On Mac/Linux with permission issues
	sudo npx playwright install


Running the Tests

Basic Commands

	Terminal
	
	 Run all tests
	npx playwright test
	
	 Run in interactive mode (UI Mode)
	npx playwright test --ui
	
	 Run with visible browser
	npx playwright test --headed
	
	 Run a specific test
	npx playwright test tests/filename.spec.ts
	
	 Run on a specific browser
	npx playwright test --project=chromium


 View Reports

Terminal
Generate and open HTML report

	npx playwright show-report





Error: "playwright not found"
Terminal

	npm install
	npx playwright install


Permission errors on Mac/Linux
Terminal

	sudo npx playwright install


Tests fail immediately
1. Verify all browsers are installed: `npx playwright install`
2. Run with `--headed` to see what happens: `npx playwright test --headed`
3. Check configuration in `playwright.config.ts`

Error installing dependencies
Terminal

Clear cache and try again

	npm cache clean --force
	npm install
