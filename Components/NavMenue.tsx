import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";
import { NavigationModel } from "../Models/NavigationModel";

interface IProp {
  navigationData: NavigationModel[];
}
interface IState { }

export class NavMenue extends Component<IProp, IState> {
  constructor(prop) {
    super(prop);
    this.state = {};
  }

  render() {
    let { navigationData } = this.props;
    return (
      <div className="sideNavigation">
        {
          navigationData.map((x,key) => {
            return <NavItem key={key} navData={x} level={0} />
          })
        }
      </div>
    )
  }
}

//=========================================


interface INavItemProps {
  navData: NavigationModel,
  level: number
}
class NavItem extends Component<INavItemProps>{
  navGroup;
  arrow;
  constructor(props) {
    super(props);
    this.navGroup = React.createRef();
    this.arrow = React.createRef();
  }
  render() {

    let { level, navData } = this.props;
    let { title, iconClass, relativeLink, subMenue } = navData;

    let hasChild = subMenue && subMenue.length;

    return (
      <NavLink
        activeClassName="selectedNav"
        className={"navItem navLevel" + level}
        to={relativeLink}>
        <div className="navHead"
          onClick={(e) => {
            if (hasChild) {
              let elm = this.navGroup.current;
              let isVisible = (elm.style.display != "none");
              elm.style.display = isVisible ? "none" : "";
              this.arrow.current.innerHTML = isVisible ? "&#x25B6;" : "&#x25BC;"
            }
          }}>
          <span className="navArrow" ref={this.arrow}>
            {
              (() => {
                if (hasChild) {
                  return <React.Fragment>&#x25B6;</React.Fragment>
                }
              })()
            }
          </span>
          <span className={"navIcons " + iconClass}></span>
          <span className="navTitle">{title}</span>
        </div>

        {
          (() => {
            if (hasChild) {
              return <div ref={this.navGroup} className="navGroup" style={{ display: 'none' }} >
                {
                  subMenue.map((x, key) => {
                    return <NavItem key={key} navData={x} level={level + 1} />
                  })
                }
              </div>
            }
          })()
        }
      </NavLink >
    );
  }
}