//Creando una clase con una extensión al html element 
class Bienvenida extends HTMLElement {
    //Aqui va el código del elemento del web component
    constructor() {
        super();
    }
//CREA UNA VARIABLE RAÍZ  QUE ESTA EN MODO ABIERTO PARA ACCEDER 
    connectedCallback() {
        let shadowRoot = this.attachShadow({ mode: 'open' });  
        shadowRoot.innerHTML = `
          <style>
          
        .container{
          text-align: center;
          background: #FFFAE0;
          position: absolute;
          top: 3em;
          right: 0;
          bottom: 3em;
          left: 0; 
        }
        .container a{
          text-decoration: none;
          }
        .container span {
          font-size: 120pt;
          font-weight: bold;
          position: relative;
          font-family: "Kavoon";
          cursor: pointer;
          transition: all 300ms ease-in-out;
          }
          
        .container span::after {
          position: absolute;
          height: 200%;
          width: 300px;
          top: 80%;
          left: 0;
          transform: rotateX(50deg);
          }

        .container span:hover {
          filter: contrast(250%);
          }
          
        .container span:nth-child(1) {
          color: #CE6E59;
            }
        .container span:nth-child(2) {
          color: #73706F;
            }
        .container span:nth-child(3) {
          color:  #CE6E59;
            }
        .container span:nth-child(4) {
          color: #73706F;
            }
        .container span:nth-child(5) {
         color:  #CE6E59;
            }
      
          </style>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
        <div class="container" >
          <a href="index.html" target="_blank">
          <div class="animate__animated animate__swing animate__delay-3s" >
          <span>¡BI</span>
          <span>EN</span>
          <span>VE</span>
          <span>NI</span>
          <span>DO♥!</span>
        </div>
        <img src="./imagenes/pizza.png" alt="publicidad" width="25%>
<h1 class="animate__animated animate__heartBeat animate__infinite"><span>•••</span></h1>
         </a>
        </div>`;
    }
}

window.customElements.define('bienvenida-carga', Bienvenida);   //PARA LLAMAR A LA CLASE 


