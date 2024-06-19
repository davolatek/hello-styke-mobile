import { SvgXml } from "react-native-svg";

export const Search = ({ color = "black" }: { color?: string }) => (
  <SvgXml
    xml={`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M8.3636 1C6.90722 1 5.48354 1.43187 4.2726 2.24099C3.06167 3.05011 2.11786 4.20015 1.56052 5.54567C1.00319 6.89119 0.857367 8.37176 1.14149 9.80016C1.42562 11.2286 2.12693 12.5406 3.15675 13.5704C4.18657 14.6003 5.49863 15.3016 6.92703 15.5857C8.35543 15.8698 9.836 15.724 11.1815 15.1667C12.527 14.6093 13.6771 13.6655 14.4862 12.4546C15.2953 11.2437 15.7272 9.81997 15.7272 8.36359C15.7271 6.41069 14.9512 4.5378 13.5703 3.15688C12.1894 1.77597 10.3165 1.00012 8.3636 1Z" stroke=${color} stroke-opacity="0.4" stroke-miterlimit="10"/>
    <path d="M13.8574 13.8574L19.0001 19.0001" stroke=${color} stroke-opacity="0.4" stroke-miterlimit="10" stroke-linecap="round"/>
  </svg>
    `}
    width={18}
    height={18}
  />
);
