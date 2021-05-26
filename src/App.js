import React, { useState } from "react";
import Icon from "./components/Icon";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Container, Col, Row, Button, Card, CardBody } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

const itemArray = new Array(9).fill("empty");

const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    itemArray.fill("empty");
  };

  const changeItem = (itemNumber) => {
    if (winMessage) {
      return toast(winMessage, { type: "success" });
    }

    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    } else {
      return toast("already filled", { type: "error" });
    }
    checkWinner();
  };

  const checkWinner = () => {
    if (
      itemArray[0] != "empty" &&
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2]
    ) {
      setWinMessage(`${itemArray[0]} wins`);
    } else if (
      itemArray[3] != "empty" &&
      itemArray[3] === itemArray[4] &&
      itemArray[3] === itemArray[5]
    ) {
      setWinMessage(`${itemArray[3]} wins`);
    } else if (
      itemArray[6] != "empty" &&
      itemArray[6] === itemArray[7] &&
      itemArray[6] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[6]} wins`);
    } else if (
      itemArray[0] != "empty" &&
      itemArray[0] === itemArray[3] &&
      itemArray[0] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[0]} wins`);
    } else if (
      itemArray[1] != "empty" &&
      itemArray[1] === itemArray[4] &&
      itemArray[1] === itemArray[7]
    ) {
      setWinMessage(`${itemArray[1]} wins`);
    } else if (
      itemArray[2] != "empty" &&
      itemArray[2] === itemArray[5] &&
      itemArray[2] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[2]} wins`);
    } else if (
      itemArray[0] != "empty" &&
      itemArray[0] === itemArray[4] &&
      itemArray[0] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[0]} wins`);
    } else if (
      itemArray[2] != "empty" &&
      itemArray[2] === itemArray[4] &&
      itemArray[2] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[2]} wins`);
    }
  };
  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={4} className="offset-md-4 text-center" >
          {winMessage ? (
            <div className="mx-2 my-3">
              <h1 className="text-center text-uppercase text-primary ">
                  {winMessage}
              </h1>
              <Button className="text-center" color="primary" block onClick={reloadGame}>
                Reload the game
              </Button>
            </div>
          ) : (
            <h1 className="text-center text-uppercase text-primary">{isCross ? "cross" : "circle"} turns</h1>
          )}
          <div className="grid">
            {itemArray.map((item, index) => (
              <Card onClick={()=>changeItem(index)}>
                <CardBody className="box">
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
