export default function StockHistory ({$app, initialState}) {
    this.$element = document.createElement('table');
    this.$element.className = 'StockHistory';
    $app.appendChild(this.$element);
    this.$element.innerHTML= `
    <thead>
    <tr>
        <th>date</th>
        <th>open</th>
        <th>high</th>
        <th>low</th>
        <th>close</th>
        <th>volume</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>"Thu, 26 May 2022 15:00:00 GMT"</td>
        <td>66700</td>
        <td>66900</td>
        <td>66200</td>
        <td>66500</td>
        <td>11405555</td>
    </tr>
    <tr>
        <td>"Thu, 26 May 2022 15:00:00 GMT"</td>
        <td>66700</td>
        <td>66900</td>
        <td>66200</td>
        <td>66500</td>
        <td>11405555</td>
    </tr>
</tbody>
    `
}