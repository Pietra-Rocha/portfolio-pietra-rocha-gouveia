# Design - TechAssist Remote

## Visão Geral
O TechAssist Remote é um aplicativo de suporte técnico remoto que permite técnicos prestarem assistência através de videoconferência com ferramentas visuais de anotação em tela. O design segue a orientação vertical (9:16) e princípios de usabilidade para usuários leigos.

## Paleta de Cores
- **Primária**: #0A7EA4 (Azul profissional)
- **Fundo**: #FFFFFF (Light) / #151718 (Dark)
- **Superfície**: #F5F5F5 (Light) / #1E2022 (Dark)
- **Texto Principal**: #11181C (Light) / #ECEDEE (Dark)
- **Texto Secundário**: #687076 (Light) / #9BA1A6 (Dark)
- **Sucesso**: #22C55E (Verde)
- **Erro**: #EF4444 (Vermelho)
- **Borda**: #E5E7EB (Light) / #334155 (Dark)

## Lista de Telas

### 1. Tela Inicial (Home Screen)
**Propósito**: Permitir que o usuário crie ou entre em uma sala de videoconferência.

**Conteúdo Principal**:
- Logo/Ícone do app (topo)
- Título "TechAssist Remote"
- Subtítulo "Suporte Técnico Remoto"
- Campo de entrada de texto para "Nome da Sala"
- Botão primário "Entrar na Sala"
- Informações de status (conectado/desconectado)

**Funcionalidade**:
- Usuário insere o nome da sala
- Valida se o campo não está vazio
- Navega para a tela de videoconferência

### 2. Tela de Videoconferência (Call Screen)
**Propósito**: Exibir a chamada de vídeo e ferramentas de anotação.

**Conteúdo Principal**:
- WebView com Jitsi Meet (80% da tela)
- Barra de ferramentas de anotação (20% da tela)
- Botões de controle (mute, câmera, sair)

**Funcionalidade**:
- Integração com Jitsi Meet
- Exibição de vídeo em tempo real
- Acesso a ferramentas de anotação
- Controles de áudio/vídeo

### 3. Overlay de Anotação (Drawing Overlay)
**Propósito**: Permitir desenho e anotações sobre a tela de videoconferência.

**Conteúdo Principal**:
- Canvas transparente sobreposto ao vídeo
- Ferramentas de desenho (pincel, destaque, ponteiro)
- Botão "Limpar Anotações"
- Botão "Desfazer"

**Funcionalidade**:
- Desenho livre com pincel
- Destaque com formas (círculo, retângulo)
- Indicador de toque (ponteiro)
- Limpeza de anotações
- Desfazer última ação

## Fluxos Principais de Usuário

### Fluxo 1: Entrar em Sala de Videoconferência
1. Usuário abre o app
2. Vê a tela inicial com campo para nome da sala
3. Insere o nome da sala (ex: "Suporte-001")
4. Toca em "Entrar na Sala"
5. App valida entrada e navega para tela de videoconferência
6. Jitsi Meet carrega e estabelece conexão
7. Usuário vê vídeo da outra pessoa

### Fluxo 2: Usar Ferramentas de Anotação
1. Durante a chamada, usuário toca em "Ferramentas de Anotação"
2. Overlay de anotação ativa
3. Usuário seleciona ferramenta (pincel, destaque, ponteiro)
4. Desenha/anota sobre a tela
5. Pode desfazer ou limpar
6. Toca em "Fechar Anotação" para voltar ao vídeo

### Fluxo 3: Sair da Chamada
1. Usuário toca em "Sair" ou "Desconectar"
2. Chamada é encerrada
3. App retorna para tela inicial

## Componentes Principais

### Componente: RoomInput
- Campo de entrada de texto
- Validação em tempo real
- Feedback visual de erro

### Componente: VideoContainer
- WebView para Jitsi Meet
- Gerenciamento de estado de conexão
- Tratamento de erros

### Componente: DrawingCanvas
- Canvas para desenho livre
- Suporte a múltiplas ferramentas
- Histórico de ações (undo)

### Componente: ToolBar
- Seleção de ferramenta de desenho
- Botões de controle (limpar, desfazer)
- Indicador de ferramenta ativa

## Padrões de Interação

### Feedback Visual
- Botões mudam cor ao serem pressionados
- Ferramentas ativas mostram indicador visual
- Mensagens de erro em vermelho
- Mensagens de sucesso em verde

### Acessibilidade
- Textos descritivos em todos os botões
- Contraste suficiente entre cores
- Tamanho de toque mínimo de 44x44pt
- Suporte a leitura de tela (accessibility labels)

### Responsividade
- Layout adapta-se a diferentes tamanhos de tela
- Elementos redimensionam proporcionalmente
- Toque funciona em qualquer orientação (portrait)

## Considerações de UX

1. **Simplicidade**: Interface clara e direta, sem elementos desnecessários
2. **Feedback**: Usuário sempre sabe o que está acontecendo
3. **Acessibilidade**: Botões grandes e textos legíveis
4. **Performance**: Carregamento rápido e transições suaves
5. **Confiabilidade**: Tratamento de erros de conexão
