import React, { Component } from 'react';
import Title from './Title';
import { Modal, Button } from 'react-bootstrap';
export default class forestModal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      show: true
    };

    this.handleShow = () => {
      this.setState({ show: true });
    };

    this.handleHide = () => {
      this.setState({ show: false });
    };
  }

  render() {
    return (
      <div>
        <Modal
          show={this.state.show}
          onHide={this.handleHide}
          dialogClassName="full-modal-content"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header id="forest-modal-header">
            <Modal.Title id="forest-modal-title">
              <Title />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae
              unde commodi aspernatur enim, consectetur. Cumque deleniti
              temporibus ipsam atque a dolores quisquam quisquam adipisci
              possimus laboriosam. Quibusdam facilis doloribus debitis! Sit
              quasi quod accusamus eos quod. Ab quos consequuntur eaque quo rem!
              Mollitia reiciendis porro quo magni incidunt dolore amet atque
              facilis ipsum deleniti rem!
            </p>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

//   <div
//     className="modal fade"
//     id="forestModal"
//     tabIndex="-1"
//     role="dialog"
//     aria-labelledby="exampleModalLabel"
//     aria-hidden="true"
//   >
//     <div className="modal-dialog full_modal-dialog" role="document">
//       <div className="modal-content full_modal-content">
//         <div className="modal-header">
//           <div id="greeter">
//             <div className="col">
//               <div className="row">
//                 <h2 className="centered">Feiceann tú:</h2>
//               </div>
//               <div className="row">
//                 <h1 className="modal-title" id="exampleModalLabel">
//                   Foraoise{' '}
//                 </h1>
//               </div>
//             </div>
//           </div>

//           <h4 />
//           {/* <!-- <button
//         type="button"
//         className="close"
//         data-dismiss="modal"
//         aria-label="Close"
//       >
//         <span aria-hidden="true">&times;</span>
//       </button> --> */}
//         </div>
//         <div className="modal-body" />
//         <div className="forest-options">
//           <div id="quick-confirm">
//             <div className="col">
//               <div className="row">
//                 <h2 className="centered" />
//               </div>
//               <div className="row">
//                 <h4 className="padded centered">
//                   To print test image using default settings:
//                 </h4>
//                 <h4 className="centered">
//                   Please ensure printer is connected and ready to receive
//                   printer data, then press Continue.
//                 </h4>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="modal-footer">
//           <div className="row">
//             <div className=" centerer forest-main-menu-btns">
//               <button className="forest-btn">Cosán an dalta</button>
//               <button className="forest-btn" id="settings">
//                 Slí na draoithe
//               </button>
//               <button className="forest-btn">New Character</button>
//             </div>
//             <div className="centerer forest-quickstart-btns">
//               <button className="forest-btn" id="forest-back">
//                 Back
//               </button>
//               <button className="forest-btn" id="forest-continue">
//                 Continue
//               </button>
//               <button className="forest-btn">Help</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
