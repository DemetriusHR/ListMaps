type IDistanceToOtherCountries = {
  distanceInKm: number;
  countryName: string;
};

type ITopLevelDomainsCountries = {
  name: string;
};

type ITopLevelDomains = {
  name: string;
  countries: ITopLevelDomainsCountries[];
};

type ICountry = {
  _id: string;
  name: string;
  capital: string;
  area: number;
  population: number;
  topLevelDomains: ITopLevelDomains[];
  flag: {
    svgFile: string;
  };
  distanceToOtherCountries: IDistanceToOtherCountries[];
};

export default ICountry;
