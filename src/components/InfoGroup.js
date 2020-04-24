import React from 'react';
import Link from './Link';

function renderButton({ button, item }) {
  const link = item[button.key];
  if (!link) {
    return null;
  }
  return (
    <React.Fragment key={button.key}>
      <Link to={link}>{button.name}</Link>
      {'  '}
    </React.Fragment>
  );
}

const InfoGroup = ({ data: { items, buttons } }) => {
  return (
    <div>
      {items.map(item => (
        <div key={item.key}>
          {buttons && (
            <div style={{ float: 'right' }}>
              {buttons.map(button => renderButton({ button, item }))}
            </div>
          )}
          <h3>
            <Link to={item.to}>{item.name}</Link>
          </h3>
          {item.description && <p>{item.description}</p>}
          {'  '}
        </div>
      ))}
    </div>
  );
};

export default InfoGroup;
