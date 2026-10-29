# DESIGN.md — Studio Renata Sansill

Sistema derivado do cartaz oficial da cliente. Tokens em `app/globals.css` (`@theme`).

## Cor
| Token | Hex | Papel |
|---|---|---|
| `creme` | #f7efeb | fundo principal |
| `blush` / `blush-deep` | #ebd5ce / #dfc0b6 | seção de protocolos, hover |
| `vinho` / `vinho-deep` | #5e2337 / #45182a | hero, contato, rodapé, botões ativos |
| `ameixa` / `ameixa-soft` | #3a1c27 / #6e4a55 | texto e texto secundário (AA sobre creme e blush) |
| `rose` | #b8836a | só linhas, molduras e separadores (não passa AA como texto) |
| `rose-ink` | #8c5a44 | rosé para texto sobre fundo claro, anel de foco |
| `rose-light` | #d9ae95 | script e detalhes sobre vinho (5.9:1) |

O vinho ocupa faixas inteiras, de ponta a ponta. O rosé nunca vira fundo.

## Tipografia
- **Bodoni Moda** (`font-display`): títulos, nomes de protocolo, itens de lista de benefício. Tracking negativo leve nos tamanhos grandes.
- **Jost** (`font-sans`): corpo, botões, rótulos em caixa-alta com tracking de 0.12–0.18em.
- **Pinyon Script** (`font-script`): só frases-assinatura ("melhor versão", "avaliação", "Sua beleza, minha missão!"). Nunca em texto corrido.

## Composição
- Container `max-w-6xl`, grid de 12 colunas a partir de `md`.
- Fotos com moldura de linha fina rosé deslocada (`-inset-3` + translate). Sem cantos arredondados nas fotos; pílulas só em botões e chips.
- Listas com linhas finas no lugar de cards.

## Movimento
- Curvas: `--ease-out-strong` (0.23, 1, 0.32, 1) e `--ease-in-out-strong` (0.77, 0, 0.175, 1).
- Momento-assinatura: cortina de luz (clip-path, 750ms) na seção LED.
- Revelar o retrato do hero uma vez; `.press` = scale(0.97) em 160ms; o bubble entra em 1.2s.
- `prefers-reduced-motion`: tudo vira fade; vídeos não tocam sozinhos e mostram os controles.

## Superfícies do navegador
Seleção em vinho (rosé sobre vinho), anel de foco `rose-ink` (`rose-light` em `.on-vinho`), scrollbar rosé.
