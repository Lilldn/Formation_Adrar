/*
//A1
//Initialisation
setPos(300,300);
faceDown();
changeColor(color.red);
setLineWidth(10);

//Réalisation
forward(200);
faceRight();
forward(100);
*/

/*
//A2
//Initialisation
setPos(300,300);
faceLeft();
changeColor(color.yellow);
setLineWidth(10);

//Réalisation
forward(100);
faceDown();
forward(100);
faceRight();
forward(200);
faceUp();
forward(200);
*/

/*
//A3
//Initialisation
setPos(300,300);
faceLeft();
changeColor(color.red);
setLineWidth(10);

//Réalisation
forward(100);
faceRight();
forward(200);
faceLeft();
forward(100);
faceDown();
forward(100);
faceUp();
forward(200);
*/

/*
//A4
//Initialisation
setPos(200,300);
faceRight();
changeColor(color.green);
setLineWidth(10);

//Réalisation
forward(200);
arcLeft(50,180);
forward(100);
arcRight(50,180);
forward(200);
*/

/*
//A5
//Initialiation
setPos(300,150);
faceRight();
changeColor(color.blue);
setLineWidth(10);

//Réalisation
arcRight(100,360);
arcRight(50,180);
arcLeft(50,180);
*/

/*
//A6
//Initialisation
setPos(300,500);
faceUp();
changeColor(color.blue);
setLineWidth(10);

//Réalisation
forward(100);
up();
forward(100);
down();
forward(200);
*/

/*
//A7
//Initialisation
setPos(250,300);
faceDown();
changeColor(color.green);
setLineWidth(10);

//Réalisation
forward(200);
arcLeft(50,180);
forward(100);
up();
forward(100);
down();
forward(200);
arcLeft(50,180);
forward(100);
*/

/*
//A8
//Initialisation
setPos(200,200);
faceUp();
changeColor(color.fuchsia);
setLineWidth(10);

//Réalisation
forward(100);
faceRight();
forward(200);
faceDown();
forward(400);
faceLeft();
forward(100);
up();
forward(100);
faceUp();
forward(100);
down();
forward(100);
*/

/*
//A9
//Initialisation
setPos(300,300);
faceRight();
changeColor(color.blue);
setLineWidth(10);

//Réalisation
forward(200);
faceLeft();
arcRight(25,180)
arcLeft(25,180);
forward(200);
arcLeft(25,180);
arcRight(25,180);
*/

/*
//A10
//Initialisation
setPos(300,300);
faceRight();
changeColor(color.red);
setLineWidth(10);

//Réalisation
arcLeft(25,180);
changeColor(color.green);
arcLeft(50,180);
changeColor(color.yellow);
arcLeft(100,180);
*/

/*
//A11
//Initialisation
setPos(200,300);
faceUp();
changeColor(color.blue);
setLineWidth(10);

//Réalisation
arcRight(25,180);
up();
faceRight();
forward(50);
down();
faceUp();
arcRight(25,180);
up();
forward(25);
faceLeft();
forward(25);
down();
changeColor(color.fuchsia);
faceDown();
arcRight(50,180);
*/

/*
//B1
//Initialisation
setPos(300,300);
changeColor(color.green);
setLineWidth(10);
faceRight();

//Réalisation
for(let i = 0 ; i < 4 ; i++) {
    forward(50);
    faceDown();
    forward(50);
    faceRight();
}
*/

/*
//B2
//Initialisation
setPos(100,100);
changeColor(color.red);
setLineWidth(10);
faceUp();

//Réalisation
for(let i = 0 ; i < 4 ; i++) {
    forward(50);
    faceRight();
    forward(50);
    faceDown();
    forward(50);
    faceRight();
    forward(50);
    faceUp();
}
*/

/*
//B3
//Initialisation
setPos(100,200);
changeColor(color.fuchsia);
setLineWidth(10);
faceRight();

//Réalisation
for(let i = 0 ; i < 4 ; i++) {
    forward(50);
    right(90);
}
*/

/*
//B4
//Initialisation
setPos(100,200)
changeColor(color.blue);
setLineWidth(10);
faceRight();

//Réalisation
for(let i = 0 ; i < 3 ; i++) {
    forward(50);
    left(180-60);
}
*/

/*
//B5
//Initialisation
setPos(300,300);
changeColor(color.blue);
faceUp();
setLineWidth(10);

//Réalisation
forward(100);
changeColor(color.red);
for(let  i = 0 ; i < 3 ; i++){
    forward(50);
    right (180-60);
}
*/

/*
//B6
//Initialisation
setPos(100,300);
changeColor(color.red);
faceRight();
setLineWidth(10);

//Réalisation
for(let i = 0 ; i < 2 ; i++){
    forward(50);
    faceUp();
    forward(50)
    faceRight();
}
changeColor(color.green);
for(let i = 0 ; i < 3 ; i++){
    faceRight();
    forward(50);
    faceDown();
    forward(50);
}
*/

/*
//B7
//Initialisation
setPos(100,300);
changeColor(color.red);
faceRight();
setLineWidth(10);

//Réalisation
for(let i = 0 ; i < 4 ; i++){
    forward(50);
    right(90);
}
faceRight();
left(180-120);
for(let i = 0 ; i < 2 ; i++){
    forward(50);
    right(180-60);
}
*/

/*
//B8
//Initialisation
setPos(100,300);
changeColor(color.yellow);
faceRight();
setLineWidth(10);

//Réalisation
for(let i = 0 ; i < 8 ; i++){
    forward(200);
    right(180-45);
}
*/

/*
//B9
//Initialisation
setPos(100,300);
changeColor(color.fuchsia);
faceRight();
setLineWidth(10);

//Réalisation
forward(50);
up();
forward(50);
down();
for(let i = 0 ; i < 3 ; i++){
    forward(100);
    right(180-60);
}
*/

/*
//B10
//Initialisation
setPos(100,300);
changeColor(color.blue);
faceRight();
setLineWidth(5);

//Réalisation
for(let i = 0 ; i < 8 ; i++){
    forward(50);
    right(180-45);
}

up();
forward(100);
faceUp();
down();
changeColor(color.fuchsia);

for(let i = 0 ; i < 8 ; i++){
    forward(100);
    right(180-45);
}

up();
faceDown();
forward(100);
down();
changeColor(color.yellow);

for(let i = 0 ; i < 8 ; i++){
    forward(50);
    right(180-45);
}
*/

/*
//B11
//Initialisation
setPos(150,300);
changeColor(color.red);
faceRight();
setLineWidth(5);

//Réalisation
for(let i = 0 ; i < 4 ; i++){
    forward(50);
    left(90)
    forward(50);
    right(90);
    forward(50);
    right(90);
}
*/

/*
//B12
//Initialisation
setPos(150,300);
changeColor(color.fuchsia);
faceRight();
setLineWidth(5);

//Réalisation
faceDown();
for(let i = 0 ; i < 3 ; i++){
    forward(50);
    right(90);
}

faceUp();
up();
forward(50);
down();
changeColor(color.green);
for(let i = 0 ; i < 3 ; i++){
    forward(50);
    right(90);
}
*/

/*
//B13
//Initialisation
setPos(200,200);
changeColor(color.green);
faceRight();
setLineWidth(5);

//Réalisation
for(let i = 0 ; i < 8 ; i++){
    forward(100);
    left(135);
    forward(50);
    right(90);
    forward(50);
    right(90)
}
*/

/*
//B14
//Initialisation
setPos(200,200);
changeColor(color.yellow);
faceRight();
setLineWidth(5);

//Réalisation
for(let i = 0 ; i < 8 ; i++){
    forward(50);
    right(120);
    forward(75);
    left(120);
    forward(50)
}
*/

/*
//C1
//Initialisation
setPos(100,300);
changeColor(color.blue);
faceRight();
setLineWidth(5);

//Réalisation
for(let i = 0 ; i < 4 ; i++){
    for(let j = 0 ; j < 3 ; j++){
        forward(50);
        right(120);
    }
    forward(50);
}
*/

/*
//C2
//Initialisation
setPos(100,500);
changeColor(color.fuchsia);
faceUp();
setLineWidth(5);

//Réalisation
for(let i = 0 ; i < 5 ; i++){
    for(let j = 0 ; j < 4 ; j++){
        forward(50);
        right(90);
    }
    up();
    forward(100);
    down();
}
*/

/*
//C3
//Initialisation
setPos(100,300);
shiftColor(0.45);
faceRight();
setLineWidth(5);

//Réalisation
for(let i = 0 ; i < 3 ; i++){
    for(let j = 0 ; j < 8 ; j++){
        forward(100);
        right(180-45);
    }
    up();
    forward(200);
    down();
    shiftColor(0.1);
}
*/

/*
//C4
//Initialisation
setPos(100,300); 
changeColor(color.red)
faceRight();
setLineWidth(5);

//Réalisation
for(let i = 0 ; i < 5 ; i++){
    for(let k = 0 ; k < 3 ; k++){
        forward(50);
        left(120);
    }
    changeColor(color.yellow);
    for(let j = 0 ; j < 4 ; j++){
        forward(50);
        right(90);
    }
    changeColor(color.red);
    up();
    forward(100);
    down();
}
*/

/*
//C5
//Initialisation
setPos(300,300); 
faceRight();
setLineWidth(5);
shiftColor(1/6);

//Réalisation
for(let i = 0 ; i < 4 ; i++){
    for(let j = 0 ; j < 8 ; j++){
        forward(100);
        left(180-45);
    }
    right(90);
    shiftColor(0.25);
}
*/

/*
//C6
//Initialisation
setPos(200,300); 
faceRight();
setLineWidth(5);
changeColor(color.yellow);

//Réalisation
for(let i = 0 ; i < 3 ; i++){
    for(let j = 0 ; j < 5 ; j++){
        forward(100);
        left(180-60);
    }
    right(180-60);
}
*/

/*
//C7
//Initialisation
setPos(250,300); 
faceRight();
setLineWidth(5);
changeColor(color.yellow);

//Réalisation
for(let i = 0 ; i < 8 ; i++){
    for(let j = 0 ; j < 3 ; j++){
        forward(50);
        right(180-60);
    }
    forward(50)
    left(180-135)
}
*/

/*
//C8
//Initialisation
setPos(300,500); 
faceUp();
setLineWidth(5);
changeColor(color.green);

//Réalisation
forward(200);
left(180-135);
for(let i = 0 ; i < 4 ; i++){
    changeColor(color.red);
    for(let j = 0 ; j < 3 ; j++){
        forward(100);
        left(180-60);
    }
    changeColor(color.yellow);
    forward(100);
    right(180-90);
}
*/

/*
//D9
//Initialisation
setPos(300,300); 
faceRight();
changeColor(color.blue);
setLineWidth(5);

//Réalisation
let longueur = 50;
for(let i = 0 ; i < 6 ; i++){
    forward(longueur);
    right(180-60);
    longueur = longueur + 50
}
*/

/*
//D10
//Initialisation
setPos(300,300);
faceRight();
changeColor(color.yellow);
setLineWidth(5);

//Réalisation
let longueur = 50;
for(let i = 0 ; i < 10 ; i++){
    forward(longueur);
    right(90);
    longueur += 25;
}
*/

/*
//D11
//Initialisation
setPos(100,300);
faceRight();
changeColor(color.grey);
setLineWidth(5);

//Réalisation
let longueur = 125;
for(let j = 0 ; j < 5 ; j++){
    for(let i = 0 ; i < 3 ; i++){
        forward(longueur);
        left(180-60);
    }
    forward(longueur);
    longueur -= 25;
}
*/