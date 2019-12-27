/**
 *
 * As importações do boostrap são pesadas
 * e muitos recursos não são utilizados
 * o ideal é importar apelas o que será
 * necessário.
 * exemplo : import "bootstrap/js/dist/modal";
 *
 *  */

// Owl carousel
import "owl.carousel/dist/owl.carousel";

/**
 * Para manipulação do DOM, o Jquery pesa
 * cerca de 40KB minificado. Utilizamos
 * então o Cash Dom, uma alternativa de pesa
 * cerca de 90% a menos com a mesma eficacia.
 * Peso: 5KB
 *
 * Github: https://github.com/kenwheeler/cash
 * Uso:  Importe o Cash nos arquivos que for
 * utilizar
 * Exemplo: import $ from "cash-dom";
 */
