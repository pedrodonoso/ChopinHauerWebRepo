import React from "react";
import PropTypes from "prop-types";
import { NavLink as RouteNavLink } from "react-router-dom";
import { NavItem, NavLink,Row,Col } from "shards-react";

const SidebarNavItem = ({ item }) => (

  <NavItem>
    <NavLink tag={RouteNavLink} to={item.to}>
      <Row>
          <Col>
            {item.htmlBefore && (
              <div
                className="d-inline-block item-icon-wrapper"
                dangerouslySetInnerHTML={{ __html: item.htmlBefore }}
              />
            )}
          </Col>
          <Col>
            <Col>
                <Row align="left">
                  {item.title}
                </Row>
                <Row>
                  <span className="small">{item.subtitle}</span>
                </Row>
              </Col>
          </Col>
          <Col>
            {item.htmlAfter && (
              <div
                className="d-inline-block item-icon-wrapper"
                dangerouslySetInnerHTML={{ __html: item.htmlAfter }}
              />
            )}
          </Col>
      </Row>





    </NavLink>
  </NavItem>
);

SidebarNavItem.propTypes = {
  /**
   * The item object.
   */
  item: PropTypes.object
};

export default SidebarNavItem;
