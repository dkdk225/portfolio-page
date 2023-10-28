import { LinkedIn, GitHub, AccountBox } from "@mui/icons-material";
import CV from "../../assets/Deniz_KAYA_CV.pdf"
import Tooltip from "@mui/material/Tooltip";
import "./Socials.css";
export default function Socials() {
  return (
    <div className="social__list">
      <Tooltip title="GitHub">
        <a href="https://github.com/dkdk225" className="social__container">
          <GitHub className="social__icon"></GitHub>
        </a>
      </Tooltip>
      <Tooltip title="LinkedIn">
        <a href="https://www.linkedin.com/in/deniz--kaya/" className="social__container">
          <LinkedIn className="social__icon"></LinkedIn>
        </a>
      </Tooltip>
      <Tooltip title="CV">
        <a href={CV} target="_blank" className="social__container">
          <AccountBox className="social__icon"></AccountBox>
        </a>
      </Tooltip>
    </div>
  );
}
