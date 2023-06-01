import javax.swing.JFrame;
import javax.swing.JLabel;
import java.awt.BorderLayout;
import java.util.Date;

class DateApp extends JFrame {

    public DateApp(){
        JLabel timeLabel = new JLabel();
        timeLabel.setHorizontalAlignment(JLabel.CENTER);
        add(timeLabel,BorderLayout.CENTER);
        new Thread(() -> { // implementing run method
                Date d = null;
                while(true){
                    d = new Date();
                    timeLabel.setText(d.toString());
                    try{
                        Thread.sleep(1000);
                    }catch(InterruptedException ex){
                        ex.printStackTrace();
                    }
                }
            }
        ).start();
    }
    public static void main(String[] args) {
        //1. Create the frame.
        DateApp frame = new DateApp();
        //2. Optional: What happens when the frame closes?
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(800, 600);
        frame.setBounds(210,310,600,400);
        frame.setVisible(true);
    }
}