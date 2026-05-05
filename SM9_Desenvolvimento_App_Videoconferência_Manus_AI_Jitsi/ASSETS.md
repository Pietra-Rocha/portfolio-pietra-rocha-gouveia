# Assets - TechAssist Remote

Este arquivo documenta os assets visuais do aplicativo e suas URLs CDN.

## Ícones e Imagens

### Ícone Principal (icon.png)
- **Tamanho**: 1248x1248px
- **Uso**: App launcher icon
- **URL Original**: https://d2xsxph8kpxj0f.cloudfront.net/310519663503370759/8NwAUEhdgNK6XMyqg9GZrm/icon-4LfWHiD8XTzKfzdRxksjGG.png
- **URL Comprimida**: https://d2xsxph8kpxj0f.cloudfront.net/310519663503370759/8NwAUEhdgNK6XMyqg9GZrm/icon-igQCxLYwLLehWkffrqujkk.webp

### Splash Icon (splash-icon.png)
- **Tamanho**: 1248x1248px
- **Uso**: Tela de splash do app
- **URL Original**: https://d2xsxph8kpxj0f.cloudfront.net/310519663503370759/8NwAUEhdgNK6XMyqg9GZrm/splash-icon-EdR6UVuiHdhkzW7hYMp2DM.png
- **URL Comprimida**: https://d2xsxph8kpxj0f.cloudfront.net/310519663503370759/8NwAUEhdgNK6XMyqg9GZrm/splash-icon-ayXEiLsYN7czL2joVwApAc.webp

### Favicon (favicon.png)
- **Tamanho**: 1248x1248px
- **Uso**: Favicon para web
- **URL Original**: https://d2xsxph8kpxj0f.cloudfront.net/310519663503370759/8NwAUEhdgNK6XMyqg9GZrm/favicon-QBbRdcHqA3efpi8sjpjWyY.png
- **URL Comprimida**: https://d2xsxph8kpxj0f.cloudfront.net/310519663503370759/8NwAUEhdgNK6XMyqg9GZrm/favicon-NHvbdbAbN9PjgEEZWzSYY7.webp

### Android Icon Foreground (android-icon-foreground.png)
- **Tamanho**: 1248x1248px
- **Uso**: Camada frontal do ícone adaptável Android
- **URL Original**: https://d2xsxph8kpxj0f.cloudfront.net/310519663503370759/8NwAUEhdgNK6XMyqg9GZrm/android-icon-foreground-ix32skpivhZ64qyWnKzgaA.png
- **URL Comprimida**: https://d2xsxph8kpxj0f.cloudfront.net/310519663503370759/8NwAUEhdgNK6XMyqg9GZrm/android-icon-foreground-anZpKJAUwmV3Pt8fxa8uEc.webp

### Android Icon Background (android-icon-background.png)
- **Tamanho**: 1248x1248px
- **Uso**: Camada de fundo do ícone adaptável Android
- **URL Original**: https://d2xsxph8kpxj0f.cloudfront.net/310519663503370759/8NwAUEhdgNK6XMyqg9GZrm/android-icon-background-KbvfREWSWXfZUK8wcQ7XH2.png
- **URL Comprimida**: https://d2xsxph8kpxj0f.cloudfront.net/310519663503370759/8NwAUEhdgNK6XMyqg9GZrm/android-icon-background-ZSL772nAG4gjF4aVKdBai8.webp

## Imagens de Preview

### Home Screen Preview (preview-home-screen.png)
- **Tamanho**: 864x1536px
- **Uso**: Preview da tela inicial
- **URL Original**: https://d2xsxph8kpxj0f.cloudfront.net/310519663503370759/8NwAUEhdgNK6XMyqg9GZrm/preview-home-screen-cCRtRP6hWTHz276DLVbHCE.png
- **URL Comprimida**: https://d2xsxph8kpxj0f.cloudfront.net/310519663503370759/8NwAUEhdgNK6XMyqg9GZrm/preview-home-screen-6FCGw2nyfdzrm8hukSQWhi.webp

### Call Screen Preview (preview-call-screen.png)
- **Tamanho**: 864x1536px
- **Uso**: Preview da tela de videoconferência
- **URL Original**: https://d2xsxph8kpxj0f.cloudfront.net/310519663503370759/8NwAUEhdgNK6XMyqg9GZrm/preview-call-screen-aavpjBFvSKAYYAcHCqWFPt.png
- **URL Comprimida**: https://d2xsxph8kpxj0f.cloudfront.net/310519663503370759/8NwAUEhdgNK6XMyqg9GZrm/preview-call-screen-BrwxcEJ6EVFiERxzSzZys6.webp

### Annotation Screen Preview (preview-annotation-screen.png)
- **Tamanho**: 864x1536px
- **Uso**: Preview da tela de anotação
- **URL Original**: https://d2xsxph8kpxj0f.cloudfront.net/310519663503370759/8NwAUEhdgNK6XMyqg9GZrm/preview-annotation-screen-5DEChz4un4AQ8zuNfRZKnV.png
- **URL Comprimida**: https://d2xsxph8kpxj0f.cloudfront.net/310519663503370759/8NwAUEhdgNK6XMyqg9GZrm/preview-annotation-screen-3pEXZ9o2jmrnA9UmtwPP4b.webp

## Configuração no app.config.ts

Para usar o ícone do app via CDN, atualize o campo `logoUrl` em `app.config.ts`:

```typescript
const env = {
  appName: "TechAssist Remote",
  appSlug: "techassist-remote",
  logoUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663503370759/8NwAUEhdgNK6XMyqg9GZrm/icon-igQCxLYwLLehWkffrqujkk.webp",
  // ... resto da configuração
};
```

## Notas

- As URLs comprimidas em `.webp` são recomendadas para melhor performance
- Todos os assets estão hospedados em CDN e persistem enquanto o projeto existir
- Para substituir assets, gere novas imagens e atualize as URLs
