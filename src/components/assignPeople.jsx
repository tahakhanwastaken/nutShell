import React, { Component } from "react";
import PeopleCounter from "./peopleCounter";
import "bootstrap/dist/css/bootstrap.css";

class AssignPeople extends Component {
  state = {
    peoplecount: [
      { id: 1, value: 0, Title: "No Title" },
      { id: 2, value: 0, Title: "No Title" },
      { id: 3, value: 0, Title: "No Title" },
      { id: 4, value: 0, Title: "No Title" }
    ],
    time: new Date()
  };

  currentTime() {
    this.setState({ time: new Date() });
  }

  componentWillMount() {
    setInterval(() => this.currentTime(), 1000);
  }

  handleReset = () => {
    const peoplecount = this.state.peoplecount.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ peoplecount });
  };

  handleDelete = counterId => {
    const peoplecount = this.state.peoplecount.filter(
      pc => pc.id !== counterId
    );
    this.setState({ peoplecount: peoplecount });
  };

  handleDecrement = counter => {
    const indexForIf = this.state.peoplecount.indexOf(counter);
    if (this.state.peoplecount[indexForIf].value > 0) {
      const peoplecount = [...this.state.peoplecount];
      const index = peoplecount.indexOf(counter);
      peoplecount[index] = { ...counter };
      peoplecount[index].value--;
      this.setState({ peoplecount });
    } else {
      console.log("cannot decrement");
    }
  };

  handleIncrement = counter => {
    const peoplecount = [...this.state.peoplecount];
    const index = peoplecount.indexOf(counter);
    peoplecount[index] = { ...counter };
    console.log(peoplecount[index]);
    peoplecount[index].value++;
    this.setState({ peoplecount });
  };

  handelTitleChange = tile => {
    const title = [...this.state.peoplecount];
    const index = title.indexOf(tile);
    title[index] = { ...tile };

    title[index].Title = tile;
    this.setState({ peoplecount: title });
  };

  render() {
    return (
      <div>
        <header
          className="w-100"
          style={{
            backgroundColor: "#E0E0E0",
            height: 70
          }}
        >
          <div className="d-flex">
            <h3
              className="mt-3 mr-4 ml-4"
              style={{ float: "left", color: "#546E7A" }}
            >
              {this.state.time.toLocaleTimeString()}
            </h3>
            <h3 className="mt-3" style={{ float: "left", color: "#546E7A" }}>
              {this.state.time.toLocaleDateString()}
            </h3>
            <h3 className="mx-auto mt-3" style={{ color: "#546E7A" }}>
              Task Manager
            </h3>
            <button
              className="btn btn-primary btn-md mt-3 mr-3 ml-auto"
              onClick={this.handleReset}
            >
              Un-Assign People
            </button>
          </div>
        </header>

        {this.state.peoplecount.map(pCount => (
          <PeopleCounter
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onTitleChange={this.handelTitleChange}
            //the prop can be send like following
            peoplecounter={pCount}
            //or like this
            //  id={pCount.id}
            //  value={pCount.value}
            key={pCount.id}
          />
        ))}
      </div>
    );
  }
}

export default AssignPeople;
