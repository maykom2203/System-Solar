import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <h2 className="subTitle">
        {headline}
      </h2>
    );
  }
}
Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

// Title.defaultProps = {
//   headline: {},
// };

export default Title;
