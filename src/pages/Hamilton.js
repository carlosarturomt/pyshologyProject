const Hamilton = () => {
  const view = /* html */ `
  <div class="Test">
    <header>Hamilton Anxiety Rating Scale, HARS</header>
    <article class="Test__questionary">
      <strong>Instrucciones:</strong>
      <p>Este cuestionario consta de diversas oraciones. Por favor lee con atención cada una de las estas cuidadosamente.  Luego elija la opción correspondiente a la frecuencia con lo que sientes, piensas o vives en las últimas semanas incluído el día lo referente al enuncuiado.</p>
    </article>

    <hr>

    <form class="Test__questionary" action="" name="">
      <aside>
        <label>1. Humor ansioso (inquietud, espera de lo peor, aprensión [anticipación temerosa], irritabilidad)</label>
        <ol>
          <input type="radio" name="anxiety_humor" value="0">
          <label for="0">Nunca</label><br>

          <input type="radio" name="anxiety_humor" value="1">
          <label for="1">Una vez a la semana</label><br>

          <input type="radio" name="anxiety_humor" value="3">
          <label for="3">2/3 veces por semana</label><br>

          <input type="radio" name="anxiety_humor" value="4">
          <label for="4">4/5 veces por semana</label><br>

          <input type="radio" name="anxiety_humor" value="5">
          <label for="5">6/7 veces por semana</label><br>
        </ol>
      </aside>

      <aside>
        <label>2. Tensión(sensación de tensión, fatigabilidad, imposibilidad de relajarse, llanto fácil, temblor, sensación de no poder quedarse en un lugar)</label>
        <ol>
          <input type="radio" name="tension" value="0">
          <label for="0">Nunca</label><br>
  
          <input type="radio" name="tension" value="1">
          <label for="1">Una vez a la semana</label><br>
  
          <input type="radio" name="tension" value="3">
          <label for="3">2/3 veces por semana</label><br>
  
          <input type="radio" name="tension" value="4">
          <label for="4">4/5 veces por semana</label><br>
  
          <input type="radio" name="tension" value="5">
          <label for="5">6/7 veces por semana</label><br>
        </ol>
      </aside>

      <button id="" type="button" onclick="onCLickTotalHamilton()">Calculate</button>
    </form>
  </div>
  `;
  return view;
};

window.onCLickTotalHamilton = () => {
  alert('This was a click');
};

export default Hamilton;
