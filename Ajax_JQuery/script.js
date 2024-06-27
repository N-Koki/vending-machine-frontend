<!-- API呼び出しの実装コードをコピペ-->
var settings = {
   "url": "http://localhost:8080/getJuiceList",
   "method": "GET",
   "dataType": "json",
};

$.ajax(settings).done(function (response) {
    const jsonData = response.juiceList; // JSONデータの中のjuiceList配列を取得
    const rows = 3;
    const cols = 10;

    // テーブル要素を作成
    const $table = $('<table>').attr('border', 1);

    // テーブルのヘッダー行を作成
    const $header = $('<thead>');
    const $headerRow = $('<tr>');
    const headers = ["columnNumber", "juiceName", "juiceImage", "price", "temperatureDisplay", "stock"];
    headers.forEach(key => {
        const $th = $('<th>').text(key);
        $headerRow.append($th);
    });
    $header.append($headerRow);
    $table.append($header);

    // テーブルのボディを作成
    const $tbody = $('<tbody>');
    for (let i = 0; i < rows; i++) {
        const $tr = $('<tr>');
        for (let j = 0; j < cols; j++) {
            const $td = $('<td>');
            const dataIndex = i * cols + j;
            if (dataIndex < jsonData.length) {
                const juice = jsonData[dataIndex];
                const juiceText = `
                    Column Number: ${juice.columnNumber} <br>
                    Juice Name: ${juice.juiceName} <br>
                    <img src="data:image/jpeg;base64,${juice.juiceImage}" alt="${juice.juiceName}" width="50"><br>
                    Price: ${juice.price} <br>
                    Temperature: ${juice.temperatureDisplay} <br>
                    Stock: ${juice.stock}
                `;
                $td.html(juiceText);
            }
            $tr.append($td);
        }
        $tbody.append($tr);
    }
    $table.append($tbody);

    // テーブルをHTMLに追加
    $('#vending-machine').append($table);

});

