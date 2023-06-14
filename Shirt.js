class Shirt{
  constructor(img, mod, x, y, z, theta){
    this.img = img
    this.mod = mod
    this.pos = createVector(x,y,z)
    this.startDrag = null
    this.theta = theta
    this.rotationVal = 180
    this.dragging = false
  }

  changeShirt(img){
    this.img = img
  }

  drag(mX, mY){
    this.startDrag = createVector(mX, mY, 0)
    this.dragging = true
  }

  render(){
    noStroke()
    push()
      translate(this.pos.x, this.pos.y, -theta)
      scale(100.0)
      translate(0, 2, 3)
      rotateX(180)
      rotateY(this.rotationVal)
      // rotateZ(this.theta/4)

      scale(1, 1)
      texture(this.img)

      model(this.mod)
    pop()
    
        push()
      translate(this.pos.x, this.pos.y, -theta)
      scale(60.0)
      translate(3, 8, 13)
      rotateX(180)
      rotateY(this.rotationVal)
      // rotateZ(this.theta/4)

      scale(-1, 1)
      texture(this.img)

      model(this.mod)
    pop()
    
        push()
      translate(this.pos.x, this.pos.y, -theta)
      scale(70.0)
      translate(-11, 8, 3)
      rotateX(180)
      rotateY(this.rotationVal)
      // rotateZ(this.theta/4)

      scale(-1, 1)
      texture(this.img)

      model(this.mod)
    pop()
    
            push()
      translate(-theta, this.pos.y, -theta)
      scale(110.0)
      translate(-11, 0, 3)
      rotateX(180)
      rotateY(this.rotationVal)
      // rotateZ(this.theta/4)

      scale(-1, 1)
      texture(this.img)

      model(this.mod)
    pop()
    
            push()
      translate(this.pos.x, -theta, -theta)
      scale(50.0)
      translate(-11, 8, 3)
      rotateX(180)
      rotateY(this.rotationVal)
      // rotateZ(this.theta/4)

      scale(1, 1)
      texture(this.img)

      model(this.mod)
    pop()
    
            push()
      translate(-theta, this.pos.y, -theta)
      scale(250.0)
      translate(0, 5, 13)
      rotateX(180)
      rotateY(this.rotationVal)
      // rotateZ(this.theta/4)

      scale(-1, 1)
      texture(this.img)

      model(this.mod)
    pop()
    
    
        push()
      translate(this.pos.x, this.pos.y, -theta)
      scale(250.0)
      translate(3, 3, 2)
      rotateX(180)
      rotateY(this.rotationVal)
      // rotateZ(this.theta/4)

      scale(-1, 1)
      texture(this.img)

      model(this.mod)
    pop()
  }
  

  update(mX, mY){
    if(this.dragging){
      const currentMousePos = createVector(mX, mY, 0)
      //console.log(currentMousePos)
      const d = currentMousePos.dist(this.startDrag)
      if(currentMousePos.y > this.startDrag.y){
        this.rotationVal = d
      }else{
        this.rotationVal = d * -1
      }

    }

  }
}
