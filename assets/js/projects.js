/* =========================================================
   PROJETOS — edite aqui o conteúdo de cada aba.
   Qualquer texto pode ser uma string simples ou { pt: "...", en: "..." }.
   Campos HTML (challenge, contributions) aceitam <strong>.
   media: caminho de imagem/GIF (ex.: "assets/img/projeto1.gif")
          ou vídeo .mp4/.webm; deixe "" para mostrar o placeholder.
   ========================================================= */
window.PROJECTS = [1, 2, 3, 4].map(function (n) {
  return {
    period: { pt: "[" + n + "º semestre · ano]", en: "[" + ordinal(n) + " semester · year]" },
    name: { pt: "[Nome do Projeto " + n + "]", en: "[Project " + n + " name]" },
    role: "[Product Owner / Scrum Master / Desenvolvedor]",
    repo: "https://github.com/ahlesk",
    challenge: {
      pt: "O projeto foi desenvolvido para <strong>[cliente ou parceiro]</strong>, que precisava de [problema a ser resolvido]. A proposta era [o que a solução deveria fazer], e trabalhamos em [tamanho do time] pessoas usando [metodologia, ex.: Scrum].",
      en: "The project was built for <strong>[client or partner]</strong>, who needed [problem to be solved]. The goal was [what the solution should do], and we worked as a team of [team size] using [methodology, e.g. Scrum]."
    },
    contributions: {
      pt: "Fiquei responsável por [suas entregas]. A parte mais desafiadora foi [um obstáculo concreto], que resolvi [como resolveu]. Também [outra contribuição: documentação, testes, organização do time].",
      en: "I was responsible for [your deliverables]. The hardest part was [a concrete obstacle], which I solved by [how you solved it]. I also [another contribution: docs, tests, team organization]."
    },
    media: "",
    caption: { pt: "[Legenda: o que aparece na demonstração]", en: "[Caption: what the demo shows]" },
    techs: [
      { name: { pt: "[Tecnologia]", en: "[Technology]" }, use: { pt: "[para que foi usada]", en: "[what it was used for]" } },
      { name: { pt: "[Tecnologia]", en: "[Technology]" }, use: { pt: "[para que foi usada]", en: "[what it was used for]" } },
      { name: { pt: "[Tecnologia]", en: "[Technology]" }, use: { pt: "[para que foi usada]", en: "[what it was used for]" } },
      { name: { pt: "[Tecnologia]", en: "[Technology]" }, use: { pt: "[para que foi usada]", en: "[what it was used for]" } }
    ],
    hard: [1, 2, 3].map(function () {
      return { name: "[Hard skill]", detail: { pt: "[Como você aplicou essa habilidade no projeto.]", en: "[How you applied this skill in the project.]" } };
    }),
    soft: [1, 2, 3].map(function () {
      return { name: "[Soft skill]", detail: { pt: "[Uma situação em que essa habilidade fez diferença.]", en: "[A situation where this skill made a difference.]" } };
    })
  };
});

function ordinal(n) { return n + (["th", "st", "nd", "rd"][n] || "th"); }
