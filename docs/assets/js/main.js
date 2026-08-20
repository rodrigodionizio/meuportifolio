/* ==========================================================================
   Portfólio Rodrigo Dionizio
   ========================================================================== */
(function () {
  "use strict";

  /* ------------------------------------------------------------------------
     CONFIGURAÇÃO DO FORMULÁRIO DE CONTATO
     ------------------------------------------------------------------------
     Para o formulário enviar de verdade, crie uma chave gratuita em
     https://web3forms.com (leva 1 minuto, sem cadastro: informe o e-mail de
     destino e a chave chega por e-mail) e cole-a em ACCESS_KEY abaixo.

     Enquanto ACCESS_KEY estiver vazia, o formulário NÃO finge que enviou:
     ele valida os dados e abre o e-mail ou o WhatsApp já preenchidos, para
     que nenhuma mensagem se perca.
     ---------------------------------------------------------------------- */
  var CONTACT = {
    ACCESS_KEY: "",
    ENDPOINT: "https://api.web3forms.com/submit",
    EMAIL: "rodrigo.dionizio@gmail.com",
    WHATSAPP: "5533988203127",
    SUBJECT_PREFIX: "[Portfólio]"
  };

  var CAREER_START_YEAR = 2003;

  /* ------------------------------------------------------------------------
     Textos por idioma — a página em /en usa lang="en".
     ---------------------------------------------------------------------- */
  var STRINGS = {
    "pt-BR": {
      themeTo: function (t) { return "Mudar para o tema " + (t === "dark" ? "claro" : "escuro"); },
      errName: "Informe seu nome completo.",
      errEmail: "Informe um e-mail válido.",
      errMessage: "Escreva ao menos 10 caracteres.",
      errForm: "Confira os campos destacados e tente novamente.",
      sending: "Enviando…",
      submit: "Enviar mensagem",
      sent: "<strong>Mensagem enviada.</strong><br>Recebi seu contato e respondo em até 1 dia útil.",
      fallbackTitle: "<strong>Sua mensagem está pronta — falta só enviar.</strong><br>",
      fallbackBody: "O envio automático ainda não está ativo neste site. Escolha um canal abaixo: os seus dados já vão preenchidos.",
      byEmail: "Enviar por e-mail",
      byWhats: "Enviar pelo WhatsApp",
      fName: "Nome", fEmail: "E-mail", fPhone: "Telefone", fSubject: "Assunto",
      defaultSubject: "Contato pelo portfólio",
      contactFrom: "Contato de "
    },
    en: {
      themeTo: function (t) { return "Switch to " + (t === "dark" ? "light" : "dark") + " theme"; },
      errName: "Please enter your full name.",
      errEmail: "Please enter a valid email address.",
      errMessage: "Please write at least 10 characters.",
      errForm: "Please check the highlighted fields and try again.",
      sending: "Sending…",
      submit: "Send message",
      sent: "<strong>Message sent.</strong><br>I have your message and will reply within one business day.",
      fallbackTitle: "<strong>Your message is ready — it just needs sending.</strong><br>",
      fallbackBody: "Automatic delivery is not enabled on this site yet. Pick a channel below: your details are already filled in.",
      byEmail: "Send by email",
      byWhats: "Send via WhatsApp",
      fName: "Name", fEmail: "Email", fPhone: "Phone", fSubject: "Subject",
      defaultSubject: "Message from the portfolio",
      contactFrom: "Message from "
    }
  };

  var T = STRINGS[document.documentElement.lang] || STRINGS["pt-BR"];

  /* ------------------------------------------------------------------------
     Utilidades
     ---------------------------------------------------------------------- */
  function $(sel, scope) { return (scope || document).querySelector(sel); }
  function $$(sel, scope) { return Array.prototype.slice.call((scope || document).querySelectorAll(sel)); }

  /** Agrupa trabalho de scroll num único quadro de animação. */
  function onScrollFrame(fn) {
    var ticking = false;
    function handler() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        fn();
        ticking = false;
      });
    }
    window.addEventListener("scroll", handler, { passive: true });
    fn();
  }

  /* ------------------------------------------------------------------------
     Tema (claro / escuro)
     ---------------------------------------------------------------------- */
  function initTheme() {
    var root = document.documentElement;
    var toggle = $("[data-theme-toggle]");
    if (!toggle) return;

    function currentTheme() {
      var stored = root.getAttribute("data-theme");
      if (stored) return stored;
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }

    function label() {
      var text = T.themeTo(currentTheme());
      toggle.setAttribute("aria-label", text);
      toggle.setAttribute("title", text);
    }

    label();
    toggle.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) { /* modo privado */ }
      label();
    });
  }

  /* ------------------------------------------------------------------------
     Cabeçalho, menu e navegação ativa
     ---------------------------------------------------------------------- */
  function initHeader() {
    var header = $(".site-header");
    if (header) {
      onScrollFrame(function () {
        header.classList.toggle("is-stuck", window.scrollY > 8);
      });
    }

    var toggle = $(".menu-toggle");
    var menu = $("#nav-menu");
    if (!toggle || !menu) return;

    function setOpen(open) {
      menu.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
    }

    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    menu.addEventListener("click", function (event) {
      if (event.target.closest("a")) setOpen(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") setOpen(false);
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 860) setOpen(false);
    });
  }

  /** Marca o link do menu correspondente à seção visível. */
  function initActiveSection() {
    var links = $$(".nav-link[href^='#']");
    if (!links.length || !("IntersectionObserver" in window)) return;

    var byId = {};
    var targets = [];
    links.forEach(function (link) {
      var section = document.getElementById(link.getAttribute("href").slice(1));
      if (!section) return;
      byId[section.id] = link;
      targets.push(section);
    });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (l) { l.classList.remove("is-active"); l.removeAttribute("aria-current"); });
        var link = byId[entry.target.id];
        if (link) { link.classList.add("is-active"); link.setAttribute("aria-current", "true"); }
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });

    targets.forEach(function (t) { observer.observe(t); });
  }

  /* ------------------------------------------------------------------------
     Revelação de blocos ao rolar
     ---------------------------------------------------------------------- */
  function initReveal() {
    var items = $$(".reveal");
    if (!items.length) return;

    if (!("IntersectionObserver" in window) ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      items.forEach(function (el) { el.classList.add("is-in"); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -60px 0px" });

    items.forEach(function (el) { observer.observe(el); });
  }

  /* ------------------------------------------------------------------------
     Valores que não podem envelhecer sozinhos
     ---------------------------------------------------------------------- */
  function initLiveValues() {
    var years = new Date().getFullYear() - CAREER_START_YEAR;
    $$("[data-years-in-tech]").forEach(function (el) { el.textContent = String(years); });
    $$("[data-current-year]").forEach(function (el) { el.textContent = String(new Date().getFullYear()); });
  }

  /* ------------------------------------------------------------------------
     Formulário de contato
     ---------------------------------------------------------------------- */
  function initContactForm() {
    var form = $("#contact-form");
    if (!form) return;

    var status = $("#form-status");
    var submit = $("#contact-submit");
    var submitLabel = submit ? submit.querySelector("[data-label]") : null;

    function setError(field, message) {
      var box = document.getElementById(field.id + "-error");
      if (box) box.textContent = message || "";
      if (message) field.setAttribute("aria-invalid", "true");
      else field.removeAttribute("aria-invalid");
      return !message;
    }

    function validate(data, fields) {
      var ok = true;
      ok = setError(fields.name, data.name.length >= 3 ? "" : T.errName) && ok;
      ok = setError(fields.email, /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email) ? "" : T.errEmail) && ok;
      ok = setError(fields.message, data.message.length >= 10 ? "" : T.errMessage) && ok;
      return ok;
    }

    function show(kind, html) {
      if (!status) return;
      status.className = "form-status is-visible form-status--" + kind;
      status.innerHTML = html;
      status.setAttribute("role", kind === "ok" ? "status" : "alert");
    }

    function plainText(data) {
      return [
        T.fName + ": " + data.name,
        T.fEmail + ": " + data.email,
        data.phone ? T.fPhone + ": " + data.phone : "",
        T.fSubject + ": " + (data.subject || T.defaultSubject),
        "",
        data.message
      ].filter(Boolean).join("\n");
    }

    /** Sem chave configurada: entrega a mensagem por e-mail ou WhatsApp. */
    function fallback(data) {
      var subject = CONTACT.SUBJECT_PREFIX + " " + (data.subject || T.contactFrom + data.name);
      var mailto = "mailto:" + CONTACT.EMAIL +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(plainText(data));
      var whats = "https://wa.me/" + CONTACT.WHATSAPP + "?text=" + encodeURIComponent(plainText(data));

      show("info",
        T.fallbackTitle + T.fallbackBody +
        '<span class="form-status__actions">' +
        '<a class="btn btn--primary" href="' + mailto + '">' + T.byEmail + "</a>" +
        '<a class="btn btn--outline" target="_blank" rel="noopener" href="' + whats + '">' + T.byWhats + "</a>" +
        "</span>");
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var fields = {
        name: $("#name", form),
        email: $("#email", form),
        phone: $("#phone", form),
        subject: $("#subject", form),
        message: $("#message", form)
      };

      var data = {
        name: fields.name.value.trim(),
        email: fields.email.value.trim(),
        phone: fields.phone.value.trim(),
        subject: fields.subject.value.trim(),
        message: fields.message.value.trim()
      };

      if (!validate(data, fields)) {
        show("err", T.errForm);
        return;
      }

      // Armadilha antisspam: preenchida = robô.
      var honeypot = $("#company", form);
      if (honeypot && honeypot.value) return;

      if (!CONTACT.ACCESS_KEY) {
        fallback(data);
        return;
      }

      if (submit) { submit.disabled = true; }
      if (submitLabel) { submitLabel.textContent = T.sending; }

      fetch(CONTACT.ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: CONTACT.ACCESS_KEY,
          subject: CONTACT.SUBJECT_PREFIX + " " + (data.subject || T.contactFrom + data.name),
          from_name: data.name,
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message
        })
      })
        .then(function (response) {
          return response.json().then(function (body) {
            if (!response.ok || body.success === false) {
              throw new Error(body.message || "Falha no envio (HTTP " + response.status + ")");
            }
            return body;
          });
        })
        .then(function () {
          form.reset();
          show("ok", T.sent);
        })
        .catch(function (error) {
          // Nunca dizemos que deu certo quando não deu.
          console.error("[contato] envio falhou:", error);
          fallback(data);
        })
        .finally(function () {
          if (submit) { submit.disabled = false; }
          if (submitLabel) { submitLabel.textContent = T.submit; }
        });
    });

    // Limpa o erro assim que a pessoa corrige o campo.
    ["name", "email", "message"].forEach(function (id) {
      var field = $("#" + id, form);
      if (!field) return;
      field.addEventListener("input", function () {
        if (field.getAttribute("aria-invalid") === "true") setError(field, "");
      });
    });
  }

  /* ------------------------------------------------------------------------
     Início
     ---------------------------------------------------------------------- */
  function init() {
    initTheme();
    initHeader();
    initActiveSection();
    initReveal();
    initLiveValues();
    initContactForm();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
