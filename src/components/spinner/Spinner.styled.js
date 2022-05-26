import styled from "@emotion/styled";

const StyledSpinner = styled.div`
  margin: 0 auto;
  position: absolute;
  left: 15%;
  top: 15%;
  width: 200px;
  height: 200px;
  border: 20px solid transparent;
  border-color: #eee;
  border-top-color: #03cf5b;
  border-radius: 50%;
  animation: loadingspin 1s linear infinite;

  @keyframes loadingspin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default StyledSpinner;