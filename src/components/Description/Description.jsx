import "./Description.css";
import { Socials } from "../Socials";

export default function Description() {
  return (
    <>
      <div className="description">
        <h1 className="description-header1 header1">Hello,</h1>
        <h1 className="description-header2 header2">my name is Deniz</h1>
        <p className="description-paragraph paragraph">
          I'm the architect of virtual realms, where pixels dance and algorithms
          find purpose.
        </p>
        <Socials></Socials>
      </div>
      
    </>
  );
}
