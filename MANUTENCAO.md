# Manutenção do portfólio

Guia prático para atualizar o site sem precisar de editor de código — tudo pode ser feito
pela interface web do GitHub, clicando em **Edit** (ícone de lápis) no arquivo.

---

## 1. Publicar o currículo em PDF

O botão **"Baixar CV (PDF)"** aponta para `docs/assets/cv/rodrigo-dionizio-cv.pdf`.

1. Abra <https://github.com/rodrigodionizio/meuportifolio/upload/main/docs/assets/cv>
2. Arraste o PDF.
3. Renomeie para exatamente **`rodrigo-dionizio-cv.pdf`**.
4. Confirme o commit.

Para atualizar depois, suba um arquivo com o mesmo nome — ele substitui o anterior.

---

## 2. Ativar o envio automático do formulário de contato

Hoje o formulário **valida os dados e abre o e-mail ou o WhatsApp preenchidos**. Ele nunca
diz que enviou sem ter enviado. Para o envio ficar automático:

1. Acesse <https://web3forms.com> e informe `rodrigo.dionizio@gmail.com`. A chave chega por e-mail (leva um minuto, sem cadastro).
2. Edite `docs/assets/js/main.js`.
3. Na primeira dezena de linhas, cole a chave:

   ```js
   var CONTACT = {
     ACCESS_KEY: "cole-a-sua-chave-aqui",
   ```

4. Confirme o commit. Em 1–2 minutos o formulário passa a enviar direto para a sua caixa.

> Prefere outro serviço? Formspree e Getform funcionam da mesma forma: basta trocar
> `ENDPOINT` e `ACCESS_KEY`.

---

## 3. Trocar as imagens dos projetos de infraestrutura

Os três projetos de infraestrutura usam diagramas da topologia implantada. Para colocar
**fotos reais** (rack, cabeamento, sala de equipamentos), que costumam impressionar mais:

1. Abra <https://github.com/rodrigodionizio/meuportifolio/upload/main/docs/assets/img/projects>
2. Suba a foto com **exatamente o mesmo nome** do arquivo que ela substitui:

   | Projeto | Nome do arquivo |
   | --- | --- |
   | BIONALISE | `bionalise.jpg` |
   | ITALAB | `italab.jpg` |
   | Laticínios Vila Nova | `vila-nova.jpg` |
   | OSCRM | `oscrm.jpg` |
   | Sorteios Bom Jesus | `sorteios-bomjesus.jpg` |

3. Confirme o commit. O site troca a imagem sozinho — nenhum código muda.

**Antes de subir**, comprima a foto em <https://squoosh.app> (formato JPEG, largura 1280 px,
qualidade 80). Fotos direto do celular têm 4–8 MB e derrubam a nota de performance.

Ao trocar a imagem, **atualize também o texto `alt`** em `docs/index.html` e
`docs/en/index.html`: procure pelo nome do arquivo e descreva o que a foto mostra.

---

## 4. Adicionar ou editar um projeto

Em `docs/index.html`, procure por `<!-- ================= PROJETOS EM PRODUÇÃO =================` .
Copie um bloco `<article class="project reveal"> … </article>` inteiro e ajuste:

- `project__kicker` — a categoria (ex.: "Plataforma SaaS · produto próprio")
- `<h3>` — o nome do projeto
- `<p>` — o que ele faz e para quem
- `project__impact` — o dado que prova o valor (uso, escala, resultado)
- `tags` — as tecnologias
- `project__links` — o link ao vivo e, se o repositório for público, o link do código

Faça o mesmo em `docs/en/index.html` para a versão em inglês.

> Se um projeto sair do ar, troque `project__status--live` e o texto "Em produção" por
> `project__status` e "Arquivado" — ou remova o card. Link quebrado em portfólio custa caro.

---

## 5. Atualizar números e datas

- **Anos de carreira** (`24 anos`) são calculados em JavaScript a partir de `CAREER_START_YEAR = 2002`, em `main.js`. Nunca ficam desatualizados.
- **Ano do rodapé** também é automático.
- **As demais métricas** (200+ servidores, 100+ alunos, −60% de custo) estão fixas no HTML, em `<span class="metric__value">`. Revise-as uma vez por ano.

---

## 6. Endereço do site

Hoje o endereço é `rodrigodionizio.github.io/meuportifolio` — com "portifolio" grafado
errado. Para corrigir:

1. Vá em **Settings → General** do repositório e renomeie de `meuportifolio` para **`rodrigodionizio.github.io`**.
2. O endereço passa a ser `https://rodrigodionizio.github.io/`, sem subpasta. O GitHub mantém redirecionamento do nome antigo.
3. Depois disso, avise para que os endereços absolutos sejam atualizados em: `docs/index.html`, `docs/en/index.html`, `docs/robots.txt`, `docs/sitemap.xml` e neste arquivo.

---

## 7. Depois de qualquer alteração

O GitHub Pages republica sozinho em 1–2 minutos. Se o site não mudar:

- force o recarregamento (`Ctrl + Shift + R`);
- confira em **Actions** se o workflow de qualidade passou;
- confirme em **Settings → Pages** que a origem é a branch `main`, pasta `/docs`.
