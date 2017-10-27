<?php

include 'dbConnect.php';

$type = $_REQUEST['type'];
$data = "[";

$sql = "SELECT * FROM m1pictures WHERE type = '" . $type . "'";
foreach ($pdo->query($sql) as $row) {
    $data =  $data . '{"id":"' . $row['id'] . '",';
    $data =  $data . '"parent":"' . $row['parentID'] . '",';
    $data =  $data . '"pic":"' . $row['pic'] . '"},';
}
$data = substr($data, 0, -1);
$data = $data . "]";
echo utf8_encode($data);
?>