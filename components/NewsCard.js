import React     from 'react';
import PropTypes from 'prop-types';

const NewsCard = ({
  title,
  photo,
  desc,
}) => (
  <>
    <img src={photo} alt={title} />
  </>
);

NewsCard.propTypes = {
  title : PropTypes.string.isRequired,
  desc  : PropTypes.string.isRequired,
  photo : PropTypes.string.isRequired,
};

export default NewsCard;
