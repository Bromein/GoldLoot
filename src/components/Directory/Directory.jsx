import React from "react";
import { connect } from "react-redux";

import { selectDirectorySections } from "../../store/directory/directorySelectors";
import { createStructuredSelector } from "reselect";
import MenuItem from "../MenuItem/MenuItem";

import "./Directory.scss";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
