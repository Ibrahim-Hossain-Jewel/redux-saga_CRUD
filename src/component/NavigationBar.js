import React, { Component } from "react";
import { TabMenu } from "primereact/tabmenu";
  class NavigationBar extends React.Component {
    constructor() {
      super();
      this.state = {};
      this.items = [
        {
          label: "Home",
          icon: "pi pi-fw pi-home",
        },
        //    { label: "Calendar", icon: "pi pi-fw pi-calendar" },
        //    { label: "Edit", icon: "pi pi-fw pi-pencil" },
        //    { label: "Documentation", icon: "pi pi-fw pi-file" },
        {
          label: "Settings",
          icon: "pi pi-fw pi-cog",
          command: () => {
            window.location.hash = "/crud";
          },
        },
      ];
    }
    render() {
      return (
        <div className="card">
          <TabMenu model={this.items} />
        </div>
      );
    }
  }

export default NavigationBar;
