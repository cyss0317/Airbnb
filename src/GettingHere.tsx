export default function GettingHere() {
  return (
    <div
      className="flex flex-col md:flex-row gap-6 p-6 slide-in-from-right"
      style={{ width: "100dvw", height: "100dvh" }}
    >
      <div className="w-full md:w-1/3">
        <p>
          Hello there! I wanted to make your arrival as smooth as possible, so I
          put together some detailed directions to{" "}
          <span className="font-bold">The Cozy Oasis</span>. Since we're in a
          gated community with two gates but just one entrance, this should help
          you find us easily! 😊🏡✨ This will get you to the entrance gate and,{" "}
          press <span className="font-bold"> "0928"</span> once you get to the
          gate,
        </p>
      </div>
      <iframe
        title="google-maps-to-home"
        className="rounded-lg"
        width="100%"
        height="80%"
        loading="lazy"
        src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyDiO0-W2LJmq4gOfswwq_TmGLgT1MHXIo8
          &origin=Current+Location
          &destination=1152+Harwell+Loop,+Kyle,+TX+78640
          &waypoints=1576-1608+Harwell+Loop,+Kyle,+TX+78640
          &mode=driving"
      ></iframe>
    </div>
  );
}
