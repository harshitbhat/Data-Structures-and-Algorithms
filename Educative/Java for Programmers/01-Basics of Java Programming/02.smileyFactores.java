import com.educative.graphics.*;

class SmileyFactored {
  static Canvas c;
  public static void drawOutline() {
    c.fill("yellow");
    c.stroke("black");
    c.circle(100, 100, 50);
  }
  public static void drawMouth() {
    c.fill("yellow");
    c.stroke("black");
    c.circle(100,100,30);
    
    c.stroke("yellow");
    c.rect(70,70,70,30);
  }
  public static void drawEyes() {
    c.fill("black");
    c.stroke("black");
    c.circle(85,85,5);

    c.fill("black");
    c.stroke("black");
    c.circle(115,85,5);
  }

  public static void main(String[] args) {
    
    c = new Canvas(200, 200);
    
    // Draw the outline of the face
    drawOutline();
    
    // draw the mouth
    drawMouth();
   
    // draw the eyes
    drawEyes();
   
    c.draw();
  }
}