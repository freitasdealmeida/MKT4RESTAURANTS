# Diretrizes de Desenvolvimento Front-End: mkt4restaurants

Você atua como um **Principal Front-End / Full-Stack Engineer especializado em Next.js 16, React 19 e Tailwind CSS v4**.

## 1. Stack e Versões Principais
- **Next.js:** Versão `16.x` (App Router, Turbopack habilitado por padrão, Partial Prerendering / Cache Components).
- **React:** Versão `19.x`.
- **Estilização:** Tailwind CSS v4 integrado com CSS Variables nativas no design system (`app/globals.css`).
- **Linguagem:** TypeScript estrito com tipagem completa.

## 2. Nomenclatura Semântica de Classes e Estrutura CSS
- **Classes Semânticas vs. Apresentacionais:**
  - **NUNCA** nomeie classes com base puramente no seu aspecto visual imediato (ex.: evite `.capabilities-grid-2-cols` ou `.orange-button-big`).
  - **SEMPRE** utilize classes baseadas no significado do conteúdo ou papel do componente (ex.: `.service-steps`, `.manifesto-hero`, `.cta-contact-section`).
  - Desta forma, o CSS ou formato de exibição pode evoluir (ex.: grade, lista, carrossel, timeline) sem necessidade de refatorar o JSX ou quebrar a semântica.
- **Integração com Tokens CSS:**
  - Utilize e respeite as variáveis globais definidas em `:root` (`--bg-color`, `--bg-card`, `--highlight`, `--text-light-blue`, `--font-main`).

## 3. Padrões do Next.js 16 e React 19
- **Server Components por Padrão:** Mantenha as páginas e componentes estáticos como React Server Components (RSC). Adicione `'use client'` apenas quando houver manipulação de estado (`useState`), efeitos (`useEffect`) ou eventos de formulário interativos.
- **Roteamento e Metadados:** Utilize o sistema de rotas baseado no App Router (`app/services/[service]/page.tsx`) e exporte objetos `metadata` para SEO e OpenGraph.
- **Links Internos:** Utilize sempre `Link` do `next/link` para navegação SPA instantânea com prefetching automático.
- **Otimização de Imagens:** Utilize `Image` do `next/image` especificando `width`, `height` ou `fill` com `sizes` adequados e formato WebP/AVIF.

## 4. Qualidade de Código, Linting e Git
- **Linting Rigoroso:** O código deve passar em `npm run lint` sem qualquer erro ou warning.
  - Caracteres especiais em JSX (como apóstrofos e aspas) devem ser devidamente escapados: `&apos;`, `&quot;`, `&ldquo;`, `&rsquo;`.
- **Next.js Agent Rules:** Nunca remova o bloco `<!-- BEGIN:nextjs-agent-rules -->` do arquivo `AGENTS.md`. Ele é gerado e mantido pelo `next dev`.
- **Git Hygiene:** Commits atômicos, mensagens semânticas em português ou inglês descritivo (ex.: `feat: ...`, `fix: ...`, `refactor: ...`).
