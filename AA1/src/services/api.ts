import type { Character, CharacterResponse } from "../types";

const BASE_URL = "https://rickandmortyapi.com/api";

export async function getCharacters(page: number = 1): Promise<CharacterResponse> {
  const response = await fetch(`${BASE_URL}/character?page=${page}`);
  
  if (!response.ok) {
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