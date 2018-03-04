function changeBackground(imageURL) {
    document.body.style.backgroundImage = "url('" + imageURL + "')";
    
}
 let dataURL = "https://api.nasa.gov/planetary/apod?api_key=vVeFDMG5eeenbBBKyq9jlE5oEhW9XlcjDPCBYOTF";

 function getPicture() {
     fetch(dataURL)
     .then((resp) => {
    return resp.json();
     })
     .then((data) => {
         changeBackground(data.hdurl);
     });
 }
 getPicture();
