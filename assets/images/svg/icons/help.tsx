
import { SvgXml } from "react-native-svg";

export const Help = () => (
    <SvgXml
        xml={`<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.70313 5.63656C7.53313 5.83206 7.4375 6.10194 7.4375 6.37287C7.4375 6.51377 7.38153 6.6489 7.2819 6.74853C7.18228 6.84815 7.04715 6.90412 6.90625 6.90412C6.76536 6.90412 6.63023 6.84815 6.5306 6.74853C6.43097 6.6489 6.375 6.51377 6.375 6.37287C6.375 5.87031 6.54607 5.34225 6.90625 4.93425C7.27494 4.51563 7.82 4.24788 8.5 4.24788C9.18 4.24788 9.72506 4.51563 10.0938 4.93425C10.4539 5.34331 10.625 5.86925 10.625 6.37287C10.625 6.8935 10.5018 7.29725 10.3041 7.63725C10.1309 7.93369 9.90463 8.1685 9.72506 8.35656L9.68044 8.40225C9.48281 8.60944 9.33088 8.77837 9.21931 8.99087C9.11306 9.19381 9.03125 9.46262 9.03125 9.87169C9.03125 10.0126 8.97528 10.1477 8.87565 10.2473C8.77602 10.347 8.6409 10.4029 8.5 10.4029C8.35911 10.4029 8.22398 10.347 8.12435 10.2473C8.02472 10.1477 7.96875 10.0126 7.96875 9.87169C7.96875 9.30644 8.08563 8.8655 8.27794 8.49787C8.466 8.13981 8.71356 7.87737 8.91331 7.66806L8.93669 7.64362C9.13644 7.43431 9.27881 7.28556 9.38613 7.10175C9.48706 6.92856 9.5625 6.70969 9.5625 6.37287C9.5625 6.10194 9.46794 5.831 9.29688 5.63656C9.13431 5.45275 8.8825 5.31038 8.5 5.31038C8.1175 5.31038 7.86569 5.45275 7.70313 5.63656ZM8.5 12.9731C8.59997 12.9769 8.69967 12.9605 8.79314 12.9248C8.88661 12.8892 8.97192 12.835 9.04399 12.7657C9.11605 12.6963 9.17337 12.6131 9.21252 12.521C9.25168 12.4289 9.27186 12.3299 9.27186 12.2299C9.27186 12.1299 9.25168 12.0309 9.21252 11.9388C9.17337 11.8467 9.11605 11.7635 9.04399 11.6941C8.97192 11.6248 8.88661 11.5706 8.79314 11.535C8.69967 11.4993 8.59997 11.4829 8.5 11.4867C8.30275 11.4867 8.11357 11.565 7.97409 11.7045C7.83461 11.844 7.75625 12.0332 7.75625 12.2304C7.75625 12.4277 7.83461 12.6169 7.97409 12.7563C8.11357 12.8958 8.30275 12.9742 8.5 12.9742M9.1321e-06 8.49787C0.000473018 6.64044 0.609344 4.83428 1.7335 3.35565C2.85765 1.87702 4.4352 0.807315 6.22486 0.310146C8.01453 -0.187022 9.91778 -0.0842849 11.6435 0.602644C13.3693 1.28957 14.8225 2.52288 15.781 4.11393C16.7394 5.70498 17.1503 7.56618 16.9508 9.41288C16.7513 11.2596 15.9525 12.9901 14.6763 14.3398C13.4002 15.6894 11.7171 16.5839 9.88451 16.8865C8.05187 17.189 6.17059 16.8829 4.52838 16.0151L0.660884 16.9819C0.571873 17.0043 0.478585 17.0032 0.390111 16.9788C0.301637 16.9544 0.220994 16.9075 0.156043 16.8427C0.0910921 16.7778 0.0440482 16.6973 0.019496 16.6088C-0.00505621 16.5204 -0.00627898 16.4271 0.0159467 16.3381L0.982821 12.4695C0.335434 11.2459 -0.00202393 9.88219 9.1321e-06 8.49787ZM8.5 1.06038C7.20203 1.05998 5.92655 1.39928 4.80033 2.04454C3.67411 2.6898 2.73637 3.61856 2.08029 4.73851C1.42422 5.85847 1.07266 7.13062 1.06056 8.42854C1.04846 9.72646 1.37624 11.0049 2.01132 12.1369C2.07802 12.255 2.09702 12.3942 2.06445 12.5258L1.2612 15.7367L4.47207 14.9334C4.60372 14.9009 4.74285 14.9199 4.86094 14.9866C5.85253 15.5421 6.95824 15.8629 8.09315 15.9245C9.22807 15.986 10.362 15.7866 11.4078 15.3416C12.4537 14.8967 13.3836 14.2179 14.1263 13.3575C14.8689 12.4971 15.4045 11.4779 15.6918 10.3782C15.9792 9.27857 16.0107 8.12768 15.7839 7.01395C15.5571 5.90022 15.0781 4.85328 14.3837 3.95353C13.6892 3.05378 12.7978 2.32516 11.7778 1.82363C10.7579 1.3221 9.63658 1.061 8.5 1.06038Z" fill="black"/>
        </svg>
        `}
        width={17}
        height={17}
    />
)