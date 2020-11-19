import PropTypes from "prop-types";
import React from "react";

import s from "./COVID19InfoBoxBlock.module.css";

const COVID19InfoBoxBlock = ({ title, description }) => {
  return (
    <div className={s.bleedWrapper}>
      <div className={s.bleedMainContent}>
        <div className={s.title}>{title}</div>
        <div className={s.description}>{description}</div>
      </div>
    </div>
  );
};

COVID19InfoBoxBlock.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default COVID19InfoBoxBlock;