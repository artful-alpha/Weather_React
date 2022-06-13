export const FakeResponce = {
  coord: {
    lon: -92.1974,
    lat: 37.0309,
  },
  weather: [
    {
      id: 802,
      main: "Clouds",
      description: "scattered clouds",
      icon: "03d",
    },
  ],
  base: "stations",
  main: {
    temp: 301.92,
    feels_like: 304.88,
    temp_min: 301.12,
    temp_max: 303.66,
    pressure: 1012,
    humidity: 67,
    sea_level: 1012,
    grnd_level: 975,
  },
  visibility: 10000,
  wind: {
    speed: 5.14,
    deg: 200,
    gust: 10.26,
  },
  clouds: {
    all: 45,
  },
  dt: 1655131510,
  sys: {
    type: 2,
    id: 2033835,
    country: "US",
    sunrise: 1655117316,
    sunset: 1655170157,
  },
  timezone: -18000,
  id: 4399725,
  name: "Ann",
  cod: 200,
};

export default FakeResponce;
