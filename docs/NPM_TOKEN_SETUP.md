# Configuración del Token de NPM para GitHub Actions

## Pasos para obtener el token de NPM

### 1. Crear un Access Token en NPM

1. **Inicia sesión en npmjs.com**
   - Ve a [https://www.npmjs.com/](https://www.npmjs.com/)
   - Inicia sesión con tu cuenta

2. **Accede a la configuración de tokens**
   - Haz clic en tu avatar (esquina superior derecha)
   - Selecciona **"Access Tokens"** o ve directamente a:
   - [https://www.npmjs.com/settings/YOUR_USERNAME/tokens](https://www.npmjs.com/settings/YOUR_USERNAME/tokens)

3. **Crear un nuevo token**
   - Haz clic en **"Generate New Token"**
   - Selecciona **"Automation"** (recomendado para CI/CD) o **"Publish"**
   - **Automation**: Permite publicar y actualizar paquetes (ideal para CI/CD)
   - **Publish**: Solo permite publicar nuevos paquetes
   - Haz clic en **"Generate Token"**

4. **Copiar el token**
   - ⚠️ **IMPORTANTE**: Copia el token inmediatamente
   - El token solo se muestra una vez
   - Si lo pierdes, tendrás que crear uno nuevo

### 2. Añadir el token como secreto en GitHub

1. **Ve a tu repositorio en GitHub**
   - Navega a tu repositorio en GitHub

2. **Accede a la configuración de Secrets**
   - Ve a **Settings** (Configuración)
   - En el menú lateral, busca **"Secrets and variables"**
   - Haz clic en **"Actions"**

3. **Añadir el secreto**
   - Haz clic en **"New repository secret"**
   - **Name**: `NPM_TOKEN` (debe ser exactamente este nombre)
   - **Secret**: Pega el token de NPM que copiaste
   - Haz clic en **"Add secret"**

### 3. Verificar la configuración

El workflow ya está configurado para usar el token. Verifica que:

1. El secreto `NPM_TOKEN` existe en GitHub
2. El workflow (`.github/workflows/release.yml`) tiene la configuración correcta
3. El archivo `.releaserc.json` tiene `"npmPublish": true`

## Configuración del workflow

El workflow ya está configurado con:

```yaml
- name: Set up Node.js
  uses: actions/setup-node@v4
  with:
    node-version: 20
    registry-url: 'https://registry.npmjs.org'

- name: Configure npm for publishing
  run: |
    echo "//registry.npmjs.org/:_authToken=${{ secrets.NPM_TOKEN }}" > ~/.npmrc

- name: Run semantic-release
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
    NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
  run: pnpm semantic-release
```

## Verificación

Para verificar que todo funciona:

1. **Commit y push a main**

   ```bash
   git add .
   git commit -m "feat: añadir funcionalidad"
   git push origin main
   ```

2. **Revisar el workflow**
   - Ve a la pestaña **"Actions"** en GitHub
   - Verifica que el workflow se ejecute correctamente
   - Si hay errores, revisa los logs

3. **Verificar publicación**
   - Ve a [https://www.npmjs.com/package/kaizen](https://www.npmjs.com/package/kaizen)
   - Deberías ver la nueva versión publicada

## Troubleshooting

### Error: "NPM_TOKEN not found"

- Verifica que el secreto se llama exactamente `NPM_TOKEN`
- Verifica que esté en "Repository secrets" y no en "Environment secrets"

### Error: "Unauthorized"

- Verifica que el token sea válido
- Verifica que el token tenga permisos de "Automation" o "Publish"
- Verifica que la cuenta de NPM tenga permisos para publicar el paquete

### Error: "Package name already exists"

- Verifica que el nombre del paquete en `package.json` no esté ocupado
- Si es un scoped package (ej: `@username/kaizen`), verifica que tengas permisos

## Notas importantes

- ⚠️ **Nunca** compartas tu token de NPM
- ⚠️ **Nunca** commitees el token en el código
- ✅ Siempre usa GitHub Secrets para almacenar tokens
- ✅ Usa tokens de "Automation" para CI/CD
- ✅ Rotar tokens periódicamente por seguridad

## Recursos adicionales

- [NPM Access Tokens Documentation](https://docs.npmjs.com/about-access-tokens)
- [GitHub Secrets Documentation](https://docs.github.com/en/actions/security-guides/encrypted-secrets)
- [Semantic Release NPM Plugin](https://github.com/semantic-release/npm)
