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


export async function getCharacterById(id: string): Promise<Character> {
  const response = await fetch(`${BASE_URL}/character/${id}`);

  if (!response.ok) {
    throw new Error("Error al obtener el detalle");
  }

  return await response.json();
}

export async function getLocations(): Promise<LocationResponse> {
  const response = await fetch(`${BASE_URL}/location`);

  if (!response.ok) {
    throw new Error("Error al obtener las ubicaciones");
  }

  return await response.json();
}