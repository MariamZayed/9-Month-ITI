 package notepad;

import javafx.application.Application;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.layout.StackPane;
import javafx.stage.Stage;


public class Notepad extends Application {
    
    @Override
    public void start(Stage primaryStage) {

        MainFrameBaseBase root = new MainFrameBaseBase();
        Scene scene = new Scene(root, 600, 500);
        
        primaryStage.setTitle("Mariam Zayed Application Notpad");
        primaryStage.setScene(scene);
        primaryStage.show();
    }

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        launch(args);
    }
    
}
