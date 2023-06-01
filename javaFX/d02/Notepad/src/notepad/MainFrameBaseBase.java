package notepad;

import static com.sun.deploy.util.SessionState.save;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import javafx.scene.input.*;
import java.lang.*;
import java.util.*;
import java.util.logging.Level;
import java.util.logging.Logger;
import javafx.application.Platform;
import javafx.scene.*;
import javafx.scene.control.*;
import javafx.scene.control.Alert.AlertType;
import javafx.scene.control.ButtonBar.ButtonData;
import javafx.scene.layout.*;
import javafx.scene.input.KeyCode;
import javafx.scene.input.KeyCombination;
import javafx.stage.FileChooser;

public class MainFrameBaseBase extends AnchorPane {

    protected final MenuBar menuBar;
    protected final Menu fileMenu;
    protected final MenuItem newItem;
    protected final MenuItem openItem;
    protected final MenuItem saveItem;
    protected final MenuItem exitItem;
    protected final Menu EditMenu;
    protected final MenuItem undoItem;
    protected final MenuItem cutItem;
    protected final MenuItem copyItem;
    protected final MenuItem pasteItem;
    protected final MenuItem deleteItem;
    protected final MenuItem selectAllItem;
    protected final Menu helpMenu;
    protected final MenuItem aboutItem;
    protected final TextArea textArea;

    public MainFrameBaseBase() {

        menuBar = new MenuBar();
        fileMenu = new Menu();
        newItem = new MenuItem();
        openItem = new MenuItem();
        saveItem = new MenuItem();
        exitItem = new MenuItem();
        EditMenu = new Menu();
        undoItem = new MenuItem();
        cutItem = new MenuItem();
        copyItem = new MenuItem();
        pasteItem = new MenuItem();
        deleteItem = new MenuItem();
        selectAllItem = new MenuItem();
        helpMenu = new Menu();
        aboutItem = new MenuItem();
        textArea = new TextArea();

        setId("AnchorPane");
        setPrefHeight(400.0);
        setPrefWidth(600.0);

        menuBar.setLayoutY(7.0);
        menuBar.setPrefHeight(22.0);
        menuBar.setPrefWidth(600.0);

        fileMenu.setMnemonicParsing(false);
        fileMenu.setText("File");

        newItem.setMnemonicParsing(false);
        newItem.setText("New");
        newItem.setAccelerator(new KeyCodeCombination(KeyCode.N, KeyCombination.CONTROL_DOWN));
        // Handling new 
        newItem.setOnAction(e -> {
            if (textArea.getText().trim().length() == 0)
                textArea.clear();
            else { 
                Alert alert = new Alert(AlertType.CONFIRMATION);
                alert.setTitle(" notepad");
                alert.setHeaderText("");
                    alert.setContentText("Do you want save change before New Text Area");
                ButtonType dontSaveBtn = new ButtonType("dont save");
                ButtonType saveBtn = new ButtonType("SAVE");
                ButtonType buttonCancel = new ButtonType("Cancel", ButtonData.CANCEL_CLOSE);
                alert.getButtonTypes().setAll(saveBtn, dontSaveBtn, buttonCancel);
                Optional<ButtonType> result = alert.showAndWait();
                if (result.get() == saveBtn) {
                    save();
                    textArea.clear();
                } else if (result.get() == dontSaveBtn) {
                    textArea.clear();
                }

            }
        });
        
        openItem.setMnemonicParsing(false);
        openItem.setText("Open..");
        openItem.setAccelerator(new KeyCodeCombination(KeyCode.O, KeyCombination.CONTROL_DOWN));
        // Handile open
        openItem.setOnAction(e -> {
            if(textArea.getText().trim().length() != 0){
                Alert alert = new Alert(AlertType.CONFIRMATION);
                alert.setTitle(" notepad");
                alert.setHeaderText("");
                    alert.setContentText("Do you want save change before New Text Area");
                ButtonType dontSaveBtn = new ButtonType("dont save");
                ButtonType saveBtn = new ButtonType("SAVE");
                ButtonType buttonCancel = new ButtonType("Cancel", ButtonData.CANCEL_CLOSE);
                alert.getButtonTypes().setAll(saveBtn, dontSaveBtn, buttonCancel);
                Optional<ButtonType> result = alert.showAndWait();
                if (result.get() == saveBtn) {
                    save();
                    textArea.clear();
                } else if (result.get() == dontSaveBtn) {
                    textArea.clear();
                }
            }else openFile();
        });
        
        saveItem.setMnemonicParsing(false);
        saveItem.setText("Save");
        saveItem.setAccelerator(new KeyCodeCombination(KeyCode.S, KeyCombination.CONTROL_DOWN));
        //Handle save
        saveItem.setOnAction(e -> {
            
            FileChooser fileChooser = new FileChooser();
            fileChooser.setTitle("Save File");
            fileChooser.setInitialFileName("Untitled.txt");
            fileChooser.getExtensionFilters().addAll(
                    new FileChooser.ExtensionFilter("Text Files", "*.txt"),
                    new FileChooser.ExtensionFilter("All Files", "*.*"));
            File selectedFile = fileChooser.showSaveDialog(null);
            if (selectedFile != null) {
                try {
                    FileWriter fileWriter = new FileWriter(selectedFile);
                    fileWriter.write(textArea.getText());
                    fileWriter.close();
                } catch (IOException ex) {
                    Logger.getLogger(MainFrameBaseBase.class.getName()).log(Level.SEVERE, null, ex);
                }
            }
        });
        
        
        exitItem.setMnemonicParsing(false);
        exitItem.setText("Exit");
        exitItem.setAccelerator(new KeyCodeCombination(KeyCode.E, KeyCombination.CONTROL_DOWN));
        //handle exit
       exitItem.setOnAction(e -> {
            if (textArea.getText().trim().length() == 0)
                Platform.exit();
            else {
                Alert alert = new Alert(AlertType.CONFIRMATION);
                alert.setTitle(" notepad");
                alert.setHeaderText("");
                alert.setContentText("Do you want save changes before Exit");
                ButtonType dontSaveBtn = new ButtonType("dont save'");
                ButtonType saveBtn = new ButtonType("SAVE");
                ButtonType buttonCancel = new ButtonType("Cancel", ButtonData.CANCEL_CLOSE);
                alert.getButtonTypes().setAll(saveBtn, dontSaveBtn, buttonCancel);
                Optional<ButtonType> result = alert.showAndWait();
                if (result.get() == saveBtn) {
                    save();
                    Platform.exit();
                } else if (result.get() == dontSaveBtn) {
                    Platform.exit();
                }
            }
        });
        
        EditMenu.setMnemonicParsing(false);
        EditMenu.setText("Edit");

        undoItem.setMnemonicParsing(false);
        undoItem.setText("Undo");

        cutItem.setMnemonicParsing(false);
        cutItem.setText("Cut");
        //Handle cut
        cutItem.setOnAction(event ->textArea.cut());
        
        
        copyItem.setMnemonicParsing(false);
        copyItem.setText("Copy");
        //Handle copy
        copyItem.setOnAction(event ->textArea.copy());

        pasteItem.setMnemonicParsing(false);
        pasteItem.setText("Paste");
        //Handle paste
        pasteItem.setOnAction(event ->textArea.paste());
        
        deleteItem.setMnemonicParsing(false);
        deleteItem.setText("Delete");
        //Handle delete
        deleteItem.setOnAction(event ->textArea.deleteText(textArea.getSelection()));

        selectAllItem.setMnemonicParsing(false);
        selectAllItem.setText("Select All");
        //Handle select all
        selectAllItem.setOnAction(event -> textArea.selectAll());
        
        helpMenu.setMnemonicParsing(false);
        helpMenu.setText("Help");

        aboutItem.setMnemonicParsing(false);
        aboutItem.setText("About Notpad");
        //Handle about
        aboutItem.setOnAction(e -> {
            Alert alert = new Alert(Alert.AlertType.INFORMATION);
            alert.setTitle("About NotePad");
            alert.setHeaderText("About NotePad");
            alert.setContentText("My name is Mariam Zayed");
            alert.showAndWait();
        });
        
        
        textArea.setLayoutY(36.0);
        textArea.setPrefHeight(358.0);
        textArea.setPrefWidth(600.0);

        fileMenu.getItems().add(newItem);
        fileMenu.getItems().add(openItem);
        fileMenu.getItems().add(saveItem);
        fileMenu.getItems().add(exitItem);
        menuBar.getMenus().add(fileMenu);
        EditMenu.getItems().add(undoItem);
        EditMenu.getItems().add(cutItem);
        EditMenu.getItems().add(copyItem);
        EditMenu.getItems().add(pasteItem);
        EditMenu.getItems().add(deleteItem);
        EditMenu.getItems().add(selectAllItem);
        menuBar.getMenus().add(EditMenu);
        helpMenu.getItems().add(aboutItem);
        menuBar.getMenus().add(helpMenu);
        getChildren().add(menuBar);
        getChildren().add(textArea);
  

    }

    private void openFile() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
}
