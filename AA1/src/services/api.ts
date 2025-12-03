import type { Character, CharacterResponse, LocationResponse } from "../types";

const BASE_URL = "https://rickandmortyapi.com/api";

export async function getCharacters(page: number = 1, name: string = "", status: string = ""): Promise<CharacterResponse> {
  const response = await fetch(`${BASE_URL}/character?page=${page}&name=${name}&status=${status}`);
  
  if (!response.ok) {
    if (response.status === 404) {
      return { results: [], info: { count: 0, pages: 0, next: null, prev: null } } as any;
    }
    throw new Error("Error al obtener los personajes");
  }

  return await response.json();
}


export async function getCharacterById(id: string): Promise<Character | null> {
  const response = await fetch(`${BASE_URL}/character/${id}`);

  if (!response.ok) {
    if (response.status === 404) {
      return null;
    }
    throw new Error("Error al obtener los detalles");
  }

  return await response.json();
}

export async function getLocations(page: number = 1,name: string = "",type: string = ""): Promise<LocationResponse> {
  const response = await fetch(`${BASE_URL}/location?page=${page}&name=${name}&type=${type}`);

  if (!response.ok) {
    if (response.status === 404) {
      return { results: [], info: { count: 0, pages: 0, next: null, prev: null } } as any;
    }
    throw new Error("Error al obtener las ubicaciones");
  }

  return await response.json();
}