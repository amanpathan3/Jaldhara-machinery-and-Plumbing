// Product Data (product → size → rate)
const productData = {
  "Shirt": { "S": 400, "M": 450, "L": 500 },
  "Jeans": { "30": 800, "32": 850, "34": 900 },
  "Shoes": { "7": 1200, "8": 1300, "9": 1400 }
};

let products = [];
let srNo = 1;

const productName = document.getElementById("productName");
const productSize = document.getElementById("productSize");
const productPrice = document.getElementById("productPrice");
const productDiscount = document.getElementById("productDiscount");
const productGST = document.getElementById("productGST");
const productQuantity = document.getElementById("productQuantity");
const productForm = document.getElementById("productForm");
const tableBody = document.querySelector(".table-body");
const totalAmount = document.getElementById("totalAmount");

// ✅ Load product names
function loadProducts() {
  Object.keys(productData).forEach(product => {
    let option = document.createElement("option");
    option.value = product;
    option.textContent = product;
    productName.appendChild(option);
  });
}

// ✅ When product changes → load sizes
productName.addEventListener("change", () => {
  productSize.innerHTML = `<option value="">-- Select Size --</option>`;
  productPrice.value = "";

  if (productName.value !== "") {
    let sizes = Object.keys(productData[productName.value]);
    sizes.forEach(size => {
      let option = document.createElement("option");
      option.value = size;
      option.textContent = size;
      productSize.appendChild(option);
    });
  }
});

// ✅ When size changes → set price
productSize.addEventListener("change", () => {
  if (productName.value !== "" && productSize.value !== "") {
    productPrice.value = productData[productName.value][productSize.value];
  }
});

// ✅ Add product to table
productForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let discount = productDiscount.value ? parseFloat(productDiscount.value) : 0;
  let price = parseFloat(productPrice.value);
  let gst = productGST.value ? parseFloat(productGST.value) : 0;
  let qty = productQuantity.value ? parseInt(productQuantity.value) : 1;

  let discountedPrice = price - (price * discount / 100);
  let finalPrice = discountedPrice + (discountedPrice * gst / 100);
  finalPrice *= qty;

  let product = {
    srNo: srNo++,
    name: productName.value,
    size: productSize.value,
    price: price,
    discount: discount,
    gst: gst,
    qty: qty,
    finalPrice: finalPrice
  };

  products.push(product);
  displayProducts();

  // Reset form
  productForm.reset();
  productSize.innerHTML = `<option value="">-- Select Size --</option>`;
  productPrice.value = "";
});

// ✅ Display products in table
function displayProducts() {
  tableBody.innerHTML = "";
  let total = 0;

  products.forEach((product) => {
    let row = document.createElement("tr");

    row.innerHTML = `
      <td>${product.srNo}</td>
      <td>${product.name}</td>
      <td>${product.size}</td>
      <td>${product.price}</td>
      <td>${product.discount}</td>
      <td>${product.gst}</td>
      <td>${product.qty}</td>
      <td>${product.finalPrice.toFixed(2)}</td>
    `;

    tableBody.appendChild(row);
    total += product.finalPrice;
  });

  totalAmount.textContent = total.toFixed(2);
}

// ✅ Generate PDF
function generatePDF() {
  const element = document.getElementById("bill-section");

  let options = {
    margin: 10,
    filename: "Bill.pdf",
    image: { type: "jpeg", quality: 1 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
  };

  html2pdf().from(element).set(options).save();
}

// Load product list on page load
loadProducts();
