import { Modal, Button, ButtonToolbar} from 'rsuite';
import * as React from "react";
import 'rsuite/dist/styles/rsuite-dark.css';
import ClassForm from './ClassForm'

class RsModal extends React.Component {
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
            <Button onClick={this.open}> Add Class</Button>
          </ButtonToolbar>
  
          <Modal show={this.state.show} onHide={this.close}>
            <Modal.Header>
              <Modal.Title>Add Class</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ClassForm />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.close} appearance="primary">
                Close
              </Button>
              {/* <Button onClick={this.close} appearance="subtle">
                Cancel
              </Button> */}
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }
  
export default RsModal