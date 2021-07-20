import com.educative.graphics.*;

class Smiley {
  public static void main(String[] args) {
    Canvas c;
    c = new Canvas(200, 200);

    // Draw the outline of the face
    c.fill("yellow");
    c.stroke("black");
    c.circle(100, 100, 50);

    // draw the mouth
    c.fill("yellow");
    c.stroke("black");
    c.circle(100,100,30);
    
    c.stroke("yellow");
    c.rect(70,70,70,30);
 
    // draw the eyes
    c.fill("black");
    c.stroke("black");
    c.circle(85,85,5);

    c.fill("black");
    c.stroke("black");
    c.circle(115,85,5);

    c.draw();
  }
}