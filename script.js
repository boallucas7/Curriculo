function carregarDados() {
  fetch('dados.json')
    .then(response => response.json())
    .then(dados => {
      document.getElementById('nome').textContent = dados.nome;
      document.getElementById('foto').src = dados.foto;
      document.getElementById('nascimento').textContent = dados.nascimento;
      document.getElementById('email').textContent = dados.email;
      document.getElementById('telefone').textContent = dados.telefone;
      document.getElementById('linkedin').href = dados.linkedin;
      document.getElementById('github').href = dados.github;

      // Conhecimentos
      const ul = document.getElementById('conhecimentos');
      ul.innerHTML = '';
      dados.conhecimentos.forEach(conhecimento => {
        const li = document.createElement('li');
        li.textContent = conhecimento;
        ul.appendChild(li);
      });

      // Experiências
      const expContainer = document.getElementById('experiencias');
      expContainer.innerHTML = '';
      dados.experiencias.forEach(exp => {
        const div = document.createElement('div');
        div.innerHTML = `
          <p><strong>Cargo:</strong> ${exp.cargo}</p>
          <p><strong>Empresa:</strong> ${exp.empresa}</p>
          <p><strong>Atividades:</strong> ${exp.descricao}</p>
          <p><strong>Período:</strong> ${exp.inicio} - ${exp.termino}</p>
          <hr/>
        `;
        expContainer.appendChild(div);
      });

      // Formação
      const formContainer = document.getElementById('formacao');
      formContainer.innerHTML = '';
      dados.formacao.forEach(form => {
        const div = document.createElement('div');
        div.innerHTML = `
          <p><strong>Curso:</strong> ${form.curso}</p>
          <p><strong>Instituição:</strong> ${form.instituicao}</p>
          <p><strong>Conclusão:</strong> ${form.termino}</p>
          <hr/>
        `;
        formContainer.appendChild(div);
      });
    })
    .catch(error => {
      console.error("Erro ao carregar o JSON:", error);
    });
}
