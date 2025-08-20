// Menu responsivo (hambúrguer)
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const menuLinks = document.querySelectorAll(".menu-link");

// abre/fecha ao clicar no ícone
menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// fecha ao clicar em qualquer link
menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});



function enviarWhatsApp(event) {

  event.preventDefault(); // Impede o envio do formulário padrão
  const nome = document.getElementById('nome').value;
  const mensagem = document.getElementById('mensagem').value;
  const telefone = '13853548997'; // Substitua pelo seu 
  // 
  const texto = `${mensagem} Me chamo ${nome}`;
  const msgFormatada = encodeURIComponent(texto);

  const url = `https://api.whatsapp.com/send?phone=${telefone}&text=${msgFormatada}`;

  window.open(url, '_blank');

}

