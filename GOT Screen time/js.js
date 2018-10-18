// List of Characters
var characters = [
  ['Jon Snow', 'jonsnow.png', 54.75,	33.75,	36,	42.5,	49.25,	52,	70],
  ['Tyrion Lannister', 'tyrionlannister.png',	52.75,	65,	50,	47.75,	44,	34,	43.5],
  ['Daenerys Targaryen', 'daenerystargaryen.png',	54,	38.75,	30.75, 27.5,	41.75,	28.75,	54.5],
  ['Sansa Stark', 'sansastark.png',	24	,	34,	33.5,	32.75,	34.75,	40.5,	39],
  ['Cersei Lannister', 'cerseilannister.png',	28,	36.25,	22,	37.25,	49.75,	28.5,	34.25],
  ['Arya Stark', 'aryastark.png',	33.5,	38.75,	26.5,	25.75,	34.75,	30,	35],
  ['Jaime Lannister', 'jaimelannister.png',	21,	18.25,	34.75,	36,	21.75,	30.75,	36.5],
  ['Samwell Tarly', 'samwelltarly.png',	21.25,	11.25,	24,	26,	23.5,	16,	21.75],
  ['Jorah Mormont', 'jorahmormont.png',	27.5,	17.5,	18.75,	13.5,	29.75,	10.5,	25],
  ['Theon Greyjoy', 'theongreyjoy.png',	16.75,	40.25,	22.5,	12.25,	15.5,	16.5,	12.5],
  ['Petyr (Littlefinger) Baelish', 'petyrbaelish.png',	25.75,	21.25,	8.75,	19,	18.5,	9	,16.75],
  ['Davos Seaworth', 'davosseaworth.png',	0,	19.25,	19,	11.5,	12.5,	27.25,	20.5],
  ['Eddard (Ned) Stark', 'eddardstark.png',	92.5,	0,	0,	0,	0,	7.25,	0.25],
  ['Bran Stark', 'branstark.png',	25.75,	13.25,	16.75,	12,	0, 18.25,	13.25],
  ['Brienne of Tarth', 'brienneoftarth.png',	0,	18,	21.25,	20,	14.75,	15.5,	8],
  ['Sandor (The Hound) Clegane', 'sandorclegane.png',	6.75,	11.75,	16,	28.5,	0,	9.75,	22.5],
  ['Lord Varys', 'lordvarys.png',	19,	14,	15.75,	6.5,	10.5,	16,	12.5],
  ['Catelyn Stark', 'catelynstark.png',	42.25,	24,	16.5,	0,	0,	0,	0],
  ['Tywin Lannister', 'tywinlannister.png',	10.25,	17.25,	21.25,	28.5,	1,	0,	0],
  ['Margaery Tyrell', 'margaerytyrell.png',	0,	9.5,	21.25,	17.75,	11.25,	18.25,	0],
  ['Robb Stark', 'robbstark.png',	24.75,	27.5,	25.5,	0,	0,	0,	0],
  ['Bronn', 'bronn.png',	15	,	14.5,	6.75,	8.75,	13.5,	5.5, 10.75],
  ['Stannis Baratheon', 'stannisbaratheon.png',	0,	19.75,	14.25,	10,	29.25,	0,	0],
  ['Joffrey Baratheon', 'joffreybaratheon.png',	17.75,	17.5,	20.25,	14.75,	0,	0,	0],
  ['Melisandre', 'melisandre.png',	0,	12.75,	18,	5.25,	11.75,	18,	3],
  ['Ramsay Bolton', 'ramsaybolton.png',	0,	0,	12.75,	13.5,	18.5,	21.25,	0],
  ['Missandei', 'missandei.png',	0,	0,	11.5,	9.5,	13.25,	11.5,	16.5],
  ['Gilly', 'gilly.png',	0	,	3.25,	13.5,	9.25,	11.75,	15.25,	2.5],
  ['Tormund Giantsbane', 'tormundgiantsbane.png',	0,	0,	8.75,	7.25,	12.25,	13.5,	13.75]
]

var seasonlength = 600


// For each character, loop creates svg, adds image, creates ellipse for each season based on percentage using clipping masks
for (var i=0; i<characters.length; i++) {

  var div = document.createElement('div');
  div.style.float = 'left';
  div.style.width = '356px';
  div.style.height = '356px';

  var img = document.createElement('img')
  img.src = 'img/' + characters[i][1];
  div.appendChild(img);

  var svg = document.createElementNS('http://www.w3.org/2000/svg','svg')
  svg.setAttribute('width', 100);
  svg.setAttribute('height', 100);
  div.appendChild(svg);

  

  // var clipPath = document.createElementNS('http://www.w3.org/2000/svg', 'clipPath');
  // clipPath.setAttribute('id', 'clip');
  // clipPath.appendChild(svg);


  var arc7 = document.createElementNS('http://www.w3.org/2000/svg','ellipse')
  arc7.setAttribute('fill', 'pink');
  svg.setAttribute('width', 355);
  svg.setAttribute('height', 355);
  arc7.setAttribute('cx', 175);
  arc7.setAttribute('cy', 175);
  arc7.setAttribute('rx', 162);
  arc7.setAttribute('ry', 162);
  svg.appendChild(arc7);

  var arc6 = document.createElementNS('http://www.w3.org/2000/svg','ellipse')
  arc6.setAttribute('fill', 'purple');
  svg.setAttribute('width', 355);
  svg.setAttribute('height', 355);
  arc6.setAttribute('cx', 175);
  arc6.setAttribute('cy', 175);
  arc6.setAttribute('rx', 157);
  arc6.setAttribute('ry', 157);
  svg.appendChild(arc6);

  var arc5 = document.createElementNS('http://www.w3.org/2000/svg','ellipse')
  arc5.setAttribute('fill', 'blue');
  svg.setAttribute('width', 355);
  svg.setAttribute('height', 355);
  arc5.setAttribute('cx', 175);
  arc5.setAttribute('cy', 175);
  arc5.setAttribute('rx', 152);
  arc5.setAttribute('ry', 152);
  svg.appendChild(arc5);

  var arc4 = document.createElementNS('http://www.w3.org/2000/svg','ellipse')
  arc4.setAttribute('fill', 'green');
  svg.setAttribute('width', 355);
  svg.setAttribute('height', 355);
  arc4.setAttribute('cx', 175);
  arc4.setAttribute('cy', 175);
  arc4.setAttribute('rx', 147);
  arc4.setAttribute('ry', 147);
  svg.appendChild(arc4);

  var arc3 = document.createElementNS('http://www.w3.org/2000/svg','ellipse')
  arc3.setAttribute('fill', 'yellow');
  svg.setAttribute('width', 355);
  svg.setAttribute('height', 355);
  arc3.setAttribute('cx', 175);
  arc3.setAttribute('cy', 175);
  arc3.setAttribute('rx', 142);
  arc3.setAttribute('ry', 142);
  svg.appendChild(arc3);

  var arc2 = document.createElementNS('http://www.w3.org/2000/svg','ellipse')
  arc2.setAttribute('fill', 'orange');
  svg.setAttribute('width', 355);
  // svg.setAttribute('height', 355);
  svg.setAttribute('width', + characters[i][3] / seasonlength * 600 + '%');
  arc2.setAttribute('cx', 175);
  arc2.setAttribute('cy', 175);
  arc2.setAttribute('rx', 137);
  arc2.setAttribute('ry', 137);
  svg.appendChild(arc2);

  var arc = document.createElementNS('http://www.w3.org/2000/svg','ellipse')
  arc.setAttribute('fill', 'red');
  svg.setAttribute('width', 355);
  svg.setAttribute('width', + characters[i][2] / seasonlength * 600 + '%');
  // svg.setAttribute('height', 355);
  arc.setAttribute('cx', 175);
  arc.setAttribute('cy', 175);
  arc.setAttribute('rx', 132);
  arc.setAttribute('ry', 132);
  svg.appendChild(arc);

  document.getElementById('vis').appendChild(div);
}

// function displayData(){
//   svg.addEventListener('click', function(){
//     // display the ellipses
//   }
// }











// for (var i=0; i < characters.length; i++) {
//
//   var clip = document.createElement('div');
//   bar.className = 'bar';
//   bar.style.width = scores[i][2] / topscore * 100 + '%';
//   bar.style.backgroundColor = color;
//   document.getElementById('chart').appendChild(bar);
//
//   var row = document.createElement('tr');
//   row.style.color = color;
//   row.innerHTML += '<td>' + scores[i][0] + '</td>';
//   row.innerHTML += '<td>' + scores[i][1] + '</td>';
//   row.innerHTML += '<td>' + scores[i][2] + '</td>';
//   document.getElementById('highscores').appendChild(row);
// }
// }
