// Export Table Data to Excel
function exportTableToExcel(tableID, filename = '') {
    // Get the HTML table element
    var dataType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    var tableSelect = document.getElementById(tableID);
    var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');

    // Create a new Workbook
    var workbook = XLSX.utils.book_new();

    // Convert the HTML table to a worksheet
    var worksheet = XLSX.utils.table_to_sheet(tableSelect);

    // Append the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    // Generate a binary string representing the workbook
    var wbout = XLSX.write(workbook, {bookType:'xlsx', type:'binary'});

    // Convert the binary string to a Blob
    function s2ab(s) {
        var buf = new ArrayBuffer(s.length);
        var view = new Uint8Array(buf);
        for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
        return buf;
    }

    var blob = new Blob([s2ab(wbout)], {type: dataType});

    // Create a download link and click it programmatically
    var link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


// Export Table Data to Email
function exportTableToExcel(tableID, filename = '') {
    let downloadLink;
    let dataType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let tableSelect = document.getElementById(tableID);
    let tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
    
    // Specify file name
    filename = filename ? filename + '.xlsx' : 'excel_data.xlsx';
    
    // Create download link element
    downloadLink = document.createElement("a");
    
    document.body.appendChild(downloadLink);
    
    if (navigator.msSaveOrOpenBlob) {
        var blob = new Blob(['\ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob(blob, filename);
    } else {
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
    
        // Setting the file name
        downloadLink.download = filename;
        
        //triggering the function
        downloadLink.click();
    }
}

function sendEmail() {
    const emailInput = document.getElementById('exampleInputEmail');
    const email = emailInput.value;

    if (!email) {
        alert('Please provide a valid email address.');
        return;
    }

    const tableID = 'data-table';
    const filename = 'data.xlsx';

    // Convert table data to Excel
    let wb = XLSX.utils.table_to_book(document.getElementById(tableID), { sheet: "Sheet JS" });
    let wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });

    function s2ab(s) {
        var buf = new ArrayBuffer(s.length);
        var view = new Uint8Array(buf);
        for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
        return buf;
    }

    // Send email with the Excel attachment
    let formData = new FormData();
    formData.append('email', email);
    formData.append('file', new Blob([s2ab(wbout)], { type: "application/octet-stream" }), filename);

    fetch('YOUR_SERVER_ENDPOINT_HERE', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Email sent successfully!');
        } else {
            alert('Failed to send email. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error sending email.');
    });

    // Close the modal
    $('#exportToEmail').modal('hide');
}
