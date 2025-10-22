# 🚀 QA Challenge Automation - Complete Test Suite

## � What This Project Does

This project contains **automated tests** that verify web pages work correctly. Think of it as a robot that tests websites for you - it fills out forms, clicks buttons, and checks if everything works as expected.

**🎯 Main Goal:** Automatically test the ParaBank contact form to ensure all validation rules work properly.

---

## 🛠️ Technologies Used

- **Playwright** - Modern web testing framework
- **TypeScript** - Type-safe JavaScript
- **Node.js** - JavaScript runtime environment
- **ParaBank** - Demo banking application for testing

---

## 📦 What You Need Before Starting

### ✅ Step 1: Check Your Node.js Version

**First, let's see what you have:**
```bash
node --version
```

**✅ Perfect! You're ready if you see:**
- `v18.17.0` or higher
- `v20.x.x` (any version 20)
- `v21.x.x` or newer

**⚠️ You need to update if you see:**
- `v16.x.x` or lower
- `command not found` (Node.js not installed)
- No output at all

### 🔄 Node.js Installation/Update Guide

#### Option A: Fresh Install (Recommended for beginners)

1. **Visit:** https://nodejs.org
2. **Download:** The green "LTS" button (Long Term Support)
3. **Install:** Run the downloaded file
4. **Restart:** Your computer completely
5. **Verify:** Open terminal and run `node --version`

#### Option B: Using Node Version Manager (For developers)

**macOS/Linux users:**
```bash
# Install nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash

# Restart your terminal, then:
nvm install 20
nvm use 20
nvm alias default 20

# Verify
node --version
```

**Windows users:**
1. Download **nvm-windows** from: https://github.com/coreybutler/nvm-windows/releases
2. Install it (Run as Administrator)
3. Open new Command Prompt as Administrator:
```cmd
nvm install 20.9.0
nvm use 20.9.0
node --version
```

#### Option C: Keep Your Current Version (Advanced)

If you can't change your Node.js version, you can try:
```bash
# Clear npm cache first
npm cache clean --force

# Try installing with compatibility flags
npm install --legacy-peer-deps
```

### 💻 How to Open Terminal/Command Prompt

**Windows:**
- Press `Windows + R` → type `cmd` → press Enter
- OR: Search "Command Prompt" in Start menu
- OR: Search "PowerShell" (more modern option)

**Mac:**
- Press `Cmd + Space` → type "Terminal" → press Enter
- OR: Applications → Utilities → Terminal

**Linux:**
- Press `Ctrl + Alt + T`
- OR: Search "Terminal" in applications

---

## 📥 Getting the Project

### Method 1: Download ZIP (Easiest)

1. **Go to:** https://github.com/starling26/qa-challenge-automation
2. **Click:** Green "Code" button
3. **Select:** "Download ZIP"
4. **Extract:** The ZIP file to your Desktop
5. **Navigate:** Open terminal and go to the folder:

```bash
# Windows:
cd Desktop\qa-challenge-automation-main

# Mac/Linux:
cd ~/Desktop/qa-challenge-automation-main
```

### Method 2: Using Git (If you know Git)

```bash
git clone https://github.com/starling26/qa-challenge-automation.git
cd qa-challenge-automation
```

---

## 🔧 Setting Everything Up

### Step 1: Verify You're in the Right Place

```bash
# Check current directory
pwd

# You should see something like:
# /Users/yourname/Desktop/qa-challenge-automation
# or C:\Users\yourname\Desktop\qa-challenge-automation
```

### Step 2: Install Project Dependencies

```bash
npm install
```

**What to expect:**
- ⏳ Takes 2-5 minutes
- 📝 Lots of text will scroll by (normal!)
- ✅ Should end with "added X packages" message

**If you get errors:**
```bash
# Try these solutions in order:

# 1. Clear cache and try again
npm cache clean --force
npm install

# 2. If Node version issues:
npm install --legacy-peer-deps

# 3. Delete everything and start fresh:
rm -rf node_modules package-lock.json
npm install
```

### Step 3: Install Browsers for Testing

```bash
npx playwright install
```

**What to expect:**
- ⏳ Takes 5-15 minutes
- 💾 Downloads ~300MB of browser files
- 🌐 Installs Chromium, Firefox, and Safari engines

**If installation fails:**
```bash
# Try force install:
npx playwright install --force

# Or install just Chrome:
npx playwright install chromium

# On Mac/Linux with permission issues:
sudo npx playwright install
```

### Step 4: Verify Installation

```bash
npx playwright --version
```

**You should see:** Something like "Version 1.40.0" or newer

---

## 🎬 Running Your Tests

### 🚀 Run All Tests (Headless Mode)

```bash
npx playwright test
```

**What happens:**
1. 🤖 Tests run invisibly in the background
2. ⚡ Very fast execution
3. 📊 Results appear in your terminal
4. ✅ Green checkmarks = passed tests
5. ❌ Red X's = failed tests

### 👀 Watch Tests Run (Headed Mode)

Want to see the magic happen? Run this:

```bash
npx playwright test --headed
```

**What you'll see:**
- 🌐 Browser windows open automatically
- 🖱️ Mouse moves and clicks by itself
- ⌨️ Forms get filled out automatically
- 🎭 Like watching a ghost use your computer!

### 📊 View Beautiful Test Reports

After tests finish:

```bash
npx playwright show-report
```

**What you get:**
- 🌐 Opens in your web browser
- � Visual charts and graphs
- 📸 Screenshots of test steps
- 🎥 Video recordings of failures
- 🔍 Detailed logs for debugging

---

## 📁 Understanding the Project Structure

```
qa-challenge-automation/
├── 📝 tests/
│   └── contact-form.spec.ts      # Main test file
├── � screenshots/               # Auto-captured images
├── 📊 playwright-report/         # HTML reports
├── 📋 test-results/              # Detailed test data
├── ⚙️ playwright.config.ts       # Test configuration
├── 📦 package.json               # Project dependencies
└── 📖 README.md                  # This guide!
```

---

## 🧪 What Tests Are Included

### 🔍 TC_AUTO_001: Form Visibility Check
- ✅ Verifies contact form appears on page
- ✅ Checks all required fields are present
- ✅ Ensures form is interactive

### � TC_AUTO_002: Required Fields Validation
- ✅ Tests submitting empty form
- ✅ Verifies error messages appear
- ✅ Checks each required field individually

### 📧 TC_AUTO_003: Email Format Validation
- ✅ Tests invalid email formats
- ✅ Verifies proper email validation
- ✅ Checks various email edge cases

### 📞 TC_AUTO_004: Phone Number Validation
- ✅ Tests invalid phone formats
- ✅ Verifies phone number requirements
- ✅ Checks international number formats

### 📏 TC_AUTO_005: Field Length Limits
- ✅ Tests maximum character limits
- ✅ Verifies text truncation/rejection
- ✅ Ensures data integrity

---

## 🔍 Useful Commands Reference

```bash
# Basic commands
npx playwright test                    # Run all tests
npx playwright test --headed          # Run with visible browsers
npx playwright show-report           # View test results

# Specific test commands
npx playwright test contact-form.spec.ts    # Run specific file
npx playwright test --grep "email"          # Run tests matching "email"
npx playwright test --project=chromium      # Run only in Chrome

# Debug and development
npx playwright test --debug               # Debug mode (breakpoints)
npx playwright test --ui                  # Interactive UI mode
npx playwright codegen                    # Record new tests

# Information commands
npx playwright test --list               # List all available tests
npx playwright --version                 # Check Playwright version
npx playwright install --dry-run         # Check what browsers need installing
```

---

## 🆘 Troubleshooting Guide

### ❌ Node.js Version Issues

**Problem:** "SyntaxError" or "Unexpected token" errors

**Solution:**
```bash
# Check your version
node --version

# If you see v16 or lower:
# 1. Go to https://nodejs.org
# 2. Download and install LTS version
# 3. Restart computer
# 4. Try again

# Alternative: Use Node Version Manager (see installation section above)
```

### ❌ Browser Installation Problems

**Problem:** "Browser not found" or download failures

**Solutions:**
```bash
# Try 1: Force reinstall
npx playwright install --force

# Try 2: Install specific browser
npx playwright install chromium

# Try 3: Check system requirements
npx playwright --help

# Try 4: Clear cache and retry
npm cache clean --force
npx playwright install
```

### ❌ Permission Denied Errors

**Windows:**
- Right-click Command Prompt → "Run as Administrator"
- Or try: `npm install --unsafe-perm`

**Mac/Linux:**
```bash
# Try with sudo (be careful!)
sudo npx playwright install

# Better: Fix npm permissions
npm config set prefix ~/.npm-global
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

### ❌ Tests Fail Randomly

**This is normal!** Web tests can be flaky because:
- Network delays
- Page loading times
- System performance

**Solutions:**
```bash
# Run tests again (often fixes it)
npx playwright test

# Run with retries
npx playwright test --retries=3

# Run specific failing test
npx playwright test --grep "failing-test-name"
```

### ❌ Antivirus False Positives

**Problem:** Antivirus blocks browser downloads

**Solution:**
1. Temporarily disable antivirus
2. Add project folder to exceptions
3. Add `node_modules` folder to exceptions
4. Reinstall browsers

### ❌ Network/Firewall Issues

**Problem:** Downloads fail or tests can't reach websites

**Solutions:**
```bash
# Try different npm registry
npm config set registry https://registry.npmjs.org/

# Check proxy settings if in corporate network
npm config list

# Install browsers manually if needed
npx playwright install --dry-run  # Shows what's needed
```

---

## 🐳 Alternative Setup with Docker

If Node.js issues persist, use Docker:

**Create Dockerfile:**
```dockerfile
FROM mcr.microsoft.com/playwright:v1.40.0-focal

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx playwright install

CMD ["npx", "playwright", "test"]
```

**Run with Docker:**
```bash
# Build image
docker build -t qa-automation .

# Run tests
docker run --rm -v $(pwd)/test-results:/app/test-results qa-automation

# View reports
docker run --rm -p 9323:9323 -v $(pwd)/playwright-report:/app/playwright-report qa-automation npx playwright show-report --host 0.0.0.0
```

---

## 📊 Understanding Test Results

### ✅ When Tests Pass
```
Running 5 tests using 1 worker

✓ TC_AUTO_001: Form visibility verification (2.3s)
✓ TC_AUTO_002: Required field validation (1.8s)
✓ TC_AUTO_003: Email format validation (2.1s)
✓ TC_AUTO_004: Phone validation (1.9s)
✓ TC_AUTO_005: Field length validation (2.0s)

5 passed (10.1s)
```

### ❌ When Tests Fail
```
Running 5 tests using 1 worker

✓ TC_AUTO_001: Form visibility verification (2.3s)
✗ TC_AUTO_002: Required field validation (5.0s)

1) TC_AUTO_002: Required field validation

   Error: Expected error message to be visible
   Actual: element not found
```

**Next steps for failures:**
1. Run `npx playwright show-report` to see details
2. Check screenshots in `test-results/` folder
3. Look at video recordings of the failure
4. Check if the website changed

---

## � System Requirements

**Minimum Requirements:**
- ✅ Node.js 18.0+ (LTS recommended)
- ✅ 4 GB RAM
- ✅ 2 GB free disk space
- ✅ Internet connection

**Recommended Setup:**
- 🚀 Node.js 20.x LTS
- 🚀 8 GB RAM
- 🚀 5 GB free disk space
- 🚀 Fast, stable internet

**Supported Operating Systems:**
- ✅ Windows 10/11
- ✅ macOS 10.15+
- ✅ Ubuntu 18.04+
- ✅ Most Linux distributions

---

## 🎉 Success! You're Done!

If you've made it this far and tests are running, **congratulations!** 🎊

**Remember these key commands:**
```bash
npx playwright test              # Run tests
npx playwright show-report     # View results
npx playwright test --headed   # Watch tests run
```

---

## 🤝 Contributing to This Project

Want to improve these tests?

1. 🍴 **Fork** the repository on GitHub
2. 🌱 **Create** a new branch: `git checkout -b feature/amazing-feature`
3. 💾 **Commit** your changes: `git commit -m 'Add amazing feature'`
4. 📤 **Push** to branch: `git push origin feature/amazing-feature`
5. 🔄 **Open** a Pull Request

---

## 📞 Get Help

**Having issues?**

1. 🔍 **Check** the troubleshooting section above
2. � **Create an issue** at: https://github.com/starling26/qa-challenge-automation/issues
3. � **Include this info:**
   - Your operating system
   - Node.js version (`node --version`)
   - npm version (`npm --version`)
   - Exact error message
   - What command you ran

**Example good bug report:**
```
OS: macOS 13.0
Node: v18.17.0
npm: 9.6.7
Command: npx playwright test
Error: "Browser not found"
```

---

## 📚 Additional Resources

- 📖 [Playwright Documentation](https://playwright.dev)
- 🎥 [Playwright YouTube Channel](https://www.youtube.com/@Playwrightdev)
- 💬 [Playwright Discord Community](https://discord.gg/playwright)
- 🐛 [Report Playwright Issues](https://github.com/microsoft/playwright/issues)

---

*💡 **Pro Tip:** Bookmark this README! You'll refer back to it often. And remember - if something breaks, try running the tests again. Web testing can be temperamental, but that's normal!*



