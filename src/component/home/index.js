import React from "react";
import { connect } from "react-redux";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dialog } from "primereact/dialog";
import { Toast } from "primereact/toast";
import { InputText } from "primereact/inputtext";
import { InputNumber } from 'primereact/inputnumber';
import {createStructuredSelector} from 'reselect';
import {
  makeSelectAllUserData,
  makeSelectUserRowData,
  makeSelectUpdateVisible,
  makeSelectDeleteRowDialogVisible,
  makeSelectAddRowDialogVisible,
  makeSelectSaveResponse,
  makeSelectDeleteResponse,
  makeSelectUpdateResponse,
} from "./selector";
import { Button } from "primereact/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import {
  setDeleteRowData,
  setUserRowData,
  setUpdateDialogVisible,
  setUpdateDialogVisibleOff,
  setUpdateUserRowData,
  updatePostUserRow,
  setDeleteVisible,
  setDeleteInvisible,
  deleteUserRowData,
  setAddInvisible,
  setAddVisible,
  setSaveDataPass
} from "./action";
import TopNav from "../TopNav";
class UserDataInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      conditional: true,
      selectedProduct: "",
      updatefirstname: "",
      updatelastname: "",
      updateAge: "",
      updateOccupation: "",
      addFirstName: "",
      addLastName: "",
      addAge: "",
      addOccupation: "",
      setErrorMessage: ''
    };
  }
  //for update handler
  firstNameUpdateHandler = (evt) => {
    console.log("evt..........", evt.target.value)
      this.setState({ updatefirstname: evt.target.value });
      if(this.state.updatefirstname != ''){
        this.setState({ setErrorMessage: "" });
      }
  };
  lastNameHandler = (evt) => {
    this.setState({ updatelastname: evt.target.value });
    if(this.state.updatelastname !=''){
      this.setState({ setErrorMessage: "" });
    }
  };
  ageHandler = (evt) => {
    this.setState({ updateAge: evt.value });
  };
  occupationHandler = (evt) => {
    this.setState({ updateOccupation: evt.target.value });
    if(this.state.updateOccupation != ''){
      this.setState({setErrorMessage: ''})
    }
  };
  updateHandler = (row, rowData) => {
    console.log("hit")
    this.props.sentRowData(rowData);
  };
  postHandler = () => {
    console.log("hit on post handler");
    let basicData = {
      id: this.props.rowData.id,
      first_name: this.state.updatefirstname,
      last_name: this.state.updatelastname,
      age: this.state.updateAge,
      occupation: this.state.updateOccupation,
    };
    console.log("Your basic data need to update " + basicData);
    if(this.state.updatefirstname != '' && this.state.updatelastname != '' && this.state.updateOccupation != ''){
      this.props.onChangeUpdateUserRowData(basicData);
      this.setState({updatefirstname: '', updatelastname: '', updateAge: '', updateOccupation: ''});
      setTimeout(() => {
        try {
          if (
            this.props.updateResponse != "" &&
            this.props.updateResponse === 200
          ) {
            this.toast.show({
              severity: "success",
              summary: "Update",
              detail: "Success",
              life: 3000,
            });
            this.props.onChangeUpdateVisibleHandler();
          } else {
            this.setState({ setErrorMessage: "p-invalid block" });
            this.toast.show({
              severity: "error",
              summary: "Personal Information",
              detail: "Failed",
            });
          }
        } catch (e) {
          this.setState({ setErrorMessage: "p-invalid block" });
          this.toast.show({
            severity: "error",
            summary: "Failed",
            detail: "Check your internet connection",
          });
        }
      }, 10);
    }else{
      this.setState({ setErrorMessage: "p-invalid block" });
      this.toast.show({
        severity: "error",
        summary: "Required",
        detail: "You need fill up all required fields",
      });
    }
  };

  deleteHandler = (evt, rowData) => {
    console.log("hit on delete handler", rowData);
    this.props.sentDeleteRowData(rowData);
  };
  addHandler = (evt) => {
    console.log("hit on add handler");
    this.props.onchangeAddDialogVisible();
  };
  submitSavePostHandler = () =>{
    let basicData = {
      first_name: this.state.addFirstName,
      last_name: this.state.addLastName,
      age: this.state.addAge,
      occupation: this.state.addOccupation,
    };
    if (
      this.state.addFirstName != "" &&
      this.state.addLastName != "" &&
      this.state.addOccupation != ""
    ) {
      this.props.onChangeSavePassAbleData(basicData);
      this.setState({ setErrorMessage: "" });
      this.setState({
        addFirstName: "",
        addLastName: "",
        addOccupation: "",
        addAge: "",
      });
      setTimeout(() => {
          if (
            this.props.saveResponse !== "" &&
            this.props.saveResponse.status === 200
          ) {
            this.toast.show({
              severity: "success",
              summary: "Add",
              detail: "Success",
              life: 3000,
            });
            this.setState({ setErrorMessage: "" });
            this.setState({
              addFirstName: "",
              addLastName: "",
              addOccupation: "",
              addAge: "",
            });
            this.props.onchangeAddDialogInvisible();
          } else {
            this.toast.show({
              severity: "error",
              summary: "Add",
              detail: "Failed",
            });
          }
      }, 10);
    } else {
      this.setState({ setErrorMessage: "p-invalid block" });
      this.toast.show({
        severity: "error",
        summary: "Required",
        detail: "You need fill up all required fields",
      });
    }
  }
  addFirstNameHandler = (evt) =>{
    this.setState({ addFirstName: evt.target.value });
    if(this.state.addFirstName != undefined){
      this.setState({setErrorMessage: ""})
    }
  }
  addLastNameHandler = (evt)=>{
    this.setState({addLastName: evt.target.value});
    if(this.state.addLastName != undefined){
      this.setState({ setErrorMessage: "" });
    }
  }
  addAgeHandler = (evt) =>{
    this.setState({ addAge: evt.value});
  }
  addOccupationHandler = (evt) =>{
    this.setState({addOccupation: evt.target.value});
    if(this.state.addOccupation != undefined){
      this.setState({ setErrorMessage: "" });
    }
  }
  deleteYes = (evt)=>{
    this.props.onChangeDeleteOperation();
    if (this.props.deleteRespnse != '' || this.props.deleteRespnse === 200) {
      console.log("done the process");
      this.toast.show({
        severity: "success",
        summary: "Delete",
        detail: "Success",
        life: 3000,
      });
    } else {
      this.toast.show({
        severity: "error",
        summary: "Delete",
        detail: "Failed",
        life: 3000,
      });
    }
  }
  render() {
    console.log("home props", this.props.updateResponse);
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
      let deleteBtn = (
        <Button
          style={{ marginLeft: "10px" }}
          onClick={(e) => this.deleteHandler(e, allTableData)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      );
      return (
        <div>
          {update}
          {deleteBtn}
        </div>
      );
    };
    return (
      <div className="grid">
        <Toast ref={(el) => (this.toast = el)} />
        <div className="col-12">
          <TopNav />
          <div className="datatable-templating-demo">
            <div className="p-inputgroup">
              <Button
                label="Add User"
                icon="pi pi-check"
                iconPos="right"
                onClick={this.addHandler}
              />
            </div>
            <h2>Person Information table</h2>

            <DataTable value={this.props.users}>
              <Column
                header="Serial"
                headerStyle={{ width: "3em" }}
                body={(data, options) => options.rowIndex + 1}
              ></Column>
              <Column field="first_name" header="First Name" />
              <Column field="last_name" header="Last Name" />
              <Column field="age" header="Ages" />
              <Column field="occupation" header="Occupation" />
              <Column field="" header="Action" body={showIcon} />
            </DataTable>
          </div>
          {/*Add user row*/}
          <Dialog
            header="Add User"
            visible={this.props.addVisible}
            onHide={this.props.onchangeAddDialogInvisible}
            breakpoints={{ "960px": "75vw" }}
            style={{ width: "50vw" }}
          >
            <div className="grid">
              <div className="col-12 md:col-12">
                <div className="p-inputgroup">
                  <span className="p-inputgroup-addon">
                    <i className="pi pi-user"></i>
                  </span>
                  <InputText
                    placeholder="Firstname"
                    onChange={this.addFirstNameHandler}
                    className={this.state.setErrorMessage}
                  />
                </div>
              </div>
              <div className="col-12 md:col-12">
                <div className="p-inputgroup">
                  <span className="p-inputgroup-addon">
                    <i className="pi pi-user"></i>
                  </span>
                  <InputText
                    placeholder="Lastname"
                    onChange={this.addLastNameHandler}
                    className={this.state.setErrorMessage}
                  />
                </div>
              </div>
              <div className="col-12 md:col-12">
                <div className="p-inputgroup">
                  <span className="p-inputgroup-addon">Age</span>
                  <InputNumber
                    placeholder="Age"
                    onChange={this.addAgeHandler}
                  />
                </div>
              </div>
              <div className="col-12 md:col-12">
                <div className="p-inputgroup">
                  <span className="p-inputgroup-addon">Occupation</span>
                  <InputText
                    placeholder="Occupation"
                    onChange={this.addOccupationHandler}
                    className={this.state.setErrorMessage}
                  />
                </div>
              </div>
              <div className="col-12 md:col-12">
                <div className="p-inputgroup">
                  <Button
                    label="Submit"
                    icon="pi pi-check"
                    iconPos="right"
                    onClick={this.submitSavePostHandler}
                  />
                </div>
              </div>
            </div>
          </Dialog>
          {/*Update section*/}
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
                    onChange={this.firstNameUpdateHandler}
                    className={this.state.setErrorMessage}
                  />
                </div>
              </div>
              <div className="col-12 md:col-12">
                <div className="p-inputgroup">
                  <span className="p-inputgroup-addon">
                    <i className="pi pi-user"></i>
                  </span>
                  <InputText
                    placeholder="Lastname"
                    onChange={this.lastNameHandler}
                    className={this.state.setErrorMessage}
                  />
                </div>
              </div>
              <div className="col-12 md:col-12">
                <div className="p-inputgroup">
                  <span className="p-inputgroup-addon">Age</span>
                  <InputNumber placeholder="Age" onChange={this.ageHandler} />
                </div>
              </div>
              <div className="col-12 md:col-12">
                <div className="p-inputgroup">
                  <span className="p-inputgroup-addon">Occupation</span>
                  <InputText
                    placeholder="Occupation"
                    onChange={this.occupationHandler}
                    className={this.state.setErrorMessage}
                  />
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
          {/*for delete options*/}
          <Dialog
            header="Delete Confirmation"
            visible={this.props.deleteVisible}
            onHide={this.props.onChangeDeleteDialogInvisible}
            breakpoints={{ "960px": "75vw" }}
            style={{ width: "50vw" }}
          >
            <span>Are you sure you want to proceed?</span>
            <div className="grid">
              <div className="col-12 md:col-12">
                <div>
                  <Button
                    label="No"
                    icon="pi pi-times"
                    onClick={() => this.props.onChangeDeleteDialogInvisible()}
                    className="p-button-text"
                  />
                  <Button
                    label="Yes"
                    icon="pi pi-check"
                    onClick={this.deleteYes}
                    autoFocus
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
  onChangeUpdateUserRowData: PropTypes.func,
  sentDeleteRowData: PropTypes.func,
  deleteVisible: PropTypes.bool,
  onChangeDeleteDialogInvisible: PropTypes.func,
  onChangeDeleteOperation: PropTypes.func,
  onchangeAddDialogInvisible: PropTypes.func,
  onChangeSavePassAbleData: PropTypes.func,
  saveResponse: PropTypes.any,
  updateResponse: PropTypes.number,
  deleteRespnse: PropTypes.number 
};
const mapStateToProps = createStructuredSelector({
  users: makeSelectAllUserData(),
  rowData: makeSelectUserRowData(),
  updateVisible: makeSelectUpdateVisible(),
  deleteVisible: makeSelectDeleteRowDialogVisible(),
  addVisible: makeSelectAddRowDialogVisible(),
  saveResponse: makeSelectSaveResponse(),
  deleteRespnse: makeSelectDeleteResponse(),
  updateResponse: makeSelectUpdateResponse(),
});

const mapDispatchToProps = (dispatch)=>{
    return {
      dispatch,
      onChangeSavePassAbleData: (evt)=>{
        dispatch(setSaveDataPass(evt));
        dispatch(setAddInvisible());
        // dispatch(setUpdateResponse())
      },
      onchangeAddDialogInvisible: ()=>{
        dispatch(setAddInvisible());
      },
      onchangeAddDialogVisible: () =>{
        dispatch(setAddVisible());
      },
      //end save operation
      onChangeDeleteOperation: (evt) =>{
        dispatch(deleteUserRowData());
        dispatch(setDeleteInvisible());
      },
      sentDeleteRowData : (evt) =>{
        dispatch(setDeleteRowData(evt));
        dispatch(setDeleteVisible());
      },
      onChangeDeleteDialogInvisible : (evt) =>{
        dispatch((setDeleteInvisible()));
      },
      //end delete operation
      sentRowData : (evt)=>{
        dispatch(setUserRowData(evt));
        dispatch(updatePostUserRow());
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
