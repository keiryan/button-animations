import styled from "styled-components";

export const Base = styled.div`
  display: flex;
  gap: 2rem;
`;

export const Container = styled(Base)`
  width: 100vw;
  height: 100vh;
  background-color: #000;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const RefreshContainer = styled.div`
  transition: all 0.3s ease-in-out;
  :hover {
    cursor: pointer;
    transform: rotate(360deg);
  }
`;

export const UpArrowContainer = styled.div`
  transition: all 0.2s ease-in-out;
  :hover {
    cursor: pointer;
    transform: translateY(-10px);
  }
`;

export const DownArrowContainer = styled(UpArrowContainer)`
  :hover {
    transform: translateY(10px);
  }
`;

export const RightArrowContainer = styled(UpArrowContainer)`
  :hover {
    transform: translateX(10px);
  }
`;

export const LeftArrowContainer = styled(RightArrowContainer)`
  :hover {
    transform: translateX(-10px);
  }
`;

export const SearchContainer = styled.div`
  transition: all 0.1s ease-in-out;
  :hover {
    cursor: pointer;
  }

  :active {
    transform: scale(0.9);
  }
`;

