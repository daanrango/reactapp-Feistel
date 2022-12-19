/*
     elaborado: Leonel Anthony Herrera Orosco
     fecha: Diciembre, 2022
     referencia: https://www.youtube.com/watch?v=kJv5sxaGCMg&ab_channel=CarlosAlbertoTombePosso
*/
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
