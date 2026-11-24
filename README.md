# ahlesk.github.io
Portfólio com meus principais projetos desenvolvidos em minha formação acadêmica na Fatec.

Site estático (HTML, CSS e JavaScript puro), publicado pelo GitHub Pages em https://ahlesk.github.io/.

## Estrutura

```
index.html              página única (todas as seções)
404.html                página de erro do GitHub Pages
favicon.svg
.nojekyll               publica os arquivos como estão, sem Jekyll
assets/css/style.css    estilos (cores em :root)
assets/js/main.js       interações e animações (GSAP + ScrollTrigger)
assets/js/projects.js   conteúdo das abas de projetos  ← edite aqui
assets/js/i18n.js       textos em inglês (o português fica no HTML)
assets/img/             fotos
```

## Editando o conteúdo

- **Textos em português:** direto no `index.html`.
- **Versão em inglês:** mesma chave `data-i18n` em `assets/js/i18n.js`.
- **Projetos:** `assets/js/projects.js` (nome, papel, desafio, mídia, tecnologias, skills).
- **Fotos:** substitua `assets/img/profile.jpg` (proporção ~ 2:3).
- **Links:** GitHub, LinkedIn e e-mail (`mailto:`) no `index.html`.

## Rodando localmente

```bash
python3 -m http.server 8000
# abra http://localhost:8000
```

## Animações

- GSAP 3 + ScrollTrigger (via cdnjs): intro do hero, revelações ao rolar, linha da trajetória que se preenche, transição entre projetos, parallax, botões magnéticos e tilt 3D na foto.
- Canvas com partículas no hero, efeito de digitação e brilho que segue o cursor.
- Respeita `prefers-reduced-motion`. Se a CDN falhar, todo o conteúdo continua visível.
