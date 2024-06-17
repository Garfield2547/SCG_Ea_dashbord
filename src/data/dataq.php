<?php

require_once('../backend_AIP/condb.php'); // Assuming your database connection file

$objDB = new Condb(); // Assuming Condb is your class name

try {
  $conn = $objDB->connection(); // Establish connection

  if ($conn) {
    $query_Model = "SELECT * FROM CONTRACT_MODEL";
    $stmt_Model = $conn->prepare($query_Model);
    $stmt_Model->execute();
    $data_Model = $stmt_Model->fetchAll(PDO::FETCH_ASSOC);

    foreach ($data_Model as &$row) {
      $row['TOTAL_CONTRACTNO'] = (double) $row['TOTAL_CONTRACTNO'];
      $row['UPDATE_TOTAL'] = (double) $row['UPDATE_TOTAL'];
    }

    header('Content-Type: application/json');
    echo json_encode(array("Data_Model" => $data_Model));
  } else {
    throw new PDOException('Database connection error');
  }
} catch (PDOException $e) {
  // Handle potential errors
  echo json_encode(array('error' => 'Query error'));
  error_log('Query error: ' . $e->getMessage()); // Log the error message for debugging
} finally {
  $conn = null; // Close the connection
}