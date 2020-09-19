import { Modal, Button, ButtonToolbar} from 'rsuite';
import * as React from "react";
<<<<<<< HEAD
import ToDoFrom from './ToDoForm'

class RsModal extends React.Component {
=======
import ToDoForm from './ToDoForm'

class ToDoModal extends React.Component {
>>>>>>> 79c97e56e67608ea5ffc003a800b55a81066228b
    constructor(props) {
      super(props);
      this.state = {
        show: false
      };
      this.close = this.close.bind(this);
      this.open = this.open.bind(this);
    }
    close() {
      this.setState({ show: false });
    }
    open() {
      this.setState({ show: true });
    }
    render() {
      return (
        <div className="modal-container">
          <ButtonToolbar>
<<<<<<< HEAD
            <Button color="green" onClick={this.open}> Add Class</Button>
=======
            <Button color="green" onClick={this.open}> Add Assignment</Button>
>>>>>>> 79c97e56e67608ea5ffc003a800b55a81066228b
          </ButtonToolbar>
  
          <Modal show={this.state.show} onHide={this.close}>
            <Modal.Header>
<<<<<<< HEAD
              <Modal.Title>Add Assignment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ToDoFrom />
=======
              <Modal.Title>Add Class</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ToDoForm />
>>>>>>> 79c97e56e67608ea5ffc003a800b55a81066228b
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.close} color="green" appearance="primary">
                Close
              </Button >
              {/* <Button onClick={this.close} appearance="subtle">
                Cancel
              </Button> */}
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }
  
<<<<<<< HEAD
export default RsModal
=======
export default ToDoModal
>>>>>>> 79c97e56e67608ea5ffc003a800b55a81066228b
