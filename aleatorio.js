const nomes = ["Milena", "Julia", "Gabriely", "Mariane", "Agatha", "Joao Paulo", "Bruno"];

export function aleatorio(lista) {
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
    }
    
export const nome = aleatorio(nomes); 