const closeModalAction = document.querySelector('.modal .ri-close-line')
const modal = document.querySelector('.modal')
const modalTitle = modal.querySelector('.title h2')
const modalDescription = modal.querySelector('.info p')
const modalDate = modal.querySelector('span')
const modalLinkProject = modal.querySelector('.links a.link-project')
const modalLinkRepository = modal.querySelector('.links a.link-repository')
const modalLinkLinkedin = modal.querySelector('.links a.link-linkedin')
const iframe = modal.querySelector('.video iframe')
const highlightsProjectsContainer = document.querySelector('.highlights .cards-projects');
const allProjectsContainer = document.querySelector('.allprojects .cards-projects');
const HIGHTLIGHT_TYPE = 2;
const ALL_TYPE = 1;

const getProjectsByTypeOrAll = (typeId) => {
  const dataProjects = [
    {
      id: 1,
      type: 2,
      title: 'Casa de Câmbio',
      date: '17 de Fevereiro de 2023',
      languages: ['html5', 'css3', 'javascript', 'figma'],
      description: `Casa de Câmbio é uma aplicação que faz a conversão do valor de uma moeda escolhida. <br /> <br />

        O projeto foi desenvolvido como avaliação pela Trybe, que exigiam os seguintes requisitos: <br /> <br />

        • Criar um repositório do zero e iniciar projeto com NPM; <br />
        • Estruturar o projeto para usar ESModules e instalar Vite como Dev Tool; <br />
        • Estruturar o HTML de acordo com protótipo e criar tags semânticas no HTML; <br />
        • Usar o endpoint da API sugerida; <br />
        • Usar o Sweet Alert 2 para as mensagens de Erro; <br />
        • Implementação do protótipo de alta fidelidade; <br /> <br />
`,
      imgSrc: './assets/projects/casadecambio.png',
      videoSrc: 'https://streamable.com/e/sjujot',
      // linkedin: '',
      // repository: 'https://github.com/thiagocredico/exercise-casa-de-cambio',
      site: 'https://convertasuamoeda.surge.sh'
    },
    {
      id: 2,
      type: 1,
      title: 'Gato ou Cachorro?',
      date: '24 de Janeiro de 2023',
      languages: ['html5', 'css3', 'javascript', ],
      description: `Gato ou Cachorro é uma aplicação interativa que busca em duas APIs imagens aleatórias de gato ou cachorro. Esta página foi desenvolvida como exercício da Trybe para desenvover habilidades com APIs. Os desafios foram tratar das fetchs e promisses da API, usando as ferramentas VITE e SURGE para compilação e publicação. <br><br>

        Esta página foi: <br><br>
        
        • Desenvolvida em HTML5, CSS3 e JavaScript; <br>
        • Compilada pelo Vite; <br>
        • Publicada pelo Surge;`,
      imgSrc: './assets/projects/gatocachorro.png',
      videoSrc: 'https://streamable.com/e/9ufbbz',
      // linkedin: '',
      // repository: '',
      site: 'https://pick-me-cat-dog.surge.sh'
    },
    {
      id: 3,
      type: 2,
      title: 'Caça-Palavras',
      date: '28 de Outubro de 2021',
      languages: ['html5', 'css3', 'javascript', ],
      description: `Caça-palavras é um projeto bônus realizado durante mentoria na Trybe. Trata-se do jogo tradicional de caça-palavras, geradas automáticamente em uma matriz de letras geradas aleatóriamente. Marcando as palavras requeridas, as letras marcadas tornam-se verdes e a palavra na lista de palavras é riscada.<br><br>

        Esse projeto foi desenvolvido com as seguintes ferramentas: <br><br>
        • HTML5; <br>
        • JavaScript; <br>
        • CSS3; <br>`,
      imgSrc: './assets/projects/cacapalavras.png',
      videoSrc: 'https://streamable.com/e/gmb238',
      // linkedin: '',
      // repository: '',
      site: './caca-palavras/index.html'

    },
    {
      id: 4,
      type: 2,
      title: 'TrybeWarts',
      date: '14 de Outubro de 2021',
      languages: ['html5', 'css3', 'javascript', ],
      description: `Trybewarts é um projeto avaliativo da Trybe. Neste projeto, foi desenvolvida uma página de formulário da Escola de Magia de Trybewarts, em que as pessoas estudantes poderão enviar seus feedbacks sobre ela. O tema desse projeto é baseado na obra 'Harry Potter', de J. K. Rowling, já que programar é o mais próximo que podemos chegar de algo verdadeiramente mágico! 
        <br><br>
        • Criar formulários em HTML; <br>
        • Utilizar CSS Flexbox para criar layouts flexíveis; <br>
        • Criar programação lógica em JavaScript para inserção e captura dos dados para gerar formulário`,
      imgSrc: './assets/projects/trybewarts.png',
      videoSrc: 'https://streamable.com/e/e7x1dc',
      // linkedin: '',
      // repository: '',
      site: './sd-029-a-project-trybewarts/index.html'
    },
    {
      id: 5,
      type: 1,
      title: 'To-Do-List',
      date: '28 de Setembro de 2021',
      languages: ['html5', 'css3', 'javascript'],
      description: `To-Do-List é um projeto avaliativo da Trybe. Neste projeto, foi implementada uma lista de tarefas, sendo possível adicionar, mover e remover tarefas desta lista. Também há a funcionalidade de salvar as alterações, que ficam armazenadas no Local Storage do navegador fazendo com que lista fique salva mesmo quando a página for recarregada.
      Esse projeto conta com as seguintes componentes: <br><br>
      • Imput para digitar as tarefas; <br>
      • Botões para apagar todos os itens finalizados ou apenas os finalizados; <br>
      • Botão para salvar a lista no Local Storage; <br>
      • Botão para remover apenas o item selecionado; <br>
      • Botões para subir ou descer os itens na lista; <br>`,
      imgSrc: './assets/projects/listadetarefas.png',
      videoSrc: 'https://streamable.com/e/x1hk8d',
      // linkedin: '',
      // repository: '',
      site: './sd-029-a-project-todo-list/index.html'
    },
    {
      id: 6,
      type: 1,
      title: 'Pixel Art',
      date: '23 de Setembro de 2021',
      languages: ['html5', 'css3', 'javascript', ],
      description: `Pixel Art é um projeto desenvolvido como requisito avaliativo da Trybe, que tem como intuito a prática a manipulação de elementos no DOM de acordo com eventos de click no navegador.
      
      O projeto foi desenvolvido como avaliação pela Trybe, que exigiam os seguintes requisitos:<br><br>
      • Uma paleta com 4 cores distintas egradas aleatóriamente; <br>
      • Um quadro de 25 pixels (5x5) em branco; <br>
      • O pixel deve ser pintado com a cor selecionada na paleta; <br>
      • Botões para resetar as cores da peleta e para limpar o quadro; <br>
      • Um local para inserir um valor novo do quadro acionado com botão VQV; <br>
      • O quadro guarda o desenho criado no Local Storage do navegador, não apagando com uma nova janela; <br>`,
      imgSrc: './assets/projects/pixelart.png',
      videoSrc: 'https://streamable.com/e/9509hk',
      // linkedin: '',
      // repository: '',
      site: './sd-029-a-project-pixels-art/index.html'
    },
    {
      id: 7,
      type: 1,
      title: 'Meme Generator',
      date: '30 de Julho de 2021',
      languages: ['html5', 'css3', 'javascript'],
      description: `Meme generator é um projeto desenvolvido como requisito bônus pela Trybe. o desenvolvimento de uma página Web que permita o upload de uma imagem e a inserção de um texto sobre ela, estilizado de forma apropriada.<br>
      O projeto aborda conceitos fundamentais de manipulação de HTML5, CSS3 e JavaScript. <br>
      • Como feature a página permite que o usuário selecione em seu próprio dispositivo uma imagem de fundo para o meme, e também disponibiliza 4 imagens pré-definidas; <br>
      • O usuário deve escrever o texto a ser usado no meme e escolher entre os estilos pré-definidos de borda.`,
      imgSrc: './assets/projects/memegenerator.png',
      videoSrc: 'https://streamable.com/e/7ao708',
      // linkedin: '',
      // repository: '',
      site: './sd-029-a-project-meme-generator/index.html'
    },
    // {
    //   id: 8,
    //   type: 1,
    //   title: 'Lessons Learned',
    //   date: '07 de Julho de 2021',
    //   languages: ['html5', 'css3', ],
    //   description: `Meu primeiro contato com HTML5 e CSS3.<br><br>
    //   A página proposta foi um portfálio simples, ensinando a motar um index.html e style.css e conceitos de html semântico e suas tags.
    //    `,
    //   imgSrc: './assets/projects/lessonslearned.png',
    //   videoSrc: '',
    //   // linkedin: '',
    //   // repository: '',
    //   site: './sd-029-a-project-lessons-learned/index.html'
    // },
    {
      id: 9,
      type: 1,
      title: 'Color Guess',
      date: '30 de Julho de 2021',
      languages: ['html5', 'css3', 'javascript', ],
      description: `Color Guess é um projeto desenvolvido como requisito bônus pela Trybe. Trata-se do desenvolvimento de uma página Web que mostra aleatóriamente uma cor no formato texto rgb e uma paleta de cores também aleatórias. O usuário deve escolher entre as cores qual é a cor apresentada como texto.<br>
      O projeto aborda conceitos de manipulação de HTML5, CSS3 e JavaScript, DOM e Local Storage. <br>
      • Como feature a página exolha entre as cores apresentadas; <br>
      • Caso a pessoa usuária acerte uma mensagem de "Acertou!" é apersentada e 3 pontos são somados. <br>
      • Caso a pessoa usuária erre uma mensagem de "Errou! Tente novamente!" é apresentada e nada acontece. <br>
      • Para trocar as cores da palheta, existe um botão "Reset game!".`,
      imgSrc: './assets/projects/colorguess.png',
      videoSrc: 'https://streamable.com/e/xvcpbg',
      // linkedin: '',
      // repository: '',
      site: './sd-029-a-project-color-guess/index.html'
    },
    {
      id: 10,
      type: 1,
      title: 'Carta Misteriosa',
      date: 'Em desenvolvimento',
      languages: ['html5', 'css3', 'javascript'],
      description: `Carta Misteriosa é um projeto desenvolvido como requisito bônus pela Trybe. Trata-se do desenvolvimento de uma página Web que permite que a pessoa usuária digite um texto que é dividido em palavras e estilizadas como se fossem recortes de jornais e revistas para a criação de uma carta anônima. A pessoa usuária ainda pode clicar nas palavras individualemnte para mudar o estilo aleatóriamente.<br>
      O projeto aborda conceitos de manipulação de HTML5, CSS3 e JavaScript, DOM. <br>`,
      imgSrc: './assets/projects/cartamisteriosa.png',
      videoSrc: 'https://streamable.com/e/f39mxy',
      // linkedin: '',
      // repository: '',
      site: './sd-029-a-project-carta-misteriosa/index.html'
    },
    {
      id: 12,
      type: 1,
      title: 'Reclame Aqui - Formulário Clone',
      languages: ['html5', 'css3', 'javascript', ],
      date: '30 de Julho de 2021',
      description: `"Reclame Aqui - Formulário Clone" é um projeto desevolvido como atividade extra durante mentoria da Trybe. Foi desenvolvido como prática de formulários. <br><br>
      • O projeto inclui a utilização de bootstrap just-validate  e lógica de validação de CPF.`,
      imgSrc: './assets/projects/clonereclameaqui.png',
      videoSrc: 'https://streamable.com/e/c9xl7i',
      // linkedin: '',
      // repository: '',
      site: './exercise-forms/index.html'
    },
  ];

  return typeId ? dataProjects.filter(({ type }) => type === typeId) : dataProjects;
}

const allProjects = getProjectsByTypeOrAll(ALL_TYPE);
const hightLightProjects = getProjectsByTypeOrAll(HIGHTLIGHT_TYPE);

const renderProjects = (container, data) => {
  container.innerHTML = data.map(({ id, title, imgSrc, date, languages }) => {
    return `
        <div class="box" id="${id}">
          <div class="cover">
            <img src=${imgSrc} alt="">
            <div class="details">
              <p>${title}</p>
              <div class="mini-languages">
                ${languages.map((language) => `<ion-icon name="logo-${language}"></ion-icon>
                `)}
              </div>
            </div>
          </div>
          <div class="description">
            <p>${date}</p>
            <a>Ver mais</a>
          </div>
        </div>
      `
  }).join('');
}

const renderSkillsSection = () => {
  const cardsContainer = document.querySelector('.cards');

  const skills = [
    {
      name: 'HTML5',
      src: 'html5'
    },
    {
      name: 'CSS3',
      src: 'css3'
    },
    {
      name: 'JavaScript',
      src: 'javascript'
    },
    {
      name: 'React.js',
      src: 'react'
    },
     {
      name: 'Node.js',
      src: 'nodejs'
    },
    {
      name: 'Python',
      src: 'python'
    },
    {
      name: 'NPM',
      src: 'npm'
    },
       {
      name: 'GITHUB',
      src: 'github'
    },
       {
      name: 'Slack',
      src: 'slack'
    },
    {
      name: 'Figma',
      src: 'figma'
    }
  ]

  // cardsContainer.innerHTML = skills.map(({ name, src }, index) => `
  //   <div class="box" key="${index}">
  //     <p>${name}</p>
  //     <img src="assets/languages/${src}.svg" alt="html">
  //   </div>
  // `).join('')
  cardsContainer.innerHTML = skills.map(({ name, src }, index) => `
  <div class="box" key="${index}">
    <p>${name}</p>
    <ion-icon name="logo-${src}"></ion-icon>

  </div>
`).join('')
}

{/* <i class="fa-brands fa-${src}"></i> */}
{/* <i class="fi fi-brands-${src}"></i> */}


const addData = ({ title, description, date, site, repository, linkedin, videoSrc }) => {
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  document.body.classList.add('transparent')
  modalTitle.innerHTML = title
  modalDescription.innerHTML = description
  modalDate.innerHTML = date
  modalLinkProject.setAttribute('href', site)
  // modalLinkRepository.setAttribute('href', repository)
  // modalLinkLinkedin.setAttribute('href', linkedin)
  iframe.setAttribute('src', videoSrc + '?autoplay=1&amp;loop=0')

}

const insertProjectAction = () => {
  projectsBox.forEach((project) => {
    const id = Number(project.getAttribute('id'));

    project.addEventListener('click', () => {
      const allProjects = getProjectsByTypeOrAll();
      const foundProject = allProjects.find((project) => project.id === id);
      addData(foundProject);
    })
  });
}

const closeModal = () => {
  modal.classList.add('hidden')
  document.body.style.overflow = 'visible';
  document.body.classList.remove('transparent')
  iframe.setAttribute('src', '')

}

const detectCloseModal = () => {
  closeModalAction.addEventListener('click', closeModal)
  document.addEventListener('keydown', ({ key }) => key === "Escape" && closeModal());
}

renderSkillsSection();
renderProjects(highlightsProjectsContainer, hightLightProjects);
renderProjects(allProjectsContainer, allProjects);
const projectsBox = document.querySelectorAll('.box');
detectCloseModal();
insertProjectAction();
