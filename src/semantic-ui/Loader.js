// import React from 'react'
// import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

// const LoaderExampleLoader = () => (
//   <Segment>
//     <Dimmer active>
//       <Loader />
//     </Dimmer>

//     <Image src='/images/wireframe/short-paragraph.png' />
//     <FontAwesomeIcon icon="fa-duotone fa-spinner-third" />
//   </Segment>
// )

// export default LoaderExampleLoader;
import { Spinner } from 'react-bootstrap';
const Loader = () => (
  <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>
)

export default Loader;
