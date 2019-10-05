import { container } from "../material-kit-react";

const mainPageStyle = {
    container,
    main: {
      background: "#FFFFFF",
      position: "relative",
      zIndex: "3"
    },
    mainRaised: {
      margin: "-60px 30px 0px",
      borderRadius: "6px",
      boxShadow:
        "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
    processMain: {
      paddingTop: '50px'
    },
    processVisible: {
      display: 'block'
    },
    processInvisible: {
      display: 'none'
    },
    items: {
      paddingTop: '10px'
    }
  };
  
  export default mainPageStyle;