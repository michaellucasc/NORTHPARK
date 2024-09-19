function sendWhatsApp(event) {
    event.preventDefault(); // Evita o envio do formulário padrão
    
    // Captura os valores dos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const mensagem = document.getElementById('mensagem').value;
    
    // Monta a mensagem para enviar via WhatsApp
    const msg = `Olá, meu nome é ${nome}. Meu e-mail é ${email} e meu telefone é ${telefone}. Mensagem: ${mensagem}`;
    
    // Codifica a mensagem para uso na URL
    const encodedMsg = encodeURIComponent(msg);
    
    // Abre o WhatsApp com a mensagem
    const whatsappUrl = `https://wa.me/554384365952?text=${encodedMsg}`;
    window.open(whatsappUrl, '_blank');
  }