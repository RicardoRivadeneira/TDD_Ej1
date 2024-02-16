import { esPalindromo, sonAnagramas, esIsograma } from './funciones';

describe('Pruebas de funciones de palabras', () => {
  // Prueba para palíndromos
  test('verifica si "amor" es un palíndromo', () => {
    expect(esPalindromo('amor')).toBe(true);
  });

  test('verifica si "roma" es un palíndromo', () => {
    expect(esPalindromo('roma')).toBe(true);
  });

  // Prueba para anagramas
  test('verifica si "amor" y "roma" son anagramas', () => {
    expect(sonAnagramas('amor', 'roma')).toBe(true);
  });

  // Pruebas para isogramas
  test('verifica si "amor" es un isograma', () => {
    expect(esIsograma('amor')).toBe(true);
  });

  test('verifica si "roma" es un isograma', () => {
    expect(esIsograma('roma')).toBe(true);
  });
});
