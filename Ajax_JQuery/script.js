<!-- API呼び出しの実装コードをコピペ-->
var settings = {
   "url": "http://localhost:8080/getJuiceList",
   "method": "GET",
   "dataType": "json",
};

$.ajax(settings).done(function (response) {
    // 取得jsonデータ
    var data_stringify = JSON.stringify(response);
    var data_json = JSON.parse(data_stringify);

    <!-- レスポンスをHTMLとしてdiv#resultに設定-->
    $("#result").html(JSON.stringify(response));

});
//    // テーブルの行数と列数を設定
//    const rows = 3;
//    const cols = 10;
//
//    // テーブル要素を作成
//    const $table = $('<table>').attr('border', 1);
//
//    // テーブルのヘッダー行を作成
//    const $header = $('<thead>');
//    const $headerRow = $('<th>').text(key);
//    Object.keys(jsonData[0]).forEach(key => {
//        const $th = $('<th>').text(key);
//        $headerRow.append($th);
//    });
//    $header.append($headerRow);
//    $table.append($header);
//
//    // デーブルのボディを作成
//    const $tbody = $('<tbody>');
//    for (let i = 0; i < rows; i++) {
//        const $tr = $('<tr>');
//        for (let j = 0; j < cols; j++) {
//            const $td = $('<td>');
//            const dataIndex = i * cols + j;
//            if (dataIndex < jsonData.length) {
//                $td.text(JSON.stringify(jsonData[dataIndex]));
//            }
//            $tr.append($td);
//        }
//        $tbody.append($tr);
//    }
//    $table.append($tbody);
//
//    // テーブルをHTMLに追加
//    $('#vending-machine').append($table);
