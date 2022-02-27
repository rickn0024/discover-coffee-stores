import { createApi } from 'unsplash-js';

// on your node server
const unsplashApi = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
  //...other fetch options
});

const getUrlForCoffeeStores = (latLong, query, limit) => {
  return `https://api.foursquare.com/v3/places/nearby?ll=${latLong}&query=${query}&limit=${limit}`;
};

const getListOfCoffeeStorePhotos = async () => {
  const photos = await unsplashApi.search.getPhotos({
    query: 'coffee shop',
    perPage: 40,
  });
  const unsplashResults = photos.response?.results || [];
  return unsplashResults.map(result => result.urls['regular']);
};

export const fetchCoffeeStores = async (
  latLong = '34.39093221951669,-118.54295551783804',
  limit = 9,
) => {
  const photos = await getListOfCoffeeStorePhotos();
  const response = await fetch(
    getUrlForCoffeeStores(latLong, 'coffee shops', limit),
    {
      headers: {
        Authorization: process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY,
      },
    },
  );
  const data = await response.json();

  return (
    data.results?.map((venue, idx) => {
      const neighbourhood = venue.location.neighborhood;
      return {
        // ...venue,
        id: venue.fsq_id,
        address: venue.location.address || '',
        name: venue.name,
        neighbourhood:
          (neighbourhood && neighbourhood.length > 0 && neighbourhood[0]) ||
          venue.location.cross_street ||
          '',
        imgUrl: photos[idx],
      };
    }) || []
  );
};
