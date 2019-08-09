import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import increase from "../images/up-arrow.png";
import decrease from "../images/down-arrow.png";
import del from "../images/delete.png";
import edit from "../images/edit.png";

class PeopleCounter extends Component {
  //div can be replaced by React.Fragment
  state = { enabled: "false", TT: "No-Title" };
  render() {
    return (
      <div className="mt-5 ml-3">
        <a
          onClick={() => this.props.onIncrement(this.props.peoplecounter)}
          className="btn btn-sm mr-1"
          role="button"
          style={{ cursor: "pointer" }}
        >
          <img src={increase} alt="increase" />
        </a>
        <a
          onClick={() => this.props.onDecrement(this.props.peoplecounter)}
          className="btn btn-sm"
          style={{ cursor: "pointer" }}
        >
          <img src={decrease} alt="" />
        </a>
        <span
          style={{
            fontSize: 20,
            fontWeight: "bold",
            width: "auto",
            lineHeight: 1.7,
            alignItems: "center"
          }}
          className={this.getBadgeClasses()}
        >
          <span style={{ color: "#F5F5F5" }}>People:</span> {this.formatCount()}
        </span>

        <span
          style={{
            fontSize: 20,
            fontWeight: "bold",
            width: 60,
            lineHeight: 1.7,
            alignItems: "center"
          }}
          className="mx-3"
        >
          <a
            style={{ cursor: "pointer", color: "#546E7A" }}
            onClick={() => this.toggle()}
          >
            {this.state.TT}
          </a>
          {this.state.enabled === true ? (
            <input
              className="mx-2"
              type="text"
              placeholder="Enter Title of Task"
              onChange={e => this.setState({ TT: e.target.value })}
            />
          ) : (
            <span />
          )}
        </span>
        <a
          onClick={() => this.props.onTitleChange(this.state.TT)}
          className="btn pb-3 btn-sm mr-1"
          role="button"
          style={{ cursor: "pointer" }}
        >
          <img src={edit} alt="edit" />
        </a>

        <a
          onClick={() => this.props.onDelete(this.props.peoplecounter.id)}
          className="btn pb-3 btn-sm mr-1"
          role="button"
          style={{ cursor: "pointer" }}
        >
          <img src={del} alt="increase" />
        </a>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge ml-3 mr-3 p-1 badge-pill badge-";
    classes += this.props.peoplecounter.value === 0 ? "warning" : "primary";
    return classes;
  }

  toggle = () => {
    this.setState({ enabled: !this.state.enabled });
  };

  getTitle() {
    return this.props.peoplecounter.Title;
  }

  formatCount() {
    return this.props.peoplecounter.value === 0 ? (
      <span className="text-muted align-content-center">Zero</span>
    ) : (
      this.props.peoplecounter.value
    );
  }
}

export default PeopleCounter;
