
package sqlqueries;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.Logger;


public class SqlQueries {

     public static void main(String[] args) throws SQLException {
        String url = "jdbc:mysql://localhost:3306/ITI";
        String username = "root";
        String password = "";
        try {
            // TODO code application logic here
            Class.forName("com.mysql.cj.jdbc.Driver");
            
            try (Connection connection = DriverManager.getConnection(url, username, password)) {
                Statement statement = connection.createStatement();
                //Add student
//                String addUser = "INSERT INTO student VALUES (12, 'Noha', 17, 'mansoura')";
//                statement.executeUpdate(addUser);
                
                //Update student
//                String updateUser = "UPDATE student SET name = 'Tarek' where id = 8";
//                statement.executeUpdate(updateUser);
                
                //Delete student
                String deleteUser = "DELETE FROM student WHERE id = 12";
                statement.executeUpdate(deleteUser);
                
                //Show student Table data
                ResultSet resultSet = statement.executeQuery("select ID, Name, Age,Street from student");
                while(resultSet.next()) {
                    System.out.println(resultSet.getInt(1) + ":" + resultSet.getString(2) + ":" + resultSet.getInt(3)+ ":" + resultSet.getString(4));
                }
            }
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(SqlQueries.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
}
