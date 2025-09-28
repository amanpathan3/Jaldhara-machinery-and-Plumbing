let productPrices = [
  // ---------------- UPVC ----------------
  { pName: "Pipe UPVC", pSize: '1/2"', pPrice: 256.50 },
  { pName: "Pipe UPVC", pSize: '3/4"', pPrice: 342.00 },
  { pName: "Pipe UPVC", pSize: '1"', pPrice: 501.00 },
  { pName: "Pipe UPVC", pSize: '1 1/4"', pPrice: 673.50 },
  { pName: "Pipe UPVC", pSize: '1 1/2"', pPrice: 802.50 },

  { pName: "Socket UPVC", pSize: '1/2"', pPrice: 9.50 },
  { pName: "Socket UPVC", pSize: '3/4"', pPrice: 14.00 },
  { pName: "Socket UPVC", pSize: '1"', pPrice: 22.00 },
  { pName: "Socket UPVC", pSize: '1 1/4"', pPrice: 32.00 },
  { pName: "Socket UPVC", pSize: '1 1/2"', pPrice: 42.00 },

  { pName: "Elbow UPVC", pSize: '1/2"', pPrice: 14.00 },
  { pName: "Elbow UPVC", pSize: '3/4"', pPrice: 20.00 },
  { pName: "Elbow UPVC", pSize: '1"', pPrice: 34.00 },
  { pName: "Elbow UPVC", pSize: '1 1/4"', pPrice: 50.50 },
  { pName: "Elbow UPVC", pSize: '1 1/2"', pPrice: 67.00 },

  { pName: "Shoe Bend UPVC", pSize: '1/2"', pPrice: 12.00 },
  { pName: "Shoe Bend UPVC", pSize: '3/4"', pPrice: 18.00 },
  { pName: "Shoe Bend UPVC", pSize: '1"', pPrice: 27.50 },
  { pName: "Shoe Bend UPVC", pSize: '1 1/4"', pPrice: 42.00 },
  { pName: "Shoe Bend UPVC", pSize: '1 1/2"', pPrice: 55.00 },

  { pName: "Brass Elbow UPVC", pSize: '1/2"', pPrice: 119.00 },
  { pName: "Brass Elbow UPVC", pSize: '3/4"', pPrice: 151.50 },
  { pName: "Brass Elbow UPVC", pSize: '1"', pPrice: 293.50 },

  { pName: "Step Bend UPVC", pSize: '1/2"', pPrice: 52.00 },
  { pName: "Step Bend UPVC", pSize: '3/4"', pPrice: 76.50 },
  { pName: "Step Bend UPVC", pSize: '1"', pPrice: 117.00 },
  { pName: "Step Bend UPVC", pSize: '1 1/4"', pPrice: 200.50 },
  { pName: "Step Bend UPVC", pSize: '1 1/2"', pPrice: 272.50 },

  { pName: "Tee UPVC", pSize: '1/2"', pPrice: 18.50 },
  { pName: "Tee UPVC", pSize: '3/4"', pPrice: 26.00 },
  { pName: "Tee UPVC", pSize: '1"', pPrice: 45.50 },
  { pName: "Tee UPVC", pSize: '1 1/4"', pPrice: 66.50 },
  { pName: "Tee UPVC", pSize: '1 1/2"', pPrice: 89.00 },

  { pName: "Brass Tee UPVC", pSize: '1/2"', pPrice: 124.50 },
  { pName: "Brass Tee UPVC", pSize: '3/4"', pPrice: 157.00 },
  { pName: "Brass Tee UPVC", pSize: '1"', pPrice: 302.50 },

  { pName: "End Cap UPVC", pSize: '1/2"', pPrice: 6.50 },
  { pName: "End Cap UPVC", pSize: '3/4"', pPrice: 10.00 },
  { pName: "End Cap UPVC", pSize: '1"', pPrice: 15.00 },
  { pName: "End Cap UPVC", pSize: '1 1/4"', pPrice: 24.50 },
  { pName: "End Cap UPVC", pSize: '1 1/2"', pPrice: 31.50 },

  { pName: "MTA UPVC", pSize: '1/2"', pPrice: 7.50 },
  { pName: "MTA UPVC", pSize: '3/4"', pPrice: 10.50 },
  { pName: "MTA UPVC", pSize: '1"', pPrice: 17.00 },
  { pName: "MTA UPVC", pSize: '1 1/4"', pPrice: 25.00 },
  { pName: "MTA UPVC", pSize: '1 1/2"', pPrice: 34.00 },

  { pName: "Brass MTA UPVC", pSize: '1/2"', pPrice: 167.50 },
  { pName: "Brass MTA UPVC", pSize: '3/4"', pPrice: 247.50 },
  { pName: "Brass MTA UPVC", pSize: '1"', pPrice: 310.50 },
  { pName: "Brass MTA UPVC", pSize: '1 1/4"', pPrice: 422.00 },
  { pName: "Brass MTA UPVC", pSize: '1 1/2"', pPrice: 519.50 },

  { pName: "FTA UPVC", pSize: '1/2"', pPrice: 9.50 },
  { pName: "FTA UPVC", pSize: '3/4"', pPrice: 14.00 },
  { pName: "FTA UPVC", pSize: '1"', pPrice: 21.50 },
  { pName: "FTA UPVC", pSize: '1 1/4"', pPrice: 32.00 },
  { pName: "FTA UPVC", pSize: '1 1/2"', pPrice: 39.50 },

  { pName: "Brass FTA UPVC", pSize: '1/2"', pPrice: 114.00 },
  { pName: "Brass FTA UPVC", pSize: '3/4"', pPrice: 142.00 },
  { pName: "Brass FTA UPVC", pSize: '1"', pPrice: 247.00 },
  { pName: "Brass FTA UPVC", pSize: '1 1/4"', pPrice: 323.50 },
  { pName: "Brass FTA UPVC", pSize: '1 1/2"', pPrice: 436.00 },

  { pName: "Union UPVC", pSize: '1/2"', pPrice: 35.50 },
  { pName: "Union UPVC", pSize: '3/4"', pPrice: 46.00 },
  { pName: "Union UPVC", pSize: '1"', pPrice: 72.00 },
  { pName: "Union UPVC", pSize: '1 1/4"', pPrice: 99.00 },
  { pName: "Union UPVC", pSize: '1 1/2"', pPrice: 142.00 },

  { pName: "Tank Neppele UPVC", pSize: '1/2"', pPrice: 29.00 },
  { pName: "Tank Neppele UPVC", pSize: '3/4"', pPrice: 38.50 },
  { pName: "Tank Neppele UPVC", pSize: '1"', pPrice: 58.50 },
  { pName: "Tank Neppele UPVC", pSize: '1 1/4"', pPrice: 67.00 },
  { pName: "Tank Neppele UPVC", pSize: '1 1/2"', pPrice: 76.00 },

  { pName: "Ball Wall UPVC", pSize: '1/2"', pPrice: 70.00 },
  { pName: "Ball Wall UPVC", pSize: '3/4"', pPrice: 100.00 },
  { pName: "Ball Wall UPVC", pSize: '1"', pPrice: 160.00 },
  { pName: "Ball Wall UPVC", pSize: '1 1/4"', pPrice: 220.00 },
  { pName: "Ball Wall UPVC", pSize: '1 1/2"', pPrice: 320.00 },

  { pName: "R Tee UPVC", pSize: '1"', pPrice: 43.50 },
  { pName: "R Tee UPVC", pSize: '1 1/4"', pPrice: 74.00 },

  { pName: "Reducer UPVC", pSize: '1"', pPrice: 23.50 },
  { pName: "Reducer UPVC", pSize: '1 1/4"', pPrice: 31.00 },

  { pName: "Bush UPVC", pSize: '1"', pPrice: 11.50 },
  { pName: "Bush UPVC", pSize: '1 1/4"', pPrice: 13.00 },

  { pName: "Clip UPVC", pSize: '1/2"', pPrice: 5.00 },
  { pName: "Clip UPVC", pSize: '3/4"', pPrice: 5.00 },
  { pName: "Clip UPVC", pSize: '1"', pPrice: 5.00 },
  { pName: "Clip UPVC", pSize: '1 1/4"', pPrice: 5.00 },
  { pName: "Clip UPVC", pSize: '1 1/2"', pPrice: 10.00 },

  // ---------------- CPVC ----------------
  { pName: "Pipe CPVC", pSize: '3/4"', pPrice: 376.50 },
  { pName: "Pipe CPVC", pSize: '1"', pPrice: 597.00 },
  { pName: "Pipe CPVC", pSize: '1 1/4"', pPrice: 918.00 },

  { pName: "Socket CPVC", pSize: '3/4"', pPrice: 16.50 },
  { pName: "Socket CPVC", pSize: '1"', pPrice: 27.50 },
  { pName: "Socket CPVC", pSize: '1 1/4"', pPrice: 55.50 },

  { pName: "Elbow CPVC", pSize: '3/4"', pPrice: 19.50 },
  { pName: "Elbow CPVC", pSize: '1"', pPrice: 41.10 },
  { pName: "Elbow CPVC", pSize: '1 1/4"', pPrice: 89.00 },

  { pName: "Shoe Bend CPVC", pSize: '3/4"', pPrice: 29.00 },
  { pName: "Shoe Bend CPVC", pSize: '1"', pPrice: 50.00 },
  { pName: "Shoe Bend CPVC", pSize: '1 1/4"', pPrice: 104.00 },

  { pName: '3/4 X1/2 BR Elbo CPVC', pSize: '3/4"', pPrice: 75.50 },

  { pName: "Step Bend CPVC", pSize: '3/4"', pPrice: 91.00 },
  { pName: "Step Bend CPVC", pSize: '1"', pPrice: 168.00 },
  { pName: "Step Bend CPVC", pSize: '1 1/4"', pPrice: 285.50 },

  { pName: "Tee CPVC", pSize: '3/4"', pPrice: 33.00 },
  { pName: "Tee CPVC", pSize: '1"', pPrice: 51.00 },
  { pName: "Tee CPVC", pSize: '1 1/4"', pPrice: 112.00 },

  { pName: '3/4 X1/2 BR Tee CPVC', pSize: '3/4"', pPrice: 94.00 },

  { pName: "End Cap CPVC", pSize: '3/4"', pPrice: 14.50 },
  { pName: "End Cap CPVC", pSize: '1"', pPrice: 23.00 },
  { pName: "End Cap CPVC", pSize: '1 1/4"', pPrice: 45.50 },

  { pName: "MTA CPVC", pSize: '3/4"', pPrice: 24.00 },
  { pName: "MTA CPVC", pSize: '1"', pPrice: 35.00 },
  { pName: "MTA CPVC", pSize: '1 1/4"', pPrice: 59.00 },

  { pName: '3/4 X1/2 BR MTA CPVC', pSize: '3/4"', pPrice: 133.00 },

  { pName: "FTA CPVC", pSize: '3/4"', pPrice: 30.50 },
  { pName: "FTA CPVC", pSize: '1"', pPrice: 45.50 },
  { pName: "FTA CPVC", pSize: '1 1/4"', pPrice: 108.00 },

  { pName: '3/4 X1/2 BR FTA CPVC', pSize: '3/4"', pPrice: 95.00 },

  { pName: "Union CPVC", pSize: '3/4"', pPrice: 90.50 },
  { pName: "Union CPVC", pSize: '1"', pPrice: 114.50 },
  { pName: "Union CPVC", pSize: '1 1/4"', pPrice: 175.50 },

  { pName: "Tank Neppele CPVC", pSize: '3/4"', pPrice: 67.50 },
  { pName: "Tank Neppele CPVC", pSize: '1"', pPrice: 101.00 },
  { pName: "Tank Neppele CPVC", pSize: '1 1/4"', pPrice: 150.50 },

  { pName: "Ball Wall CPVC", pSize: '3/4"', pPrice: 171.00 },
  { pName: "Ball Wall CPVC", pSize: '1"', pPrice: 320.00 },
  { pName: "Ball Wall CPVC", pSize: '1 1/4"', pPrice: 563.00 },

  { pName: "R Tee CPVC", pSize: '1"', pPrice: 87.50 },
  { pName: "R Tee CPVC", pSize: '1 1/4"', pPrice: 130.50 },

  { pName: "Reducer CPVC", pSize: '1"', pPrice: 36.00 },
  { pName: "Reducer CPVC", pSize: '1 1/4"', pPrice: 79.00 },

  { pName: "Bush CPVC", pSize: '1"', pPrice: 20.00 },
  { pName: "Bush CPVC", pSize: '1 1/4"', pPrice: 32.00 },

  { pName: "Clip CPVC", pSize: '3/4"', pPrice: 10.00 },
  { pName: "Clip CPVC", pSize: '1"', pPrice: 10.00 },
  { pName: "Clip CPVC", pSize: '1 1/4"', pPrice: 15.00 },

  { pName: "Brass MTA CPVC", pSize: '3/4"', pPrice: 0.00 },

  // ---------------- SWR ----------------
  { pName: "Pipe SWR", pSize: '2 1/2"', pPrice: 658.50 },
  { pName: "Pipe SWR", pSize: '4"', pPrice: 1176.00 },

  { pName: "Elbow SWR", pSize: '2 1/2"', pPrice: 104.50 },
  { pName: "Elbow SWR", pSize: '4"', pPrice: 181.50 },

  { pName: "Tee SWR", pSize: '2 1/2"', pPrice: 146.50 },
  { pName: "Tee SWR", pSize: '4"', pPrice: 265.50 },

  { pName: "Shoe Bend SWR", pSize: '2 1/2"', pPrice: 97.50 },
  { pName: "Shoe Bend SWR", pSize: '4"', pPrice: 156.50 },

  { pName: "Y SWR", pSize: '2 1/2"', pPrice: 193.50 },
  { pName: "Y SWR", pSize: '4"', pPrice: 341.00 },

  { pName: "Nani Trap SWR", pSize: '4"', pPrice: 140.00 },
  { pName: "Gas Cap SWR", pSize: '2 1/2"', pPrice: 19.50 },
  { pName: "Gas Cap SWR", pSize: '4"', pPrice: 30.50 },

  { pName: "Jali SWR", pSize: '4"', pPrice: 25.00 },
  { pName: "Door Bend SWR", pSize: '2 1/2"', pPrice: 131.00 },
  { pName: "Door Bend SWR", pSize: '4"', pPrice: 222.00 },

  { pName: "Door Tee SWR", pSize: '2 1/2"', pPrice: 176.50 },
  { pName: "Door Tee SWR", pSize: '4"', pPrice: 316.00 },

  { pName: "Socket SWR", pSize: '2 1/2"', pPrice: 81.00 },
  { pName: "Socket SWR", pSize: '4"', pPrice: 147.00 },

  { pName: "4X2 1/2 Reducer SWR", pSize: '4"', pPrice: 131.00 },
  { pName: "4X2 1/2 Reducer Tee SWR", pSize: '4"', pPrice: 255.50 },

  { pName: "Hose Nepal", pSize: 'None', pPrice: 35.00 },
  { pName: "Teplon Tep", pSize: 'None', pPrice: 10.00 },
  { pName: "W C Bhanda", pSize: 'None', pPrice: 1180.00 },
  { pName: "P Trap", pSize: 'None', pPrice: 190.00 },
  { pName: "Solution", pSize: 'None', pPrice: 170.00 },
  { pName: "Band Plag", pSize: 'None', pPrice: 5.00 },
  { pName: "Khille", pSize: 'None', pPrice: 120.00 },
  { pName: "PVC Pipe", pSize: 'None', pPrice: 190.00 },
  { pName: "PVC Elbow", pSize: 'None', pPrice: 20.00 }
];



function getProductPrice(productName, productSize) {
    console.log(productName);
    console.log(productSize);
    
    let productPrice = "";

    productPrices.forEach((option) => {
        if (productName == option.pName && productSize == option.pSize) {
            productPrice = option.pPrice;
        }
    });
    console.log(productPrice);
    return productPrice;
}
