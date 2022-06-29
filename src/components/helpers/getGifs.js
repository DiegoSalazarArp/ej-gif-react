export const getGifs = async (category) => {
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=WDpL5ylBMSsyeyT8nQUSkzy4lrjcSACi&q=${category}&limit=10`;
  const resp = await fetch(URL);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};
