import styled from "styled-components";

const Wrapper = styled.section``;

const InfoImage = styled.img``;

const InfoTitle = styled.h1``;

export const Info = (props) => {
  const {
    name,
    nativeName,
    population,
    region,
    flag,
    capital,
    subregion,
    topLevelDomain,
    currencies = [],
    languages = [],
    borders = [],
  } = props;
  return (
    <Wrapper>
      <InfoImage src={flag} alt={name} />

      <div>
        <InfoTitle>{name}</InfoTitle>
      </div>
    </Wrapper>
  );
};
