# Visualização Web - TechAssist Remote

## 🌐 Acessar a Visualização Web no Notebook

O TechAssist Remote agora oferece uma visualização web completa para testar o aplicativo diretamente no seu navegador do notebook/desktop.

### Como Acessar

**1. Iniciar o Servidor de Desenvolvimento**

```bash
cd /home/ubuntu/techassist-remote
pnpm dev
```

**2. Abrir no Navegador**

Após iniciar o servidor, acesse:

```
https://8081-ihjm6tkgpofbxey34eftp-e88f0418.us2.manus.computer
```

Ou se estiver rodando localmente:

```
http://localhost:8081
```

**3. Escolher Modo de Visualização**

Na página inicial, você verá duas opções:

- **📱 Acessar App Mobile**: Versão mobile completa (ideal para testar em Expo Go)
- **💻 Visualização Web**: Simulador mobile no navegador (para teste no notebook)

### 🎮 Testando a Visualização Web

A visualização web oferece:

- **Simulador Mobile**: Frame de iPhone com notch e home indicator
- **Navegação Completa**: Teste todos os fluxos do app
- **Interatividade Total**: Todos os botões funcionam normalmente
- **Responsivo**: Adapta-se ao tamanho da janela do navegador

### 📱 Fluxo de Teste Completo

1. Clique em **"💻 Visualização Web"** na página inicial
2. Você verá o simulador mobile no centro da tela
3. Teste os seguintes fluxos:

#### Fluxo 1: Iniciar Suporte (Técnico)
```
Home → Clique "🚀 Iniciar Suporte" 
     → Tela de Acesso à Sala
     → Insira nome da sala
     → Clique "✅ Criar Sala"
     → Simulação de conexão
```

#### Fluxo 2: Receber Suporte (Usuário)
```
Home → Clique "📥 Receber Suporte"
     → Tela de Entrada
     → Insira nome da sala
     → Clique "Entrar na Sala"
     → Simulação de conexão
```

#### Fluxo 3: Gerar Nome Aleatório
```
Tela de Acesso → Clique "🎲 Gerar Nome Aleatório"
              → Nome é gerado automaticamente
              → Clique "✅ Criar Sala"
```

#### Fluxo 4: Voltar
```
Qualquer tela → Clique "← Voltar"
             → Retorna à tela anterior
```

### 🎨 Recursos da Visualização Web

#### Simulador Mobile
- Frame de iPhone com notch realista
- Home indicator na parte inferior
- Proporção 9:16 (mobile portrait)
- Máxima altura de 600px para caber na tela

#### Componentes Interativos
- Todos os botões funcionam normalmente
- Campos de entrada aceitam texto
- Estados de carregamento são exibidos
- Alertas aparecem em janelas modais

#### Responsividade
- Adapta-se a diferentes tamanhos de tela
- Teste em diferentes resoluções de notebook
- Funciona em navegadores modernos (Chrome, Firefox, Safari, Edge)

### 🔧 Troubleshooting

#### Problema: Página em branco
**Solução**: Aguarde alguns segundos para o Metro bundler compilar. Atualize a página com F5.

#### Problema: Botões não funcionam
**Solução**: Verifique se o servidor está rodando com `pnpm dev`. Limpe o cache com Ctrl+Shift+Delete.

#### Problema: Simulador não aparece
**Solução**: Maximize a janela do navegador. O simulador precisa de espaço para renderizar.

#### Problema: Estilos estranhos
**Solução**: Limpe o cache do navegador e atualize a página.

### 📊 Comparação: Mobile vs Web

| Aspecto | Mobile (Expo Go) | Web (Navegador) |
|---------|------------------|-----------------|
| Plataforma | Dispositivo real | Notebook/Desktop |
| Instalação | QR Code | Link direto |
| Performance | Nativa | Emulada |
| Testes | Completos | Completos |
| Acesso | Qualquer lugar | Mesmo computador |
| Ideal para | Testes reais | Desenvolvimento |

### 🚀 Dicas para Desenvolvimento

1. **Use a Visualização Web para Desenvolvimento Rápido**
   - Teste mudanças em tempo real
   - Veja os erros no console do navegador
   - Mais rápido que recompilar para mobile

2. **Use Expo Go para Testes Finais**
   - Teste em dispositivo real
   - Valide performance nativa
   - Confirme comportamento em diferentes tamanhos de tela

3. **Combine Ambos**
   - Desenvolva na web
   - Teste em mobile com Expo Go
   - Garanta qualidade em ambas as plataformas

### 📝 Notas Importantes

- A visualização web é uma emulação do app mobile
- Alguns recursos nativos podem não funcionar (câmera, microfone, etc)
- Para testar videoconferência, use Expo Go em dispositivo real
- As anotações em tela funcionam normalmente na web

### 🔗 Links Úteis

- **App Mobile**: Escaneie o QR code com Expo Go
- **Web Preview**: Acesse o link do navegador
- **GitHub**: [seu-repositorio-aqui]
- **Documentação**: Veja README.md

---

**Desenvolvido com ❤️ usando Expo e React Native**

*Última atualização: Maio de 2026*
