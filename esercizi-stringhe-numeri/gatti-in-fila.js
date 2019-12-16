/*
  Gatti in fila
  Scrivi un programma che dato:
    a) Un numero totale di gatti
    b) Il numero dei gatti presenti in ogni fila
  Restituisca in output:
    - Il numero di file risultanti
    - Nel caso l'ultima fila risulti incompleta indicare il numero di gatti mancanti per completarla (quanti gatti mancano per arrivare a b?)

  Esempio:
    Input: numero di gatti = 44, gatti per fila = 6
    Output: numero di file = 8, gatti mancanti = 4

  Consigli:
  Per l'arrotondamento ti consiglio di non usare Math.round (arrotonda all'intero superiore solo da .5 in su),
  utilizza Math.ceil (arrotonda sempre all'intero superiore).

  http://www.imparareaprogrammare.it
*/

var gatti = 44
var n_gatti_fila = 6
var num_file = Math.ceil(gatti/n_gatti_fila)
gatti_mancanti = (num_file*n_gatti_fila)-gatti
tx1='Numero file '
tx2='Gatti mancanti '
console.log(tx1 + num_file);
console.log(tx2 + gatti_mancanti);
