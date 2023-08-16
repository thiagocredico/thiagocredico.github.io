// const fetchPhotos = () => {
//   return new Promise()
// }
export const fetchPhotos = async (searchTerm) => {
  const response = await fetch(`https://api.unsplash.com/search/photos?query=${searchTerm}`, {
    headers: {
      Authorization: 'Client-ID 4UMLr6_fcjWYTYTT8WKn7eg7zSaOyhcr_F1Ttt5mTEU',
    },
  });
  // A função .json realiza uma transformação em uma string
  // Fazendo com que ela se torne um objeto
  // const minhaStringDeJSON = '{ "meusDados": "Teste" }';

  // console.log(minhaStringDeJSON);
  // console.log(JSON.parse(minhaStringDeJSON));

  const data = await response.json();
  console.log(data);
  return data.results;
};
