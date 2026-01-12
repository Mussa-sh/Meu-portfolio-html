javascript
window.addEventListener('DOMContentLoaded', function()
{
    document.title="Portfólio Pessoal";
    //Seleciona todos os elementos com classe 'fade-in' const fadeElements=document.querySelectorAll('.fade-in');
    fadeElements.forEach(el=>{el.style.opacity=0;
        el.style.transition='opacity 1.5 ease-in-out';
        //Força reflow para garantir que o transition funcione void el.offsetWidth;
        //Aplica a opacidade final para ativar o fade-in el.style.opacity=1;
    
    });
});