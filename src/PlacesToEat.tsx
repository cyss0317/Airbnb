export default function PlacesToGo() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "100dvw", height: "100dvh" }}>
        <iframe
          className="google-map"
          title="google-map"
          src="https://www.google.com/maps/d/u/1/embed?mid=1JRWzRsCKDp2j1KHWto_M_1lRO9Ebsss&ehbc=2E312F"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </div>
  );
}
