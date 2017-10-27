<?php

include 'dbConnect.php';

$type = $_REQUEST['type'];
$data = "[";

$sql = "SELECT * FROM m1data WHERE type = '" . $type . "'";
foreach ($pdo->query($sql) as $row) {
    $data =  $data . '{"id":"' . $row['id'] . '",';
    $data =  $data . '"name":"' . $row['name'] . '",';
    $data =  $data . '"familie":"' . $row['family'] . '",';
    $data =  $data . '"pic":{ },';
    $data =  $data . '"info":"' . $row['info'] . '"},';    
}
$data = substr($data, 0, -1);
$data = $data . "]";
echo utf8_encode($data);
?>