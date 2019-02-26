import React     from 'react';
import PropTypes from 'prop-types';
import Link      from 'next/link';

const NewsCard = ({
  id,
  title,
  photo,
  desc,
  date,
}) => (
  <>
    <div className="card-wrapper">
      <img src={photo} alt={title} />
      <div className="description">
        <h1>{title}</h1>
        <p>{desc}</p>
        <p>{date}</p>
        <Link as={`/${title.replace(/ /g,"-")}`} href={`/post?id=${id}`}>
          <a>details</a>
        </Link>
      </div>
    </div>
    <style jsx>{`
      img {
        width : 480px;
      }

      .card-wrapper {
        width      : 100%;
        display    : flex;
        margin-top : 12px;
      }

      .description {
        padding : 20px;
      }
    `}
    </style>
  </>
);

NewsCard.propTypes = {
  title : PropTypes.string.isRequired,
  desc  : PropTypes.string.isRequired,
  photo : PropTypes.string.isRequired,
  date  : PropTypes.string.isRequired,
};

export default NewsCard;
