$.get('Table_Input.csv', function (csvData) {
  const rows = csvData.trim().split('\n');

  // Extract and set headers for the table
  const headers = rows[0].split(',');
  const theadContent = headers.map(header => `<th>${header}</th>`).join('');
  $('#table1 thead').html(`<tr>${theadContent}</tr>`);

  const dataRows = rows.slice(1); // Skip header row
  const table1Data = {};

  dataRows.forEach(row => {
      const [key, value] = row.split(',');
      if (key && value) {
          table1Data[key] = parseInt(value, 10);
          $('#table1 tbody').append(`<tr><td>${key}</td><td>${value}</td></tr>`);
      }
  });

  // Calculate Table 2 values
  const alpha = table1Data['A5'] + table1Data['A20'];
  const beta = table1Data['A15'] / table1Data['A7'];
  const charlie = table1Data['A13'] * table1Data['A12'];

  // Table 2
  const table2Rows = [
      { category: 'Alpha', value: alpha },
      { category: 'Beta', value: beta },
      { category: 'Charlie', value: charlie },
  ];

  table2Rows.forEach(row => {
      $('#table2 tbody').append(`<tr><td>${row.category}</td><td>${row.value}</td></tr>`);
  });
});
