# 🎭 QA Challenge - Complete Test Automation Guide

This guide is designed for **beginners** who have never used test automation before. We will explain **step by step** how to install everything you need and run the automated tests for the ParaBank contact form.

## What is this?
This project contains **automated tests** that verify that a web page works correctly. The tests are written with **Playwright** (a tool that controls browsers) and **TypeScript** (a programming language).

---

## 📋 Prerequisites (What you need to install first)

### 1. What is Node.js and why do I need it?
**Node.js** is a program that allows you to run JavaScript code on your computer (not just in browsers). We need it to run our tests.

**How to know if you already have it installed?**
1. Open the **Terminal** (I'll explain how below)
2. Type: `node --version`
3. If you see something like "v18.17.0" or higher, you already have it! 
4. If not, continue with the installation

**How to install Node.js?**
1. Go to: https://nodejs.org
2. Download the **LTS** version (recommended)
3. Run the installer and follow the instructions
4. Restart your computer
5. Verify it's installed by typing `node --version` in the terminal

### 2. What is Git and why do I need it?
**Git** is a tool for downloading code from the internet and managing versions.

**How to know if you already have it?**
1. In the terminal, type: `git --version`
2. If you see something like "git version 2.x.x", you already have it!

**How to install Git?**
- **Windows**: Go to https://git-scm.com and download the installer
- **Mac**: It comes pre-installed, or install Xcode Command Line Tools
- **Linux**: `sudo apt install git` (Ubuntu) or equivalent

### 3. What is VS Code? (Recommended but optional)
**VS Code** is a code editor that makes it easier to work with the project.

**How to install it?**
1. Go to: https://code.visualstudio.com
2. Download and install
3. Install the **Playwright** extension (it will help you a lot)

### 4. Internet Connection
You need access to: https://parabank.parasoft.com (the page we're going to test)

---

## 🖥️ How to Open the Terminal?

**The Terminal is where we will type commands to control our project.**

### On Windows:
1. Press `Windows + R`
2. Type `cmd` and press Enter
3. **OR** search for "Command Prompt" in the start menu

### On Mac:
1. Press `Cmd + Space`
2. Type "Terminal" and press Enter
3. **OR** go to Applications → Utilities → Terminal

### On Linux:
1. Press `Ctrl + Alt + T`
2. **OR** search for "Terminal" in your applications

---

## 🚀 Step 1: Download the Project

**What are we going to do?** Download all the project code from GitHub to your computer.

### Option A: Use Git (Recommended)
1. **Open the Terminal** (see instructions above)
2. **Navigate** to where you want to save the project. For example, if you want to save it on your Desktop:
   ```bash
   # On Windows:
   cd Desktop
   
   # On Mac:
   cd ~/Desktop
   
   # On Linux:
   cd ~/Desktop
   ```
3. **Download** the project by typing:
   ```bash
   git clone git@github.com:starling26/qa-challenge-automation.git
   ```
4. **Enter** the project folder:
   ```bash
   cd qa-challenge-automation
   ```
5. **Open** the project in VS Code (if you installed it):
   ```bash
   code .
   ```

### Option B: Download as ZIP
1. Go to: https://github.com/starling26/qa-challenge-automation?tab=readme-ov-file
2. Click the green "Code" button
3. Select "Download ZIP"
4. Unzip the file
5. Open the Terminal and navigate to the unzipped folder

---

## 🔧 Step 2: Install Dependencies

**What are dependencies?** They are code libraries that our project needs to function.

**What are we going to install?**
- **Playwright**: The tool that will control browsers
- **Browsers**: Automatic Chrome, Firefox and Safari
- **Other tools** that the project needs

### Step-by-step instructions:

1. **Make sure** you are inside the project folder:
   ```bash
   # You should be here (verify with):
   pwd
   # You should see something like: /Users/your-name/Desktop/qa-challenge-automation
   ```

2. **Install the project dependencies**:
   ```bash
   npm install
   ```
   **What's happening?** 📦
   - All necessary tools are downloaded
   - It can take 2-5 minutes
   - You'll see a lot of text running, that's normal!

3. **Install the automatic browsers**:
   ```bash
   npx playwright install
   ```
   **What's happening?** 🌐
   - Special versions of Chrome, Firefox and Safari are downloaded
   - These versions are optimized for automation
   - It can take 5-10 minutes and uses ~200MB

4. **Verify** everything was installed correctly:
   ```bash
   npx playwright --version
   ```
   You should see something like: "Version 1.40.0"

### ⚠️ Did you have problems?

**If you see permission errors:**
- On Mac/Linux: Try with `sudo npm install`
- On Windows: Run Terminal as Administrator

**If installation is very slow:**
- Check your internet connection
- Try at another time (servers might be busy)

---

## ⚙️ Step 3: Configuration (Optional)

**What is this?** You can change certain settings like the web page to be tested.

**Do I need to do this?** No, the project is already configured to work. Only do this if you want to change something specific.

### If you want to change the configuration:

1. **Create** a configuration file:
   ```bash
   # Create a .env file (environment file):
   echo 'BASE_URL="https://parabank.parasoft.com"' > .env
   echo 'PWDEBUG=0' >> .env
   ```

2. **OR edit** the `playwright.config.ts` file directly if you know programming

---

## 🏃‍♂️ Step 4: Run the Tests!

**This is the exciting moment!** We're going to run the automated tests.

### Run all tests:

```bash
npx playwright test
```

**What will happen?** 🎬
1. Browsers will open automatically
2. You'll see web pages moving by themselves (like magic!)
3. The tests will verify that everything works correctly
4. At the end you'll see a results summary

### View the visual report:

After running the tests, you can see a nice report:

```bash
npx playwright show-report
```

**What will you see?** 📊
- Your browser will open
- You'll see a page with all the results
- You can click to see details of each test
- You can even see screenshots!

---

## 🎯 Step 5: Advanced Execution Options

### Run on specific browsers:

**Why do this?** Different browsers can behave differently. It's good to test on several.

```bash
# Chrome only:
npx playwright test --project=chromium

# Firefox only:
npx playwright test --project=firefox

# Safari only (Mac only):
npx playwright test --project=webkit
```

### See the tests running:

**By default, browsers run "invisible".** If you want to see them in action:

```bash
npx playwright test --headed
```

**What will you see?** 👀
- Browsers will open visibly
- You can see how forms are filled automatically
- Very useful to understand what's happening

### Run in slow mode (for beginners):

If you want to see the actions slower:

```bash
npx playwright test --headed --slowmo=1000
```

---

## 🎪 Step 6: Run Specific Tests

**What if I don't want to run all tests?** You can run only the ones that interest you.

### Run a specific file:

```bash
# Example: Only contact form tests
npx playwright test tests/contact.spec.ts
```

### Run a specific test by name:

```bash
# Search for tests containing certain words:
npx playwright test -g "Contact form"
npx playwright test -g "TC01"
```

### See what tests are available:

```bash
npx playwright test --list
```

**What will you see?** 📝
- A list of all available tests
- Their complete names
- What files they're in

---

## 📸 Step 7: Capture Evidence

**Why is this important?** When something fails, you need evidence to understand what happened.

### Enable automatic captures:

```bash
npx playwright test --trace on
```

**What does this do?** 🕵️‍♀️
- Records EVERYTHING that happens during tests
- If something fails, you have a complete "movie"
- You can review step by step what went wrong

### View the captures:

```bash
# This opens a visual interface to review errors:
npx playwright show-trace trace.zip
```

### Automatic screenshots:

Tests are already configured to take screenshots automatically. You'll find them in:
- Folder: `screenshots/`
- Descriptive names like: `tc01-before-submit.png`

---

## 🐛 Step 8: Something Not Working? (Debugging)

**Don't worry, it's normal for things to fail sometimes.** Here we help you solve it.

### Detective mode (step by step):

```bash
npx playwright test --debug
```

**What happens?** 🔍
- Tests pause at each step
- You can click "Next" to advance
- Perfect for understanding exactly where the problem is

### Pause when something fails:

```bash
PWDEBUG=1 npx playwright test
```

**What does it do?** ⏸️
- Only pauses when there's an error
- Shows you exactly where it failed
- You can investigate the page at that exact moment

### Verbose mode (lots of information):

```bash
npx playwright test --reporter=line --workers=1
```

**When to use it?** 📢
- When you need to see all the details
- To understand the complete flow of tests
- Useful for learning how tests work

---

## 🎯 Quick Commands (Useful shortcuts)

**Once you feel comfortable,** you can use these shorter commands:

### If you're lazy about typing long commands:

Add these "shortcuts" to your `package.json` file (if you know how to edit it):

```json
"scripts": {
    "test": "playwright test",
    "test:watch": "playwright test --headed",
    "test:report": "playwright show-report",
    "test:trace": "playwright test --trace on",
    "test:debug": "playwright test --debug"
}
```

Then you can use:
```bash
npm run test          # Instead of: npx playwright test
npm run test:watch    # Instead of: npx playwright test --headed
npm run test:report   # Instead of: npx playwright show-report
```

---

## 📁 Where Do I Find the Results?

**After running the tests, several files are generated:**

### 📊 Visual Report (HTML):
- **Location**: `playwright-report/` folder
- **How to view**: `npx playwright show-report`
- **What it contains**: Nice graphics, statistics, details of each test

### 📸 Screenshots:
- **Location**: `screenshots/` folder
- **Names**: Descriptive like `tc01-error-validation.png`
- **When they're taken**: Automatically at key moments

### 🎬 Recordings (Traces):
- **Location**: `test-results/` folder
- **How to view them**: `npx playwright show-trace file.zip`
- **What they contain**: Complete "movies" of the tests

### 📋 Terminal Reports:
- **Shown**: Directly in the terminal after execution
- **Contain**: Quick summary of what happened and how long it took

---

## 🚨 Common Problems and Solutions

### "Can't install browsers"
**Possible causes:**
- Slow or unstable internet connection
- Firewall or antivirus blocking the download
- Low disk space

**Solutions:**
```bash
# Try reinstalling:
npx playwright install --force

# Or install only Chrome:
npx playwright install chromium
```

### "Tests fail randomly"
**Why does this happen?** Web pages sometimes load slowly or differently.

**Solution:**
- It's normal, run the tests again
- If it fails consistently, it might be a real bug

### "I don't have permissions to create files"
**On Windows:**
- Run Terminal as Administrator
- Right click → "Run as administrator"

**On Mac/Linux:**
```bash
# Add sudo before the command:
sudo npx playwright test
```

### "My antivirus says it's a virus"
**This is normal.** Automatic browsers sometimes trigger alerts.
- Add the project folder to exceptions
- Or temporarily disable the antivirus

---

## 📚 Additional Resources

### If you want to learn more:
- **Official documentation**: https://playwright.dev
- **YouTube tutorials**: Search for "Playwright tutorial"
- **This project**: https://github.com/starlingdelacruz/qa-challenge-automation

### If you have questions:
- **GitHub Issues**: Create an "issue" in the repository
- **Community**: Look for QA automation groups in your country
- **Stack Overflow**: Ask questions with the "playwright" tag

---

## 🎉 Congratulations!

If you made it this far and managed to run the tests, **you're now part of the test automation world!**

**What's next?**
1. 🎮 Experiment with different commands
2. 📖 Read the test files to understand how they work
3. 🔧 Try modifying a test (make a copy first)
4. 🚀 Consider learning more about automation!

**Remember:** Automation is like learning to drive. At first it seems complicated, but once you get the hang of it, it's super useful and fun!

---

*💡 Final tip: Always make a backup before modifying something important. And don't be afraid to experiment, that's how you learn!*
