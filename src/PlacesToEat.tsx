import { useEffect, useRef, useState } from "react";

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
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (loaded && iframeRef.current) {
      // const iframeDocument =
      //   iframeRef.current.contentDocument
      // iframeRef.current.contentWindow?.document;

      // console.log(iframeDocument)
      const panelButton = document.querySelector(
        "div.i4ewOd-pzNkMb-ornU0b-b0t70b-Bz112c"
      ) as HTMLDivElement;
      panelButton?.click();
    }
  }, [loaded]);

  // const panelButton = document.querySelector(
  //   "div.i4ewOd-pzNkMb-ornU0b-b0t70b-Bz112c"
  // );
  // console.log(panelButton);
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "100dvw", height: "100dvh" }}>
        <iframe
          className="google-map"
          title="google-map"
          src="https://www.google.com/maps/d/u/2/embed?mid=1JRWzRsCKDp2j1KHWto_M_1lRO9Ebsss&ehbc=2E312F&hl=en"
          width="100%"
          height="100%"
          onLoad={() => setLoaded(true)}
          ref={iframeRef}
        ></iframe>
      </div>
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
