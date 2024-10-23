// Function to generate barcode using JsBarcode
function generateBarcode() {
    const inputCode = document.getElementById('inputCode').value;
    if (inputCode.trim() === "") {
        alert("Please enter a valid code to generate a barcode!");
        return;
    }
    
    // Use JsBarcode to generate the barcode
    JsBarcode("#barcode", inputCode, {
        format: "CODE128",
        lineColor: "#000",
        width: 2,
        height: 100,
        displayValue: false
    });
}

// Add event listener to the button
document.getElementById('generateBtn').addEventListener('click', generateBarcode);
