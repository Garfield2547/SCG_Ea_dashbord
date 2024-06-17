<?php
header("Access-Control-Allow-Origin: *"); // Allow cross-origin requests

class Condb {
    // Database configuration
    private $serverName = "LAPTOP-6402VAL2\SQLEXPRESS";
    private $database = "Ea_Dashbord";
    private $username = "";
    private $password = "";

    public function connection() {
        try {
            // Attempt to connect to the database
            $conn = new PDO("sqlsrv:Server=$this->serverName;Database=$this->database", $this->username, $this->password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            // echo json_encode(array('status' => 'success', 'message' => 'Connected successfully'));
            return $conn;
        } catch (PDOException $e) {
            // Handle connection errors
            echo json_encode(array('status' => 'error', 'message' => 'Database connection error: ' . $e->getMessage()));
            return null;
        }
    }

}
// Create an instance of the Condb class and attempt to connect
?>
