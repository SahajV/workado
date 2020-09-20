import * as React from "react";
import { Link } from "react-router-dom";
import useUser from "../_hooks/useUser";
import RsModal from "./RsModal"
import ToDoModal from "./ToDoModal"
import NavbarInstance from "./NavbarInstance";
import Clock from 'react-live-clock';

import { Container, Header, Content, Grid, Row, Col, Panel, PanelGroup} from 'rsuite';

var time = Date().toLocaleString();

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
                                    <Clock format="HH:mm:ss" ticking timezone={'US/Eastern'} />
                                </Panel>
                                
                            </Col>
                            <Col xs={7}>
                                <Panel header="Your Next Class is" shaded>
                                    you do not have a next class, please add a class:
                                    <RsModal id={userState.uid}/>
                                </Panel>
                            </Col>
                            <Col xs={10}>
                                <PanelGroup accordion defaultActiveKey={1} bordered>
                                    <Panel header="Assignments" eventKey={1}>
                                        you do not have any assignments, please add some:
                                        <ToDoModal id={userState.uid}/>
                                    </Panel>
                                    <Panel header="List of All Classes" eventKey={2}>
                                        you do not have a next class, please add a class:
                                    <RsModal id={userState.uid}/>
                                    </Panel>
                                </PanelGroup>
                            </Col>
                        </Row>
                        <Row className="show-grid">
                            <Col xs={7}>
                                <Panel header="Google Calender" shaded>
                                    the calender should be here for {userState.displayName}
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
