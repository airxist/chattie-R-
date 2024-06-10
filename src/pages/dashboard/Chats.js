// import styled from 'styled-components'
import messages from '../../utils/messages'
import Display from '../../components/Display'

const Chats = ({description}) => {
  return (
    <Display
      messages={messages}
      dashRouting={true}
      description={description}
      switching={true}
    />
  )
}

// const Wrapper = styled.div`
// width: 100%;
// .boxing {
//   height: calc(100vh - 142px);
//   background-color: white;
//   padding: 15px;
// }

// .box {
//   // background: red;
//   height: 100%
// }

// .display {
//   overflow-y: scroll;
//   height: 90%;
// }

// // .dash-routes {
// //   background: yellow;
// //   height: 72px;
// //   display: flex;
// //   align-items: center;
// //   justify-content: center;
// //   gap: 15px;
// // }

// @media screen and (min-width: 1024px) {
//   width: calc(100% - 280px);
//   min-height: 100vh;
//   .boxing {
//     height: calc(100vh - 70px);
//     // max-height: calc(705px - 70px); // this cuts it short for other devices
//     padding: 30px 95px;
//     background: red !important;
//   }
//   .box {
//     height: 85%; // 482
//   }
//   .dash-routes {
//     display: none;
//   }
//     .display {
//       height: 95%;
//       overflow-y: scroll;
//     }
// }
// `

export default Chats
