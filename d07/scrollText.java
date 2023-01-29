import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.*;
import javax.swing.border.*;

class scrollText extends JPanel {

	int scrollOffset = 0;
	boolean wrap = false;
	Timer myTimer;
	String text;

	public scrollText(String str) {
		text = str;
//		super(str);

		setBorder( new EmptyBorder(20, 20, 20, 20) );
	}

//	public scrollText() {
//		super();
//	}

	public void paintComponent(Graphics g) {
		super.paintComponent(g);
		Insets insets = getInsets();
		Rectangle r = g.getClipBounds();
		r.x = insets.left;
		r.width -= insets.left + insets.right;
		g.setClip(r);

		((Graphics2D)g).translate(-scrollOffset, 0);
		Font f = getFont();
		g.setFont(f);
		FontMetrics fm = g.getFontMetrics();
		int textWidth = fm.stringWidth(text);
		int height = fm.getHeight();
//		g.drawString(getText(), getInsets().left, height + (getHeight() - height) / 2);
		g.drawString(text, getSize().width, height + (getHeight() - height) / 2);
	}

	public void stopScrolling() {
		if (myTimer != null) myTimer.stop();

	}

	public void setToScroll(final int period, final int pixelsPerMove) {
		stopScrolling();
		ActionListener al = new ActionListener() {
			public void actionPerformed(ActionEvent ae) {
				int newOffset = getScrollOffset() + pixelsPerMove;
				Graphics g = getGraphics();
				if (g != null) {
					FontMetrics fm = g.getFontMetrics(getFont());
					if (newOffset > getSize().width + fm.stringWidth(text)) newOffset = 0;
				}
				setScrollOffset(newOffset);
			}
		};
		myTimer = new Timer(period, al);
		myTimer.start();
	}

	public int getScrollOffset() {
		return scrollOffset;
	}


	public void setScrollOffset(int scrollOffset) {
		this.scrollOffset = scrollOffset;
		repaint();
	}


	public boolean isWrap() {
		return wrap;
	}


	public void setWrap(boolean wrap) {
		this.wrap = wrap;
	}


	public static void main(String[] args) {
		scrollText label = new scrollText("Here is a long string of text data. This should hopefully scroll");
		label.setToScroll(40, 2);
		JFrame scrollFrame = new JFrame();
		scrollFrame.setSize(400,100);
		scrollFrame.getContentPane().add(label);
		scrollFrame.setVisible(true);

	}

}