import { createSelector } from "reselect";
const UserDataInfoModulesActivityLogDomain = (state) => state;

const makeSelectAllUserData = () =>
  createSelector(UserDataInfoModulesActivityLogDomain, (substate) =>
    substate.get("ApiUserData")
  );
const makeSelectUserRowData = () =>
  createSelector(UserDataInfoModulesActivityLogDomain, (substate) =>
    substate.get("rowData")
  );
const makeSelectUpdateVisible = () =>
  createSelector(UserDataInfoModulesActivityLogDomain, (substate) =>
    substate.get("updateVisibleData")
  );
const makeSelectUpdateAbleUserData = () =>
  createSelector(UserDataInfoModulesActivityLogDomain, (substate) =>
    substate.get("updateAbleData")
  );
const makeSelectDeleteRow = () =>
  createSelector(UserDataInfoModulesActivityLogDomain, (substate) =>
    substate.get("deleteRowData")
  );
const makeSelectDeleteRowDialogVisible = () =>
  createSelector(UserDataInfoModulesActivityLogDomain, (substate) =>
    substate.get("deleteVisible")
  );
const makeSelectAddRowDialogVisible = () =>
  createSelector(UserDataInfoModulesActivityLogDomain, (substate) =>
    substate.get("addVisible")
  );
const makeSelectSaveData = () =>
  createSelector(UserDataInfoModulesActivityLogDomain, (substate) =>
    substate.get("saveUserPreparedData")
  );
const makeSelectSaveResponse = () =>
  createSelector(UserDataInfoModulesActivityLogDomain, (substate) =>
    substate.get("saveResponse")
  );
const makeSelectDeleteResponse = () =>
  createSelector(UserDataInfoModulesActivityLogDomain, (substate) =>
    substate.get("deleteResponse")
  );
const makeSelectUpdateResponse = () =>
  createSelector(UserDataInfoModulesActivityLogDomain, (substate) =>
    substate.get("updateResponse")
  );
  export {
    UserDataInfoModulesActivityLogDomain,
    makeSelectDeleteResponse,
    makeSelectUpdateResponse,
    makeSelectSaveData,
    makeSelectSaveResponse,
    makeSelectAddRowDialogVisible,
    makeSelectDeleteRowDialogVisible,
    makeSelectDeleteRow,
    makeSelectAllUserData,
    makeSelectUpdateAbleUserData,
    makeSelectUpdateVisible,
    makeSelectUserRowData,
  };
