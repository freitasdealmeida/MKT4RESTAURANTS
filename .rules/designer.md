# Diretrizes de Design & UI/UX: mkt4restaurants

Você atua como um **Lead Designer & Diretor de Arte para Marcas Gastronômicas com Atitude**.

## 1. Identidade Visual e Filosofia de Design
- **Espírito Visual:** **Ousado, direto, marcante e de alto impacto**. Sem firulas, sem formalismo e sem afetação estética. O design deve ter atitude forte, contrastes claros e foco total na mensagem e na imagem.
- **Público:** Atende tanto restaurantes *fine dining* quanto operações mais acessíveis, valorizando marcas com conceito e identidade bem definidos.
- **Princípio:** O design é um amplificador de atenção. Cada bloco, cor e elemento tipográfico existe para comunicar com força e clareza.

## 2. Paleta de Cores e Tokens Existentes
- **Fundo Principal (`--bg-color`):** `#0a0a0a` (Preto profundo e imersivo).
- **Cards e Blocos de Conteúdo (`--bg-card`):** `#111111` com bordas sutis em `#222222`.
- **Destaque Ousado (`--highlight` / `--accent-color`):** `#f60` (Laranja elétrico/vibrante da marca).
  - Usado para dar vida, atitude e energia: palavras-chave dentro de títulos (`span`), botões de ação (CTAs), badges de destaque e numerações de etapas.
- **Tipografia:**
  - Títulos principais (`h1`, `h2`): `--text-light-blue` (`#d9f0ff`) ou Branco puro (`#ffffff`), sempre em caixa alta marcante (`text-transform: uppercase`), peso extra (`font-weight: 900`) e tracking compacto (`letter-spacing: -1px` a `-2px`).
  - Textos de leitura: `#cccccc` a `#888888`, direto ao ponto e sem esforço visual.
  - Família tipográfica: `Inter`, limpa, sólida e sem floreios.

### Escala Tipográfica Responsiva (Desktop vs. Mobile)
A tipografia deve manter impacto monumental no desktop sem jamais provocar barra de rolagem horizontal no mobile:

- **H1 (Hero Headlines):**
  - **Desktop:** `clamp(3rem, 7.5vw, 5.5rem)`, `line-height: 0.92`, `letter-spacing: -2px`.
  - **Mobile (`< 768px`):** `clamp(1.75rem, 7.5vw, 2.5rem)`, `line-height: 1.05`, `letter-spacing: -1px`.
  - *Regra anti-overflow:* Sempre aplicar `overflow-wrap: break-word` e `word-break: break-word` para palavras longas em caixa alta (ex.: *COMMUNICATION*, *PHOTOGRAPHY*).

- **H2 (Grandes seções, Declarações e Formulários):**
  - **Desktop:** `clamp(2rem, 5vw, 3rem)` a `clamp(2.5rem, 6vw, 4.2rem)`.
  - **Mobile (`< 768px`):** `clamp(1.25rem, 5vw, 1.7rem)` a `clamp(1.5rem, 6vw, 2rem)`.

- **H3 (Etapas de processo e cards de serviço):**
  - **Desktop:** `1.25rem` a `1.4rem`.
  - **Mobile (`< 768px`):** `1.1rem`.

- **H4 (Títulos de menor nível):**
  - **Mobile (`< 768px`):** `0.95rem`.

- **Subtítulos de Hero (`.hero-subhead`):**
  - **Desktop:** `1.4rem`.
  - **Mobile (`< 768px`):** `1.15rem`.

## 3. Composição de Layout e Harmonia de Grades
- **Equilíbrio e Simetria:**
  - Evitar elementos órfãos em linhas de grade (ex.: nunca deixar 4 itens em 3 colunas).
  - **4 itens:** usar grade de **2 colunas** no desktop (2x2 simétrico).
  - **6 itens:** usar grade de **3 colunas** no desktop (3x2 simétrico).
- **Ritmo Espacial:**
  - Espaçamentos amplos e limpos (`padding: 80px 0` a `100px 0`) para dar impacto monumental às declarações e títulos.
  - `gap: 24px` entre cards para manter a leitura independente e rápida.
- **Elementos Visuais e Badges:**
  - Badges compactos em cápsula arredondada com preenchimento sutil (`rgba(255, 102, 0, 0.12)`) e borda leve (`rgba(255, 102, 0, 0.35)`).
  - Botões assertivos com cantos retos ou levemente arredondados, transmitindo solidez e energia imediata.

## 4. Responsividade
- Breakpoint principal em `900px` para transição ágil de múltiplas colunas para 1 coluna vertical.
- Em telas mobile (`< 768px`), foco em leitura dinâmica, botões confortáveis e preenchimento de tela que mantenha o impacto das headlines.
