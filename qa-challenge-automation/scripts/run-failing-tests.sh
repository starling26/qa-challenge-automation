#!/bin/bash
# Script para ejecutar tests específicos que fallan y capturar evidencias
# Fecha: 19 de Octubre, 2025

echo "🚀 Ejecutando tests que fallan para capturar evidencias..."
echo "========================================================"

# Crear directorio de screenshots si no existe
mkdir -p screenshots

# Ejecutar solo los tests problemáticos identificados
echo ""
echo "🔴 Ejecutando TC08 - Bug de validación de campo teléfono..."
npx playwright test --grep "TC08.*telephone field must accept only numbers" --headed

echo ""
echo "🟡 Ejecutando TC03 - Email inválido aceptado..."
npx playwright test --grep "TC03.*invalid email format" --headed

echo ""
echo "🔴 Ejecutando TC_AUTO_013 - Login con credenciales inválidas..."
npx playwright test --grep "TC_AUTO_013.*correct page load after login" --headed

echo ""
echo "🔴 Ejecutando TC_AUTO_018 - Validación incompleta de transferencias..."
npx playwright test --grep "TC_AUTO_018.*successful transfer" --headed

echo ""
echo "📸 Verificando screenshots capturados..."
ls -la screenshots/tc*

echo ""
echo "✅ Ejecución completa. Revisa las screenshots en el directorio screenshots/"
echo "📋 Los tests que fallan han capturado evidencia automáticamente."
