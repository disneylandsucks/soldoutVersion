const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight
let img, img2, mod, shirt
let bg, wg;
let imgs = [], imageCounter = 0
let theta = 0

let clicked = false

function preload(){
    audio = createAudio("Katy Perry - Firework (Acoustic Session) REMASTERED.mp3");
    // audio = createAudio("Carly Rae Jepsen - Call Me Maybe (Audio) [TubeRipper.com].m4a");

imgs[0]= loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1667320480/yellow_red_qwsvgm.jpg')
 imgs[1] = loadImage('https://media.tenor.com/MzHlcOrTROIAAAAC/steve-harvey-sorry-about-that.gif') 
    imgs[2]= loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1665773929/OSKI_BIRTHDAY_SHIRT3d_resized_or4zka.png')
 // imgs[3] = loadImage('https://data.whicdn.com/images/341092582/original.gif') 
  imgs[4]= loadImage('https://media.tenor.com/AsTgvSWKJwMAAAAM/blood-sticker.gif')
  imgs[5]= loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1665773929/bottledloveshirt3d_flsb0r.png')
  imgs[6] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1665884116/NOTEBOOKSHIRTTEXT_w3jjsn.jpg')
    imgs[7] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1665884680/yourCardDeclined_ShirtMockup_vnw9pc.png')    
  imgs[8] = loadImage('  https://res.cloudinary.com/painkillerkid/image/upload/v1665888592/OSKIWEDDING_SHIRT_tz6okn.png')
    imgs[9] = loadImage(' https://res.cloudinary.com/painkillerkid/image/upload/v1665948981/oskiweddinground2_egydil.png')
      imgs[10] = loadImage(' https://res.cloudinary.com/painkillerkid/image/upload/v1665949784/toadpacshirt_3dthing_j0satg.png')

        imgs[11] = loadImage(' https://res.cloudinary.com/painkillerkid/image/upload/v1665957356/housedrawing_3dShirt_nf3yob.png')
  
        imgs[12] = loadImage(' https://res.cloudinary.com/painkillerkid/image/upload/v1665957205/mountainshirt_3d_kmlazm.png')
            
  imgs[13] = loadImage(' https://res.cloudinary.com/painkillerkid/image/upload/v1665978926/oski_peeing_shirt_xtvoe3.png')
    
  imgs[14] = loadImage(' https://res.cloudinary.com/painkillerkid/image/upload/v1666047243/thisisstupidshirt_wltht1.png')  
  
//   imgs[15] = loadImage(' https://res.cloudinary.com/painkillerkid/image/upload/v1665960566/MXMTOON_Shirt_iqmgow.png')
        
  // imgs[15] = loadImage(' https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/kevin-hart-wins-halloween-2019-by-dressing-up-as-frenemy-dwayne-johnson-the-rock-is-anything-but-impressed.jpg')
  
  
  mod = loadModel('3dtext_SoldOut.obj')
  mom = loadModel ('Finished_Voldemort_3dthing.obj')
}


function setup() {
  bg = loadImage('https://media.tenor.com/MzHlcOrTROIAAAAC/steve-harvey-sorry-about-that.gif');

  wg = loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1669759171/wordstuff_hfaksw.png');
  
  createCanvas(canvasWidth, canvasHeight, WEBGL);
  angleMode(DEGREES)
  shirt = new Shirt(imgs[0], mod, 0, -100, 0, theta)
  
 
}

function draw() {
  background(100);
  push();
  noStroke();
translate(30, 20, -3000);
  texture(bg);
  plane(9000, 5000);
  pop();  
  
//     push();
//   noStroke();
// translate(530, 1120, -2220);
//   texture(wg);
//   plane(2200,2200);
//   pop();  
  
  audio.autoplay(true);
  audio.loop(true);
  if(clicked){
     shirt.update(mouseX, mouseY)
  }
 
  shirt.render()
  theta++
}

function mousePressed(){

   shirt.drag(mouseX, mouseY)
   clicked = true

}

function mouseReleased(){

   shirt.dragging = false
   clicked = false

}




  // old

// function mousePressed(){ 
  // if mouse is in right box
    // then: do the image increment thing
  //else if mouse is in left box
    // do the image decrement thing
  // else

  // imageCounter = floor(random(imgs.length))

//     shirt.changeShirt(imgs[imageCounter])

//}

function keyPressed(){
  if(keyCode === RIGHT_ARROW){
    if(imageCounter < imgs.length -1){
      imageCounter++
    }else{
      imageCounter = 0
    }
  }
    if(keyCode === LEFT_ARROW){
      if(imageCounter > 0){
         imageCounter--
      } else {
        imageCounter = imgs.length - 1
      }

  }
 // console.log(imageCounter)
  shirt.changeShirt(imgs[imageCounter])
}
