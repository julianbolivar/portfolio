import styled from "styled-components";

import { Paragraph } from "components/ui/Text";

const SpecsContainer = styled.div`
  display: grid;
  grid-gap: 2rem;

  @media (min-width: 1024px) {
    padding: 3rem 0;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 4rem;
    justify-content: center;
  }
`;

const SpecsCard = styled.div`
  @media (min-width: 1024px) {
    padding: 2.2rem;
    border-radius: 1.6rem;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    background-color: var(--white);
  }
`;

const TechItem = styled(Paragraph)`
  display: inline-block;
  height: 4.4rem;
  padding: 0rem 1.2rem;
  margin-right: 1.2rem;
  margin-bottom: 1.2rem;
  border: 2px solid var(--dark-gray);
  border-radius: 2.2rem;
  color: var(--dark-gray);
  line-height: 4rem;
`;

export { SpecsContainer, SpecsCard, TechItem };
