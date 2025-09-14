import { aboutThisHouse } from "./articles";
import Body from "./Body";

export default function AboutThisHouse() {
  return (
    <>
      <Body articles={aboutThisHouse} />;
    </>
  );
}