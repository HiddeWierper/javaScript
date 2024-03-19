// function getLocation(){
if (navigator.geolocation) {
    // Request the user's location
    navigator.geolocation.getCurrentPosition(
        function(position) {
            // Get the latitude and longitude
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const googleMapsLink = `https://www.google.com/maps/?q=${latitude},${longitude}`;
            document.getElementById("locationLink").innerHTML = `<a href="${googleMapsLink}" target="_blank">Open Location</a>`;
            // Use the OpenStreetMap Nominatim API to convert coordinates to address
            const reverseGeocodingUrl = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;

            fetch(reverseGeocodingUrl)
                .then(response => response.json())
                .then(data => {
                    // Extract the address components from the response
                    const address = data.address;

// Convert the address object to a string and log it
                    console.log("Address: " + JSON.stringify(address));
                    const amenity = data.address.amenity;

                    // Or log specific properties of the address
                    console.log("Road: " + address.road);
                    console.log("nummer: " + address.house_number);
                    console.log("stad: " + address.village);
                    console.log("suburb: " + address.suburb);
                    console.log("Amenity: " + amenity);
                    if(amenity != undefined){
                    document.getElementById("location").textContent = "Location: " + amenity;
                    }
                    let addressString = "address: ";
                    if (address.road !== undefined) {
                        addressString += address.road + ", ";
                    }
                    if (address.house_number !== undefined) {
                        addressString += address.house_number + ", ";
                    }
                    if (address.suburb !== undefined) {
                        addressString += address.suburb + ", ";
                    }
                    if (address.country !== undefined) {
                        addressString += address.country;
                    }
                    document.getElementById("address").textContent = addressString;                    }
                
                )
                .catch(error => {
                    console.error("Error getting address:", error);
                });
        },
        function(error) {
            // Handle any errors that occur during the request
            console.error("Error getting location:", error);
        }
    );
} else {
    console.error("Geolocation is not supported by this browser.");
}
// }

// setInterval(getLocation, 10000);