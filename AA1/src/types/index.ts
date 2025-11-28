export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  location: Location;
}

export interface Location {
  name: string;
  url: string;
}

export interface CharacterResponse {
  results: Character[];
}