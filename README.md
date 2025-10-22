# 🚀 How to Run the Automated Tests

****Linux:**
- Press `Ctrl + Alt + ---

## 📦 Step 3: Install Everything Needed

**What are we go**What will you see?** 
- 🌐 Your browser ## 🆘 Something Not Working?ill open
- 📋 You'll see a page with all the results
- 🔍 You can click to see details of each test
- 📸 You can even see screenshots!

---

## 👀 Step 5: Watch Tests in Action (Optional)

If you want to **see** how the tests run (instead of them being invisible):

```bash
npx playwright test --headed
```

**What will you see?**
- Browsers open visibly
- You can see how forms get filled automatically
- It's great for understanding what's happeninge programs that the tests need to work.--

## 📥 Step 2: Download the Projectoes this project do?** 
It runs automated tests that verify if a web page works correctly. It's like having a robot that tests the page for you.

---

## ✅ Step 1: Install Node.js (Only the first time)

**What is Node.js?** It's a program you need to run the tests.

### Do you already have it installed?
1. Open the **Terminal** (explanation below)
2. Type: `node --version`
3. If you see something like "v18.17.0" you already have it!
4. If it says "command not found", continue with the installation

### Install Node.js:
1. Go to: **https://nodejs.org**
2. Download the **LTS** version (recommended)
3. Run the installer
4. Restart your computer
5. Verify by typing `node --version` in the terminal

**⚠️ Important note:** If you have a different version of Node.js and the tests don't work, you can use these compatible versions: v18 or v20.

---

## 💻 How to Open the Terminal

The terminal is where you'll type the commands.

**Windows:**
- Press `Windows + R`, type `cmd` and press Enter
- Or search for "Command Prompt" in the start menu

**Mac:**
- Press `Cmd + Space`, type "Terminal" and press Enter

**Linux:**
- Press `Ctrl + Alt + T`

---

## � Paso 2: Descargar el Proyecto

### Easy Option - Download ZIP:
1. Go to: **https://github.com/starling26/qa-challenge-automation**
2. Click the green **"Code"** button
3. Select **"Download ZIP"**
4. Unzip the file on your Desktop
5. Open the Terminal and go to the folder:
   ```bash
   # Windows:
   cd Desktop/qa-challenge-automation-main
   
   # Mac:
   cd ~/Desktop/qa-challenge-automation-main
   ```

### Advanced Option - With Git:
If you know how to use Git, you can clone it:
```bash
git clone https://github.com/starling26/qa-challenge-automation.git
cd qa-challenge-automation
```

---

## � Paso 3: Instalar Todo lo Necesario

**¿Qué vamos a instalar?** Los programas que necesitan las pruebas para funcionar.

### Step-by-step instructions:

1. **Verify you're in the correct folder:**
   ```bash
   pwd
   ```
   You should see something like: `/Users/your-name/Desktop/qa-challenge-automation`

2. **Install the tools:**
   ```bash
   npm install
   ```
   - ⏳ This takes 2-5 minutes
   - 📝 You'll see a lot of text running, that's normal!

3. **Install the automatic browsers:**
   ```bash
   npx playwright install
   ```
   - ⏳ This takes 5-10 minutes
   - 💾 Uses approximately 200MB of space

4. **Verify everything was installed:**
   ```bash
   npx playwright --version
   ```
   You should see something like: "Version 1.40.0"

---

## 🎬 Step 4: Run the Tests!

**This is the exciting moment!** We're going to run the automated tests.

### Run all tests:

```bash
npx playwright test
```

**What will happen?** 
1. 🌐 Browsers will open automatically
2. 🤖 You'll see web pages moving by themselves (like magic!)
3. ✅ The tests will verify that everything works correctly
4. 📊 At the end you'll see a results summary

### View the visual report:

After running the tests, you can see a nice report:

```bash
npx playwright show-report
```

**¿Qué verás?** 
- � Se abrirá tu navegador
- 📋 Verás una página con todos los resultados
- 🔍 Puedes hacer clic para ver detalles de cada prueba
- 📸 ¡Incluso puedes ver capturas de pantalla!

---

## 👀 Paso 5: Ver las Pruebas en Acción (Opcional)

Si quieres **ver** cómo se ejecutan las pruebas (en lugar de que sean invisibles):

```bash
npx playwright test --headed
```

**¿Qué verás?**
- Los navegadores se abren de forma visible
- Puedes ver cómo se llenan formularios automáticamente
- Es genial para entender qué está pasando

---

## � ¿Algo No Funciona?

### ❌ "Can't install browsers"
**Problem:** Browser installation fails.

**Solution:**
```bash
# Try reinstalling:
npx playwright install --force

# Or install only Chrome:
npx playwright install chromium
```

### ❌ "Tests fail sometimes"
**Why does this happen?** Web pages sometimes load slowly.

**Solution:**
- It's normal, run the tests again
- If it always fails in the same place, it could be a real bug

### ❌ "I don't have permissions"
**Windows:** Run Terminal as Administrator
**Mac/Linux:** Add `sudo` before the command:
```bash
sudo npx playwright test
```

### ❌ "My antivirus says it's a virus"
**This is normal.** Automatic browsers sometimes trigger alerts.
- Add the project folder to antivirus exceptions

### ❌ "Node.js version error"
**Symptoms:** Error messages about unsupported syntax.

**Quick solution:**
1. Go to https://nodejs.org
2. Download and install the latest LTS version
3. Restart your computer
4. Run again: `npm install`

---

## 📁 Where Are the Results?

After running the tests, you'll find:

### 📊 Visual Report:
- **View with:** `npx playwright show-report`
- **Contains:** Nice graphics and details of each test

### 📸 Screenshots:
- **Location:** `screenshots/` folder
- **When taken:** Automatically at key moments

### 📋 Terminal Results:
- Shown directly after running the tests

---

## 🎉 You're Done!

If you made it this far and managed to run the tests, **congratulations!**

**Commands you need to remember:**
```bash
# Run all tests:
npx playwright test

# View the report:
npx playwright show-report

# See tests running:
npx playwright test --headed
```

---

## 📞 Need Help?

If you have problems:
1. 🔍 Check the "Something Not Working?" section above
2. 💬 Create an "issue" at: https://github.com/starling26/qa-challenge-automation
3. 📧 Describe exactly what error message you see

---

*💡 Tip: If something doesn't work, just run the tests again. Sometimes it's just a slow connection.*
