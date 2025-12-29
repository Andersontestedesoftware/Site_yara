# Site de advogado (estático)

Este é um site institucional simples (HTML/CSS/JS) para um escritório de advocacia.

## Como abrir

### Opção 1: abrir direto

Abra o arquivo `site-advogado/index.html` no navegador.

### Opção 2: servidor local (recomendado)

Se você tiver o Node instalado, você pode servir a pasta para evitar problemas de navegação/âncoras:

```powershell
cd "c:\Users\ander\OneDrive\Área de Trabalho\Cypress_tarefa\site-advogado"
npx serve
```

## Ajustes rápidos

No arquivo `site-advogado/app.js`:

- `waNumber`: número do WhatsApp no formato internacional (ex.: `5511999999999`)
- `to`: e-mail de contato

No arquivo `site-advogado/index.html`:

- Nome do escritório, e-mail e cidade
- Depoimentos (substituir por reais)

## Observação

O formulário usa **mailto** (abre o cliente de e-mail do usuário). Para enviar via backend, seria necessário uma API (ex.: Node/Express, serverless, etc.).
