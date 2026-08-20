# Currículo em PDF

`rodrigo-dionizio-cv.pdf` é o arquivo que o botão **"Baixar CV (PDF)"** do portfólio entrega.

## Como atualizar

O PDF é gerado a partir de `fonte/curriculo.html`, que traz as fontes embutidas em
`fonte/fontes.css` — o arquivo não depende de rede nem de nenhuma fonte instalada.

1. Edite `fonte/curriculo.html` (é HTML comum, com CSS de impressão em `@page`).
2. Gere o PDF novamente com o Chromium:

   ```bash
   npx playwright open --load-storage= file://$PWD/fonte/curriculo.html   # opcional, só para conferir
   ```

   ou, direto pelo navegador: abra `fonte/curriculo.html`, use **Imprimir → Salvar como PDF**,
   papel A4, margens padrão do documento e **marque "Gráficos de segundo plano"**.

3. Salve por cima de `rodrigo-dionizio-cv.pdf` e faça o commit.

## Se preferir substituir por outro arquivo

Suba o seu PDF com **exatamente** o nome `rodrigo-dionizio-cv.pdf` em
<https://github.com/rodrigodionizio/meuportifolio/upload/main/docs/assets/cv>.
O botão do portfólio passa a entregar o novo arquivo em 1–2 minutos.
