import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const places = [
  {
    name: "Umami Sushi",
    location: "700 N LBJ Drive, San Marcos, TX 78666",
    phoneNumber: "(512)-667-7903",
    hours: [
      { day: "Mon", open: "11am", close: "9pm" },
      { day: "Tue", open: "11am", close: "9pm" },
      { day: "Wed", open: "11am", close: "9pm" },
      { day: "Thu", open: "11am", close: "9pm" },
      { day: "Fri", open: "11am", close: "9pm" },
      { day: "Sat", open: "11am", close: "9pm" },
      { day: "Sun", open: "11am", close: "9pm", closed: true },
    ],
    rating: 5,
    review:
      "Fresh fish, great service, so many roll options, it's the best sushi restaurant we always go to! It's 15 mins away from here toward South. ",
  },
];

// export default function PlacesToEat() {
//   return (
//     <>
//       {places.map((place) => {
//         return (
//           <div>
//             <h2>{place.name}</h2>
//             <p>{place.location}</p>
//             {place.hours.map((hour) => (
//               <p>
//                 {hour.closed
//                   ? `${hour.day}: ${hour.open} - ${hour.close}`
//                   : `${hour.day}: Closed`}
//               </p>
//             ))}
//             <p>My Rating: {place.rating}</p>
//             <p>My Review: {place.review}</p>
//           </div>
//         );
//       })}
//     </>
//   );
// }
export default function PlacesToEat() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "40%", padding: "10px", overflowY: "auto" }}>
      </div>

      <iframe
        src="https://www.google.com/maps/d/u/2/embed?mid=1JRWzRsCKDp2j1KHWto_M_1lRO9Ebsss&ehbc=2E312F&hl=en"
        width="640"
        height="480"
        loading="lazy"
      ></iframe>
      {/* <LoadScript googleMapsApiKey={API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={defaultCenter}
          zoom={14}
        >
          {restaurants.map((restaurant) => (
            <Marker
              key={restaurant.id}
              position={{ lat: restaurant.lat, lng: restaurant.lng }}
            />
          ))}

          <Marker
            position={{ lat: 30.02136685325689, lng: -97.88352695069264 }}
            icon={{
              url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
            }}
          />
        </GoogleMap>
      </LoadScript> */}
    </div>
  );
}
