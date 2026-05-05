# TechAssist Remote

**Suporte Técnico Remoto com Anotação em Tela**

Um aplicativo mobile moderno para prestação de suporte técnico remoto através de videoconferência com ferramentas visuais integradas. O TechAssist Remote permite que técnicos guiem usuários leigos de forma intuitiva, utilizando desenho livre, destaque de áreas e indicadores de toque durante chamadas de vídeo.

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Problema Resolvido](#problema-resolvido)
- [Proposta de Valor](#proposta-de-valor)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Funcionalidades Principais](#funcionalidades-principais)
- [Arquitetura do Projeto](#arquitetura-do-projeto)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Preview das Telas](#preview-das-telas)
- [Geração de QR Code](#geração-de-qr-code)
- [Desenvolvimento](#desenvolvimento)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

## 🎯 Visão Geral

O TechAssist Remote é uma solução completa para suporte técnico remoto que combina videoconferência em tempo real com ferramentas de anotação visual. Diferentemente de soluções tradicionais que dependem apenas de comunicação verbal, este aplicativo permite que o técnico desenhe, destaque e aponte elementos na tela durante a chamada, tornando a comunicação mais clara e eficaz.

### Público-Alvo

O aplicativo foi desenvolvido pensando em dois tipos de usuários:

- **Técnicos de Suporte**: Profissionais que precisam guiar usuários leigos através de procedimentos técnicos
- **Usuários Finais**: Pessoas com pouca experiência técnica que recebem suporte remoto

## 🔍 Problema Resolvido

### Desafio Original

Usuários leigos frequentemente enfrentam dificuldades em seguir instruções técnicas apenas através de comunicação verbal. Problemas comuns incluem:

- **Falta de Clareza**: Descrições verbais de elementos na tela são confusas e imprecisas
- **Erros de Interpretação**: Usuários clicam em locais errados ou executam ações incorretas
- **Tempo Prolongado**: Suporte verbal leva mais tempo do que seria necessário
- **Frustração**: Tanto técnico quanto usuário ficam frustrados com a falta de compreensão

### Solução Implementada

O TechAssist Remote resolve esses problemas fornecendo:

1. **Videoconferência Integrada**: Conexão visual em tempo real entre técnico e usuário
2. **Ferramentas de Anotação**: O técnico pode desenhar, destacar e apontar elementos
3. **Interface Intuitiva**: Design simples e acessível para usuários leigos
4. **Comunicação Visual**: Reduz ambiguidades e acelera o processo de suporte

## 💡 Proposta de Valor

| Aspecto | Benefício |
|--------|----------|
| **Eficiência** | Reduz tempo de suporte em até 50% com comunicação visual |
| **Acessibilidade** | Interface simples, sem necessidade de conhecimento técnico |
| **Qualidade** | Suporte mais eficaz e satisfação do cliente aumentada |
| **Escalabilidade** | Técnicos podem atender mais usuários com menos tempo por sessão |
| **Custo** | Baseado em tecnologias open-source (Jitsi Meet, Expo, React Native) |

## 🛠 Tecnologias Utilizadas

### Stack Principal

| Tecnologia | Versão | Propósito |
|-----------|--------|----------|
| **React Native** | 0.81.5 | Framework para desenvolvimento mobile |
| **Expo** | 54.0 | Plataforma para build e deploy |
| **TypeScript** | 5.9 | Tipagem estática para JavaScript |
| **Jitsi Meet** | SDK | Videoconferência WebView |
| **NativeWind** | 4.2.1 | Tailwind CSS para React Native |
| **Expo Router** | 6.0 | Navegação e roteamento |
| **React Native WebView** | Latest | Integração com Jitsi Meet |

### Dependências Principais

```json
{
  "react": "19.1.0",
  "react-native": "0.81.5",
  "expo": "~54.0.29",
  "expo-router": "~6.0.19",
  "react-native-webview": "latest",
  "nativewind": "^4.2.1",
  "tailwindcss": "^3.4.17"
}
```

## ✨ Funcionalidades Principais

### 1. Tela Inicial (Home Screen)

A tela inicial oferece uma experiência intuitiva para usuários entrarem em uma sala de suporte:

- Campo de entrada para nome da sala
- Validação em tempo real
- Instruções passo a passo
- Design limpo e profissional
- Feedback visual de ações

### 2. Tela de Videoconferência (Call Screen)

Durante a chamada, o usuário tem acesso a:

- Integração completa com Jitsi Meet
- Vídeo em tempo real de ambos os participantes
- Controles de áudio e vídeo
- Informações da sala
- Botão para ativar ferramentas de anotação
- Botão para sair da chamada

### 3. Camada de Anotação em Tela (Drawing Canvas)

Ferramentas visuais para guiar o usuário:

- **🖌️ Pincel**: Desenho livre com traços contínuos
- **⭕ Círculo**: Destaque de áreas circulares
- **◻️ Retângulo**: Destaque de áreas retangulares
- **👆 Ponteiro**: Indicador de toque para apontar elementos
- **↶ Desfazer**: Reverte a última ação de desenho
- **🗑️ Limpar**: Remove todas as anotações

### 4. Controles de Chamada

- Mute/Unmute de áudio
- Ativar/Desativar câmera
- Compartilhamento de tela (através do Jitsi Meet)
- Sair da chamada com confirmação

## 🏗 Arquitetura do Projeto

### Estrutura de Pastas

```
techassist-remote/
├── app/
│   ├── _layout.tsx              # Layout raiz com providers
│   ├── call.tsx                 # Tela de videoconferência
│   └── (tabs)/
│       ├── _layout.tsx          # Layout das abas
│       └── index.tsx            # Tela inicial (Home)
├── components/
│   ├── drawing-canvas.tsx       # Componente de anotação
│   ├── screen-container.tsx     # Wrapper de tela com SafeArea
│   ├── haptic-tab.tsx           # Botão de aba com haptic
│   └── ui/
│       ├── icon-symbol.tsx      # Mapeamento de ícones
│       └── themed-view.tsx      # View com tema automático
├── hooks/
│   ├── use-colors.ts            # Hook para cores do tema
│   ├── use-color-scheme.ts      # Hook para esquema de cores
│   └── use-auth.ts              # Hook para autenticação
├── lib/
│   ├── utils.ts                 # Utilitários (cn, etc)
│   ├── trpc.ts                  # Cliente tRPC
│   ├── theme-provider.tsx       # Provider de tema
│   └── _core/
│       ├── theme.ts             # Configuração de tema
│       ├── nativewind-pressable.ts
│       └── manus-runtime.ts
├── constants/
│   └── theme.ts                 # Tokens de tema
├── assets/
│   └── images/
│       ├── icon.png             # Ícone do app
│       ├── splash-icon.png      # Ícone de splash
│       ├── favicon.png          # Favicon
│       ├── android-icon-foreground.png
│       └── android-icon-background.png
├── app.config.ts                # Configuração do Expo
├── tailwind.config.js           # Configuração do Tailwind
├── theme.config.js              # Tokens de cor
├── package.json                 # Dependências
├── design.md                    # Documentação de design
├── todo.md                      # Rastreamento de tarefas
└── README.md                    # Este arquivo
```

### Padrões Arquiteturais

O projeto segue padrões de arquitetura limpa:

**Separação de Responsabilidades**:
- **Screens** (`app/`): Componentes de tela e roteamento
- **Components**: Componentes reutilizáveis
- **Hooks**: Lógica de estado e efeitos
- **Utils**: Funções auxiliares e utilitários
- **Constants**: Configurações e constantes

**State Management**:
- React Context para estado global (tema)
- useState/useReducer para estado local
- AsyncStorage para persistência

**Styling**:
- Tailwind CSS via NativeWind
- Tokens de cor centralizados em `theme.config.js`
- Suporte automático para modo claro/escuro

## 📦 Instalação

### Pré-requisitos

- Node.js 18+ ou superior
- npm ou pnpm
- Expo CLI (`npm install -g expo-cli`)
- Dispositivo Android/iOS ou emulador

### Passos de Instalação

**1. Clonar o repositório**

```bash
git clone https://github.com/seu-usuario/techassist-remote.git
cd techassist-remote
```

**2. Instalar dependências**

```bash
pnpm install
# ou
npm install
```

**3. Iniciar o servidor de desenvolvimento**

```bash
pnpm dev
# ou
npm run dev
```

**4. Abrir no dispositivo**

Para **iOS**:
```bash
pnpm ios
```

Para **Android**:
```bash
pnpm android
```

Para **Web**:
```bash
pnpm web
```

### Instalação via QR Code

Após iniciar o servidor de desenvolvimento, um QR code será exibido. Use o aplicativo **Expo Go** para escanear e abrir o app no seu dispositivo.

## 🚀 Como Usar

### Fluxo Básico de Uso

**Para o Técnico de Suporte**:

1. Abra o TechAssist Remote
2. Insira um nome único para a sala (ex: "Suporte-001")
3. Toque em "Entrar na Sala"
4. Aguarde a conexão com o Jitsi Meet
5. Compartilhe o nome da sala com o usuário
6. Quando o usuário entrar, você verá o vídeo dele
7. Toque em "Anotar" para ativar as ferramentas de desenho
8. Use as ferramentas para guiar o usuário visualmente

**Para o Usuário Final**:

1. Abra o TechAssist Remote
2. Insira o nome da sala fornecido pelo técnico
3. Toque em "Entrar na Sala"
4. Aguarde a conexão
5. Você verá o técnico na tela
6. Siga as instruções visuais do técnico
7. Quando terminar, toque em "Sair"

### Ferramentas de Anotação

| Ferramenta | Como Usar | Caso de Uso |
|-----------|-----------|-----------|
| **Pincel** | Toque e arraste para desenhar | Indicar caminhos ou escrever instruções |
| **Círculo** | Toque, arraste para definir raio | Destacar botões ou ícones |
| **Retângulo** | Toque, arraste para definir tamanho | Destacar campos de texto ou áreas |
| **Ponteiro** | Toque para criar ponto | Apontar elementos específicos |
| **Desfazer** | Toque no botão ↶ | Reverter última anotação |
| **Limpar** | Toque no botão 🗑️ | Remover todas as anotações |

## 🎨 Preview das Telas

### Tela Inicial

![Home Screen](./preview-home-screen.png)

A tela inicial apresenta o branding do app com instruções claras sobre como usar. O campo de entrada é grande e acessível, com validação em tempo real.

### Tela de Videoconferência

![Call Screen](./preview-call-screen.png)

Durante a chamada, o usuário vê o vídeo do técnico e tem acesso aos controles. O botão "Anotar" ativa a camada de anotação.

### Tela de Anotação

![Annotation Screen](./preview-annotation-screen.png)

A camada de anotação permite desenho livre e destaque de áreas com ferramentas intuitivas. Todas as anotações aparecem em tempo real.

## 📱 Geração de QR Code

Para gerar um QR code para instalação rápida:

```bash
pnpm qr
```

Este comando gera um arquivo `qr-code.png` na raiz do projeto. Compartilhe este QR code com usuários para que eles possam escanear e instalar o app automaticamente via Expo Go.

### Alternativa: QR Code Manual

1. Inicie o servidor: `pnpm dev`
2. O QR code aparecerá no terminal
3. Use o Expo Go para escanear
4. O app abrirá automaticamente

## 💻 Desenvolvimento

### Estrutura de Desenvolvimento

O projeto usa um setup moderno com:

- **TypeScript**: Tipagem estática para evitar erros
- **ESLint**: Linting automático de código
- **Prettier**: Formatação automática
- **Vitest**: Testes unitários (quando necessário)

### Scripts Disponíveis

```bash
# Desenvolvimento
pnpm dev              # Inicia servidor de desenvolvimento
pnpm dev:server       # Inicia apenas servidor backend
pnpm dev:metro        # Inicia apenas Metro bundler

# Build e Deploy
pnpm build            # Compila para produção
pnpm start            # Inicia servidor de produção

# Qualidade de Código
pnpm check            # TypeScript type checking
pnpm lint             # ESLint
pnpm format           # Prettier formatting
pnpm test             # Vitest

# Plataformas Específicas
pnpm ios              # Abre no simulador iOS
pnpm android          # Abre no emulador Android
pnpm web              # Abre no navegador
pnpm qr               # Gera QR code

# Database
pnpm db:push          # Executa migrações do banco
```

### Adicionando Novas Telas

1. Crie um novo arquivo em `app/` ou `app/(tabs)/`
2. Exporte um componente React como default
3. Use `ScreenContainer` para SafeArea
4. Adicione a rota em `app/_layout.tsx` se necessário

Exemplo:

```tsx
// app/settings.tsx
import { ScreenContainer } from "@/components/screen-container";
import { Text } from "react-native";

export default function SettingsScreen() {
  return (
    <ScreenContainer className="p-4">
      <Text className="text-2xl font-bold text-foreground">
        Configurações
      </Text>
    </ScreenContainer>
  );
}
```

### Adicionando Novos Componentes

1. Crie em `components/`
2. Exporte como componente nomeado
3. Importe onde necessário

### Modificando o Tema

1. Edite `theme.config.js` para cores
2. Edite `tailwind.config.js` para espaçamento/tipografia
3. Atualize `constants/theme.ts` se adicionar novos tokens

## 🔄 Fluxo de Desenvolvimento

### Workflow Recomendado

1. **Criar Feature Branch**: `git checkout -b feature/nome-feature`
2. **Desenvolver**: Faça alterações e teste localmente
3. **Commit**: `git commit -m "feat: descrição da feature"`
4. **Push**: `git push origin feature/nome-feature`
5. **Pull Request**: Abra PR para revisão
6. **Merge**: Após aprovação, faça merge para main

### Commits Semânticos

Use o padrão de commits semânticos:

- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Documentação
- `style:` Formatação/estilo
- `refactor:` Refatoração de código
- `test:` Testes
- `chore:` Tarefas de manutenção

## 🐛 Troubleshooting

### Problema: App não inicia

**Solução**:
```bash
# Limpar cache
pnpm dev:metro -- --reset-cache

# Ou reinstalar dependências
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Problema: Jitsi Meet não carrega

**Solução**:
- Verifique conexão de internet
- Tente usar um nome de sala diferente
- Limpe cache do WebView: `pnpm dev:metro -- --reset-cache`

### Problema: Anotações não aparecem

**Solução**:
- Verifique se o DrawingCanvas está visível
- Tente desfazer e refazer
- Reinicie a chamada

### Problema: Erro de TypeScript

**Solução**:
```bash
pnpm check
# Corrija os erros reportados
```

## 📚 Recursos Adicionais

- [Documentação Expo](https://docs.expo.dev/)
- [React Native Docs](https://reactnative.dev/)
- [Jitsi Meet SDK](https://jitsi.github.io/handbook/docs/dev-guide/dev-guide-web-sdk)
- [NativeWind](https://www.nativewind.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a MIT License - veja o arquivo LICENSE para detalhes.

## 👥 Autores

- **Manus AI** - Desenvolvimento inicial e arquitetura

## 🙏 Agradecimentos

- Jitsi Meet pela excelente plataforma de videoconferência
- Expo pela infraestrutura de desenvolvimento
- React Native pela framework mobile
- Comunidade open-source

## 📞 Suporte

Para suporte, abra uma issue no repositório ou entre em contato através de [seu-email@exemplo.com].

---

**Desenvolvido com ❤️ usando Expo e React Native**

*Última atualização: Maio de 2026*
