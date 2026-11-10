import { forwardRef } from 'react';

// .slot carries the layout animation; .card is the solid surface; .card-body is its own scroller.
// On phones, tapping a faded (inactive) card activates it.
const Card = forwardRef(function Card({ id, label, active, onActivate, children }, ref) {
  const handleClick = () => {
    if (!active && window.matchMedia('(max-width: 767px)').matches) onActivate?.(id);
  };
  return (
    <section ref={ref} className="slot" data-active={active} aria-label={label} onClick={handleClick}>
      <div className="card" id={id}>
        <div className="card-body" tabIndex={0} role="region" aria-label={`${label} content`}>{children}</div>
      </div>
    </section>
  );
});
export default Card;
