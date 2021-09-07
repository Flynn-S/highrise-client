import { useState } from "react"
import { useEffect } from "react"
import items from '../data/menu.json'
import { Card, Container, Row, Col } from "react-bootstrap"

const DishDetail = (props) => {

    const [pasta, setPasta] = useState(null)
    const [notFound, setNotFound] = useState(false)

    useEffect(() => {
        let id = props.match.params.id
        let correctPasta = items.find(pastaObject => pastaObject.id.toString() === id)
        console.log(correctPasta)
        if (correctPasta) {
            setPasta(correctPasta)
        } else {
            setNotFound(true)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Container>
            <Row className="justify-content-center my-3">
                <Col md={8} className="text-center">
                    {
                        notFound && <h1>404 - PASTA NOT FOUND</h1>
                    }
                    {
                        pasta &&
                        <Card>
                            <Card.Img variant="top" src={pasta.image} />
                            <Card.Body>
                                <Card.Title>{pasta.name}</Card.Title>
                                <Card.Text>
                                    {pasta.description}
                                </Card.Text>
                                <Card.Text>
                                    {pasta.price}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default DishDetail