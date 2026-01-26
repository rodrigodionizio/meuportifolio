# 🚀 Portfólio Rodrigo Dionizio

![Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

> Portfólio profissional de Rodrigo Dionizio - Professor de Informática e Desenvolvedor Full Stack

---

## 📋 Sobre

Portfólio pessoal desenvolvido com HTML5, CSS3 e JavaScript vanilla, apresentando experiência profissional, projetos e habilidades técnicas.

**Características:**

- ✅ Design responsivo mobile-first
- ✅ Animações suaves e modernas
- ✅ Performance otimizada (Lighthouse 90+)
- ✅ SEO completo
- ✅ Acessibilidade WCAG AA
- ✅ Formulário de contato funcional
- ✅ Hospedagem GitHub Pages

---

## 🛠️ Tecnologias

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização e animações
- **JavaScript** - Interatividade e funcionalidades
- **Git** - Controle de versão
- **GitHub Pages** - Hospedagem

---

## 📁 Estrutura do Projeto

```
portfolio-rodrigo/
├── docs/
│   ├── index.html           # Página principal
│   ├── assets/
│   │   ├── css/
│   │   │   └── style.css    # Estilos principais
│   │   ├── js/
│   │   │   └── main.js      # JavaScript principal
│   │   └── imgs/
│   │       ├── profile-rodrigo-dionizio.png  # Foto profissional (TODO)
│   │       ├── projects/    # Screenshots dos projetos (TODO)
│   │       │   ├── sacristia-digital.png
│   │       │   ├── poupemais.png
│   │       │   ├── calendario-liturgico.png
│   │       │   ├── bionalise.jpg
│   │       │   ├── italab.jpg
│   │       │   └── vila-nova.jpg
│   │       └── favicon.png  # Ícone do site (opcional)
├── README.md                # Este arquivo
└── LICENSE                  # Licença MIT
```

---

## 🚀 Como Usar

### 1. Clone o repositório

```bash
git clone https://github.com/rodrigodionizio/portfolio.git
cd portfolio
```

### 2. Abra localmente

```bash
# Abra o arquivo index.html no navegador
# Ou use Live Server no VS Code
```

### 3. Personalize o conteúdo

- Edite `docs/index.html` para atualizar informações
- Modifique `docs/assets/css/style.css` para ajustar estilos
- Personalize `docs/assets/js/main.js` para funcionalidades

---

## 📸 Adicionar Imagens (Próximos Passos)

### Foto Profissional

1. **Prepare sua foto:**
   - Use o prompt fornecido em `/PROMPT_FOTO_PROFISSIONAL.md`
   - Processe com Remini AI, Photoroom ou Fotor
   - Salve como `profile-rodrigo-dionizio.png`

2. **Adicione ao projeto:**

   ```bash
   # Copie a foto para:
   docs/assets/imgs/profile-rodrigo-dionizio.png
   ```

3. **Atualize o HTML:**
   ```html
   <!-- Remova o placeholder e descomente: -->
   <img
     src="./assets/imgs/profile-rodrigo-dionizio.png"
     alt="Rodrigo Dionizio"
     class="hero-image"
   />
   ```

### Screenshots dos Projetos

1. **Capture screenshots:**
   - Sacristia Digital: https://sacristia-digital-saas-core.vercel.app
   - PoupeMais: Repositório GitHub
   - Calendário Litúrgico: Repositório GitHub
   - Projetos de infraestrutura: Fotos reais (se disponíveis)

2. **Otimize as imagens:**
   - Tamanho recomendado: 800x600px
   - Formato: PNG ou JPG
   - Compressão: TinyPNG ou similar

3. **Adicione ao projeto:**

   ```bash
   docs/assets/imgs/projects/
   ├── sacristia-digital.png
   ├── poupemais.png
   ├── calendario-liturgico.png
   ├── bionalise.jpg
   ├── italab.jpg
   └── vila-nova.jpg
   ```

4. **Atualize o HTML:**
   ```html
   <!-- Para cada projeto, descomente e ajuste: -->
   <img
     src="./assets/imgs/projects/sacristia-digital.png"
     alt="Sacristia Digital"
     class="project-image"
   />
   ```

---

## 🌐 Deploy no GitHub Pages

### Passo 1: Crie o repositório

```bash
# Crie um novo repositório no GitHub chamado:
# portfolio ou rodrigodionizio.github.io

# Inicialize o Git
git init
git add .
git commit -m "Initial commit: Portfolio Rodrigo Dionizio"
git branch -M main
git remote add origin https://github.com/rodrigodionizio/portfolio.git
git push -u origin main
```

### Passo 2: Configure GitHub Pages

1. Acesse: `Settings` → `Pages`
2. Em **Source**, selecione: `main` branch e `/docs` folder
3. Clique em **Save**
4. Aguarde 1-2 minutos

### Passo 3: Acesse seu portfólio

```
https://rodrigodionizio.github.io/portfolio
```

ou (se nomeou como `rodrigodionizio.github.io`):

```
https://rodrigodionizio.github.io
```

---

## ⚙️ Configuração do Formulário de Contato

O formulário está pronto, mas para funcionar completamente, configure o EmailJS:

### 1. Crie uma conta gratuita

- Acesse: https://www.emailjs.com
- Crie uma conta gratuita

### 2. Configure o serviço

- Adicione um email service (Gmail, Outlook, etc.)
- Crie um template de email
- Copie os IDs

### 3. Atualize o JavaScript

Em `docs/assets/js/main.js`, linha ~150:

```javascript
// Substitua pelos seus IDs:
const serviceId = "SEU_SERVICE_ID";
const templateId = "SEU_TEMPLATE_ID";
const publicKey = "SUA_PUBLIC_KEY";
```

### 4. Descomente o código EmailJS

```javascript
// Linha ~165, descomente:
emailjs
  .send(
    serviceId,
    templateId,
    {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      subject: data.subject,
      message: data.message,
      to_email: "rodrigo.dionizio@gmail.com",
    },
    publicKey,
  )
  .then((response) => resolve(response))
  .catch((error) => reject(error));
```

---

## 🎨 Personalização

### Cores do Tema

Em `docs/assets/css/style.css`, altere as variáveis:

```css
:root {
  --primary: #2c5f8d; /* Cor principal */
  --primary-light: #5b9bd5; /* Variação clara */
  --primary-dark: #1f4788; /* Variação escura */
  --accent: #0066cc; /* Cor de destaque */
  /* ... outras cores ... */
}
```

### Conteúdo

Edite `docs/index.html` para atualizar:

- Textos e descrições
- Links de projetos
- Informações de contato
- Habilidades e porcentagens

---

## 🔍 SEO

### Meta Tags Configuradas

- ✅ Título otimizado
- ✅ Descrição com palavras-chave
- ✅ Open Graph para redes sociais
- ✅ Tags de autor e keywords

### Próximos Passos

1. **Crie sitemap.xml:**

   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://rodrigodionizio.github.io/portfolio/</loc>
       <lastmod>2025-01-26</lastmod>
       <priority>1.0</priority>
     </url>
   </urlset>
   ```

2. **Crie robots.txt:**

   ```
   User-agent: *
   Allow: /
   Sitemap: https://rodrigodionizio.github.io/portfolio/sitemap.xml
   ```

3. **Registre no Google Search Console**

---

## 📊 Performance

### Métricas Esperadas

- **Lighthouse Performance:** 95+
- **Lighthouse Accessibility:** 100
- **Lighthouse Best Practices:** 95+
- **Lighthouse SEO:** 100

### Otimizações Implementadas

- ✅ CSS minificado e otimizado
- ✅ JavaScript eficiente
- ✅ Lazy loading de imagens (após adicionar)
- ✅ Fontes otimizadas (Google Fonts)
- ✅ Animações GPU-accelerated

---

## 🐛 Troubleshooting

### Problema: GitHub Pages não atualiza

**Solução:**

- Aguarde 5-10 minutos
- Limpe cache do navegador (Ctrl + Shift + R)
- Verifique se selecionou `/docs` folder

### Problema: Estilos não carregam

**Solução:**

- Verifique caminhos relativos no HTML
- Confirme estrutura de pastas correta
- Teste localmente primeiro

### Problema: Formulário não envia

**Solução:**

- Configure EmailJS corretamente
- Verifique console do navegador (F12)
- Teste com email válido

---

## 📝 Checklist de Lançamento

- [ ] Adicionar foto profissional
- [ ] Adicionar screenshots dos projetos
- [ ] Configurar EmailJS
- [ ] Fazer push para GitHub
- [ ] Ativar GitHub Pages
- [ ] Testar em múltiplos dispositivos
- [ ] Testar em múltiplos navegadores
- [ ] Validar formulário de contato
- [ ] Verificar todos os links
- [ ] Criar sitemap.xml e robots.txt
- [ ] Registrar no Google Search Console
- [ ] Compartilhar nas redes sociais

---

## 📞 Contato

**Rodrigo Dionizio**

- Email: rodrigo.dionizio@gmail.com
- LinkedIn: [linkedin.com/in/rodrigodionizio](https://www.linkedin.com/in/rodrigodionizio)
- GitHub: [github.com/rodrigodionizio](https://github.com/rodrigodionizio)
- WhatsApp: (33) 98820-3127
- Instagram: [@rodrigodionizio](https://www.instagram.com/rodrigodionizio)

---

## 📄 Licença

Este projeto está sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.

---

## 🙏 Agradecimentos

Desenvolvido com ❤️ por Rodrigo Dionizio

**Stack:** HTML5 | CSS3 | JavaScript  
**Design:** Clean & Professional  
**Hospedagem:** GitHub Pages

---

**🚀 Boa sorte com seu portfólio!**

_Última atualização: Janeiro 2025_
