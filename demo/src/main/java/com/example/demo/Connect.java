package com.example.demo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class Connect {
	public static void main(String[] args) {
		String URL = "jdbc:postgresql://localhost:5432/postgres";
		
		
		try { 
			Class.forName("org.postgresql.Driver"); 
		} catch (ClassNotFoundException e) { 
			e.printStackTrace(); 
		}
		 
		
		try (Connection conn = DriverManager.getConnection(URL, "postgres", "postgres");){
			
            if (conn != null) {
                System.out.println("Customers Database:");
            }

            PreparedStatement stmt = conn.prepareStatement("Select * from customer");
            ResultSet results = stmt.executeQuery();

            while (results.next()) {
            	Integer id = results.getInt(1); // 1 - id
                String fname = results.getString(2); // 2 - fName
                String lname = results.getString(3); // 3 - lName
                String country = results.getString(4); // 4 - country

                System.out.println(id + ": " + fname + "  " + lname + " from " + country);
            }

		} catch (SQLException ex) {
			ex.printStackTrace();
		}
	}
	
}
