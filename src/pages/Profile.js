import React from 'react';
const Profile = () => {
  return (
    <div>
      <h1 className="title is-1">This is the Profile Page</h1>
      <article className="message is-dark" style={{ marginTop: 40 }}>
        <div className="message-header"></div>
        <div className="message-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta
          nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida
          purus diam, et dictumefficitur. Aenean ac <em>eleifend lacus</em>, in
          mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor
          urna tempor ligula, id porttitor mi magna a neque. Donec dui urna,
          vehicula et sem eget, facilisis sodales sem.
        </div>
      </article>
    </div>
  );
};
export default Profile;
