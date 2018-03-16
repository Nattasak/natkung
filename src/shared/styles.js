import styled from 'styled-components'

export const PageTitle = styled.h1`
  /* color: black; */
  /* font-size: 18px; */
  color: white;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  font-size: 8vw;
  font-weight: 600;
  letter-spacing: 1px;
  width: 99px;
  white-space: nowrap;
  border-bottom: 1px solid #000;
  padding-bottom: 9px;
  user-select: none;

  & > span {
    display: inline-block;
    transition: transform 1s var(--ease-out-expo);

    &:hover {
      color: #000;

      &:nth-child(odd) {
        transform: rotate(45deg);
      }

      &:nth-child(even) {
        transform: rotate(-45deg);
      }
    }
  }

  /* [ Tablets ] */
  @media (min-width: 768px) {
    font-size: 6vw;
  }

  /* [ Desktops ] */
  @media (min-width: 1025px) {
    font-size: 3vw;
  }
`

export const H2 = styled.h2`
  font-weight: 600;
  border: 1px dashed #000;
  display: inline;
  padding: 1px 10px;
  background: #f4f4f4;
`

export const Section = styled.section`
  padding: 1.1rem 0;
`

export const Container = styled.div``

export const Hr = styled.hr`
  background-color: #e0e0e0;
  height: 1px;
`

export const Br = styled.br`
  content: ' ';
  display: block;
  margin-top: 30px;
`
