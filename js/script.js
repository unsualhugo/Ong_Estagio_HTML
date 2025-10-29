/* script.js — Interatividade e animações
   ONG Valentine Estágios
   Autor: Victor Hugo
*/

// ====== ANIMAÇÕES DE IMAGENS (PROJETOS) ======
const projectImages = document.querySelectorAll('.hero-img');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('image-visible');
    }
  });
}, {
  threshold: 0.2
});

projectImages.forEach(img => observer.observe(img));

// ====== ANIMAÇÃO IMAGEM CADASTRO ======
window.addEventListener("DOMContentLoaded", () => {
    const cadastroImagem = document.querySelector(".cadastro-imagem img");
  
    if (cadastroImagem) {
      cadastroImagem.classList.add("hidden-slide");
  
      // Quando a página carregar, aplica a animação
      window.addEventListener("load", () => {
        setTimeout(() => {
          cadastroImagem.classList.add("slide-in");
        }, 300); // pequeno atraso para suavizar o efeito
      });
    }
  });
  

// ====== ANIMAÇÕES DE FADE NAS SEÇÕES ======
const fadeSections = document.querySelectorAll('section, article');

function handleScrollFade() {
  fadeSections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      sec.classList.add('fade-up');
    }
  });
}
window.addEventListener('scroll', handleScrollFade);
window.addEventListener('load', handleScrollFade);

// ====== CABEÇALHO FIXO COM TRANSIÇÃO ======
const header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;

  if (currentScroll > lastScroll && currentScroll > 100) {
    header.classList.add('header-hidden');
  } else {
    header.classList.remove('header-hidden');
  }

  lastScroll = currentScroll;
});

// script.js - animações e modal de inscrição nos projetos

// ====== Animação de rolagem ======
const fadeElements = document.querySelectorAll('.fade-item, .hero-img');
function showOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerBottom) el.classList.add('fade-up');
  });
}
window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);

// ====== Modal de inscrição ======
const modal = document.getElementById('modal');
const form = document.getElementById('form-inscricao');
const fecharModal = document.getElementById('fechar-modal');
const projetoInput = document.getElementById('projeto');
const modalTitle = document.getElementById('modal-title');

// Abre o modal com o nome do projeto
document.querySelectorAll('.participar-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const nomeProjeto = btn.dataset.projeto;
    projetoInput.value = nomeProjeto;
    modalTitle.textContent = `Inscreva-se no ${nomeProjeto}`;
    modal.classList.add('show');
  });
});

// Fecha o modal
fecharModal.addEventListener('click', () => {
  modal.classList.remove('show');
});

// Envia o formulário (simulado)
form.addEventListener('submit', e => {
  e.preventDefault();
  const dados = {
    nome: form.nome.value,
    email: form.email.value,
    telefone: form.telefone.value,
    projeto: form.projeto.value
  };
  console.log('Inscrição enviada:', dados);
  alert(`Obrigado por se inscrever no ${dados.projeto}!`);
  form.reset();
  modal.classList.remove('show');
});

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modalCadastro");
    const closeBtn = document.querySelector(".close-btn");
    const form = document.getElementById("formCadastroProjeto");
    const projetoInput = document.getElementById("projeto");
  
    // Abre o modal e preenche o nome do projeto
    document.querySelectorAll(".btn-inscrever").forEach(button => {
      button.addEventListener("click", () => {
        const projeto = button.parentElement.querySelector("h3").textContent;
        projetoInput.value = projeto;
        modal.classList.add("active");
      });
    });
  
    // Fecha o modal
    closeBtn.addEventListener("click", () => modal.classList.remove("active"));
    window.addEventListener("click", e => {
      if (e.target === modal) modal.classList.remove("active");
    });
  
    // Envio do formulário
    form.addEventListener("submit", e => {
      e.preventDefault();
      alert(`Inscrição enviada com sucesso para o projeto: ${projetoInput.value}!`);
      form.reset();
      modal.classList.remove("active");
    });
  });
  
  