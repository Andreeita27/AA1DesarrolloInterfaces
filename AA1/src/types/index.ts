export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
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