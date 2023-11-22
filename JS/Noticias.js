window.alert("Recuerde que las calorias que arroja la calculadora son aproximadas. Si desea cambiar su alimentación visite a un profesional para obtener mejor información.");

document.getElementById("FooterComun").innerHTML = `
  <footer id="FooterComun">
        <div class="FooterIcons">
            <div class="socialIcons">
                <a href="https://www.facebook.com/naentrenamientos?mibextid=ZbWKwL"><i class="fa-brands fa-facebook"></i></a>
                <a href="https://www.instagram.com/nyaentrenamientos/"><i class="fa-brands fa-instagram"></i></a>
                <a href=""><i class="fa-brands fa-whatsapp"></i></a>
            </div>
        </div>
    </footer>
    `


const form = document.getElementById('form');

form.addEventListener('submit', handleSubmit);

function handleSubmit (event) {
  event.preventDefault();

  const genero = getSelectedValue('genero');
  const edad = getInputNumberValue('edad');
  const Peso = getInputNumberValue('Peso');
  const Altura = getInputNumberValue('Altura');
  const Actividad = getSelectedValue('Actividad');

  const tmb = Math.round(
    genero === 'Femenino'
    ? (655 + (9.6 * Peso) + (1.8 * Altura) - (4.7 *edad)) 
    : (66 + (13.7 * Peso) + (5 * Altura) - (6.8 *edad)) 
  );

  const maintenance = Math.round(tmb * Number(Actividad));
  const loseWeight = maintenance - 450;
  const gainWeight = maintenance + 450;


  const layout = `
    <h2>Aqui está el resultado:</h2>

    <div class="result-content">
      <ul>
        
        <li>
          Para mantener su peso usted necesita consumir <strong>${maintenance} calorias</strong>.
        </li>
        <li>
          Para perder peso usted necesita consumir <strong>${loseWeight} calorias</strong>.
        </li>
        <li>
          Para ganar peso usted necesita consumir <strong>${gainWeight} calorias</strong>.
        </li>
        <li>
        Esta cantidad de calorías es aproximada, consulte a su médico para más información
        </li>
      </ul>
   `;

  const result = document.getElementById('result');

  result.innerHTML = layout;
}

function getSelectedValue(id) {
  const select = document.getElementById(id);

  return select.options[select.selectedIndex].value;
}

function getInputNumberValue(id) {
  return Number(document.getElementById(id).value);
}


