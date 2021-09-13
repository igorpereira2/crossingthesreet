var bg;
var tela = "menu";
var xc1 = 0;
var xc2 = 0;
var xc3 = 0;
var xc4 = 0;
var yc4 = 225;
var xjogador = 328;
var yjogador = 460;
var vida = 5;
var time;
var time02=0;
var score;
var police=[];
var police1=[];
var ambulancia=[];
var ambulancia1=[];
var velocit=0;
var km = 0;
var som;
var som1;
var som3;
var somvitoria;
var somderrota;
var colisao;
var sommenu;
var telaAnterior = 1;
var foxUp=[]; 
var foxDown=[]; 
var foxLeft=[]; 
var foxRight=[];
var statusF = 0
var loboGuara = 0
var contador = 0
var clocking= 0;
var somambulancia;


function preload(){
  bg = loadImage('imagens/Background.png');
  imgPerfil = loadImage('imagens/Perfil.png');
  bgjogo = loadImage('imagens/bgjogo.png');
  bgjogo1 = loadImage('imagens/bgjogo1.png');
  bgjogo2 = loadImage('imagens/bgjogo2.png');
  bgjogo3 = loadImage('imagens/bgjogo3.png');
  bgjogo4 = loadImage('imagens/bgjogo4.png');
  bgjogo5 = loadImage('imagens/bgjogo5.png');
  carroamarelo = loadImage('imagens/carroamarelo.png');
  carroazul = loadImage('imagens/carroazul.png');
  carrovermelho = loadImage('imagens/carrovermelho.png');
  carroverde = loadImage('imagens/carroverde.png');
  carroamareloi = loadImage('imagens/carroamareloi.png');
  carroazuli = loadImage('imagens/carroazuli.png');
  carrovermelhoi = loadImage('imagens/carrovermelhoi.png');
  carroverdei = loadImage('imagens/carroverdei.png');
  raposa1 = loadImage('imagens/raposa1.png');
  FOXF1 = loadImage('imagens/FOXF1.png');
  raposaB1 = loadImage('imagens/raposaB1.png');
  ivitoria = loadImage('imagens/ivitoria.gif');
  vitoria1 = loadImage('imagens/vitoria1.gif');
  gif_loadImg = loadImage("imagens/ivitoria.gif");
  
  
      foxDown [0] = loadImage("imagens/foxd1.png");
      foxDown [1] = loadImage("imagens/foxd2.png"); 
      foxDown [2] = loadImage("imagens/foxd3.png"); 
      foxDown [3] = loadImage("imagens/foxd4.png"); 
      foxDown [4] = loadImage("imagens/foxd1.png"); 
      foxDown [5] = loadImage("imagens/foxd2.png"); 
      foxDown [6] = loadImage("imagens/foxd3.png"); 
      foxDown [7] = loadImage("imagens/foxd4.png"); 

      foxUp [0] = loadImage("imagens/foxu1.png");
      foxUp [1] = loadImage("imagens/foxu2.png"); 
      foxUp [2] = loadImage("imagens/foxu3.png"); 
      foxUp [3] = loadImage("imagens/foxu4.png"); 
      foxUp [4] = loadImage("imagens/foxu1.png"); 
      foxUp [5] = loadImage("imagens/foxu2.png"); 
      foxUp [6] = loadImage("imagens/foxu3.png"); 
      foxUp [7] = loadImage("imagens/foxu4.png");

      foxLeft [0] = loadImage("imagens/foxl1.png");
      foxLeft [1] = loadImage("imagens/foxl2.png");
      foxLeft [2] = loadImage("imagens/foxl3.png");
      foxLeft [3] = loadImage("imagens/foxl4.png");
      foxLeft [4] = loadImage("imagens/foxl1.png");
      foxLeft [5] = loadImage("imagens/foxl2.png");
      foxLeft [6] = loadImage("imagens/foxl3.png");
      foxLeft [7] = loadImage("imagens/foxl4.png");

      foxRight [0] = loadImage("imagens/foxr1.png");
      foxRight [1] = loadImage("imagens/foxr2.png");
      foxRight [2] = loadImage("imagens/foxr3.png");
      foxRight [3] = loadImage("imagens/foxr4.png");
      foxRight [4] = loadImage("imagens/foxr1.png");
      foxRight [5] = loadImage("imagens/foxr2.png");
      foxRight [6] = loadImage("imagens/foxr3.png");
      foxRight [7] = loadImage("imagens/foxr4.png");
  
  police[0] = loadImage("imagens/policeR1.png")
  police[1] = loadImage("imagens/policeR2.png")
  police[2] = loadImage("imagens/policeR3.png")
  police[3] = loadImage("imagens/policeR1.png")
  police[4] = loadImage("imagens/policeR2.png")
  police[5] = loadImage("imagens/policeR3.png")
  police[6] = loadImage("imagens/policeR1.png")
  police[7] = loadImage("imagens/policeR2.png")
  police[8] = loadImage("imagens/policeR3.png")
  
  police1[0] = loadImage("imagens/policeL1.png")
  police1[1] = loadImage("imagens/policeL2.png")
  police1[2] = loadImage("imagens/policeL3.png")
  police1[3] = loadImage("imagens/policeL1.png")
  police1[4] = loadImage("imagens/policeL2.png")
  police1[5] = loadImage("imagens/policeL3.png")
  police1[6] = loadImage("imagens/policeL1.png")
  police1[7] = loadImage("imagens/policeL2.png")
  police1[8] = loadImage("imagens/policeL3.png")
  
  ambulancia[0] = loadImage("imagens/ambulanciaR1.png")
  ambulancia[1] = loadImage("imagens/ambulanciaR2.png")
  ambulancia[2] = loadImage("imagens/ambulanciaR3.png")
  ambulancia[3] = loadImage("imagens/ambulanciaR1.png")
  ambulancia[4] = loadImage("imagens/ambulanciaR2.png")
  ambulancia[5] = loadImage("imagens/ambulanciaR3.png")
  ambulancia[6] = loadImage("imagens/ambulanciaR1.png")
  ambulancia[7] = loadImage("imagens/ambulanciaR2.png")
  ambulancia[8] = loadImage("imagens/ambulanciaR3.png")
  
  ambulancia1[0] = loadImage("imagens/ambulanciaL1.png")
  ambulancia1[1] = loadImage("imagens/ambulanciaL2.png")
  ambulancia1[2] = loadImage("imagens/ambulanciaL3.png")
  ambulancia1[3] = loadImage("imagens/ambulanciaL1.png")
  ambulancia1[4] = loadImage("imagens/ambulanciaL2.png")
  ambulancia1[5] = loadImage("imagens/ambulanciaL3.png")
  ambulancia1[6] = loadImage("imagens/ambulanciaL1.png")
  ambulancia1[7] = loadImage("imagens/ambulanciaL2.png")
  ambulancia1[8] = loadImage("imagens/ambulanciaL3.png")
   
  som = loadSound('som/somcarro1.mp3');
  som1 = loadSound('som/scarropolice.mp3');
  somvitoria = loadSound('som/somvitoria.mp3');
  somderrota = loadSound('som/gameover.mp3');
  colisao = loadSound('som/colisao.mp3');
  somambulancia = loadSound('som/somambulancia.mp3');
 
}

function setup(){
  div = createCanvas(720, 540);
  time = 0; 
  clock = 0;
  score = 0;

}


function draw() {
  background(bg);
  if(tela === 'menu'){
    menu();
    
  }
  if(tela === 'creditos'){
    creditos();
  }
  if(tela === 'informacoes'){
    informacoes();
  }
  if(tela === 'iniciar'){
    iniciar();
    
  }
  if(tela === 'iniciar2'){
    iniciar2();
  }
  if(tela === 'iniciar3'){
    iniciar3();
  }
   if(tela === 'iniciar4'){
    iniciar4();
  }
  if(tela === 'iniciar5'){
    iniciar5();
  }
  if(tela === 'derrota'){
    derrota();
  }
  if(tela === 'vitoria'){
    vitoria();
         
  }
  
}

//a partir daqui ficam as telas iniciais 
function menu(){
  strokeWeight(8);
  stroke('black')
  fill('orange')
  textStyle(BOLD)
  textAlign(CENTER,CENTER);
  textSize(35);
  text('CROSSING THE STREET', 360, 120);
  textSize(30)
  if(mouseX > 295 && mouseX < 426 && mouseY > 185 && mouseY < 215){
  fill('green');
  text('INICIAR', 360, 200);
  //sommenu.play(); 
  }else{
    fill('white')
    text('INICIAR', 360,200);
  }
 
  if(mouseX > 247 && mouseX < 472 && mouseY > 285 && mouseY < 315){
  fill('green');
  text('INFORMAÇÕES', 360, 300);
  
  } else {
    fill('white')
    text('INFORMAÇÕES', 360,300);
  }
  
  if(mouseX > 281 && mouseX < 436 && mouseY > 383 && mouseY < 410){
  fill('green');
  text('CRÉDITOS', 360, 400);
  } else {
    fill('white')
    text('CRÉDITOS', 360,400);
  }
  
  
}

function creditos(){
  
  fill('white')
  strokeWeight(5)
  image(imgPerfil, 267, 131, 150, 150);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  textSize(30)
  text('PROGRAMADOR', 350, 70);
  textSize(26)
  text('Igor Pereira de Araújo', 341,310); 
  text('Graduando em Ciência e Tecnologia/UFRN', 341, 343);
  text('E-mail: igor.pereira.008@ufrn.edu.br', 345, 376);
  textSize(20)
  text('VOLTAR', 360, 420);
  if(mouseX > 295 && mouseX < 426 && mouseY > 405 && mouseY < 435){
  fill('green');
  text('VOLTAR', 360, 420);
  } 
   
}

function informacoes(){
 
  fill('white')
  strokeWeight(5)
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  textSize(30)
  text('TUTORIAL', 350, 70);
  textSize(26)
  text('O objetivo do jogo, é a raposa atravessar a',373, 150);
  text('rua chegando no outro lado, na área verde', 321, 178);
  text('evitando colidir com os carros.', 250,206); 
  text('Usando as teclas de setas do teclado para',370, 234);  
  text('movimentar a raposa para cima, para baixo,',330, 263); 
  text('para o lado esquerdo e para o lado direto.', 317, 291);
  textSize(20)
  text('VOLTAR', 360, 420);
  if(mouseX > 295 && mouseX < 426 && mouseY > 415 && mouseY < 430){
  fill('green');
  text('VOLTAR', 360, 420);
  }
}
  function iniciar(){
  background(bgjogo1);
    score=0
    logoGuara=1
    
    frameRate(60)
    
    if(frameCount % 60 == 0){
      clock--
    }
    
    
       if(clocking>120){
        contador++;
        clocking=0;
      }
      
     
    
    
    // função do tempo
    fill('orange');
    time++;
    clock = 100 - int(time/100);
    text("Tempo restante: " + clock,width-470,16);
    text("Score: " + score,width-250,16);
    text("Fase 1",width-675,16);
    if(clock == 0){
      if(vida > 0){
        vida--;
        time = 100;
        iniciar()
      } else {
        derrota()
        somderrota.play();
      }
      
    }
    
  //rect(100, 100, 10, 10)
  fill('orange');
  text("Vidas: "+vida, 670, 16) 
  image(carroamarelo, xc1, 355, 150, 75);
  xc1 += 2
  if ( xc1 >= 720 ){
  xc1 = -100
  }
  image(carroazul, xc2, 190, 150, 75); 
  xc2 += 4
  if ( xc2 >= 720 ){
  xc2 = -100
  }
  image(carrovermelho, xc3, 112, 150, 75); 
  xc3 += 6
  if ( xc3 >= 720 ){
  xc3 = -100
  }
  //image( foxRight[contador%8],xjogador, yjogador, 80, 80);
  if(xjogador == xc1 || xjogador == xc2 || xjogador == xc3 || yjogador == 355 || yjogador == 190 || yjogador == 112){
  
  } 
  
    if((yjogador+80) >= 355 && (yjogador+80) <= 430 && xjogador >= xc1 && xjogador <= (xc1+150)){
      
      xc1 = -100;
      xc2 = -100;
      xjogador = 328;
      yjogador = 460;
      vida--
      colisao.play();
    }

    if((yjogador+80) >= 190 && (yjogador+80) <= 265 && xjogador >= xc2 && xjogador <= (xc2+150)){

      xc1 = -100;
      xc2 = -100;
      xjogador = 328;
      yjogador = 460;
      vida--
      colisao.play();
    }
    
    if((yjogador+80) >= 112 && (yjogador+80) <= 187 && xjogador >= xc3 && xjogador <= (xc3+150)){

      xc1 = -100;
      xc2 = -100;
      xjogador = 328;
      yjogador = 460;
      vida--
      colisao.play();
    }
    
     if(vida == 0){
     tela = "derrota"
     som.stop();  
     somderrota.play();
    }
    if(yjogador <=5){
    
    som.stop();
    som1.loop()
    som1.setVolume(0.1)
    
    xjogador = 328
    yjogador = 460
    xc1= 720
      
    tela = "iniciar2"
      
    clock = 100
      
    time = 100
    if(clock == 96){
    score += 200
      }     
    if(clock <=100 && clock >=90){
    score += 100
      }
    if(clock <90){
    score +=50
    }
    }
    time02++;
    
  if(keyIsPressed && yjogador >=5 && keyCode==UP_ARROW){    //direcionar o cursor p/ cima
    yjogador -= 5
    statusF = 3
  }
  else if(keyIsPressed && yjogador <=455 && keyCode==DOWN_ARROW){  //direcionar o cursor p/ baixo
    yjogador += 5
    statusF = 4
     }
  else if(keyIsPressed && xjogador >=5 && keyCode==LEFT_ARROW){    //direcionar o cursor p/ lado esquerdo
    xjogador -= 5
    statusF = 2
  }
  else if(keyIsPressed && xjogador <=635 && keyCode==RIGHT_ARROW){  //direcionar o cursor p/ lado direito
    xjogador += 5
    statusF = 1;
     }else{
        statusF = 0;
      }
    
      if(statusF==0){
        image(foxUp[contador%8], xjogador, yjogador, 80, 80);
      }
      else if(statusF==1){
        image(foxRight[contador%8], xjogador, yjogador, 80, 80);
      }
      else if(statusF==2){
        image(foxLeft[contador%8], xjogador, yjogador, 80, 80);
      }
      else if(statusF==3){
        image(foxUp[contador%8], xjogador, yjogador, 80, 80);
      }
      else if(statusF==4){
        image(foxDown[contador%8], xjogador, yjogador, 80, 80);
      } if(time02>10){
        contador++;
        time02=0;
    }
  
    
  if(mouseX > 7 && mouseX < 88 && mouseY > 507 && mouseY < 530){
    
  fill('green');
  text('VOLTAR', 50, 520);
  } else {
  fill('orange')
  strokeWeight(5)
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  textSize(20)
  text('VOLTAR', 50, 520);
  //textSize(20);
  //text(parseInt(mouseX) + " " + parseInt(mouseY), 50, 50);  
  }
    
    
  }

function iniciar2(){
  background(bgjogo2);
  
  frameRate(60)
    
    if(frameCount % 60 == 0){
      clock--
    }
  
  /*
  if(playsound()){
    som1.loop();
    som1.setVolume(0.1)
}
*/
  // função do tempo
    fill('orange');
    time++;
    clock = 100 - int(time/100);
    text("Tempo restante: " + clock,width-470,16);
    text("Score: " + score,width-250,16);
    text("Fase 2",width-675,16);
  
    if(clock == 0){
      if(vida > 0){
        vida--;
        time = 100;
        iniciar2()
      } else {
        derrota()
        somderrota.play();
      }
    }
  //rect(100, 100, 10, 10)
  fill('orange');
  text("Vidas: "+vida, 670, 16) 
  
  image(carroamareloi, xc1, 355, 150, 75);
  xc1 -= 3.5
  if ( xc1 <= -150 ){
  xc1 = 720
  }
  image(carroazul, xc2, 190, 150, 75); 
  xc2 += 5.5
  if ( xc2 >= 720 ){
  xc2 = -100
  }
  image(police1[km%9], xc3, 65, 170, 170);
  xc3 -= 6.5
  if ( xc3 <= -100){
  xc3 = 720
  }
  velocit++
  image(police[km%9], xc4, yc4, 170, 170); 
  if(velocit>5){
    km++;
    velocit=0;
  }
  xc4 += 4.5
  if ( xc4 >= 720 ){
  xc4 = -100
  }
  //image(FOXF1, xjogador, yjogador, 80, 80);
  if(xjogador == xc1 || xjogador == xc2 || xjogador == xc3 || xjogador == xc4 ||yjogador == 355 || yjogador == 190 || yjogador == 112 || yjogador == 275){
  
  } 
  
    if((yjogador+80) >= 355 && (yjogador+80) <= 430 && xjogador >= xc1 && xjogador <= (xc1+150)){

      xc1 = -100;
      xc2 = -100;
      xjogador = 328;
      yjogador = 460;
      vida--
      colisao.play();
    }

    if((yjogador+80) >= 190 && (yjogador+80) <= 265 && xjogador >= xc2 && xjogador <= (xc2+150)){

      xc1 = -100;
      xc2 = -100;
      xjogador = 328;
      yjogador = 460;
      vida--
      colisao.play();
    }
    
    if((yjogador+80) >= 112 && (yjogador+80) <= 187 && xjogador >= xc3 && xjogador <= (xc3+150)){

      xc1 = -100;
      xc2 = -100;
      xjogador = 328;
      yjogador = 460;
      vida--
      colisao.play();
    }
  
  if((yjogador+80) >= yc4 && (yjogador+80) <= yc4 + 170 && xjogador >= xc4 && xjogador <= (xc4+150)){

      xc1 = -100;
      xc2 = -100;
      xjogador = 328;
      yjogador = 460;
      vida--
      colisao.play();
    }
    
     if(vida == 0){
     tela = "derrota"
     som1.stop();   
     somderrota.play();
    }
    if(yjogador <=5){
    tela = "iniciar3"
    clock = 100
    som1.stop();
    xjogador = 328
    yjogador = 460
    xc1= 720
    time = 100
    if(clock <=100 && clock >=90){
    score += 100
      }
    if(clock <90){
    score +=50
    }
      
    somambulancia.loop();
    somambulancia.setVolume(0.5)
      
    }
    
    time02++;
    
  if(keyIsPressed && yjogador >=5 && keyCode==UP_ARROW){    //direcionar o cursor p/ cima
    yjogador -= 5
    statusF = 3
  }
  else if(keyIsPressed && yjogador <=455 && keyCode==DOWN_ARROW){  //direcionar o cursor p/ baixo
    yjogador += 5
    statusF = 4
     }
  else if(keyIsPressed && xjogador >=5 && keyCode==LEFT_ARROW){    //direcionar o cursor p/ lado esquerdo
    xjogador -= 5
    statusF = 2
  }
  else if(keyIsPressed && xjogador <=635 && keyCode==RIGHT_ARROW){  //direcionar o cursor p/ lado direito
    xjogador += 5
    statusF = 1;
     }else{
        statusF = 0;
      }
    
      if(statusF==0){
        image(foxUp[contador%8], xjogador, yjogador, 80, 80);
      }
      else if(statusF==1){
        image(foxRight[contador%8], xjogador, yjogador, 80, 80);
      }
      else if(statusF==2){
        image(foxLeft[contador%8], xjogador, yjogador, 80, 80);
      }
      else if(statusF==3){
        image(foxUp[contador%8], xjogador, yjogador, 80, 80);
      }
      else if(statusF==4){
        image(foxDown[contador%8], xjogador, yjogador, 80, 80);
      } if(time02>10){
        contador++;
        time02=0;
    }
  
  if(mouseX > 7 && mouseX < 88 && mouseY > 507 && mouseY < 530){
    
  fill('green');
  text('VOLTAR', 50, 520);
  } else {
  fill('orange')
  strokeWeight(5)
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  textSize(20)
  text('VOLTAR', 50, 520);
    
  }

}

function iniciar3(){
  background(bgjogo3);
  
  frameRate(60)
    
    if(frameCount % 60 == 0){
      clock--
    }
  
    
  // função do tempo
    fill('orange');
    time++;
    clock = 100 - int(time/100);
    text("Tempo restante: " + clock,width-470,16);
    text("Score: " + score,width-250,16);
    text("Fase 3",width-675,16);
  
    if(clock == 0){
      if(vida > 0){
        vida--;
        time = 100;
        iniciar3()
      } else {
        derrota()
        somderrota.play();
      }
    }
  //rect(100, 100, 10, 10)
  fill('orange');
  text("Vidas: "+vida, 670, 16) 
  
  image(carroamareloi, xc1, 355, 150, 75);
  xc1 -= 4
  if ( xc1 <= -150 ){
  xc1 = 720
  }
  image(carroazuli, xc2, 190, 150, 75); 
  xc2 -= 6
  if ( xc2 <= -150 ){
  xc2 = 720
  }
  image(ambulancia[km%9], xc3, 65, 170, 170); 
  xc3 += 7
  if ( xc3 >= 720 ){
  xc3 = -100
  }
  velocit++
  image(ambulancia1[km%9], xc4, yc4, 170, 170); 
  if(velocit>5){
    km++;
    velocit=0;
  }
  xc4 -= 4.5
  if ( xc4 <= -100){
  xc4 = 720
  }
  //image(raposa1, xjogador, yjogador, 80, 80);
  if(xjogador == xc1 || xjogador == xc2 || xjogador == xc3 || xjogador == xc4 ||yjogador == 355 || yjogador == 190 || yjogador == 112 || yjogador == 275){
  
  } 
  
    if((yjogador+80) >= 355 && (yjogador+80) <= 430 && xjogador >= xc1 && xjogador <= (xc1+150)){

      xc1 = -100;
      xc2 = -100;
      xjogador = 328;
      yjogador = 460;
      vida--
      colisao.play();
    }

    if((yjogador+80) >= 190 && (yjogador+80) <= 265 && xjogador >= xc2 && xjogador <= (xc2+150)){

      xc1 = -100;
      xc2 = -100;
      xjogador = 328;
      yjogador = 460;
      vida--
      colisao.play();
    }
    
    if((yjogador+80) >= 112 && (yjogador+80) <= 187 && xjogador >= xc3 && xjogador <= (xc3+150)){

      xc1 = -100;
      xc2 = -100;
      xjogador = 328;
      yjogador = 460;
      vida--
      colisao.play();
    }
  
  if((yjogador+80) >= yc4 && (yjogador+80) <= yc4 + 170 && xjogador >= xc4 && xjogador <= (xc4+150)){

      xc1 = -100;
      xc2 = -100;
      xjogador = 328;
      yjogador = 460;
      vida--
      colisao.play();
    }
    
     if(vida == 0){
     tela = "derrota"
     som1.stop();
     somambulancia.stop();
     somderrota.play();
    }
   if(yjogador <=5){
    tela = "iniciar4"
     clock = 100
    somambulancia.stop();
    som1.loop();
    som1.setVolume(0.1)
    xjogador = 328
    yjogador = 460
    xc1= 720
    time = 100
    if(clock <=100 && clock >=90){
    score += 100
      }
    if(clock <90){
    score +=50
    }
    
    }
    
 time02++;
    
  if(keyIsPressed && yjogador >=5 && keyCode==UP_ARROW){    //direcionar o cursor p/ cima
    yjogador -= 5
    statusF = 3
  }
  else if(keyIsPressed && yjogador <=455 && keyCode==DOWN_ARROW){  //direcionar o cursor p/ baixo
    yjogador += 5
    statusF = 4
     }
  else if(keyIsPressed && xjogador >=5 && keyCode==LEFT_ARROW){    //direcionar o cursor p/ lado esquerdo
    xjogador -= 5
    statusF = 2
  }
  else if(keyIsPressed && xjogador <=635 && keyCode==RIGHT_ARROW){  //direcionar o cursor p/ lado direito
    xjogador += 5
    statusF = 1;
     }else{
        statusF = 0;
      }
    
      if(statusF==0){
        image(foxUp[contador%8], xjogador, yjogador, 80, 80);
      }
      else if(statusF==1){
        image(foxRight[contador%8], xjogador, yjogador, 80, 80);
      }
      else if(statusF==2){
        image(foxLeft[contador%8], xjogador, yjogador, 80, 80);
      }
      else if(statusF==3){
        image(foxUp[contador%8], xjogador, yjogador, 80, 80);
      }
      else if(statusF==4){
        image(foxDown[contador%8], xjogador, yjogador, 80, 80);
      } if(time02>10){
        contador++;
        time02=0;
    }
  
  if(mouseX > 7 && mouseX < 88 && mouseY > 507 && mouseY < 530){
    
  fill('green');
  text('VOLTAR', 50, 520);
  } else {
  fill('orange')
  strokeWeight(5)
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  textSize(20)
  text('VOLTAR', 50, 520);
  //textSize(20);
  //text(parseInt(mouseX) + " " + parseInt(mouseY), 50, 50);  
  }
  }

function iniciar4(){
  background(bgjogo4);
  
  frameRate(60)
    
    if(frameCount % 60 == 0){
      clock--
    }
  
  /*
   if(playsound()){
    som1.play();
    som1.setVolume(0.1)
   }
   */
   // função do tempo
    fill('orange');
    time++;
    clock = 100 - int(time/100);
    text("Tempo restante: " + clock,width-470,16);
    text("Score: " + score,width-250,16);
    text("Fase 4",width-675,16);
    
    if(clock == 0){
      if(vida > 0){      vida--;
        time = 100;
        iniciar4()
      } else {
        derrota()
        somderrota.play();
      }
    }
  
  //rect(100, 100, 10, 10)
  fill('orange');
  text("Vidas: "+vida, 670, 16) 
  
  image(carroazuli, xc1, 355, 150, 75);
  xc1 -= 4
  if ( xc1 <= -150 ){
  xc1 = 720
  }
  image(carroamarelo, xc2, 190, 150, 75); 
  xc2 += 5
  if ( xc2 >= 720 ){
  xc2 = -100
  }
  image(police[km%9], xc3, 65, 170, 170);
  xc3 += 6.5
  if ( xc3 >= 720){
  xc3 = -100
  }
  velocit++
  image(police1[km%9], xc4, yc4, 170, 170); 
  if(velocit>5){
    km++;
    velocit=0;
  }
  xc4 -= 4.5
  if ( xc4 <= -100 ){
  xc4 = 720
  }
  //image(raposa1, xjogador, yjogador, 80, 80);
  if(xjogador == xc1 || xjogador == xc2 || xjogador == xc3 || xjogador == xc4 ||yjogador == 355 || yjogador == 190 || yjogador == 112 || yjogador == 275){
  
  } 
  
    if((yjogador+80) >= 355 && (yjogador+80) <= 430 && xjogador >= xc1 && xjogador <= (xc1+150)){

      xc1 = -100;
      xc2 = -100;
      xjogador = 328;
      yjogador = 460;
      vida--
      colisao.play();
    }

    if((yjogador+80) >= 190 && (yjogador+80) <= 265 && xjogador >= xc2 && xjogador <= (xc2+150)){

      xc1 = -100;
      xc2 = -100;
      xjogador = 328;
      yjogador = 460;
      vida--
      colisao.play();
    }
    
    if((yjogador+80) >= 112 && (yjogador+80) <= 187 && xjogador >= xc3 && xjogador <= (xc3+150)){

      xc1 = -100;
      xc2 = -100;
      xjogador = 328;
      yjogador = 460;
      vida--
      colisao.play();
    }
  
  if((yjogador+80) >= yc4 && (yjogador+80) <= yc4 + 170 && xjogador >= xc4 && xjogador <= (xc4+150)){

      xc1 = -100;
      xc2 = -100;
      xjogador = 328;
      yjogador = 460;
      vida--
      colisao.play();
    }
    
     if(vida == 0){
     tela = "derrota"
     som1.stop();  
     somderrota.play();
    }
    if(yjogador <=5){
    tela = "iniciar5"
    clock = 100
    som1.stop();
    som.loop();
    som.setVolume(0.1)
    xjogador = 328
    yjogador = 460
    xc1= 720
    time = 100
    if(clock <=100 && clock >=90){
    score += 100
      }
    if(clock <90){
    score +=50
    }
    
    }
    
   time02++;
    
  if(keyIsPressed && yjogador >=5 && keyCode==UP_ARROW){    //direcionar o cursor p/ cima
    yjogador -= 5
    statusF = 3
  }
  else if(keyIsPressed && yjogador <=455 && keyCode==DOWN_ARROW){  //direcionar o cursor p/ baixo
    yjogador += 5
    statusF = 4
     }
  else if(keyIsPressed && xjogador >=5 && keyCode==LEFT_ARROW){    //direcionar o cursor p/ lado esquerdo
    xjogador -= 5
    statusF = 2
  }
  else if(keyIsPressed && xjogador <=635 && keyCode==RIGHT_ARROW){  //direcionar o cursor p/ lado direito
    xjogador += 5
    statusF = 1;
     }else{
        statusF = 0;
      }
    
      if(statusF==0){
        image(foxUp[contador%8], xjogador, yjogador, 80, 80);
      }
      else if(statusF==1){
        image(foxRight[contador%8], xjogador, yjogador, 80, 80);
      }
      else if(statusF==2){
        image(foxLeft[contador%8], xjogador, yjogador, 80, 80);
      }
      else if(statusF==3){
        image(foxUp[contador%8], xjogador, yjogador, 80, 80);
      }
      else if(statusF==4){
        image(foxDown[contador%8], xjogador, yjogador, 80, 80);
      } if(time02>10){
        contador++;
        time02=0;
    }
  
  if(mouseX > 7 && mouseX < 88 && mouseY > 507 && mouseY < 530){
    
  fill('green');
  text('VOLTAR', 50, 520);
  } else {
  fill('orange')
  strokeWeight(5)
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  textSize(20)
  text('VOLTAR', 50, 520);
 
  }
  }

function iniciar5(){
  background(bgjogo5);
  
  frameRate(60)
    
    if(frameCount % 60 == 0){
      clock--
    }
  
  
   // função do tempo
    fill('orange');
    time++;
    clock = 100 - int(time/100);
    text("Tempo restante: " + clock,width-470,16);
    text("Score: " + score,width-250,16);
    text("Fase 5",width-675,16);
    
    if(clock == 0){
      if(vida > 0){
        vida--;
        time = 100;
        iniciar5()
      } else {
        derrota()
        somderrota.play();
      }
    }
  
  //rect(100, 100, 10, 10)
  fill('orange');
  text("Vidas: "+vida, 670, 16) 
  
  image(carroamareloi, xc1, 355, 150, 75);
  xc1 -= 5
  if ( xc1 <= -150 ){
  xc1 = 720
  }
  image(carroazuli, xc2, 190, 150, 75); 
  xc2 -= 7
  if ( xc2 <= -150){
  xc2 = 720
  }
  image(carrovermelhoi, xc3, 112, 150, 75); 
  xc3 -= 8
  if ( xc3 <= -150 ){
  xc3 = 720
  }
  velocit++
  image(carroverdei, xc4, 275, 150, 75); 
  if(velocit>5){
    km++;
    velocit=0;
  }
  xc4 -= 6
  if ( xc4 <= -100 ){
  xc4 = 720
  }
  //image(raposa1, xjogador, yjogador, 80, 80);
  if(xjogador == xc1 || xjogador == xc2 || xjogador == xc3 || xjogador == xc4 ||yjogador == 355 || yjogador == 190 || yjogador == 112 || yjogador == 275){
  
  } 
  
    if((yjogador+80) >= 355 && (yjogador+80) <= 430 && xjogador >= xc1 && xjogador <= (xc1+150)){

      xc1 = -100;
      xc2 = -100;
      xjogador = 328;
      yjogador = 460;
      vida--
      colisao.play();
    }

    if((yjogador+80) >= 190 && (yjogador+80) <= 265 && xjogador >= xc2 && xjogador <= (xc2+150)){

      xc1 = -100;
      xc2 = -100;
      xjogador = 328;
      yjogador = 460;
      vida--
      colisao.play();
    }
    
    if((yjogador+80) >= 112 && (yjogador+80) <= 187 && xjogador >= xc3 && xjogador <= (xc3+150)){

      xc1 = -100;
      xc2 = -100;
      xjogador = 328;
      yjogador = 460;
      vida--
      colisao.play();
    }
  
  if((yjogador+80) >= yc4 && (yjogador+80) <= yc4 + 170 && xjogador >= xc4 && xjogador <= (xc4+150)){

      xc1 = -100;
      xc2 = -100;
      xjogador = 328;
      yjogador = 460;
      vida--
      colisao.play();
    }
    
  
     if(vida == 0){
     tela = "derrota"
     som.stop(); 
     som1.stop();
     somderrota.play();
    }
  
    if(yjogador <=5){
    tela = "vitoria"
    som.stop();
    som1.stop();
    somvitoria.play();
    
    if(clock <=100 && clock >=90){
    score += 100
    }
    if(clock <90){
    score +=50
    }
    }
    
   time02++;
    
  if(keyIsPressed && yjogador >=5 && keyCode==UP_ARROW){    //direcionar o cursor p/ cima
    yjogador -= 5
    statusF = 3
  }
  else if(keyIsPressed && yjogador <=455 && keyCode==DOWN_ARROW){  //direcionar o cursor p/ baixo
    yjogador += 5
    statusF = 4
     }
  else if(keyIsPressed && xjogador >=5 && keyCode==LEFT_ARROW){    //direcionar o cursor p/ lado esquerdo
    xjogador -= 5
    statusF = 2
  }
  else if(keyIsPressed && xjogador <=635 && keyCode==RIGHT_ARROW){  //direcionar o cursor p/ lado direito
    xjogador += 5
    statusF = 1;
     }else{
        statusF = 0;
      }
    
      if(statusF==0){
        image(foxUp[contador%8], xjogador, yjogador, 80, 80);
      }
      else if(statusF==1){
        image(foxRight[contador%8], xjogador, yjogador, 80, 80);
      }
      else if(statusF==2){
        image(foxLeft[contador%8], xjogador, yjogador, 80, 80);
      }
      else if(statusF==3){
        image(foxUp[contador%8], xjogador, yjogador, 80, 80);
      }
      else if(statusF==4){
        image(foxDown[contador%8], xjogador, yjogador, 80, 80);
      } if(time02>10){
        contador++;
        time02=0;
    }
  
  if(mouseX > 7 && mouseX < 88 && mouseY > 507 && mouseY < 530){
    
  fill('green');
  text('VOLTAR', 50, 520);
  } else {
  fill('orange')
  strokeWeight(5)
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  textSize(20)
  text('VOLTAR', 50, 520);
 
  }
  }


function vitoria(){
  fill('white')
  strokeWeight(5)
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  textSize(30)
  text('VITÓRIA', 350, 70);
  image(ivitoria, 10, 10, 720, 540);
  textSize(40)
  text('Parabéns você conseguiu!', 360, 270);
  text("Score: "+score, 360, 340);
  textSize(20)
  text('VOLTAR', 360, 420);
  if(mouseX > 295 && mouseX < 426 && mouseY > 415 && mouseY < 430){
  fill('green');
  text('VOLTAR', 360, 420);
   
  
  }  
}

function derrota(){
  
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  textSize(30)
  fill('white')
  strokeWeight(5)
  background(0);
  textSize(20);
  fill(255, 0, 0);
  fill(255, 255, 255);  
  text("Você falhou!", 360, 200);
  text("Vidas: "+vida, 360, 270);
  text("Score: "+score, 360, 340);
  fill('red')
  textSize(40)
  text('GAME OVER', 350, 70);
  textSize(26)
  textSize(20)
  text('VOLTAR', 360, 420);
  if(mouseX > 295 && mouseX < 426 && mouseY > 405 && mouseY < 435){
  fill('green');
  text('VOLTAR', 360, 420);
 
    }
   
 
}

//a partir daqui, funções de mouse
function mousePressed(){
  if(tela === 'menu'){
    //mouseMenu();
    mouseIniciar();
    mouseInformacoes();
    mouseCreditos();
  }
  if(tela === 'creditos'){
    mouseMenu();
  }
  if(tela === 'informacoes'){
    mouseMenu();
  }
  if(tela!='iniciar'){
       
  }
  if(tela === 'iniciar'){
    mouseMenu1();
    //som.stop();
    //som.play();
  }
   if(tela === 'iniciar2'){
    mouseMenu1();
    
  }
  if(tela === 'iniciar3'){
    mouseMenu1();
  }
   if(tela === 'iniciar4'){
    mouseMenu1();
  }
  if(tela === 'iniciar5'){
    mouseMenu1();
  }
   if(tela === 'derrota'){
    mouseDerrota();
    
  }
  if(tela === 'vitoria'){
    mouseVitoria();
  }
}
  

function mouseCreditos(){
 if(mouseX > 281 && mouseX < 436 && mouseY > 383 && mouseY < 410){ 
    tela = 'creditos'  
    console.log("CLICOU EM CRÉDITOS");
 }
}

function mouseMenu(){
  if(mouseX > 295 && mouseX < 426 && mouseY > 405 && mouseY < 450){ 
    tela = 'menu'
    clock = 0
    som.stop();
    som1.stop();
    somambulancia.stop();
    console.log("clicou em voltar");
  }
}
 // Voltar para o menu inicar de todas as fases
function mouseMenu1(){
  if(mouseX > 7 && mouseX < 88 && mouseY > 507 && mouseY < 530){ 
    tela = 'menu'
    clock = 100
    som.stop();
    som1.stop();
    somambulancia.stop();
    console.log("clicou em voltar");
    
  }
}

function mouseInformacoes(){
  if(mouseX > 247 && mouseX < 472 && mouseY > 285 && mouseY < 315){ 
    tela = 'informacoes'
    console.log("clicou em Informações");
  }
}

function mouseIniciar(){
  if(mouseX > 295 && mouseX < 426 && mouseY > 185 && mouseY < 215){ 
    tela = 'iniciar'
    clock = 100
    
    console.log("clicou em Iniciar");
    vida = 5
    xjogador = 328;
    yjogador = 460;
    
   // if(playsound()){
    som.loop();
    som.setVolume(0.1)
     
    //}
    
  }
}

function mouseDerrota(){
  if(mouseX > 295 && mouseX < 426 && mouseY > 405 && mouseY < 435){
    tela = 'menu'
    som.stop();
    som1.stop();
    somambulancia.stop();
    somderrota.stop();
    console.log("clicou em voltar")
  }
}

function mouseVitoria(){
  if(mouseX > 295 && mouseX < 426 && mouseY > 405 && mouseY < 450){
    tela = 'menu'
    som.stop();
    somambulancia.stop();
    somvitoria.stop();
    console.log("clicou em voltar")
  }
}
