import styled from "styled-components";

const BaseCard = styled.div`
  @media (min-width: 1024px) {
    padding: 2.2rem;
    border-radius: 1.6rem;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    background-color: var(--white);
  }
`;

export default BaseCard;
