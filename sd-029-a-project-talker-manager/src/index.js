const express = require('express');
const fs = require('fs').promises;
const connection = require('./db/connection');

const validateAge = require('./validations/validateAge');
const validateEmail = require('./validations/validateEmail');
const validateName = require('./validations/validateName');
const validatePassword = require('./validations/validatePassword');
const validateRate = require('./validations/validateRate');
const validateSearchWatchedDate = require('./validations/validateSearchWatchedDate');
const validateSearchRate = require('./validations/validateSearchRate');
const validateTalk = require('./validations/validateTalk');
const validateToken = require('./validations/validateToken');
const validateWatchedAt = require('./validations/validateWatchedAt');
const validatePatch = require('./validations/validatePatch');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const HTTP_CREATED_STATUS = 201;
const HTTP_NO_CONTENT_STATUS = 204;
const HTTP_NOT_FOUND_STATUS = 404;
const PORT = process.env.PORT || '3001';

// não remova esse endpoint, e para o avaliador funcionar

app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker/db', async (req, res) => {
      const [talkersFromDB] = await connection.execute('SELECT * FROM talkers;');

      const mappedTalkers = talkersFromDB.map((talker) => ({
          name: talker.name,
          age: talker.age,
          id: talker.id,
          talk: { watchedAt: talker.talk_watched_at, rate: talker.talk_rate },
      }));

      return res.status(200).json(mappedTalkers);
});

const fetchTalker = async () => {
  try {
    const data = await fs.readFile('./src/talker.json');
    return JSON.parse(data);
  } catch (error) {
    return { message: error.message };
  }
};

app.get('/talker', async (_req, res) => {
  const manageTalker = await fetchTalker();
  if (manageTalker) {
    return res.status(HTTP_OK_STATUS).json(manageTalker);
  }
  return res.status(HTTP_OK_STATUS).json([]);
});

const searchWithQuery = async (q, rate, date) => {
  let manageTalker = await fetchTalker();
  if (q) {
    manageTalker = manageTalker.filter((talker) =>
      talker.name.toLowerCase().includes(q.toLowerCase())); 
}
  if (rate) {
    manageTalker = manageTalker.filter((talker) => 
      talker.talk.rate === Number(rate));
  }
  if (date) {
    manageTalker = manageTalker.filter((talker) =>
      talker.talk.watchedAt === date);
  }
  return manageTalker;
};

app.get('/talker/search', validateToken, validateSearchRate, 
  validateSearchWatchedDate, async (req, res) => {
    const { q, rate, date } = req.query;
    const queryTalker = await searchWithQuery(q, rate, date);
    return res.status(HTTP_OK_STATUS).json(queryTalker);
  });

app.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  const manageTalker = await fetchTalker();
  const findTalker = manageTalker.find((talker) => talker.id === Number(id));
  if (findTalker) {
    return res.json(findTalker);
  }
  return res
    .status(HTTP_NOT_FOUND_STATUS)
    .json({ message: 'Pessoa palestrante não encontrada' });
});

function randomString() {
  const char = 'qwertyuioplkjhgfdsazxcvbnmMNBVCXZASDFGHJKLPOIUYTREWQ1234567890';
  let token = '';
  for (let i = 0; i < 16; i += 1) {
    const randomChar = Math.floor(Math.random() * 62);
    token += char.substring(randomChar, randomChar + 1);
  }
  return token;
}

app.post('/login', validateEmail, validatePassword, async (_req, res) => {
  const token = randomString();
  res.status(HTTP_OK_STATUS).json({ token });
});

const createTalker = async (newTalker) => {
  try {
    await fs.writeFile('./src/talker.json', JSON.stringify(newTalker));
  } catch (e) {
    console.error('Erro ao salvar o arquivo', e.message);
    return null;
  }
};

app.post('/talker', validateToken, validateName, validateAge, 
validateTalk, validateWatchedAt, validateRate, async (req, res) => {
    const { name, age, talk: { watchedAt, rate } } = req.body;
    let manageTalker = await fetchTalker();
    const newTalker = { name, age, talk: { watchedAt, rate }, id: manageTalker.length + 1 };
    manageTalker = [...manageTalker, newTalker];
    await createTalker(manageTalker);
    res.status(HTTP_CREATED_STATUS).json(newTalker);
  });

app.put('/talker/:id', validateToken, validateName, validateAge,
validateTalk, validateWatchedAt, validateRate, async (req, res) => {
    const { id } = req.params;
    const { name, age, talk: { watchedAt, rate } } = req.body;
    const manageTalker = await fetchTalker();
    const talkerIndex = manageTalker.findIndex(
      (talker) => talker.id === Number(id),
    );
    if (talkerIndex === -1) {
      return res
        .status(HTTP_NOT_FOUND_STATUS)
        .json({ message: 'Pessoa palestrante não encontrada' });
    }
    const newTalker = { name, age, talk: { watchedAt, rate }, id: Number(id) };
    manageTalker[talkerIndex] = newTalker;
    await createTalker(manageTalker);
    res.status(HTTP_OK_STATUS).json(newTalker);
  });

app.delete('/talker/:id', validateToken, async (req, res) => {
  const { id } = req.params;
  let manageTalker = await fetchTalker();
  const talkerIndex = manageTalker.findIndex(
    (talker) => talker.id === Number(id),
  );
  if (talkerIndex === -1) {
    return res.status(HTTP_NOT_FOUND_STATUS)
      .json({ message: 'Pessoa palestrante não encontrada' });
  }
  manageTalker = manageTalker.filter((talker) => talker.id !== Number(id));
  await createTalker(manageTalker);
  res.status(HTTP_NO_CONTENT_STATUS)
    .json({ message: 'Pessoa palestrante deletada com sucesso' });
});

app.patch('/talker/rate/:id', validateToken, validatePatch, async (req, res) => {
  const { id } = req.params;
  const { rate } = req.body;
  const manageTalker = await fetchTalker();
  const talkerIndex = manageTalker.findIndex(
    (talker) => talker.id === Number(id),
  );
  if (talkerIndex === -1) {
    return res.status(HTTP_NOT_FOUND_STATUS)
      .json({ message: 'Pessoa palestrante não encontrada' });
  }
  manageTalker[talkerIndex].talk.rate = rate;
  await createTalker(manageTalker);
  return res.status(HTTP_NO_CONTENT_STATUS).json();
});

app.listen(PORT, () => {
  console.log('Online');
});
