var s = 'Decidi fazer um super cart\u00e3o programado para voc\u00ea nesse dia dos pais, s\u00f3 pra dizer como eu queria estar a\u00ed com voc\u00ea...Eu sempre disse que relevava o fundo comercial do dia dos pais por conta da import\u00e2ncia que tem tirar um diazinho no ano para refletir sob todo o amor, toda influ\u00eancia, toda hist\u00f3ria que uma rela\u00e7\u00e3o pai-filho(a) tem. Sou muito grata por ter voc\u00ea perto, como meu pai e como esse grande amigo que voc\u00ea \u00e9 pra mim. Quanto mais aprofundo meus dias na vida adulta, quanto mais responsabilidades, contas, sonhos familiares tenho, mais entendo voc\u00ea e minha admira\u00e7\u00e3o inevitavelmente cresce por lembrar de todo o sacrif\u00edcio que envolveu a minha forma\u00e7\u00e3o.'
var r = 'Desejo que no dia de hoje voc\u00ea seja aben\u00e7oado de maneira especial pelo Pai Supremo. Que Ele multiplique a sua paz de esp\u00edrito, sua sa\u00fade, seu bem-estar, e que Ele te ofere\u00e7a novas oportunidades para construir e experimentar muitas coisas nessa nova etapa da sua vida. J\u00e1 te disse o quanto te adimiro? Ent\u00e3o vou repetir, hehe. Voc\u00ea tem uma disposi\u00e7\u00e3o em realizar ideias que \u00e9 inspiradora demais para mim. Talvez tenha sido essa mesma caracter\u00e9stica que te forjou nesse pai maravilhoso que voc\u00ea \u00e9, e sempre ser\u00e1, para mim.'
var x = 'S\u00e3o tantas coisas que passam pela cabe\u00e7a e eu s\u00f3 posso te agradecer a Deus e a voc\u00ea, e corresponder a esse amor, de todo o cora\u00e7\u00e3o.'
var z = 'Eu te amo demais! Mil beijos, Pat.'
var font

function preload() {
  font = loadFont('assets/Corben-Regular.ttf');
}
function setup() {
createCanvas(1024,768);
background(0, 51, 0);
textFont(font);
}

function draw() {
  fill(115, 153, 102);
  noStroke();
  rect(30,30,964,708);

  fill(255);
  textFont(font,72);
  text('Feliz dia dos pais!!! ;)', 100, 200);

  fill(0);
  textFont(font,16);
  text(s,100,300,800,648);

  fill(0);
  textFont(font,16);
  text(r,100,450,800,648);

  fill(0);
  textFont(font,16);
  text(x,100,560,800,648);

  fill(0);
  textFont(font,16);
  text(z,100,620,800,648);
}
