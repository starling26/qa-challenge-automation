# 🎨 VS CODE SETUP GUIDE
## Configuración Completa del Proyecto QA Challenge

---

## 📁 ESTRUCTURA DEL PROYECTO

```
qa-challenge-automation/
│
├── .vscode/                          # Configuración de VS Code
│   ├── settings.json                 # Configuraciones del editor
│   ├── extensions.json               # Extensiones recomendadas
│   ├── launch.json                   # Configuración de debugging
│   └── tasks.json                    # Tareas automatizadas
│
├── tests/                            # Test suites
│   ├── contact-form.spec.ts          # Tests del formulario de contacto
│   └── [otros tests aquí]
│
├── scripts/                          # Scripts de utilidad
│   └── create-zip.js                 # Script para crear ZIP de entrega
│
├── documentation/                    # Documentación del proyecto
│   ├── exercise1-template.md         # Plantilla Exercise 1
│   ├── exercise2-template.md         # Plantilla Exercise 2
│   ├── trello-structure.md           # Estructura de Trello
│   └── quick-guide.md                # Guía rápida de ejecución
│
├── screenshots/                      # Capturas de pantalla (crear al ejecutar)
│   ├── exercise1/
│   └── exercise2/
│
├── playwright.config.ts              # Configuración de Playwright
├── tsconfig.json                     # Configuración de TypeScript
├── package.json                      # Dependencias y scripts
├── README.md                         # Documentación principal
├── VSCODE-SETUP.md                   # Esta guía
└── .gitignore                        # Archivos a ignorar

# Carpetas auto-generadas (ignoradas en git):
├── node_modules/                     # Dependencias instaladas
├── test-results/                     # Resultados de tests
├── playwright-report/                # Reportes HTML
└── playwright/.cache/                # Cache de Playwright
```

---

## 🚀 SETUP INICIAL EN VS CODE

### Paso 1: Abrir el Proyecto

1. **Abrir VS Code**
2. **File → Open Folder**
3. Selecciona la carpeta `qa-challenge-automation/`
4. VS Code detectará el proyecto TypeScript

### Paso 2: Instalar Extensiones Recomendadas

VS Code mostrará una notificación:
> "This workspace has extension recommendations"

**Haz clic en "Install All"** o instala manualmente:

#### Extensiones Esenciales:
1. **Playwright Test for VSCode** (`ms-playwright.playwright`)
   - Testing directo desde VS Code
   - Ver/ejecutar tests en sidebar
   - Debugging visual

2. **Prettier** (`esbenp.prettier-vscode`)
   - Formateo automático de código
   - Código consistente

3. **ESLint** (`dbaeumer.vscode-eslint`)
   - Detecta errores de código
   - Mejores prácticas

4. **Error Lens** (`usernamehw.errorlens`)
   - Muestra errores inline
   - Debugging más fácil

5. **Code Spell Checker** (`streetsidesoftware.code-spell-checker`)
   - Revisa ortografía en comentarios
   - Evita typos

6. **Markdown All in One** (`yzhang.markdown-all-in-one`)
   - Preview de markdown
   - Para documentación

### Paso 3: Instalar Dependencias

Abre la **Terminal Integrada** en VS Code:
- `Ctrl + `` (backtick) o `View → Terminal`

Ejecuta:
```bash
npm run setup
```

Este comando hace:
1. `npm install` - Instala dependencias
2. `npx playwright install` - Instala browsers

**Espera 2-3 minutos** para la instalación completa.

---

## ⚡ COMANDOS RÁPIDOS EN VS CODE

### Método 1: Command Palette (Recomendado)

Presiona `Ctrl+Shift+P` (o `Cmd+Shift+P` en Mac):

```
> Tasks: Run Task
```

Verás todas las tareas disponibles:
- Install Dependencies
- Run All Tests
- Run Tests (Headed Mode)
- Debug Tests
- Run Tests - Chrome Only
- Run Tests - All Browsers
- Open Test Report
- Open UI Mode
- Create ZIP for Submission

### Método 2: Playwright Extension (Sidebar)

1. **Clic en el icono de Playwright** en el sidebar (ícono de testing)
2. Verás todos los tests listados
3. **Hover sobre un test** → aparecen botones:
   - ▶️ Run test
   - 🐛 Debug test
   - 👁️ Show trace

### Método 3: Terminal Integrada

```bash
# Ver todos los comandos disponibles
npm run

# Ejecutar tests
npm test

# Tests en modo visual
npm run test:headed

# Modo debug
npm run test:debug

# UI Mode (mejor para desarrollo)
npm run test:ui

# Ver reporte
npm run test:report

# Crear ZIP de entrega
npm run create-zip
```

### Método 4: Shortcuts de Teclado

En cualquier archivo `.spec.ts`:
- `F5` → Debug test actual
- `Ctrl+Shift+B` → Run default test task

---

## 🐛 DEBUGGING EN VS CODE

### Opción 1: Usando Playwright Extension

1. Abre `tests/contact-form.spec.ts`
2. Verás números de línea con íconos de play
3. **Clic derecho** en un test → **Debug Test**
4. Se abre el browser en modo debug
5. Puedes inspeccionar cada paso

### Opción 2: Launch Configuration

1. Presiona `F5` o ve a **Run and Debug** (Ctrl+Shift+D)
2. Selecciona configuración:
   - **Debug Playwright Tests** - Todos los tests
   - **Debug Current Test File** - Solo archivo actual
   - **Playwright UI Mode** - Modo interactivo
3. Se ejecuta con debugging completo

### Opción 3: Breakpoints

```typescript
test('Mi test', async ({ page }) => {
  await page.goto('...');
  // Coloca el cursor aquí y presiona F9
  debugger; // O agrega esta línea
  await page.click('button');
});
```

Presiona `F5` y el test se detendrá en el breakpoint.

---

## 📊 VISUALIZACIÓN DE TESTS

### Playwright Test Explorer (Sidebar)

**Panel izquierdo → Ícono de Testing**

Verás:
```
🎭 PLAYWRIGHT
  📁 tests
    📄 contact-form.spec.ts
      ✓ TC01: Verify contact form is displayed
      ✓ TC02: Verify validation errors...
      ✓ TC03: Verify invalid email...
      [todos los tests listados]
```

**Acciones disponibles:**
- ▶️ Run all tests
- ▶️ Run single test
- 🐛 Debug test
- 🔄 Re-run last test
- 👁️ Show test trace

### Test Results Panel

Después de ejecutar tests:
- **Pass**: ✅ en verde
- **Fail**: ❌ en rojo
- **Skip**: ⊘ en gris

**Clic en un test** para ver:
- Console output
- Screenshots
- Videos
- Traces

---

## 🎨 CARACTERÍSTICAS ÚTILES DE VS CODE

### 1. IntelliSense y Autocompletado

Escribe y verás sugerencias automáticas:
```typescript
await page.  // ← Muestra todos los métodos disponibles
await expect(element).to  // ← Muestra assertions
```

### 2. Go to Definition

`Ctrl+Click` o `F12` en cualquier método para ver su definición.

### 3. Find All References

`Shift+F12` para encontrar dónde se usa una función.

### 4. Rename Symbol

`F2` sobre una variable para renombrarla en todos lados.

### 5. Format Document

`Shift+Alt+F` para formatear el código automáticamente.

### 6. Quick Fix

`Ctrl+.` cuando hay un error para ver soluciones sugeridas.

### 7. Terminal Múltiple

`Ctrl+Shift+`` para abrir nueva terminal.

Puedes tener:
- Terminal 1: Tests corriendo
- Terminal 2: Watching for changes
- Terminal 3: Git commands

### 8. Split Editor

`Ctrl+\` para dividir el editor.

Vista sugerida:
- Izquierda: Test code
- Derecha: Test results/console

---

## 🔥 WORKFLOWS RECOMENDADOS

### Workflow 1: Desarrollo de Tests (Recomendado)

1. **Abre UI Mode**: `npm run test:ui`
2. Escribe tests en VS Code
3. UI Mode actualiza automáticamente
4. Ve resultados en tiempo real
5. Inspecciona con herramientas visuales

### Workflow 2: Debugging de Tests

1. Coloca breakpoints en VS Code
2. Presiona `F5` → **Debug Current Test File**
3. Browser se pausa en breakpoint
4. Usa VS Code Debug Console para inspeccionar
5. Step through code con `F10` (Step Over)

### Workflow 3: Test-Driven Development

1. Terminal split: izquierda código, derecha tests
2. `npm run test:headed` en terminal derecha
3. Edita código en la izquierda
4. Guarda (`Ctrl+S`)
5. Re-run automático
6. Ve resultados inmediatos

### Workflow 4: Captura de Screenshots

```typescript
// En tu test
test('Mi test', async ({ page }) => {
  await page.goto('...');
  
  // Captura screenshot
  await page.screenshot({ 
    path: 'screenshots/exercise1/navigation-bug.png',
    fullPage: true 
  });
});
```

Screenshots aparecen en la carpeta `screenshots/`.

---

## 📝 CREAR TU PRIMER TEST EN VS CODE

### Paso 1: Crear Nuevo Archivo

1. **Clic derecho** en carpeta `tests/`
2. **New File** → `search.spec.ts`

### Paso 2: Escribir Test

VS Code autocompleta todo:

```typescript
import { test, expect } from '@playwright/test';

test.describe('Search Tests', () => {
  
  test('TC01: Search with valid keyword', async ({ page }) => {
    // VS Code muestra sugerencias mientras escribes
    await page.goto('https://magento.softwaretestingboard.com');
    await page.fill('#search', 'jacket');
    await page.press('#search', 'Enter');
    
    // Assertions con autocompletado
    await expect(page).toHaveURL(/catalogsearch/);
  });
  
});
```

### Paso 3: Ejecutar

- **Método 1**: Clic en ▶️ junto al test
- **Método 2**: `F5` con el archivo abierto
- **Método 3**: Terminal → `npm test`

### Paso 4: Ver Resultados

- **Panel de Tests**: ✅ o ❌
- **Terminal**: Output detallado
- **Report**: `npm run test:report`

---

## 🎯 TIPS AVANZADOS

### 1. Code Snippets Personalizados

**File → Preferences → User Snippets → typescript.json**

```json
{
  "Playwright Test": {
    "prefix": "pwtest",
    "body": [
      "test('$1', async ({ page }) => {",
      "  await page.goto('$2');",
      "  $0",
      "});"
    ]
  }
}
```

Escribe `pwtest` + `Tab` → snippet completo.

### 2. Multi-Cursor Editing

`Ctrl+D` para seleccionar próxima ocurrencia.  
`Ctrl+Shift+L` para seleccionar todas las ocurrencias.

Útil para editar múltiples tests a la vez.

### 3. Git Integration

VS Code tiene Git integrado:
- **Source Control** panel (Ctrl+Shift+G)
- Ve cambios
- Commit
- Push

### 4. Live Share (Colaboración)

Extensión **Live Share** permite:
- Compartir tu workspace
- Coding en tiempo real con otros
- Debugging colaborativo

### 5. TODO Highlighting

Extensión **TODO Highlight** resalta:
```typescript
// TODO: Agregar más assertions
// FIXME: Este test falla intermitentemente
// NOTE: Revisar este comportamiento
```

---

## ⚙️ CONFIGURACIÓN PERSONALIZADA

### Cambiar Tema

`File → Preferences → Color Theme` (Ctrl+K Ctrl+T)

Recomendados:
- Dark+
- One Dark Pro
- Dracula
- GitHub Dark

### Configurar Font

`settings.json`:
```json
{
  "editor.fontFamily": "'Fira Code', Consolas, 'Courier New', monospace",
  "editor.fontLigatures": true,
  "editor.fontSize": 14
}
```

### Auto-Save

```json
{
  "files.autoSave": "onFocusChange"
}
```

---

## 🚨 TROUBLESHOOTING

### "Cannot find module '@playwright/test'"

**Solución:**
```bash
npm install
```

### "TypeScript version mismatch"

**Solución:**
1. `Ctrl+Shift+P` → **TypeScript: Select TypeScript Version**
2. Selecciona **Use Workspace Version**

### Tests no aparecen en Sidebar

**Solución:**
1. Verifica que la extensión Playwright esté instalada
2. Recarga window: `Ctrl+Shift+P` → **Reload Window**
3. Verifica `playwright.config.ts` existe

### Debugging no funciona

**Solución:**
1. Verifica `.vscode/launch.json` existe
2. Cierra todos los browsers
3. Intenta de nuevo

---

## 📦 CREAR ZIP PARA ENTREGA

### Método 1: Script Automatizado (Recomendado)

En VS Code Terminal:
```bash
npm run create-zip
```

Crea `magento-automation-suite.zip` listo para entregar.

### Método 2: Task de VS Code

1. `Ctrl+Shift+P`
2. **Tasks: Run Task**
3. **Create ZIP for Submission**

### Método 3: Manual

**Windows:**
1. Excluye `node_modules/`, `test-results/`, `playwright-report/`
2. Clic derecho → Send to → Compressed folder

**Mac/Linux:**
```bash
zip -r submission.zip . -x "node_modules/*" -x "test-results/*"
```

---

## ✅ CHECKLIST PRE-ENTREGA

Antes de entregar, verifica en VS Code:

- [ ] `npm test` ejecuta sin errores
- [ ] README.md está completo
- [ ] Todos los archivos necesarios incluidos
- [ ] ZIP creado exitosamente
- [ ] Screenshots organizados
- [ ] No hay archivos de configuración personal (.env)
- [ ] Git ignore funciona correctamente

---

## 🎓 RECURSOS ADICIONALES

### En VS Code:

**Command Palette** (`Ctrl+Shift+P`):
- Playwright: Generate tests
- Playwright: Show trace viewer
- Playwright: Pick locator

**Documentación Rápida**:
- Hover sobre método → tooltip con documentación
- `Ctrl+Click` → definición completa

### Links Útiles:

- [Playwright Docs](https://playwright.dev/)
- [VS Code Docs](https://code.visualstudio.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## 🎉 ¡TODO LISTO!

Ahora tienes VS Code completamente configurado para el QA Challenge.

**Próximos pasos:**
1. ✅ Abre el proyecto en VS Code
2. ✅ Instala extensiones recomendadas
3. ✅ Ejecuta `npm run setup`
4. ✅ Abre `npm run test:ui`
5. ✅ ¡Empieza a probar!

**¿Problemas?** Revisa la sección Troubleshooting o abre un issue.

---

**Happy Testing! 🚀**