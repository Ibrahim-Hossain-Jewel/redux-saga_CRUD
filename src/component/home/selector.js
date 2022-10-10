import { createSelector } from "reselect";
const counterModulesActivityLogDomain = (state) => state;

const makeSelectAllUserData = () =>
  createSelector(counterModulesActivityLogDomain, (substate) =>
    substate.get("ApiUserData")
  );
const makeSelectUserRowData = () =>
  createSelector(counterModulesActivityLogDomain, (substate) =>
    substate.get("rowData")
  );
const makeSelectUpdateVisible = () =>
  createSelector(counterModulesActivityLogDomain, (substate) =>
    substate.get("updateVisibleData")
  );
const makeSelectUpdateAbleUserData = () =>
  createSelector(counterModulesActivityLogDomain, (substate) =>
    substate.get("updateAbleData")
  );
const makeSelectDeleteRow = () =>
  createSelector(counterModulesActivityLogDomain, (substate) =>
    substate.get("deleteRowData")
  );
const makeSelectDeleteRowDialogVisible = () =>
  createSelector(counterModulesActivityLogDomain, (substate) =>
    substate.get("deleteVisible")
  );
  export {counterModulesActivityLogDomain,
    makeSelectDeleteRowDialogVisible,
    makeSelectDeleteRow, 
    makeSelectAllUserData,
    makeSelectUpdateAbleUserData, 
    makeSelectUpdateVisible,
    makeSelectUserRowData,
    };
