<div align="center">

<img src="./banner.png" alt="Rodrigo Dionizio — Infraestrutura de TI e Desenvolvimento Full Stack" width="100%">

### Infraestrutura que não cai. Software que entra em produção.

**23 anos** projetando redes, servidores e VPNs — e construindo as aplicações que rodam sobre elas.<br>
Chefe de Departamento de TI desde 2003 · Professor técnico de Informática · Minas Gerais, Brasil

[![Portfólio](https://img.shields.io/badge/Portfólio-rodrigodionizio.github.io-0B4F5A?style=for-the-badge)](https://rodrigodionizio.github.io/meuportifolio/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-in%2Frodrigodionizio-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rodrigodionizio)
[![E-mail](https://img.shields.io/badge/E--mail-rodrigo.dionizio@gmail.com-A8501F?style=for-the-badge&logo=gmail&logoColor=white)](mailto:rodrigo.dionizio@gmail.com)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-(33)%2098820--3127-1F6B4B?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/5533988203127)

<img src="https://img.shields.io/badge/23-anos%20em%20TI-0B4F5A?style=flat-square" alt="23 anos em TI">
<img src="https://img.shields.io/badge/4-sistemas%20em%20produção-1F6B4B?style=flat-square" alt="4 sistemas em produção">
<img src="https://img.shields.io/badge/200%2B-servidores%20capacitados-A8501F?style=flat-square" alt="200+ servidores capacitados">
<img src="https://img.shields.io/badge/100%2B-alunos%20formados-6E7C7F?style=flat-square" alt="100+ alunos formados">
<img src="https://img.shields.io/badge/−60%25-custo%20operacional%20de%20TI-6E7C7F?style=flat-square" alt="Redução de 60% no custo operacional de TI">

</div>

---

## Em produção agora

Quatro sistemas meus estão no ar neste momento, com usuários reais — construídos, publicados e mantidos por mim, do banco de dados ao suporte.

| Sistema | O que é | Stack | Estado |
| :--- | :--- | :--- | :--- |
| **[Sacristia Digital](https://sacristiadigital.com.br)** | Plataforma SaaS **multi-tenant** de gestão paroquial: agenda litúrgica, eventos, comunidade e relatórios. Cada paróquia em ambiente isolado, com autenticação e níveis de permissão próprios. | `Next.js` `TypeScript` `React` `PostgreSQL` `Tailwind` | 🟢 Produção · domínio próprio |
| **OSCRM** | HelpDesk e CRM interno de ordens de serviço de TI: abertura de chamado, triagem por prioridade, **fila com SLA**, atribuição a técnicos, histórico e relatórios. | `Next.js` `TypeScript` `PostgreSQL` `Vercel` | 🟢 Produção · uso interno diário · acesso restrito |
| **[Calendário Litúrgico Paroquial](https://rodrigodionizio.github.io/calendario-liturgico-paroquial/)** | Gestão pastoral completa em **PWA offline**: calendário litúrgico, escalas de equipes, mural de avisos, painel administrativo e relatórios em PDF. Captura diária da liturgia por **Edge Function em Deno**; cache derruba 70% das chamadas de API. | `JavaScript ES6+` `Supabase` `PostgreSQL` `Deno` `Python` `PWA` | 🟢 Produção · [código público](https://github.com/rodrigodionizio/calendario-liturgico-paroquial) |
| **[Sorteios Bom Jesus](https://sorteios-bomjesus.vercel.app)** | Campanhas, rifas e ações entre amigos: reserva de números **em tempo real**, comprovante ao participante, painel de vendas e prestação de contas pública. | `Next.js` `TypeScript` `Vercel` | 🟢 Produção · campanhas reais |

Também no ar: **[Avisos EENSA](https://avisos-eensa.vercel.app)** (quadro de avisos digital de escola estadual) e **[PoupeMais](https://rodrigodionizio.github.io/PoupeMais/)** (metas de poupança).

---

## Como as duas frentes se sustentam

```mermaid
flowchart LR
    subgraph P["FRENTES PRINCIPAIS"]
        direction TB
        I["🖧 Infraestrutura de TI<br/><small>redes · servidores · VPN · segurança</small>"]
        D["⌨ Desenvolvimento Full Stack<br/><small>Next.js · TypeScript · PostgreSQL</small>"]
    end

    subgraph S["COMPETÊNCIAS DE SUSTENTAÇÃO"]
        direction TB
        T["Docência técnica"]
        G["Gestão de TI"]
        C["Documentação e comunicação"]
    end

    I -->|"a base sobre a qual o software roda"| D
    D -->|"resolve o que a operação mostrou"| I
    S -.->|"tornam as duas confiáveis em equipe"| P

    style I fill:#0B4F5A,stroke:#7FC9D4,color:#fff
    style D fill:#0B4F5A,stroke:#7FC9D4,color:#fff
    style T fill:#F7E9DF,stroke:#A8501F,color:#5b2c10
    style G fill:#F7E9DF,stroke:#A8501F,color:#5b2c10
    style C fill:#F7E9DF,stroke:#A8501F,color:#5b2c10
```

Projeto o sistema sabendo quem vai manter o servidor, porque o servidor também é meu. É isso que as duas frentes juntas entregam.

---

## Infraestrutura de TI

<details open>
<summary><b>23 anos de infraestrutura que não pode parar</b> · clique para recolher</summary>

<br>

Responsável pela infraestrutura de tecnologia de um município inteiro desde 2003: rede, servidores, bancos de dados, segurança e suporte a todas as secretarias. Em paralelo, projetos de rede corporativa para indústria e laboratórios clínicos.

**Domínio — em produção sob minha responsabilidade**

![MikroTik](https://img.shields.io/badge/MikroTik_RouterOS-0B4F5A?style=flat-square&logo=mikrotik&logoColor=white)
![Redes](https://img.shields.io/badge/Redes_LAN%2FWLAN-0B4F5A?style=flat-square)
![VLAN](https://img.shields.io/badge/VLAN_e_segmentação-0B4F5A?style=flat-square)
![Windows Server](https://img.shields.io/badge/Windows_Server-0B4F5A?style=flat-square&logo=windows&logoColor=white)
![Active Directory](https://img.shields.io/badge/Active_Directory-0B4F5A?style=flat-square)
![VPN](https://img.shields.io/badge/VPN_site--to--site-0B4F5A?style=flat-square)
![Firewall](https://img.shields.io/badge/Firewall-0B4F5A?style=flat-square)
![Furukawa](https://img.shields.io/badge/Cabeamento_certificado_Furukawa-0B4F5A?style=flat-square)

**Sólido — uso com autonomia**

![Segurança](https://img.shields.io/badge/Segurança_da_informação-3E7D88?style=flat-square)
![Backup](https://img.shields.io/badge/Backup_e_continuidade-3E7D88?style=flat-square)
![Linux](https://img.shields.io/badge/Linux_(servidor)-3E7D88?style=flat-square&logo=linux&logoColor=white)
![CFTV](https://img.shields.io/badge/CFTV-3E7D88?style=flat-square)
![Telefonia IP](https://img.shields.io/badge/Telefonia_IP-3E7D88?style=flat-square)

**Entregas representativas**

| Projeto | Escopo | Resultado |
| :--- | :--- | :--- |
| **Datacenter Laticínios Vila Nova** | Rack 24U, cabeamento certificado Furukawa, servidor de arquivos, CFTV e telefonia IP | Infraestrutura documentada e manutenível, 4 meses de execução |
| **BIONALISE** | Firewall MikroTik, switch core, 3 VLANs e Wi-Fi corporativo | Tráfego de visitantes isolado da rede clínica, 3 meses |
| **ITALAB** | VPN site-to-site entre unidades de laboratório | Operação contínua sem expor sistemas à internet pública |
| **Prefeitura de Itabirinha** | Modernização completa da TI municipal | **−60% de custo operacional** |

</details>

---

## Desenvolvimento Full Stack

<details open>
<summary><b>Aplicações que resolvem um problema real e chegam à produção</b> · clique para recolher</summary>

<br>

Construo software para operações que eu conheço por dentro — gestão pública, laboratório clínico, paróquia, escola. O resultado é sempre um sistema que alguém usa todo dia, não um repositório de exercício.

**Domínio — em produção sob minha responsabilidade**

![JavaScript](https://img.shields.io/badge/JavaScript-0B4F5A?style=flat-square&logo=javascript&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-0B4F5A?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-0B4F5A?style=flat-square&logo=css3&logoColor=white)
![React](https://img.shields.io/badge/React-0B4F5A?style=flat-square&logo=react&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-0B4F5A?style=flat-square&logo=nextdotjs&logoColor=white)
![Git](https://img.shields.io/badge/Git-0B4F5A?style=flat-square&logo=git&logoColor=white)
![SQL](https://img.shields.io/badge/SQL-0B4F5A?style=flat-square)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-0B4F5A?style=flat-square&logo=postgresql&logoColor=white)
![SQL Server](https://img.shields.io/badge/SQL_Server-0B4F5A?style=flat-square&logo=microsoftsqlserver&logoColor=white)

**Sólido — uso com autonomia**

![TypeScript](https://img.shields.io/badge/TypeScript-3E7D88?style=flat-square&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-3E7D88?style=flat-square&logo=nodedotjs&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-3E7D88?style=flat-square&logo=tailwindcss&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3E7D88?style=flat-square&logo=supabase&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-3E7D88?style=flat-square&logo=vercel&logoColor=white)
![REST](https://img.shields.io/badge/REST_APIs-3E7D88?style=flat-square)

**Em evolução — aprofundamento ativo**

![Testes](https://img.shields.io/badge/Testes_automatizados-6E7C7F?style=flat-square)
![CI/CD](https://img.shields.io/badge/CI%2FCD-6E7C7F?style=flat-square&logo=githubactions&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-6E7C7F?style=flat-square&logo=docker&logoColor=white)

**O que sei construir**

- Arquitetura **SaaS multi-tenant** com isolamento por cliente, autenticação e níveis de permissão
- Modelagem relacional e consultas complexas — vindo de anos de SQL Server em ERP
- Painéis administrativos e relatórios que a gestão realmente usa
- Deploy contínuo e operação pós-lançamento, incluindo o suporte

</details>

---

## Competências

<details>
<summary><b>Docência, gestão e comunicação</b> — o que torna as duas frentes confiáveis em equipe · clique para abrir</summary>

<br>

Não são uma terceira carreira. São as competências que fazem o meu trabalho técnico sobreviver à minha ausência: documentação que outra pessoa entende, decisão explicada para quem aprova o orçamento, equipe capacitada para operar o que foi entregue.

| Competência | Onde se prova |
| :--- | :--- |
| **Docência técnica** | Professor de curso técnico em Informática — Governo de MG (2013–2015 e 2023–2025). Lógica de Programação, Planilhas e Informática para Internet. **100+ alunos formados** |
| **Gestão de TI** | Chefia de departamento desde 2003: equipe, orçamento, fornecedores e contratos |
| **Capacitação de equipes** | **200+ servidores públicos** treinados em sistemas corporativos |
| **Documentação técnica** | Topologias, procedimentos e transferência de conhecimento em todo projeto entregue |
| **Interlocução técnica–gestão** | Traduzir decisão de arquitetura em termos de custo, risco e prazo |

Quem ensina precisa simplificar sem perder o rigor. Isso aparece no código, no diagrama de rede e na reunião com o gestor.

</details>

---

## Trajetória

<details>
<summary><b>2003 → hoje</b> · clique para abrir</summary>

<br>

| Período | Cargo | Organização |
| :--- | :--- | :--- |
| **2003 — atual** | Chefe do Departamento de TI | Prefeitura Municipal de Itabirinha |
| 2023 — 2025 | Professor de curso técnico em Informática | Governo do Estado de Minas Gerais |
| 2003 — 2024 | Consultor de infraestrutura de TI | SERTEC, Laticínios Vila Nova, BIONALISE, ITALAB |
| 2018 — 2020 | Supervisor de Informática | Prefeitura Municipal de São José do Divino |
| 2013 — 2015 | Professor de curso técnico em Informática | Governo do Estado de Minas Gerais |
| 2008 | Analista de Suporte | TOTVS S.A. — Unidade Leste de Minas |

**Formação:** Bacharelado em Sistemas de Informação — UNIVALE (2008) · Técnico em Informática com ênfase em Internet — ETEIT (2001) · Pós-graduação em Engenharia de Redes, em andamento.
**Certificação:** Cabeamento Estruturado — Furukawa (FCA), 120 horas.
**Idiomas:** português nativo · inglês técnico (leitura fluente de documentação) · espanhol.

</details>

---

## Contato

Estou **aberto a novas oportunidades** em infraestrutura de TI, desenvolvimento full stack ou posições que combinem as duas — remoto, híbrido ou presencial. Respondo em até um dia útil.

| | |
| :--- | :--- |
| **Portfólio** | <https://rodrigodionizio.github.io/meuportifolio/> ([English](https://rodrigodionizio.github.io/meuportifolio/en/)) |
| **LinkedIn** | [in/rodrigodionizio](https://www.linkedin.com/in/rodrigodionizio) |
| **E-mail** | [rodrigo.dionizio@gmail.com](mailto:rodrigo.dionizio@gmail.com) |
| **WhatsApp** | [(33) 98820-3127](https://wa.me/5533988203127) |
| **Localização** | Itabirinha, Minas Gerais — Brasil (UTC−3) |

<div align="center">
<sub>A maior parte do meu trabalho está em repositórios privados de clientes e da administração pública.<br>Os sistemas em produção listados acima são a evidência pública — todos podem ser abertos e usados agora.</sub>
</div>
