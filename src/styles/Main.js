import Col from "react-bootstrap/esm/Col";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/esm/Container";

function Main() {
    return (
        <Col style={{justifyContent: "center", alignItems: "center"}}>
            <h1>About</h1>
            <Container style={{borderColor: "#", border: "0.065rem solid", borderRadius: "0.75rem", padding: "1.5rem", width: "80%", marginLeft: "auto", marginRight: "auto"}}>
                <h2 style={{textAlign: "left"}}>Bonjour 😀</h2>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </Col>
    );
} 

export default Main;