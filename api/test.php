<table>
<?php
// Allow cross origin
header("Access-Control-Allow-Origin: *");

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);


//foreach ($_POST as $key => $value) {
//        echo "<br />";
//        echo "<td>";
//        echo $key;
//        echo "</td>";
//        echo "<td>";
//        echo $value;
//        echo "</td>";
//        echo "<br />";
//    }
echo $_POST;
print_r($_POST);
if ($_POST){
    http_response_code(200);
    $subject = 'Contact from: ' . $_POST['name'];
    $from = $_POST['email'];
    $message = $_POST['message'];
    //Actual sending email
    $sendEmail = new Sender($adminEmail, $from, $subject, $message);
    $sendEmail->send();
    echo $subject;
    echo $from;
    echo $message;
}

//if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])){
//    echo "OK";
//}
//else{
//    echo "error";
//}
?>
</table>