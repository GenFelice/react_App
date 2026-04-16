// import IncrementButton from '../components/IncrementButton'
// import CardAutomobile from '../components/CardAutomobile'
// import Loading from '../components/Loading'
// import { Container, Row, Col } from 'react-bootstrap'
// import GridAutomobili from '../components/GridAutomobili'
// export default function HomePage() {
//   return <>
//     <h1>Hello World!</h1>
//     {/* <IncrementButton /> */}
//     <GridAutomobili />
//     {/* <Container>
//         <Row xs="1" md="2" xl="4">
//             <Col>
//                 <CardAutomobile />
//             </Col>
//         </Row>
//     </Container> */}
//   </>
// }

import {Container} from 'react-bootstrap'
import GridAutomobili from '../components/GridAutomobili'
import LoginForm from '../components/LoginForm'

export default function HomePage() {
  return <>
    <h1>Hello World!</h1>
    <LoginForm/>
    <Container>
      <GridAutomobili />
    </Container>
  </>
}