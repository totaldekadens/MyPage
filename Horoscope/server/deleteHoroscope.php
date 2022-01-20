<?php 

try {
        session_start();

        if ($_SERVER['REQUEST_METHOD']) {

                if($_SERVER["REQUEST_METHOD"] == "DELETE") {
                
                        if(isset($_SESSION["horoscope"])) {
                                session_destroy();

                                echo json_encode(true);
                                exit;
                        } else {
                                echo json_encode(false);
                                exit;
                        }

                } else {
                        throw new Exception("Endpoint not valid", 405);
                }

        } else {
                throw new Exception("http-request not sent", 404);
        }

} catch(Exception $err) {
        http_response_code($err -> getCode());
        echo json_encode($err -> getMessage()); 
        exit;
}
?>