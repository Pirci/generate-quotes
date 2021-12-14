// * Quotes are multiple strings that need to be stored in an array
// * Every time the button gets pressed, a random whole number needs to be generated.
// * The number will be used as a representation of the array index number for the quote array.
// * Once we retrieve the randomly picked quote from the array using our randomly generated whole number, we will place it to the HTML document.

let quotes = [
  'Integrity is the most valuable and respected quality of leadership. Always keep your word. – Brian Tracy ',
  'Whether you think you can or think you can’t, you’re right.. – Henry Ford ',
  'Security is mostly a superstition. Life is either a daring adventure or nothing. – Helen Keller ',
  'Creativity is intelligence having fun. – Albert Einstein ',
  'Knowing is not enough; we must apply. Wishing is not enough; we must do. – Johann Wolfgang Von Goethe',
  'A room without books is like a body without a soul. – Marcus Tullius Cicero ',
  'Go as far as you can see; when you get there, you’ll be able to see further. —Thomas Carlyle',
  'Your talent determines what you can do. Your motivation determines how much you’re willing to do. Your attitude determines how well you do it. —Lou Holtz ',
  'You learn more from failure than from success. Don’t let it stop you. Failure builds character. – Unknown',
  'The happiness of your life depends on the quality of your thoughts. – Marcus Aurelius',
];

function newQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
