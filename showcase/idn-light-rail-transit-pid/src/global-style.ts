import { createGlobalStyle } from "styled-components";
import { STYLE } from "./constant";

export default createGlobalStyle`
  body {
    color: ${STYLE.color.darkblue};
  }
  /* Utilities */
  .font-thin {
    font-weight: 300;
    letter-spacing: ${STYLE.letterSpacing.extraLight};
  }

  .font-book {
    font-weight: 500;
    letter-spacing: ${STYLE.letterSpacing.medium};
  }

  .font-medium {
    font-weight: 600;
    letter-spacing: ${STYLE.letterSpacing.semiBold};
  }

  .font-bold {
    font-weight: 700;
    letter-spacing: ${STYLE.letterSpacing.bold};
  }

  .italic {
    font-style: italic;
  }

  .absolute {
    position: absolute;
  }

  .is-hidden {
    opacity: 0;
    visibility: hidden;
  }

  .is-visible {
    opacity: 1;
    visibility: visible;
  }
  /* \ Utilities */
  /* Animations */
  /* \ Animations */
`;
