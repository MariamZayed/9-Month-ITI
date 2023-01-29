import javax.swing.JFrame;
import javax.swing.JPanel;
import java.awt.image.BufferedImage;
import java.awt.Graphics;
import javax.imageio.ImageIO;
import java.io.File;
import java.io.IOException;


class BallGame extends JPanel {
    int x = 0, y = 100;
    boolean isMovingRight = true;
    boolean isMovingUp = true;

    public BallGame(){
        new Thread(() -> { // implementing run method
                while(true){
                    if(x + 50 >= BallGame.this.getParent().getWidth()){
                        isMovingRight = false;
                    }else if(x <= 0 ){
                        isMovingRight = true;
                    }
                    if(y <= 0){
                        isMovingUp = false;
                    }else if(y + 50 >= BallGame.this.getParent().getHeight()){
                        isMovingUp = true;
                    }
                    x += getHorizontalSpeed();
                    y += getVerticalSpeed();
                    try{
                        Thread.sleep(200);
                    }catch(InterruptedException ex){
                        ex.printStackTrace();
                    }
                    repaint();
                }
            }
        ).start();
    }

    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        try{
            File imageSrc = new File("ball.png");
            BufferedImage img = ImageIO.read(imageSrc);
            g.drawImage(img, x, y, 50 , 50,getBackground(), getFocusCycleRootAncestor());
        }catch(IOException ex){
            ex.printStackTrace();
        }
    }
    public static void main(String[] args) {
        //1. Create the frame.
        JFrame frame = new JFrame();
        frame.add(new BallGame());
        //2. Optional: What happens when the frame closes?
        frame.setSize(800, 600);
        frame.setBounds(210,310,600,400);
        frame.setVisible(true);
    }

    int getVerticalSpeed(){
        return isMovingUp ? -20 :20 ;
    }

    int getHorizontalSpeed(){
        return isMovingRight ? 20 : -20 ;
    }
}