import React, { Component } from "react";
import ICalendarLink from "react-icalendar-link";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { toast } from "react-toastify";
import Modal from "react-awesome-modal";
import iCalendar from '../../assets/iCalendar.png'


export default class ICalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      title: "",
      description: "",
      startTime: "",
      endTime: "",
      location: "",
    };

  }

  openModal() {
    this.setState({
      visible: true,
    });
  }

  closeModal() {
    this.setState({
      visible: false,
    });
    
    toast.success(`🧑🏼‍🏫 Class Schedule Create with Success!`, {
      position: "top-right",
      autoClose: 7000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  }

  handleChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };

  classCreate = (e) => {
    e.preventDefault();

    this.openModal();

  };

  render() {
    return (
      <>
        <div className="text-center">
          <form onSubmit={this.classCreate}>
            <TextField
              id="cadeira"
              label="Class Name"
              name="title"
              required
              value={this.state.title}
              onChange={this.handleChange}
            />

            <br />

            <TextField
              id="descricao"
              label="Description"
              name="description"
              onChange={this.handleChange}
            />

            <br />
            <br />

            <TextField
              id="datetime-local"
              label="Class Schedule"
              onChange={this.handleChange}
              type="datetime-local"
              name="startTime"
              defaultValue="2021-01-24T10:30"
              InputLabelProps={{
                shrink: true,
              }}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ margin: "20px" }}
            >
              Create Lesson
            </Button>
          </form>
        </div>
        <div className="iCalendar">
          <Modal
            visible={this.state.visible}
            width="400"
            height="300"
            effect="fadeInUp"
            onClickAway={() => this.closeModal()}
          >
            <div className="pb-3">
              <h3 className="pt-3">Success Creating the Class</h3>
              <img style={{ width: "40%" }} src={iCalendar} alt="iCalendar" />
              <ICalendarLink event={this.state}>Export to iCalendar</ICalendarLink> <br /> <br />
              <Button variant="contained" color="secondary" onClick={() => this.closeModal()}>
                Close
              </Button>
            </div> 
          </Modal>
        </div>
      </>
    );
  }
}
