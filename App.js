
function getUserInput(){
    // let ownerName=document.querySelector('.owner-name-input').value;
    
    // let ownerContactNum=document.querySelector('.contact-number-input').value;
   
    // let shopAddress=document.querySelector('.shop-address').value;
    
    let customerName=document.querySelector('.customer-name').value;

    let details=` <div class="left-info">
    <p><b>Owner Name:</b>Zahir Sayyad</p>
    <p><b>Mobile No:</b>9637847576</p>
    <p><b>Address:</b>Dhamanagaon</p>
    </div>
    <div class="right-info">
    <p><b>Customer Name:</b> ${customerName}</p>
    </div>
    `;

    let shopDetails=document.querySelector('.js-owner-details');
    shopDetails.innerHTML=details;

    //  document.querySelector('.owner-name-input').value="";
    
    // document.querySelector('.contact-number-input').value="";
   
    // document.querySelector('.shop-address').value="";
    
    document.querySelector('.customer-name').value="";

}


function displayProduct(){

    let tableBody=document.querySelector('.table-body');
    tableBody.innerHTML="";

    let totalPrice=0;

    products.forEach((product, index) => {
         
        let discountedPrice = product.pPrice - (product.pPrice * product.pDiscount / 100);
        let finalPrice = discountedPrice + (discountedPrice * product.pGST / 100);
        finalPrice = finalPrice * product.pQuantity;

        totalPrice += finalPrice;

        let row = `
         <tr>
            <td>${index + 1}</td>
            <td>${product.pName}</td>
            <td>${product.pSize}</td>
            <td>${product.pPrice}</td>
            <td>${product.pDiscount}</td>
            <td>${product.pGST}</td>
            <td>${product.pQuantity}</td>
            <td>${finalPrice.toFixed(2)}</td>
            <td><button type="button" class="delete-btn js-delete-btn" onclick="
                deleteProduct(${index});
            ">Delete ${index}</button></td>
        </tr>
        `;
        tableBody.innerHTML+= row;

    });

    let totalRow =`
        <tr>
            <td colspan="7"></td>
            <td><b>Total Price:${totalPrice.toFixed(2)}</b></td>
            <td></td>
        </tr>
    `;

    tableBody.innerHTML += totalRow;

}

function deleteProduct(index){
    products.splice(index,1);
    displayProduct();
}


let products=[];

function addProducts() {
    let productName = document.querySelector('.product-name').value;

    productName = productName.replace(/&quot;/g, '"');

    let productSize = document.querySelector('.product-size').value;
    // let productPrice = document.querySelector('.product-price').value;
    let productDiscount = document.querySelector('.product-discount').value;
    let productGST =18;
    let productQuantity = document.querySelector('.product-quantity').value;
    
    let productPrice= getProductPrice(productName, productSize);
    if(productPrice == 0){
        alert("For this size no product found... please select again");
    }
    else{
        products.push({
            pName:productName,
            pSize:productSize,
            pPrice:Number(productPrice),
            pDiscount:Number(productDiscount),
            pGST:Number(productGST),
            pQuantity:Number(productQuantity)
        });
        displayProduct();
    }
    document.getElementById('productName').value="";
    document.getElementById('productSize').value="";
    // document.getElementById('price').value="";
    document.getElementById('discount').value="";
    // document.getElementById('gst').value="";
    document.getElementById('quantity').value="";

    
}


// Generate pdf

function generatePDF() {
    const element = document.getElementById("bill-section");

    // Get customer name for filename
    let customerName = document.querySelector('.customer-name').value.trim();
    if (!customerName) customerName = "Customer";

    let options = {
        margin: 10,
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { 
            scale: 3,
            useCORS: true,
            logging: false,
            onclone: (clonedDoc) => {
                // Remove buttons
                clonedDoc.querySelectorAll('.delete-btn, .pdf-btn').forEach(btn => btn.remove());

                // Find the original table
                let originalTable = clonedDoc.querySelector("table");
                if (!originalTable) return;

                // Build a new table (excluding last column)
                let newTable = document.createElement("table");
                newTable.setAttribute("border", "1");
                newTable.style.borderCollapse = "collapse";
                newTable.style.width = "100%";

                // Copy rows
                originalTable.querySelectorAll("tr").forEach(row => {
                    let newRow = document.createElement("tr");

                    let cells = row.querySelectorAll("th, td");
                    cells.forEach((cell, idx) => {
                        if (idx === cells.length - 1) return; // skip last column
                        let newCell = cell.cloneNode(true);
                        newRow.appendChild(newCell);
                    });

                    newTable.appendChild(newRow);
                });

                // Replace old table with new one
                originalTable.parentNode.replaceChild(newTable, originalTable);
            }
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // ✅ set filename explicitly
    html2pdf()
        .set(options)
        .from(element)
        .save(customerName + '-Bill.pdf');
}



//Add New Products

function addNewProducts(){
    let newProductName=document.querySelector('.new-product-name-input').value;
    let newProductSize=document.querySelector('.new-product-size-input').value;
    let newProductRate=document.querySelector('.new-product-rate-input').value;

    productPrices.push({
        pName: newProductName, pSize: newProductSize, pPrice: Number(newProductRate)
    });

    productOptions.push(newProductName);

    productSizeOptions.push(newProductSize);

    displayOptions();
    displaySizeOptions();

    document.querySelector('.new-product-name-input').value = "";
    document.querySelector('.new-product-size-input').value = "";
    document.querySelector('.new-product-rate-input').value = "";

}


