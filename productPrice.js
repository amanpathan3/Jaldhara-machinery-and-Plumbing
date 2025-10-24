let productPrices = [
  // ---------------- UPVC ----------------
 
   { pName: "Pipe UPVC", pSize: '1/2"', pPrice: 256.50, pGst: 18 },
  { pName: "Pipe UPVC", pSize: '3/4"', pPrice: 342.00, pGst: 18 },
  { pName: "Pipe UPVC", pSize: '1"', pPrice: 501.00, pGst: 18 },
  { pName: "Pipe UPVC", pSize: '1 1/4"', pPrice: 673.50, pGst: 18 },
  { pName: "Pipe UPVC", pSize: '1 1/2"', pPrice: 802.50, pGst: 18 },

  { pName: "Socket UPVC", pSize: '1/2"', pPrice: 9.50, pGst: 18 },
  { pName: "Socket UPVC", pSize: '3/4"', pPrice: 14.00, pGst: 18 },
  { pName: "Socket UPVC", pSize: '1"', pPrice: 22.00, pGst: 18 },
  { pName: "Socket UPVC", pSize: '1 1/4"', pPrice: 32.00, pGst: 18 },
  { pName: "Socket UPVC", pSize: '1 1/2"', pPrice: 42.00, pGst: 18 },

  { pName: "Elbow UPVC", pSize: '1/2"', pPrice: 14.00, pGst: 18 },
  { pName: "Elbow UPVC", pSize: '3/4"', pPrice: 20.00, pGst: 18 },
  { pName: "Elbow UPVC", pSize: '1"', pPrice: 34.00, pGst: 18 },
  { pName: "Elbow UPVC", pSize: '1 1/4"', pPrice: 50.50, pGst: 18 },
  { pName: "Elbow UPVC", pSize: '1 1/2"', pPrice: 67.00, pGst: 18 },

  { pName: "Shoe Bend UPVC", pSize: '1/2"', pPrice: 12.00, pGst: 18 },
  { pName: "Shoe Bend UPVC", pSize: '3/4"', pPrice: 18.00, pGst: 18 },
  { pName: "Shoe Bend UPVC", pSize: '1"', pPrice: 27.50, pGst: 18 },
  { pName: "Shoe Bend UPVC", pSize: '1 1/4"', pPrice: 42.00, pGst: 18 },
  { pName: "Shoe Bend UPVC", pSize: '1 1/2"', pPrice: 55.00, pGst: 18 },

  { pName: "Brass Elbow UPVC", pSize: '1/2"', pPrice: 119.00, pGst: 18 },
  { pName: "Brass Elbow UPVC", pSize: '3/4"', pPrice: 151.50, pGst: 18 },
  { pName: "Brass Elbow UPVC", pSize: '1"', pPrice: 293.50, pGst: 18 },

  { pName: "Step Bend UPVC", pSize: '1/2"', pPrice: 52.00, pGst: 18 },
  { pName: "Step Bend UPVC", pSize: '3/4"', pPrice: 76.50, pGst: 18 },
  { pName: "Step Bend UPVC", pSize: '1"', pPrice: 117.00, pGst: 18 },
  { pName: "Step Bend UPVC", pSize: '1 1/4"', pPrice: 200.50, pGst: 18 },
  { pName: "Step Bend UPVC", pSize: '1 1/2"', pPrice: 272.50, pGst: 18 },

  { pName: "Tee UPVC", pSize: '1/2"', pPrice: 18.50, pGst: 18 },
  { pName: "Tee UPVC", pSize: '3/4"', pPrice: 26.00, pGst: 18 },
  { pName: "Tee UPVC", pSize: '1"', pPrice: 45.50, pGst: 18 },
  { pName: "Tee UPVC", pSize: '1 1/4"', pPrice: 66.50, pGst: 18 },
  { pName: "Tee UPVC", pSize: '1 1/2"', pPrice: 89.00, pGst: 18 },

  { pName: "Brass Tee UPVC", pSize: '1/2"', pPrice: 124.50, pGst: 18 },
  { pName: "Brass Tee UPVC", pSize: '3/4"', pPrice: 157.00, pGst: 18 },
  { pName: "Brass Tee UPVC", pSize: '1"', pPrice: 302.50, pGst: 18 },

  { pName: "End Cap UPVC", pSize: '1/2"', pPrice: 6.50, pGst: 18 },
  { pName: "End Cap UPVC", pSize: '3/4"', pPrice: 10.00, pGst: 18 },
  { pName: "End Cap UPVC", pSize: '1"', pPrice: 15.00, pGst: 18 },
  { pName: "End Cap UPVC", pSize: '1 1/4"', pPrice: 24.50, pGst: 18 },
  { pName: "End Cap UPVC", pSize: '1 1/2"', pPrice: 31.50, pGst: 18 },

  { pName: "MTA UPVC", pSize: '1/2"', pPrice: 7.50, pGst: 18 },
  { pName: "MTA UPVC", pSize: '3/4"', pPrice: 10.50, pGst: 18 },
  { pName: "MTA UPVC", pSize: '1"', pPrice: 17.00, pGst: 18 },
  { pName: "MTA UPVC", pSize: '1 1/4"', pPrice: 25.00, pGst: 18 },
  { pName: "MTA UPVC", pSize: '1 1/2"', pPrice: 34.00, pGst: 18 },

  { pName: "Brass MTA UPVC", pSize: '1/2"', pPrice: 167.50, pGst: 18 },
  { pName: "Brass MTA UPVC", pSize: '3/4"', pPrice: 247.50, pGst: 18 },
  { pName: "Brass MTA UPVC", pSize: '1"', pPrice: 310.50, pGst: 18 },
  { pName: "Brass MTA UPVC", pSize: '1 1/4"', pPrice: 422.00, pGst: 18 },
  { pName: "Brass MTA UPVC", pSize: '1 1/2"', pPrice: 519.50, pGst: 18 },

  { pName: "FTA UPVC", pSize: '1/2"', pPrice: 9.50, pGst: 18 },
  { pName: "FTA UPVC", pSize: '3/4"', pPrice: 14.00, pGst: 18 },
  { pName: "FTA UPVC", pSize: '1"', pPrice: 21.50, pGst: 18 },
  { pName: "FTA UPVC", pSize: '1 1/4"', pPrice: 32.00, pGst: 18 },
  { pName: "FTA UPVC", pSize: '1 1/2"', pPrice: 39.50, pGst: 18 },

  { pName: "Brass FTA UPVC", pSize: '1/2"', pPrice: 114.00, pGst: 18 },
  { pName: "Brass FTA UPVC", pSize: '3/4"', pPrice: 142.00, pGst: 18 },
  { pName: "Brass FTA UPVC", pSize: '1"', pPrice: 247.00, pGst: 18 },
  { pName: "Brass FTA UPVC", pSize: '1 1/4"', pPrice: 323.50, pGst: 18 },
  { pName: "Brass FTA UPVC", pSize: '1 1/2"', pPrice: 436.00, pGst: 18 },

  { pName: "Union UPVC", pSize: '1/2"', pPrice: 35.50, pGst: 18 },
  { pName: "Union UPVC", pSize: '3/4"', pPrice: 46.00, pGst: 18 },
  { pName: "Union UPVC", pSize: '1"', pPrice: 72.00, pGst: 18 },
  { pName: "Union UPVC", pSize: '1 1/4"', pPrice: 99.00, pGst: 18 },
  { pName: "Union UPVC", pSize: '1 1/2"', pPrice: 142.00, pGst: 18 },

  { pName: "Tank Neppele UPVC", pSize: '1/2"', pPrice: 29.00, pGst: 18 },
  { pName: "Tank Neppele UPVC", pSize: '3/4"', pPrice: 38.50, pGst: 18 },
  { pName: "Tank Neppele UPVC", pSize: '1"', pPrice: 58.50, pGst: 18 },
  { pName: "Tank Neppele UPVC", pSize: '1 1/4"', pPrice: 67.00, pGst: 18 },
  { pName: "Tank Neppele UPVC", pSize: '1 1/2"', pPrice: 76.00, pGst: 18 },

  { pName: "Ball Wall UPVC", pSize: '1/2"', pPrice: 70.00, pGst: 18 },
  { pName: "Ball Wall UPVC", pSize: '3/4"', pPrice: 100.00, pGst: 18 },
  { pName: "Ball Wall UPVC", pSize: '1"', pPrice: 160.00, pGst: 18 },
  { pName: "Ball Wall UPVC", pSize: '1 1/4"', pPrice: 220.00, pGst: 18 },
  { pName: "Ball Wall UPVC", pSize: '1 1/2"', pPrice: 320.00, pGst: 18 },

  { pName: "R Tee UPVC", pSize: '1"', pPrice: 43.50, pGst: 18 },
  { pName: "R Tee UPVC", pSize: '1 1/4"', pPrice: 74.00, pGst: 18 },

  { pName: "Reducer UPVC", pSize: '1"', pPrice: 23.50, pGst: 18 },
  { pName: "Reducer UPVC", pSize: '1 1/4"', pPrice: 31.00, pGst: 18 },

  { pName: "Bush UPVC", pSize: '1"', pPrice: 11.50, pGst: 18 },
  { pName: "Bush UPVC", pSize: '1 1/4"', pPrice: 13.00, pGst: 18 },

  { pName: "Clip UPVC", pSize: '1/2"', pPrice: 5.00, pGst: 18 },
  { pName: "Clip UPVC", pSize: '3/4"', pPrice: 5.00, pGst: 18 },
  { pName: "Clip UPVC", pSize: '1"', pPrice: 5.00, pGst: 18 },
  { pName: "Clip UPVC", pSize: '1 1/4"', pPrice: 5.00, pGst: 18 },
  { pName: "Clip UPVC", pSize: '1 1/2"', pPrice: 10.00, pGst: 18 },

  // ---------------- CPVC ----------------
  
  { pName: "Pipe CPVC", pSize: '3/4"', pPrice: 376.50, pGst: 18 },
  { pName: "Pipe CPVC", pSize: '1"', pPrice: 597.00, pGst: 18 },
  { pName: "Pipe CPVC", pSize: '1 1/4"', pPrice: 918.00, pGst: 18 },
  { pName: "Pipe CPVC", pSize: '1 1/2"', pPrice: 1257.00, pGst: 18 },

  { pName: "Socket CPVC", pSize: '3/4"', pPrice: 16.50, pGst: 18 },
  { pName: "Socket CPVC", pSize: '1"', pPrice: 27.50, pGst: 18 },
  { pName: "Socket CPVC", pSize: '1 1/4"', pPrice: 55.50, pGst: 18 },
  { pName: "Socket CPVC", pSize: '1 1/2"', pPrice: 100.00, pGst: 18 },

  { pName: "Elbow CPVC", pSize: '3/4"', pPrice: 19.50, pGst: 18 },
  { pName: "Elbow CPVC", pSize: '1"', pPrice: 41.10, pGst: 18 },
  { pName: "Elbow CPVC", pSize: '1 1/4"', pPrice: 89.00, pGst: 18 },
  { pName: "Elbow CPVC", pSize: '1 1/2"', pPrice: 166.50, pGst: 18 },

  { pName: "Shoe Bend CPVC", pSize: '3/4"', pPrice: 29.00, pGst: 18 },
  { pName: "Shoe Bend CPVC", pSize: '1"', pPrice: 50.00, pGst: 18 },
  { pName: "Shoe Bend CPVC", pSize: '1 1/4"', pPrice: 104.00, pGst: 18 },
  { pName: "Shoe Bend CPVC", pSize: '1 1/2"', pPrice: 157.00, pGst: 18 },

  { pName: '3/4 X1/2 BR Elbo CPVC', pSize: '3/4"', pPrice: 75.50, pGst: 18 },

  { pName: "Step Bend CPVC", pSize: '3/4"', pPrice: 91.00, pGst: 18 },
  { pName: "Step Bend CPVC", pSize: '1"', pPrice: 168.00, pGst: 18 },
  { pName: "Step Bend CPVC", pSize: '1 1/4"', pPrice: 285.50, pGst: 18 },

  { pName: "Tee CPVC", pSize: '3/4"', pPrice: 33.00, pGst: 18 },
  { pName: "Tee CPVC", pSize: '1"', pPrice: 51.00, pGst: 18 },
  { pName: "Tee CPVC", pSize: '1 1/4"', pPrice: 112.00, pGst: 18 },
  { pName: "Tee CPVC", pSize: '1 1/2"', pPrice: 202.50, pGst: 18 },

  { pName: '3/4 X1/2 BR Tee CPVC', pSize: '3/4"', pPrice: 94.00, pGst: 18 },

  { pName: "End Cap CPVC", pSize: '3/4"', pPrice: 14.50, pGst: 18 },
  { pName: "End Cap CPVC", pSize: '1"', pPrice: 23.00, pGst: 18 },
  { pName: "End Cap CPVC", pSize: '1 1/4"', pPrice: 45.50, pGst: 18 },
  { pName: "End Cap CPVC", pSize: '1 1/2"', pPrice: 66.50, pGst: 18 },

  { pName: "MTA CPVC", pSize: '3/4"', pPrice: 24.00, pGst: 18 },
  { pName: "MTA CPVC", pSize: '1"', pPrice: 35.00, pGst: 18 },
  { pName: "MTA CPVC", pSize: '1 1/4"', pPrice: 59.00, pGst: 18 },
  { pName: "MTA CPVC", pSize: '1 1/2"', pPrice: 86.50, pGst: 18 },

  { pName: '3/4 X1/2 BR MTA CPVC', pSize: '3/4"', pPrice: 133.00, pGst: 18 },

  { pName: "FTA CPVC", pSize: '3/4"', pPrice: 30.50, pGst: 18 },
  { pName: "FTA CPVC", pSize: '1"', pPrice: 45.50, pGst: 18 },
  { pName: "FTA CPVC", pSize: '1 1/4"', pPrice: 108.00, pGst: 18 },
  { pName: "FTA CPVC", pSize: '1 1/2"', pPrice: 150.50, pGst: 18 },

  { pName: '3/4 X1/2 BR FTA CPVC', pSize: '3/4"', pPrice: 95.00, pGst: 18 },

  { pName: "Union CPVC", pSize: '3/4"', pPrice: 90.50, pGst: 18 },
  { pName: "Union CPVC", pSize: '1"', pPrice: 114.50, pGst: 18 },
  { pName: "Union CPVC", pSize: '1 1/4"', pPrice: 175.50, pGst: 18 },
  { pName: "Union CPVC", pSize: '1 1/2"', pPrice: 291.00, pGst: 18 },

  { pName: "Tank Neppele CPVC", pSize: '3/4"', pPrice: 67.50, pGst: 18 },
  { pName: "Tank Neppele CPVC", pSize: '1"', pPrice: 101.00, pGst: 18 },
  { pName: "Tank Neppele CPVC", pSize: '1 1/4"', pPrice: 150.50, pGst: 18 },
  { pName: "Tank Neppele CPVC", pSize: '1 1/2"', pPrice: 220.50, pGst: 18 },

  { pName: "Ball Wall CPVC", pSize: '3/4"', pPrice: 171.00, pGst: 18 },
  { pName: "Ball Wall CPVC", pSize: '1"', pPrice: 320.00, pGst: 18 },
  { pName: "Ball Wall CPVC", pSize: '1 1/4"', pPrice: 563.00, pGst: 18 },
  { pName: "Ball Wall CPVC", pSize: '1 1/2"', pPrice: 884.00, pGst: 18 },

  { pName: "R Tee CPVC", pSize: '1"', pPrice: 87.50, pGst: 18 },
  { pName: "R Tee CPVC", pSize: '1 1/4"', pPrice: 130.50, pGst: 18 },

  { pName: "Reducer CPVC", pSize: '1"', pPrice: 36.00, pGst: 18 },
  { pName: "Reducer CPVC", pSize: '1 1/4"', pPrice: 79.00, pGst: 18 },

  { pName: "Bush CPVC", pSize: '1"', pPrice: 20.00, pGst: 18 },
  { pName: "Bush CPVC", pSize: '1 1/4"', pPrice: 32.00, pGst: 18 },

  { pName: "Clip CPVC", pSize: '3/4"', pPrice: 10.00, pGst: 18 },
  { pName: "Clip CPVC", pSize: '1"', pPrice: 10.00, pGst: 18 },
  { pName: "Clip CPVC", pSize: '1 1/4"', pPrice: 15.00, pGst: 18 },

  { pName: "Brass MTA CPVC", pSize: '1 1/2"', pPrice: 839.50, pGst: 18 },
  { pName: "Brass FTA CPVC", pSize: '1 1/2"', pPrice: 740.50, pGst: 18 },

  { pName: "Step Over CPVC", pSize: '1 1/2"', pPrice: 294.00, pGst: 18 },

  { pName: "1 1/2 X 1 Tee CPVC", pSize: 'None', pPrice: 218.00, pGst: 18 },
  { pName: "1 1/2 X 3/4 Tee CPVC", pSize: 'None', pPrice: 215.50, pGst: 18 },
  { pName: "1 1/2 X 1 1/4 Tee CPVC", pSize: 'None', pPrice: 210.50, pGst: 18 },

  { pName: "1 1/2 X 1 Reducer CPVC", pSize: 'None', pPrice: 108.00, pGst: 18 },
  { pName: "1 1/2 X 3/4 Reducer CPVC", pSize: 'None', pPrice: 118.50, pGst: 18 },
  { pName: "1 1/2 X 1 1/4 Reducer CPVC", pSize: 'None', pPrice: 104.00, pGst: 18 },
  
  { pName: "1 1/2 X 1 Bush CPVC", pSize: 'None', pPrice: 59.00, pGst: 18 },
  { pName: "1 1/2 X 3/4 Bush CPVC", pSize: 'None', pPrice: 60.00, pGst: 18 },
  { pName: "1 1/2 X 1 1/4 Bush CPVC", pSize: 'None', pPrice: 42.50, pGst: 18 },
  
   



  // ---------------- SWR ----------------
 { pName: "Pipe SWR", pSize: '2 1/2"', pPrice: 658.50, pGst: 18 },
{ pName: "Pipe SWR", pSize: '4"', pPrice: 1176.00, pGst: 18 },

{ pName: "Elbow SWR", pSize: '2 1/2"', pPrice: 104.50, pGst: 18 },
{ pName: "Elbow SWR", pSize: '4"', pPrice: 181.50, pGst: 18 },

{ pName: "Tee SWR", pSize: '2 1/2"', pPrice: 146.50, pGst: 18 },
{ pName: "Tee SWR", pSize: '4"', pPrice: 265.50, pGst: 18 },

{ pName: "Shoe Bend SWR", pSize: '2 1/2"', pPrice: 97.50, pGst: 18 },
{ pName: "Shoe Bend SWR", pSize: '4"', pPrice: 156.50, pGst: 18 },

{ pName: "Y SWR", pSize: '2 1/2"', pPrice: 193.50, pGst: 18 },
{ pName: "Y SWR", pSize: '4"', pPrice: 341.00, pGst: 18 },

{ pName: "Nani Trap SWR", pSize: '4"', pPrice: 140.00, pGst: 18 },
{ pName: "Gas Cap SWR", pSize: '2 1/2"', pPrice: 19.50, pGst: 18 },
{ pName: "Gas Cap SWR", pSize: '4"', pPrice: 30.50, pGst: 18 },

{ pName: "Jali SWR", pSize: '4"', pPrice: 25.00, pGst: 18 },
{ pName: "Door Bend SWR", pSize: '2 1/2"', pPrice: 131.00, pGst: 18 },
{ pName: "Door Bend SWR", pSize: '4"', pPrice: 222.00, pGst: 18 },

{ pName: "Door Tee SWR", pSize: '2 1/2"', pPrice: 176.50, pGst: 18 },
{ pName: "Door Tee SWR", pSize: '4"', pPrice: 316.00, pGst: 18 },

{ pName: "Socket SWR", pSize: '2 1/2"', pPrice: 81.00, pGst: 18 },
{ pName: "Socket SWR", pSize: '4"', pPrice: 147.00, pGst: 18 },

{ pName: "4X2 1/2 Reducer SWR", pSize: '4"', pPrice: 131.00, pGst: 18 },
{ pName: "4X2 1/2 Reducer Tee SWR", pSize: '4"', pPrice: 255.50, pGst: 18 },

//Others

 { pName: "Hose Nepal", pSize: 'None', pPrice: 35.00, pGst: 0 },
{ pName: "Teplon Tep", pSize: 'None', pPrice: 10.00, pGst: 0 },
{ pName: "W C Bhanda", pSize: 'None', pPrice: 1180.00, pGst: 0 },
{ pName: "P Trap", pSize: 'None', pPrice: 190.00, pGst: 0 },
{ pName: "Solution", pSize: 'None', pPrice: 170.00, pGst: 0 },
{ pName: "Band Plag", pSize: 'None', pPrice: 5.00, pGst: 0 },
{ pName: "Khille", pSize: 'None', pPrice: 120.00, pGst: 0 },
{ pName: "PVC Pipe", pSize: 'None', pPrice: 190.00, pGst: 0 },
{ pName: "PVC Elbow", pSize: 'None', pPrice: 20.00, pGst: 0 },

];



function getProductPrice(productName, productSize) {
    
    let productPrice = "";

    productPrices.forEach((option) => {
        if (productName == option.pName && productSize == option.pSize) {
            productPrice = option.pPrice;
        }
    });
    
    return productPrice;
}

function getGst(productName, productSize) {
    
    let productGst = "";

    productPrices.forEach((option) => {
        if (productName == option.pName && productSize == option.pSize) {
            productGst = option.pGst;
        }
    });
    
    return productGst;
}


function viewProducts(){
    const tBody = document.querySelector(".product-table-body");
    let tableProducts = "";
     productPrices.forEach((p) => {
        let sr=0;
        tableProducts += `<tr>
                 <td>${sr++}</td>
                 <td>${p.pName}</td>
                 <td>${p.pSize}</td>
                 <td>${p.pGst}</td>
                 <td>${p.pPrice}</td>
               </tr>`;
     })
    
     tBody.innerHTML = tableProducts;
     console.log(tableProducts);
}