<!-- API呼び出しの実装コードをコピペ-->
var settings = {
   "url": "http://localhost:8080/getJuiceList",
   "method": "GET",
   "dataType": "json",
};

$.ajax(settings).done(function (response) {
    console.log("response出力");
    console.log(response);
    const jsonData = response.juiceList; // JSONデータの中のjuiceList配列を取得
    const rows = 3;
    const cols = 10;

    // テーブル要素を作成
    const $table = $('<table>').attr('border', 1);

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
                    <img src="data:image/jpeg;base64,${juice.juiceImage}" alt="${juice.juiceName}" width="50"><br>
                    ${juice.juiceName} <br>
                    ${juice.price}円 <br>
                    ${juice.temperatureDisplay}
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

