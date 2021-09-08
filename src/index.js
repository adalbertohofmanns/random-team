import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Alert, Button, Container, Form, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class RandonTeam extends Component {
  state = {
    players: "",
    sortedPlayers: [],
    show: true,
    blocked: true
  };

  setPlayers = (event) => {
    this.setState({
      players: event.target.value
    });

    const listOfPlayers = this.state.players.split("\n")

    if (listOfPlayers.length >= 12) {
      this.setState({
        blocked: false
      });
    }

    this.setState({
      sortedPlayers: listOfPlayers
    });
  };

  randomize = () => {
    this.setState({
      sortedPlayers: this.state.sortedPlayers.sort(() => Math.random() - 0.9)
    });
  };

  timeA = () => {
    const impares = this.state.sortedPlayers.slice(0, 12)
    return (
      impares.map((name, key) =>
        key % 2 == 0 &&
        <tr key={key}>
          <td>{name}</td>
        </tr>

      )
    )
  };

  timeB = () => {
    const pares = this.state.sortedPlayers.slice(0, 12)
    return (
      pares.map((name, key) =>
        key % 2 != 0 &&
        <tr key={key}>
          <td>{name}</td>
        </tr>
      )
    )
  };

  reservas= () => {
    const reservas = this.state.sortedPlayers.slice(12, 99)
    return (
      reservas.map((name, key) =>
        <tr key={key}>
          <td>{name}</td>
        </tr>
      )
    )
  }

  render = () => {
    return (
      <React.StrictMode>
        <Container>
          <Alert variant="success" className="mt-3 text-center">
            <Alert.Heading>Óbito Futebol Clube</Alert.Heading>
          </Alert>
          <Form.Group className="mb-3">
            <Form.Control placeholder="Cole aqui!" as="textarea" rows={8} onChange={this.setPlayers} />
            <Button className="mt-3" disabled={this.state.blocked} onClick={this.randomize}>Sortear Times e reservas</Button>
          </Form.Group>
        </Container>

        <Container className="d-flex justify-content-center">
          <Table size="sm" striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Time 01</th>
              </tr>
            </thead>
            <tbody>
              {this.timeA()}
            </tbody>
          </Table>
          <Table size="sm" striped bordered hover variant="light">
            <thead>
              <tr>
                <th>Time 02</th>
              </tr>
            </thead>
            <tbody>
              {this.timeB()}
            </tbody>
          </Table>
        </Container>

        <Container>
          <Table size="sm" striped bordered hover variant="info">
            <thead>
              <tr>
                <th>Reservas</th>
              </tr>
            </thead>
            <tbody>
              {this.reservas()}
            </tbody>
          </Table>
        </Container>

      </React.StrictMode>
    );
  }
}

ReactDom.render(<RandonTeam />, document.getElementById("root"));
