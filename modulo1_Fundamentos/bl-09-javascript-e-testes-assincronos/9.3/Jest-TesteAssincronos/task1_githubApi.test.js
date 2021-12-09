
const fetch = require('node-fetch');


const getRepos = (url) => (
  fetch(url)
    .then((response) => response.json())
    .then((data) => data.map((repo) => repo.name))
);

// implemente seus testes aqui

// getRepos('https://api.github.com/orgs/tryber/repos').then((log)=> console.log(log));

// describe('Test getRepos function',  () => {

  
// })

test('verifique que os repositórios "sd-01-week4-5-project-todo-list" e "sd-01-week4-5-project-meme-generator" se encontram nessa lista. ', async () => {

  const result = await getRepos('https://api.github.com/orgs/tryber/repos');

  expect(result).toContain('sd-01-week4-5-project-todo-list');
  expect(result).toContain('sd-01-week4-5-project-meme-generator');
})
