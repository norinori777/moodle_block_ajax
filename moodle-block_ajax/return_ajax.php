<?php

$content_type = explode(';', trim(strtolower($_SERVER['CONTENT_TYPE'])));
$media_type = $content_type[0];

if ($_SERVER['REQUEST_METHOD'] == 'POST' && $media_type == 'application/json') {
    $json_string = file_get_contents('php://input');
    $request = json_decode($json_string);
} else {
    $request = $_REQUEST;

    // REQUESTのjsonが多層の場合に対応
    foreach ($_REQUEST as $key => $value) {
        $request[$key] = json_decode($value, true);

        // json_decodeはクォートされていない文字列がnullになるので戻す
        if ($request[$key] == null) {
            $request[$key] = $value;
        }
    }

}
if($request != null){
    echo json_encode(array('result' => 'OK'));
} else {
    echo json_encode(array('result' => 'NG'));
}