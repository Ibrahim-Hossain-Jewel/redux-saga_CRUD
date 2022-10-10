import React from "react";
import { connect } from "react-redux";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { InputNumber } from 'primereact/inputnumber';
import {createStructuredSelector} from 'reselect';
import {
  makeSelectAllUserData,
  makeSelectUserRowData,
  makeSelectUpdateVisible,
  makeSelectUpdateAbleUserData,
} from "./selector";
import { Button } from "primereact/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import {
  setUserRowData,
  setUpdateDialogVisible,
  setUpdateDialogVisibleOff,
  setUpdateUserRowData,
  updatePostUserRow,
} from "./action";

class UserDataInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      conditional: true,
      selectedProduct: "",
      updatefirstname: "",
      updatelastname: "",
      updateAge: "",
      updateOccupation: ""
    };
  }
  //for update handler
  firstNameHandler = (evt)=>{
    this.setState({ updatefirstname: evt.target.value });
  }
  lastNameHandler = (evt) =>{
    this.setState({ updatelastname: evt.target.value });
  }
  ageHandler = (evt)=>{
    console.log(evt.value)
    this.setState({ updateAge: evt.value });
  }
  occupationHandler = (evt) =>{
    this.setState({updateOccupation: evt.target.value});
  }
  updateHandler = (row, rowData) => {
    this.props.sentRowData(rowData);
  };
  postHandler = () => {
    console.log(
      "hit on post handler"
    );
    let basicData = {
      id: this.props.rowData.id,
      first_name: this.state.updatefirstname,
      last_name: this.state.updatelastname,
      age: this.state.updateAge,
      occupation: this.state.updateOccupation,
    };

    this.props.onChangeUpdateUserRowData(basicData);
  };
  render() {
    console.log("home props", this.props);
    var rowDataUpdateFirstName = "";
    var occupation = "";
    if (this.props.rowData) {
      rowDataUpdateFirstName = this.props.rowData.first_name;
      occupation = this.props.rowData.occupation;
    }

    let showIcon = (allTableData) => {
      let update = (
        <Button onClick={(e) => this.updateHandler(e, allTableData)}>
          <FontAwesomeIcon icon={faPencil} />
        </Button>
      );
      return update;
    };
    return (
      <div className="grid">
        <div className="col-12">
          <div className="datatable-templating-demo">
            <h2>Person Information table</h2>
            <DataTable value={this.props.users}>
              <Column
                header="ID"
                headerStyle={{ width: "3em" }}
                body={(data, options) => options.rowIndex + 1}
              ></Column>
              <Column field="first_name" header="First Name" />
              <Column field="last_name" header="Last Name" />
              <Column field="age" header="Ages" />
              <Column field="occupation" header="Occupation" />
              <Column field="" header="Edit" body={showIcon} />
            </DataTable>
          </div>
          <Dialog
            header="Update User"
            visible={this.props.updateVisible}
            onHide={this.props.onChangeUpdateVisibleHandler}
            breakpoints={{ "960px": "75vw" }}
            style={{ width: "50vw" }}
          >
            <div className="grid">
              <div className="col-12 md:col-12">
                <span>Name : {rowDataUpdateFirstName}</span> <br />
                <span>Occupation : {occupation}</span> <br /> <br />
                <div className="p-inputgroup">
                  <span className="p-inputgroup-addon">
                    <i className="pi pi-user"></i>
                  </span>
                  <InputText
                    placeholder="Firstname"
                    onChange={this.firstNameHandler}
                  />
                </div>
              </div>
              <div className="col-12 md:col-12">
                <div className="p-inputgroup">
                  <span className="p-inputgroup-addon">
                    <i className="pi pi-user"></i>
                  </span>
                  <InputText placeholder="Lastname"
                  onChange={this.lastNameHandler}
                  />
                </div>
              </div>
              <div className="col-12 md:col-12">
                <div className="p-inputgroup">
                  <span className="p-inputgroup-addon">Age</span>
                  <InputNumber placeholder="Age" 
                  onChange={this.ageHandler}/>
                </div>
              </div>
              <div className="col-12 md:col-12">
                <div className="p-inputgroup">
                  <span className="p-inputgroup-addon">Occupation</span>
                  <InputText placeholder="Occupation" onChange={this.occupationHandler}/>
                </div>
              </div>
              <div className="col-12 md:col-12">
                <div className="p-inputgroup">
                  <Button
                    label="Submit"
                    icon="pi pi-check"
                    iconPos="right"
                    onClick={this.postHandler}
                  />
                </div>
              </div>
            </div>
          </Dialog>
        </div>
      </div>
    );
  }
}
UserDataInfo.propTypes = {
  users: PropTypes.any,
  sentRowData: PropTypes.func,
  rowData: PropTypes.any,
  updateVisible: PropTypes.bool,
  updateVisibleHandler: PropTypes.bool,
  onChangeUpdateUserRowData: PropTypes.func
};
const mapStateToProps = createStructuredSelector({
  users: makeSelectAllUserData(),
  rowData: makeSelectUserRowData(),
  updateVisible: makeSelectUpdateVisible(),
  jewel: makeSelectUpdateAbleUserData(),
});

const mapDispatchToProps = (dispatch)=>{
    return {
      dispatch,
      sentRowData : (evt)=>{
        dispatch(setUserRowData(evt));
        dispatch(updatePostUserRow("trigger"));
        dispatch(setUpdateDialogVisible());
      },
      onChangeUpdateVisibleHandler : () => {
        dispatch(setUpdateDialogVisibleOff());
      },
      onChangeUpdateUserRowData : (evt) =>{
        dispatch(setUpdateUserRowData(evt));
      }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDataInfo);
