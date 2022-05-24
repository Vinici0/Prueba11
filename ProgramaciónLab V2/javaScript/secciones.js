const div = document.querySelector('#sections'); // Seleccionamos el div

div.attachShadow({
    mode: 'open'
});

const style = document.createElement('style'); // Creamos el elemento style
style.innerHTML =
    `section{
            margin-top: 40px;
            background-color: rgba(255, 255, 255, 0.658);
            padding: 20px;
            border: 1px solid #cccccc;
            box-shadow: 0px 0px 4px #c9c9c9;
            color: #333333;
            font-size: 16px;
            overflow: hidden;
          }
          .titulo {
            font-family: "fjalla";
            font-size: 24px;
            letter-spacing: 1px;
            text-align: center;
            margin-top: -20px;
            padding-top: 20px;
            padding-bottom: 10px;
            border-bottom: 1px solid #773000;
          }
          .article {
            margin: 10px;
            margin-top: 20px;
            margin-bottom: 20px;
          }
          .stickerOne,
        .stickerTwo {
        position: absolute;
        margin-top: -38px;
        z-index: 0;
        }

        .stickerTwo {
        margin-left: 860px;
        }
        table {
            border: 2px solid rgb(250, 248, 248);
            /* border-collapse: collapse; */
            border-radius: 20px;
            width: 100%;
            text-align: center;
            letter-spacing: 6px;
            font-family: Verdana, sans-serif;
            font-weight: 700;
          }
          
          .contect-cali h3 {
            letter-spacing: 0.3rem;
            font-size: 1.5rem;
            display: block;
            text-align: center;
            margin-bottom: 10px;
          }
          
          table tr td {
            padding: 20px;
          }
          
          table .cali {
            transition: 0.2s all linear;
            cursor: pointer;
          }
          
          table #cali-1:hover {
            background: rgb(156, 18, 18);
            color: #fff;
            border: none;
            border-radius: 20px;
            font-size: 1.2rem;
            padding: 15px;
          }
          table #cali-2:hover {
            background: rgba(156, 18, 18, 0.664);
            color: #fff;
            border: none;
            border-radius: 20px;
            font-size: 1.2rem;
            padding: 15px;
          }
          table #cali-3:hover {
            background: rgb(18, 151, 156);
            color: #fff;
            border: none;
            border-radius: 20px;
            font-size: 1.2rem;
            padding: 15px;
          }
          table #cali-4:hover {
            background: rgb(4, 97, 126);
            color: #fff;
            border: none;
            border-radius: 20px;
            font-size: 1.2rem;
            padding: 15px;
          }
          table #cali-5:hover {
            background: rgba(15, 148, 55, 0.932);
            color: #fff;
            border: none;
            border-radius: 20px;
            font-size: 1.2rem;
            padding: 15px;
          }
          
          .date {
            color: gray;
            font-size: 14px;
          }
          .contacto .titulo {
            font-size: 34px;
            line-height: 34px;
            margin-bottom: 40px;
            font-weight: 300;
            color: #3895ea;
            text-align: center;
          }
          
          .contacto .formulario {
            display: flex;
            flex-wrap: wrap; /*Dividir el espacio*/
            justify-content: space-between; /*Separar el espacio de cada elemento*/
          }
          
          .contacto .formulario input[type="text"],
          .contacto .formulario input[type="email"],
          .contacto .formulario textarea {
            border: 2px solid #cecece;
            border-radius: 5px;
            padding: 15px 20px;
            font-size: 14px;
            color: #a4a4a4;
            width: 100%;
          }
          
          .contacto .formulario input[type="text"],
          .contacto .formulario input[type="email"] {
            width: 100%;
            margin-bottom: 15px;
          }
          
          .formulario textarea {
            width: 100%;
            height: 50px;
            min-height: 100px;
            max-height: 200px;
            margin-bottom: 15px;
          }
          
          .boton {
            margin: auto;
            background: #3895ea;
            color: #fff;
            border: none;
            border-radius: 3px;
            padding: 10px 40px;
            cursor: pointer;
            width: auto;
          }
          
          .boton:hover {
            background: #387ebb;
          }
          a {
            color: #529125;
            text-decoration: none;
        }

        .texto-n{
          color: dodgerblue;
        }
        `;



class sections1 extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const section1 = document.createElement('section');
        const section2 = document.createElement('section');
        const section3 = document.createElement('section');
        const section4 = document.createElement('section');

        section1.innerHTML = `<span class="stickers">
        <img class="stickerOne" src="imagenes/scotch.png" alt="pegatina" />

        <img class="stickerTwo" src="imagenes/scotch.png" alt="pegatina" />
        </span>

            <h2 class="titulo">La mejor pizza y comida a domicilio</h2>

            <article class="article">
                <p>
                <a href="#" class="texto-n">Elige tu pizza</a>
                entre las irresistibles Super Suprema, Big Hut Mix, Pepperoni
                Lover's o decídete por nuestra mítica Meat lover's. Selecciona el
                tipo de masa que más te guste, entre las deliciosas Pan: crujiente
                por fuera y esponjosa por dentro, Delgada: crocante como una
                galleta, Borde relleno o Artesanal: suave y delicada.
                </p>
                <span class="date">[19-07-2021]. Administrador</span>
            </article>

            <article class="article">
                <p>
                <a href="#" class="texto-n">¿Qué esperas?</a>
                Para terminar, date un gusto con uno de nuestros postres, ¿cómo
                resistirse a un delicioso Brownie o a una torta de 3 leches? Y si
                lo quieres todo, prueba uno de nuestros Boxes como el Lover´s Box
                o el Triple Box.
                </p>
                <span class="date">[19-07-2021]. Administrador</span>
            </article>

            <article class="article">
                <p>
                <a href="#" class="texto-n"> Los cinco beneficios de la pizza</a>
                Tiene carbohidratos complejos que el organismo absorbe lentamente
                y hacen que el cuerpo disfrute de una energía constante, como los
                cereales de la masa. La utilización de alimentos como aceitunas,
                muy sabrosas en la pizza, hace que también estemos ingiriendo
                aceites ricos en colesterina y vitaminas A,D, E y K.
                </p>
                <span class="date">[19-07-2021]. Administrador</span>
            </article>

            <article class="article">
                <p>
                <a href="#" class="texto-n">Para abrir boca,</a>
                te contamos que tenemos pizzas con salchicha
                fresca; con verduras de la huerta presentes en los campos de
                Granada como calabaza, berenjenas o tomate Cherry, uno de los
                símbolos de la Costa Tropical, donde crecen gracias a su clima
                templado.
                </p>
                <span class="date">[19-07-2021]. Administrador</span>
            </article>

    `;

        section2.innerHTML = `
        <span class="stickers">
            <img class="stickerOne" src="imagenes/scotch.png" alt="pegatina" />

            <img class="stickerTwo" src="imagenes/scotch.png" alt="pegatina" />
        </span>
        <h3 class="titulo">Calificaciones del consumidor</h3>
        <table>
            <tr>
            <td class="cali" id="cali-1">Very bad</td>
            <td class="cali" id="cali-2">Bad</td>
            <td class="cali" id="cali-3">Regular</td>
            <td class="cali" id="cali-4">Good</td>
            <td class="cali" id="cali-5">Fantastic</td>
            </tr>
        </table>
        `;

        section3.innerHTML = `
        <span class="stickers">
          <img class="stickerOne" src="imagenes/scotch.png" alt="pegatina" />

          <img class="stickerTwo" src="imagenes/scotch.png" alt="pegatina" />
        </span>
        <h3 class="titulo">Contacto</h3>

            <section  class="contacto">
              <div class="contenedor-form">
                <form class="formulario" action="">
                  <input type="text" placeholder="Nombre" name="nombre" required />
                  <!--required campo obligatorio-->
                  <input type="email" placeholder="Correo" name="correo" required />
                  <textarea name="mensaje" placeholder="Mensaje:" class="tesArea"></textarea>
                  <input class="boton" type="submit" value="Enviar" />
                </form>
              </div>
            </section>
        `;

        section4.innerHTML = `<span class="stickers">
        <img class="stickerOne" src="imagenes/scotch.png" alt="pegatina" />

        <img class="stickerTwo" src="imagenes/scotch.png" alt="pegatina" />
        </span>
        <h2 class="titulo orange">Encuentranos aquí</h2>


        <div class="mapa">
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15959.115859167747!2d-79.17873549668754!3d-0.2544863113485944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sec!4v1638089330849!5m2!1sen!2sec"
            width="100%" height="450" style="border: 0" allowfullscreen="" loading="lazy"></iframe>
        </div>

        `;

        div.shadowRoot.appendChild(section1);
        div.shadowRoot.appendChild(section2);
        div.shadowRoot.appendChild(section3);
        div.shadowRoot.appendChild(section4);
        div.shadowRoot.appendChild(style);

    }


}

window.customElements.define('section-element', sections1);


const div2 = document.querySelector('#prueba');
div2.attachShadow({
    mode: 'open'
});
const style2 = document.createElement('style');
style2.innerHTML = `
    label{
        display: block;
        font-family: Tahoma, sans-serif;
    }

    input[type="text"],
    input[type="email"],
    input[type="password"]{
        padding: 6px;
        border-radius: 7px;

        
    }

    label{
        
    }

    .guardar{
        background: dodgerblue;
        border-radius: 8px;
        padding: 10px 60px 10px 60px;
        margin-bottom: 10px;
        margin-top: 10px;
        color: #fff;
        border: none;
        font-family: Tahoma, sans-serif;
    }   

    h1 {
        font-size: 18px;
        border-left: 5px solid dodgerblue;
        padding: 10px;
        color: #000;
        letter-spacing: 5px;
        margin-bottom: 20px;
        font-weight: bold;
        padding-left: 10px;
    }
`;

const style3 = document.createElement('style');
style3.innerHTML = `
label{
    display: block;
    font-family: Tahoma, sans-serif;
}

input[type="text"],
input[type="email"],
input[type="password"]{
    padding: 6px;
    border-radius: 7px;

    
}

label{
    
}

.guardar{
    background: dodgerblue;
    border-radius: 8px;
    padding: 10px 60px 10px 60px;
    margin-bottom: 10px;
    margin-top: 10px;
    color: #fff;
    border: none;
    font-family: Tahoma, sans-serif;
}   

h1 {
    font-size: 18px;
    border-left: 5px solid dodgerblue;
    padding: 10px;
    color: #000;
    letter-spacing: 5px;
    margin-bottom: 20px;
    font-weight: bold;
    padding-left: 10px;
}
`;

class formulario extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const section2 = document.createElement('section');
        section2.innerHTML = `
        <h1>Registro</h1>
        <form>
            <label>Nombre de usuario:</label>
            <input type="text"  required/>
  
            <label>Correo:</label>
            <input type="email"  required/>
  
            <label>Contraseña:</label>
            <input type="password"  required/>
  
            <label>Confirmar Contraseña:</label>
            <input type="password"  required/>
  
            <label>Ciudad:</label>
            <input type="text"  required/>
  
            <label>Teléfono:</label>
            <input type="text"  required/>
  
            <input type="submit" class="guardar" value="Registrarse" />
          </form>
        `;
        
        div2.shadowRoot.appendChild(section2);
        div2.shadowRoot.appendChild(style2);
    }
}

window.customElements.define('formulario-element', formulario);


const div3 = document.querySelector('#prueba2');
div3.attachShadow({
    mode: 'open'
});


class formulario2 extends HTMLElement {
  constructor() {
      super();
  }

  connectedCallback() {
      const section3 = document.createElement('section');
      section3.innerHTML = `
      <h1>Usuario</h1>
      <form>
           <label>Nombre de usuario:</label>
            <input type="text"  required/>
  
            <label>Correo:</label>
            <input type="email"  required/>

            <input type="submit" class="guardar" value="Entrar" />
      </form>
      `;
      
      div3.shadowRoot.appendChild(section3);
      div3.shadowRoot.appendChild(style3);
  }
}

window.customElements.define('formulario-element2', formulario2);
