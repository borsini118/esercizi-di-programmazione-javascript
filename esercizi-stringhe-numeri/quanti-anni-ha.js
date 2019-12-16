/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

  http://www.imparareaprogrammare.it
*/

txt1 = 'L_età è di '
txt2 = 'anni mancanti = '

function eta (a, b) {
  return a - b
}
console.log(txt1);
console.log(eta(2018, 1991));

function mancanti (a, b) {
  return a - b
}
console.log(txt2);
console.log(mancanti (100, 27));
