import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { filterByCode } from "../constants";

const Wrapper = styled.section`
  margin-top: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  gap: 2rem;

  @media (min-width: 767px) {
    grid-template-columns: minmax(100px, 400px) 1fr;
    align-items: center;
    gap: 5rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: minmax(400px, 600px) 1fr;
  }
`;

const InfoImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const InfoTitle = styled.h1`
  margin: 0;
  font-weight: var(--fw-normal);
`;

const ListGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 4rem;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  line-height: 1.8;
  & > b {
    font-weight: var(--fw-bold);
  }
`;

const Meta = styled.div`
  margin-top: 3rem;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  align-items: flex-start;

  & > b {
    font-weight: var(--fw-bold);
  }

  @media (min-width: 767px) {
    flex-direction: row;
    align-items: center;
  }
`;

const TagGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Tag = styled.span`
  padding: 0 1rem;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  height: 1.5;
  cursor: pointer;
`;

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

  const [neighbors, setNeighbors] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (!!borders.length) {
      axios.get(filterByCode(borders)).then(({ data }) => {
        setNeighbors(data.map((c) => c.name));
      });
    }
  }, [borders]);

  return (
    <Wrapper>
      <InfoImage src={flag} alt={name} />

      <div>
        <InfoTitle>{name}</InfoTitle>
        <ListGroup>
          <List>
            <ListItem>
              <b>?????????????? ????????????????:</b> {nativeName}
            </ListItem>
            <ListItem>
              <b>??????????????????:</b> {population}
            </ListItem>
            <ListItem>
              <b>????????????:</b> {region}
            </ListItem>
            <ListItem>
              <b>??????????????????:</b> {subregion}
            </ListItem>
            <ListItem>
              <b>??????????????:</b> {capital}
            </ListItem>
          </List>
          <List>
            <ListItem>
              <b>?????????? ???????????????? ????????????</b>{" "}
              {topLevelDomain.map((d) => (
                <span key={d}>{d}</span>
              ))}
            </ListItem>
            <ListItem>
              <b>????????????</b>{" "}
              {currencies.map((c) => (
                <span key={c.code}>{c.name} </span>
              ))}
            </ListItem>
            <ListItem>
              <b>??????????</b>{" "}
              {languages.map((l) => (
                <span key={l.name}>{l.name}</span>
              ))}
            </ListItem>
          </List>
        </ListGroup>
        <Meta>
          <b>????????????????:</b>
          {!borders.length ? (
            <span>???? ?? ?????? ???? ????????????????</span>
          ) : (
            <TagGroup>
              {neighbors.map((country) => (
                <Tag
                  key={country}
                  onClick={() => navigate(`/country/${country}`)}
                >
                  {country}
                </Tag>
              ))}
            </TagGroup>
          )}
        </Meta>
      </div>
    </Wrapper>
  );
};
