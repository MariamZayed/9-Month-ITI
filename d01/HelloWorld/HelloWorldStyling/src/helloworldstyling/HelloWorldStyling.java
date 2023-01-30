/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package helloworldstyling;

import javafx.application.Application;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.effect.Reflection;
import javafx.scene.layout.StackPane;
import javafx.scene.paint.Color;
import javafx.scene.text.Font;
import javafx.scene.text.Text;
import javafx.stage.Stage;

/**
 *
 * @author mariam
 */
public class HelloWorldStyling extends Application {
    
    @Override
    public void start(Stage primaryStage) {
            Text myText = new Text() ; 
            myText.setText("Hello World ");
            myText.setFont(new Font(40));
            myText.setFill(Color.RED);
            StackPane rootPane = new StackPane();

            rootPane.getChildren().add(myText);
            rootPane.setId("scene");
            Reflection reflection = new Reflection(); 
            reflection.setBottomOpacity(0.0); 
            reflection.setTopOpacity(0.5); 
            reflection.setTopOffset(0.0);
            reflection.setFraction(1); 
            myText.setEffect(reflection); 
            Scene scene = new Scene(rootPane, 300, 250);
            scene.getStylesheets().add(getClass().getResource("style.css").toString()) ; 
            rootPane.getStyleClass().add("scene") ; 
            primaryStage.setTitle("Hello World Application");
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
