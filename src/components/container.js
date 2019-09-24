import styled from 'styled-components'

const Container = styled.div`
  max-width: 1170px;
  padding-right: 12px;
  padding-left: 12px;
  margin-right: auto;
  margin-left: auto;
  @media only screen and (max-width: 768px) {
    padding-right: 7px;
    padding-left: 7px;
  }
  &::after {
    clear: both;
    display: table;
    content: ' ';
  }
`

export default Container
