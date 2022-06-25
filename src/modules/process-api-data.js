const processApiData = (data) => data.map((item) => ({
  description: item.description,
  director: item.director,
  id: item.id,
  posterUrl: item.image,
  locations: item.locations,
  movieBanner: item.movie_banner,
  originalTitle: item.original_title,
  originalTitleRomanised: item.original_title_romanised,
  people: item.people,
  producer: item.producer,
  releaseDate: item.release_date,
  rating: item.rt_score,
  runningTime: item.running_time,
  species: item.species,
  title: item.title,
  movieUrl: item.url,
  vehicles: item.vehicles,
}));

export default processApiData;
