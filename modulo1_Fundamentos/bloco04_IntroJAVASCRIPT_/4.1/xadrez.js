/**6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.  */

const pec = 'pawn';
const pecLowerCase = pec.toLowerCase();
// console.log(pecLowerCase);
if (pecLowerCase === 'pawn' || pecLowerCase === 'peao') {
  console.log('one, two squares forward or one square diagonally.');
} else if (pecLowerCase === 'rook' || pecLowerCase === 'torre') {
  console.log(`Rooks can go forward, backward, to the left or to the right.`);
} else if (pecLowerCase === 'knight' || pecLowerCase === 'cavalo') {
  console.log(`It moves in an L-shape over the squares.`);
} else if (pecLowerCase === 'bishop' || pecLowerCase === 'bispo') {
  console.log(`It is the ruler over the diagonals of the chessboard.`);
} else if (pecLowerCase === 'queen' || pecLowerCase === 'rainha') {
  console.log(`She can move in any direction and any number of squares.`);
} else if (pecLowerCase === 'king' || pecLowerCase === 'rei') {
  console.log(`He can move just one square in any direction.`);
} else {
  console.error(`This is not a chess piece.`);
}