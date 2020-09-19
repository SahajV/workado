import * as React from "react";
import { Link } from "react-router-dom";
import useUser from "../_hooks/useUser";
import RsModal from "./RsModal"
import ToDoModal from "./ToDoModal"
import NavbarInstance from "./NavbarInstance";

import { Container, Header, Content, Grid, Row, Col, Panel, PanelGroup} from 'rsuite';

export default function Dashboard() {
    const { isLoggedIn, userState } = useUser();
    return isLoggedIn() ? (
        <div>
            <Container>
                <Header>
                    <NavbarInstance />
                </Header>
                <Content style={{ padding: 20 }}>
                    <Grid fluid>
                        <Row className="show-grid">
                            <Col xs={7}>
                                <Panel header="Current Time" shaded>
                                    the times is dalfjdlasjf;lskdajf;lsdaf;jdsla
                                </Panel>
                            </Col>
                            <Col xs={7}>
                                <Panel header="Your Next Class is" shaded>
                                    you do not have a next class, please add a class:
                                    <RsModal />
                                </Panel>
                            </Col>
                            <Col xs={10}>
                                <PanelGroup accordion defaultActiveKey={1} bordered>
                                    <Panel header="Assignments" eventKey={1}>
                                        you do not have any assignments, please add some:
                                        <ToDoModal />
                                    </Panel>
                                    <Panel header="List of All Classes" eventKey={2}>
                                        you do not have a next class, please add a class:
                                    <RsModal />
                                    </Panel>
                                </PanelGroup>
                            </Col>
                        </Row>
                        <Row className="show-grid">
                            <Col xs={7}>
                                <Panel header="Google Calender" shaded>
                                    the calender should be here
                                </Panel>
                            </Col>
                        </Row>
                    </Grid>
                </Content>
            </Container>
        </div>
    ) : (
            <div>
                Insuffiecent permissions, please sign in <Link to="/signin">here</Link>
            </div>
        );
}
