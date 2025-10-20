# 🚀 GitHub Actions Workflows - Comprehensive CI/CD Suite

Este proyecto incluye un conjunto completo de workflows de GitHub Actions para automatización de testing, evidencia de bugs, performance y seguridad.

## 📋 Workflows Disponibles

### 1. 🧪 E2E Testing Suite (`e2e-tests.yml`)
**Trigger**: Push, PR, manual  
**Descripción**: Pipeline principal de testing end-to-end con ejecución paralela en múltiples navegadores y plataformas.

**Características**:
- ✅ Testing paralelo en Chromium, Firefox, WebKit
- 📱 Testing mobile (Chrome y Safari)
- 🖥️ Testing en múltiples SO (Ubuntu, Windows, macOS)
- 📊 Reportes HTML interactivos
- 📸 Screenshots automáticos en fallos
- 🔗 Deploy automático a GitHub Pages
- 📈 Métricas de performance integradas

**Uso**:
```bash
# Ejecutar manualmente
gh workflow run e2e-tests.yml

# Con parámetros específicos
gh workflow run e2e-tests.yml -f test_category=contact-form -f browsers=chromium
```

### 2. 🐛 Bug Evidence Capture (`bug-evidence.yml`)
**Trigger**: Manual, automático después de fallos  
**Descripción**: Captura automática de evidencia para tests que fallan.

**Características**:
- 📸 Screenshots automáticos de fallos
- 🎥 Videos de ejecución (cuando es posible)
- 📋 Reportes detallados de evidencia
- 🔄 Consolidación de evidencia por tipo de bug
- 📊 Reporte maestro de bugs identificados
- 🎯 Categorización automática de fallos

**Tests con evidencia automática**:
- TC08: Validación de teléfono
- TC03: Validación de email
- TC_AUTO_013: Login con credenciales inválidas
- TC_AUTO_018: Transferencia sin fondos

### 3. ⚡ Performance Testing (`performance.yml`)
**Trigger**: Semanal (domingos), manual  
**Descripción**: Testing de performance con diferentes configuraciones de workers.

**Características**:
- 📊 Tests con 1, 3, y 5 workers paralelos
- ⏱️ Medición de tiempos de ejecución
- 🏆 Identificación de configuración óptima
- 📈 Comparación de performance entre configuraciones
- 🎯 Recomendaciones automáticas para CI/CD
- 🔥 Tests de stress, load y endurance

**Tipos de test**:
- **Standard**: Testing normal de performance
- **Stress**: 20 tests con 10 repeticiones
- **Load**: 50 tests paralelos
- **Endurance**: Testing continuo por 2 horas

### 4. 🔄 Regression Testing (`regression.yml`)
**Trigger**: Push, PR, manual  
**Descripción**: Suite completa de testing de regresión con análisis de cambios.

**Características**:
- 🔍 Análisis automático de archivos cambiados
- 🎯 Scope dinámico basado en cambios
- 🖥️ Testing cross-platform (Ubuntu, Windows, macOS)
- 🌐 Testing cross-browser completo
- 📊 Reportes de regresión detallados
- 💬 Comentarios automáticos en PRs
- ❌ Fallo del workflow si regresión detectada

**Scopes disponibles**:
- **Smoke**: Tests críticos básicos (TC01, TC02, TC03)
- **Critical**: Tests principales del sistema
- **Recent**: Solo tests nuevos (TC_AUTO_*)
- **Full**: Suite completa de regresión

### 5. 🔒 Security Testing (`security.yml`)
**Trigger**: Semanal (lunes), manual  
**Descripción**: Testing de seguridad básica y análisis de vulnerabilidades.

**Características**:
- 🔒 Testing XSS (Cross-Site Scripting)
- 💉 Testing SQL Injection
- ✅ Validación de input sanitization
- 🛡️ Análisis de security headers
- 🔐 Verificación de HTTPS enforcement
- 📊 Reportes de vulnerabilidades
- 🎯 Recomendaciones de seguridad

**Tipos de test de seguridad**:
- **XSS**: 10+ payloads de XSS diferentes
- **Injection**: 10+ payloads de SQL injection
- **Validation**: Tests de buffer overflow, path traversal, etc.
- **Headers**: Análisis de headers de seguridad

## 🚀 Configuración y Uso

### Variables de Entorno Requeridas
```yaml
env:
  BASE_URL: https://parabank.parasoft.com/parabank
```

### Dependencias del Proyecto
- Node.js 18+
- Playwright
- Tests en TypeScript

### Estructura de Artifacts

Cada workflow genera artifacts organizados:

```
artifacts/
├── test-results-{browser}/          # Resultados por navegador
├── performance-results-{workers}/   # Resultados de performance
├── regression-results-{os}-{browser}/ # Resultados de regresión
├── security-results-{type}/         # Resultados de seguridad
├── bug-evidence-{test}/            # Evidencia de bugs
└── master-reports/                 # Reportes consolidados
```

## 📊 Reportes y Evidencia

### Reportes HTML Interactivos
- Accesibles via GitHub Pages
- Navegación por categorías de test
- Screenshots integrados
- Métricas de performance

### Evidencia de Bugs
- Screenshots automáticos en fallos
- Videos cuando están disponibles
- Logs detallados de ejecución
- Contexto de error completo

### Badges de Estado
Los workflows generan badges automáticos:
- Performance: `Performance-{tiempo}s-{color}`
- Regresión: `Regression-{porcentaje}%-{color}`
- Security: `Security-{score}-{color}`

## 🔧 Personalización

### Agregar Nuevos Tests
1. Crear test en `/tests/`
2. Seguir convención de nombres `TC##`
3. Los workflows detectarán automáticamente

### Modificar Triggers
Editar secciones `on:` en cada workflow:
```yaml
on:
  schedule:
    - cron: '0 6 * * 1'  # Lunes 6:00 AM
  workflow_dispatch:     # Manual
  push:
    branches: [main]     # En push a main
```

### Configurar Notificaciones
Agregar steps de notificación:
```yaml
- name: 📧 Notify on failure
  if: failure()
  uses: actions/slack@v1
  # ... configuración
```

## 🎯 Mejores Prácticas

### Para Desarrollo
1. Usar workflow `e2e-tests.yml` en PRs
2. Revisar evidencia de bugs automática
3. Monitorear métricas de performance

### Para CI/CD
1. Configurar `regression.yml` en main branch
2. Usar results de `performance.yml` para optimizar
3. Revisar reportes de `security.yml` regularmente

### Para Mantenimiento
1. Archivar artifacts después de 30-90 días
2. Revisar y actualizar payloads de seguridad
3. Optimizar configuración de workers basado en performance

## 📈 Monitoreo y Métricas

### KPIs Principales
- **Success Rate**: Porcentaje de tests que pasan
- **Performance Baseline**: Tiempo de ejecución estándar
- **Security Score**: Vulnerabilidades detectadas
- **Regression Detection**: Fallos introducidos

### Alertas Automáticas
- Fallos en testing de regresión
- Degradación de performance > 20%
- Nuevas vulnerabilidades de seguridad
- Coverage de tests < 80%

## 🔗 Enlaces Útiles

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Playwright Documentation](https://playwright.dev/)
- [ParaBank Application](https://parabank.parasoft.com/parabank)
- [Project Documentation](./documentation/)

## 🤝 Contribuir

1. Fork el proyecto
2. Crear feature branch
3. Agregar/modificar tests según necesidad
4. Verificar que workflows pasan
5. Crear Pull Request

Los workflows automáticamente:
- Ejecutarán tests de regresión
- Capturarán evidencia de fallos
- Comentarán en el PR con resultados
- Bloquearán merge si hay regresiones

---

**Nota**: Todos los workflows están diseñados para fallar gracefully y proporcionar máxima información para debugging y mejora continua del proyecto.
