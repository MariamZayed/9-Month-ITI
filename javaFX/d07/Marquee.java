import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;

import java.awt.BorderLayout;
import java.awt.Graphics;
import java.util.Date;

class Marquee extends JPanel {
    int x = 0, y = 100;

    public Marquee(){
        new Thread(() -> { // implementing run method
                while(true){
                    x+=10;
                    if(x  >= Marquee.this.getParent().getWidth()){
                        x = 0;
                    }
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
        if(x + 50 > getParent().getWidth()){
            g.drawString("Hello Java",x - getParent().getWidth(),y);
        }
        g.drawString("Hello Java", x, y);
    }
    public static void main(String[] args) {
        //1. Create the frame.
        JFrame frame = new JFrame();
        frame.add(new Marquee());
        //2. Optional: What happens when the frame closes?
        frame.setSize(800, 600);
        frame.setBounds(210,310,600,400);
        frame.setVisible(true);
    }
}