import React, { SVGProps } from "react";

const ArrowDownIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="26"
      height="27"
      viewBox="0 0 26 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <rect x="26" width="26.9662" height="26" transform="rotate(90 26 0)" fill="url(#pattern0)" />
      <mask id="mask0_1_58" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="26" height="27">
        <rect x="26" width="26.9662" height="26" transform="rotate(90 26 0)" fill="url(#pattern1)" />
      </mask>
      <g mask="url(#mask0_1_58)">
        <rect x="26" width="26.9662" height="26" transform="rotate(90 26 0)" fill="#CCCFD4" />
      </g>
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_1_58" transform="scale(0.0078125)" />
        </pattern>
        <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_1_58" transform="scale(0.0078125)" />
        </pattern>
        <image
          id="image0_1_58"
          width="128"
          height="128"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAmRJREFUeAHt2zFKxEAUBuCorYKt4inEwtLLeI+5xV7H1ht4Da0FfQMJhBB2R7cImfctDOvqhmS+/88kRRwGLwIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgsInAbez1dZM92+nmAjX89xg/MUoMr0QC8/BrAZQgefhKkKQAa2f+FP70XpJYpJtmS/hK0Gkt/hK+EnRWguuYz3S3P4Xb+l46szhrOldnbb3dxt+x68cYT/84hJfY5iLGWwyvHQtcxrEfYrSe+cvvlR3P3aGPAkqgCoMSKIES6MCgBEqgBDoQAu4J1EAJdMBKoAMuBzpQBdwT6IES6ICVQAdcDnSgCrgn0AMl0AErgQ64HOhAFXBPoAdKoANWAh1wOdCBKuCeQA+G+zD4irF8lLzl82ds98BwvwJ3cegfMVrCXn6nhv+836k7cuEn7oDwhW/Zz9gBZ37G1Mc5C1/4lv2MHXDmZ0zdsp84deEL37KfuAPCF767/YwdcOZnTH2cs/CFb9nP2AFnfsbULfuJUxe+8C37iTsgfOG728/YAWd+xtTHOd/Eu0e3ExegTr3EWD6Xf+qz5/arXEevEnM5Ffr0d+F3FPx8Ki0lEP5crMOfj5VA+B0GvjaltRIIf02q49/NSyD8joM+NrVaAuEfE0rwN/+fnyBkUyRAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAlkEfgGUJ0UJGDY99gAAAABJRU5ErkJggg=="
        />
      </defs>
    </svg>
  );
};

export default ArrowDownIcon;
