# ⚡ GUÍA RÁPIDA DE EJECUCIÓN
## Completa el QA Challenge en 2-3 Horas

---

## 🎯 RESUMEN EJECUTIVO

**Tiempo total estimado:** 2-3 horas  
**Dificultad:** Media  
**Herramientas necesarias:** Navegador, cuenta Google, cuenta Trello, Node.js

---

## ⏱️ TIMELINE SUGERIDO

| Tarea | Tiempo | Descripción |
|-------|--------|-------------|
| Setup inicial | 15 min | Instalar herramientas, crear cuentas |
| Ejercicio 1 - Testing | 30 min | Probar el sitio, encontrar bugs |
| Ejercicio 1 - Documentación | 20 min | Llenar plantillas, Trello |
| Ejercicio 2 - Testing | 45 min | Testing más profundo |
| Ejercicio 2 - Documentación | 30 min | Test cases detallados |
| Automatización | 15 min | Setup y ejecución de Playwright |
| Revisión final | 15 min | Verificar entregas |

**TOTAL:** ~2.5 horas

---

## 📝 PREPARACIÓN (15 minutos)

### Paso 1: Crear Carpetas
```
QA-Challenge/
├── Exercise-1/
│   ├── screenshots/
│   └── evidence/
├── Exercise-2/
│   ├── screenshots/
│   ├── evidence/
│   └── automation-suite/
└── Documentation/
```

### Paso 2: Crear Google Spreadsheets
1. Abre Google Sheets
2. Crea 2 spreadsheets:
   - "Exercise 1 - Zero Web App Security"
   - "Exercise 2 - Magento E-Commerce"
3. Copia las plantillas que te proporcioné
4. Configura permisos: "Anyone with link can view"

### Paso 3: Crear Trello Boards
1. Ve a http://trello.com
2. Crea 2 boards:
   - "Exercise 1 - Bug Tracking"
   - "Exercise 2 - Bug Tracking"
3. Crea las 8 columnas en cada board
4. Haz los boards públicos

### Paso 4: Instalar Node.js
1. Descarga de https://nodejs.org/ (versión LTS)
2. Instala siguiendo wizard
3. Verifica: `node --version`

---

## 🚀 EJERCICIO 1: EJECUCIÓN RÁPIDA (50 minutos)

### FASE 1: Testing Manual (30 min)

**A) Navegación (10 min)**
1. Abre http://zero.webappsecurity.com
2. Haz clic en cada item del menú
3. Verifica que la navegación aparece en TODAS las páginas
4. **Toma screenshots** de cada página
5. **Anota bugs:** ¿Falta navegación en alguna página?

**B) Responsive Design (10 min)**
1. Abre DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Prueba estos tamaños:
   - iPhone 12 (390px)
   - iPad (768px)
   - Desktop (1920px)
4. **Toma screenshots** de cada viewport
5. **Anota bugs:** ¿Layout roto? ¿Texto muy pequeño? ¿Botones difíciles de tocar?

**C) Feedback Form (10 min)**
1. Ve a la página Feedback
2. Prueba estos escenarios:
   - Submit vacío
   - Email inválido (test@)
   - Datos válidos
   - XSS: `<script>alert('test')</script>` en Name
   - SQL Injection: `1' OR '1'='1` en cualquier campo
3. **Toma screenshots** de cada resultado
4. **Anota todos los bugs**

### FASE 2: Documentación (20 min)

**A) Google Spreadsheet (15 min)**
1. Abre tu spreadsheet Exercise 1
2. Llena la hoja "Test Planning" (2 min)
3. En "Test Run Report", marca cada test case como:
   - ✅ PASS si funciona
   - ❌ FAIL si encuentras bug
   - ⚠️ BLOCKED si no puedes probar
4. Añade comentarios con detalles

**B) Trello (5 min)**
1. Por cada bug que encontraste, crea una tarjeta
2. Usa el template que te di
3. Adjunta screenshots
4. Añade labels (Critical, High, Medium, Low)

**Bugs Comunes que Probablemente Encuentres:**
- Navegación falta en páginas
- Form sin validación
- Mobile responsive issues
- XSS vulnerability

---

## 🛒 EJERCICIO 2: EJECUCIÓN RÁPIDA (75 minutos)

### FASE 1: Testing Manual (45 min)

**A) Search Functionality (10 min)**
```
Pruebas rápidas:
1. Search "jacket" → ¿Resultados correctos?
2. Search "xyz123" → ¿Mensaje "No results"?
3. Search vacío → ¿Qué pasa?
4. Search "JaCkEt" vs "jacket" → ¿Mismo resultado?
5. Search "<script>alert('xss')</script>" → ¿Maneja bien?

Screenshots: 5 mínimo
```

**B) Add to Cart (15 min)**
```
Flujo principal:
1. Women > Tops > Click any product
2. Select Size: M, Color: Blue
3. Add to Cart
4. Click cart icon → ¿Producto correcto?
5. Verificar: ¿Color es Blue? ¿Size es M?
6. Add otro producto
7. ¿Counter aumenta?
8. Try to remove item → ¿Funciona?
9. Click "Proceed to Checkout"

Bugs a buscar:
- Remove button no funciona
- Color/size incorrecto en cart
- Counter no actualiza
- Checkout link roto

Screenshots: 8-10
```

**C) Create Account (10 min)**
```
Tests:
1. Create account válido
   Email: test[timestamp]@test.com
   Password: Test@12345
2. Try weak password: "123"
3. Try invalid email: "notanemail"
4. Try duplicate email
5. Login con nueva cuenta

Screenshots: 5
```

**D) Orders & Returns Form (5 min)**
```
Tests rápidos:
1. Submit vacío
2. Submit con datos válidos
3. XSS test: <script>alert('xss')</script>
4. SQL injection: 1' OR '1'='1

Screenshots: 4
```

**E) Homepage Design (5 min)**
```
1. Abre design PDF: https://drive.google.com/file/d/1-dAVNL-BYK7rZ1_QP5hEFiRNoO9RDU8Z/view?usp=share_link
2. Compara con homepage real (Chrome, 1920x1080)
3. Busca diferencias:
   - Spacing
   - Colors
   - Fonts
   - Missing sections
4. Test en Firefox, Safari

Screenshots: 4 (Chrome, Firefox, Safari, Mobile)
```

### FASE 2: Documentación (30 min)

**A) Google Spreadsheet (25 min)**
1. Test Planning sheet (3 min)
2. Llena TODOS los test cases (15 min)
   - Usa las plantillas que te di
   - Añade tus resultados reales
3. Test Run Report (7 min)
   - Marca PASS/FAIL
   - Añade Bug IDs
   - Comenta cada uno

**B) Trello (5 min)**
1. Crea tarjetas para TODOS los bugs
2. Organiza por módulo con labels
3. Adjunta evidencia

---

## 🤖 AUTOMATIZACIÓN (15 minutos)

### Setup Playwright

**Opción A: Crear desde cero**
1. Crea carpeta `automation-suite`
2. Copia los archivos que te di:
   - `package.json`
   - `playwright.config.ts`
   - `tsconfig.json`
   - `tests/contact-form.spec.ts`
   - `README.md`
   - `.gitignore`

**Opción B: Desde terminal** (MÁS RÁPIDO)
```bash
# Crear proyecto
mkdir automation-suite
cd automation-suite

# Copiar archivos (los que te di en artifacts)
# ... copia cada archivo ...

# Instalar dependencias
npm install

# Instalar browsers
npx playwright install

# Ejecutar tests
npm test

# Ver reporte
npm run test:report
```

### Crear el ZIP
```bash
# Asegúrate de estar en la carpeta automation-suite
cd automation-suite

# Excluir node_modules
zip -r ../automation-suite.zip . -x "node_modules/*" -x "test-results/*" -x "playwright-report/*"
```

---

## ✅ CHECKLIST FINAL (15 minutos)

### Verificación de Entregas

**Exercise 1:**
- [ ] Google Spreadsheet creado y compartido
- [ ] Test Planning completado
- [ ] Test Cases listados
- [ ] Test Run Report con resultados
- [ ] Trello board creado
- [ ] Al menos 5 bugs reportados en Trello
- [ ] Screenshots adjuntos en Trello
- [ ] Board público y compartible

**Exercise 2:**
- [ ] Google Spreadsheet creado y compartido
- [ ] Test Planning detallado
- [ ] Test Cases detallados (mínimo 40)
- [ ] Test Run Report completo
- [ ] Trello board creado
- [ ] Al menos 10 bugs reportados
- [ ] Bugs organizados por módulo
- [ ] automation-suite.zip creado
- [ ] README.md incluido en ZIP
- [ ] Código ejecutable sin errores

### Links a Compartir
```
Exercise 1:
- Spreadsheet: https://docs.google.com/spreadsheets/d/...
- Trello: https://trello.com/b/...

Exercise 2:
- Spreadsheet: https://docs.google.com/spreadsheets/d/...
- Trello: https://trello.com/b/...
- Automation ZIP: [Enviado por email o Drive]
```

---

## 🎯 CONSEJOS PARA MAXIMIZAR PUNTOS

### 1. **Encuentra Bugs REALES**
No inventes bugs. Los evaluadores verificarán.

### 2. **Documenta TODO con Screenshots**
Cada bug necesita evidencia visual.

### 3. **Sé Específico**
❌ Mal: "Botón no funciona"
✅ Bien: "Remove button in cart header does not trigger item deletion. No network request observed. Console shows no errors."

### 4. **Prioriza Correctamente**
- **Critical:** Bloquea funcionalidad principal, seguridad
- **High:** Impacta UX significativamente
- **Medium:** Bugs menores de funcionalidad
- **Low:** Cosméticos, sugerencias

### 5. **Escribe Test Cases Claros**
Los evaluadores deben poder reproducir SIN preguntarte nada.

### 6. **Automatización Debe Funcionar**
```bash
# Debe ser TAN simple como:
npm install
npm test
# Y ya!
```

### 7. **README Detallado**
El evaluador NO debe adivinar cómo ejecutar tu código.

---

## 🆘 PROBLEMAS COMUNES Y SOLUCIONES

### "No encuentro bugs"
- Prueba edge cases
- Prueba campos vacíos
- Prueba XSS/SQL injection
- Prueba mobile viewport
- Compara con requirements

### "No sé qué poner en test cases"
- Usa mis plantillas exactamente
- Un test case = una cosa específica a probar
- Ejemplo: "Verify empty email shows error"

### "Playwright no instala"
```bash
# Limpia todo y reinstala
rm -rf node_modules package-lock.json
npm install
npx playwright install
```

### "No tengo tiempo"
**PRIORIZA:**
1. Testing manual (DEBE estar completo)
2. Documentación en Spreadsheets (DEBE estar)
3. Bugs en Trello (DEBE estar)
4. Automatización (si tienes tiempo)

Mínimo aceptable: Items 1-3

---

## 📊 DISTRIBUCIÓN DE ESFUERZO

```
Testing Manual:     40% del tiempo (encuentr a bugs reales)
Documentación:      35% del tiempo (spreadsheets + Trello)
Automatización:     20% del tiempo (copy-paste mi código)
Revisión:           5% del tiempo (verifica entregas)
```

---

## 🎓 RECURSOS FINALES

**Todos mis artifacts:**
1. ✅ contact-form.spec.ts (Playwright tests)
2. ✅ package.json (Dependencies)
3. ✅ playwright.config.ts (Configuration)
4. ✅ tsconfig.json (TypeScript config)
5. ✅ .gitignore (Ignore files)
6. ✅ README.md (Instructions)
7. ✅ Exercise 1 Template (Spreadsheet)
8. ✅ Exercise 2 Template (Spreadsheet)
9. ✅ Trello Structure & Examples
10. ✅ Esta guía de ejecución

**Próximos pasos:**
1. Guarda todos los artifacts
2. Sigue esta guía paso a paso
3. No te saltes pasos
4. Documenta TODO
5. Verifica checklist final

---

## 💪 ¡TÚ PUEDES HACERLO!

Con mis plantillas y código, has reducido el trabajo en 80%.  
Solo necesitas:
- 2-3 horas de tiempo
- Probar los sitios web
- Llenar las plantillas
- ¡Entregar!

**¿Listo para empezar? ¡Adelante!** 🚀