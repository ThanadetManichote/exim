import styled from 'styled-components'

export const BackTopWrapper = styled.div`
  .ant-back-top-content {
    background-color: #de3f75;
  }
`
// export const GridStyle = styled.section`
//   .ant-card-grid {
//     width: '100%';
//     @media (min-width: 768px) {
//       width: '1100%';
//     }
//   }
// `

export const HelloWorldWrapper = styled.div`
  color:green;
  p {
    font-size:200px;
  }
`

export const BoxWrapper = styled.div`
  width: '100%';
  background-color: white;
  border-radius: 5px;
  padding: 5px;
  margin-top: 5px;
  margin-bottom: 10px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.045);
`
export const CardGridWrapper = styled.div`
  /* .ant-card-meta-avatar > span {
    width: 200px;
  } */
  .ant-card-bordered:first-child {
    border-left: none;
  }
  .ant-card-grid {
    width: 100%;
    @media (min-width: 576px) {
      width: 50%;
    }
    box-shadow: none;
    padding: 10px;
  }
  .ant-card-grid:hover {
    position: relative;
    z-index: 1;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }
  .ant-card-meta-avatar .ant-badge .ant-badge-count {
    transform: translate(0%, 320%);
  }
`

export const CardImageWrapper = styled.div`
  .ant-card-grid {
    padding: 0px;
    position: relative;
    overflow: hidden;
    height: 100px;
    width: 33%;
    @media (min-width: 576px) {
      width: 20%;
    }
    @media (min-width: 768px) {
      width: 20%;
    }
    img {
      position: absolute;
      top: -50%;
      bottom: -50%;
      margin: auto;
      width: 100%;
      height: auto;
      /* position: absolute;
      left: 0;
      top: 0; */

      /* padding: 0px; */
      /* padding-bottom: 80%; */
      /* transition: max-width 0.5s ease-out; */
    }
  }
`

export const BoxFormWrapper = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
  /* span {
    margin-top: 8px;
  } */
`
