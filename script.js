document.addEventListener('DOMContentLoaded', () => {

    //Scroll Reveal
    const observeOptions={
      threshold:0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting){
                entry.target.classList.add('show');
            }
        });
    }, observeOptions);

    //Animação dos cards
    const elementsToAnimate = document.querySelectorAll('.card, .contato-container');
    elementsToAnimate.forEach(el => {
        el.classList.add('hidden-off');
        observer.observe(el);

    });    

    //Validação do formulário
    const form = document.getElementById('appointment-form');
    const msgSucesso = document.getElementById('mensagem-sucesso');

    form.addEventListener('submit', (e) => {
        e.preventDefault();


        //captação de iformações
        const dados={
             nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            data: document.getElementById('data').value,
            especialidade: document.getElementById('especialidade').value
        };

        console.log("Enviado dados para o servidor...", dados);
        const btn = form.querySelector('button');
        btn.innerText = "Enviando...";
        btn.disabled = true;

        setTimeout(() =>{
            form.style.display= 'none';
            msgSucesso.classList.remove('hidden');
            msgSucesso.style.display = 'block';


             console.log("%c Agendamento realizado com sucesso! ", "color: green; font-weight: bold; font-size: 15px;");
        }, 1500);
     });   

         
        //Efeito de digitação

        const titulo = document.querySelector('.hero h1');
  if (titulo) { // Boa prática: verifica se o título existe
      const textoOriginal = titulo.innerText;
      titulo.innerText = '';
      let i = 0;

      function digitar() {
          if (i < textoOriginal.length) {
              titulo.innerHTML += textoOriginal.charAt(i);
              i++;
              setTimeout(digitar, 50);
          }
      }
      digitar();
  }

});