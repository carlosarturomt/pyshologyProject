const Hamilton = () => {
  const view = `
  <div class="Test">
    <header>Hamilton Anxiety Rating Scale , HARS</header>
    <article class="Test__questionary">
      <strong>Instrucciones:</strong>
      <p>Este cuestionario consta de diversas oraciones. Por favor lee con atención cada una de las estas cuidadosamente.  Luego elija la opción correspondiente a la frecuencia con lo que sientes, piensas o vives en las últimas semanas incluído el día lo referente al enuncuiado.</p>
    </article>

    <hr>

    <article class="Test__questionary">
      <p>1. Humor ansioso (inquietud, espera de lo peor, aprensión [anticipación temerosa], irritabilidad)</p>

      <ol>
        <li>a) Nunca</li>
        <li>b) Una vez a la semana</li>
        <li>c) 2/3 veces por semana</li>
        <li>d) 4/5 veces por semana</li>
        <li>e) 6/7 veces por semana</li>
      <ol/>
    </article>
  </div>
  `;
  return view;
};

export default Hamilton;
