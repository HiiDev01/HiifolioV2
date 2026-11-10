import { useEffect, useRef } from 'react';

// A soft rainbow glow that eases toward the cursor (or finger).
export default function RainbowGlow() {
  const orb = useRef(null);

  useEffect(() => {
    const el = orb.current;
    let tx = window.innerWidth * 0.5, ty = window.innerHeight * 0.35;
    let x = tx, y = ty, raf = 0;
    const paint = () => { el.style.transform = `translate3d(${x}px, ${y}px, 0)`; };
    const tick = () => {
      x += (tx - x) * 0.07; y += (ty - y) * 0.07;
      paint();
      raf = Math.abs(tx - x) > 0.5 || Math.abs(ty - y) > 0.5 ? requestAnimationFrame(tick) : 0;
    };
    const aim = (cx, cy) => { tx = cx; ty = cy; if (!raf) raf = requestAnimationFrame(tick); };
    const onPointer = (e) => aim(e.clientX, e.clientY);
    const onTouch = (e) => { const t = e.touches[0]; if (t) aim(t.clientX, t.clientY); };
    paint();
    window.addEventListener('pointermove', onPointer, { passive: true });
    window.addEventListener('touchstart', onTouch, { passive: true });
    window.addEventListener('touchmove', onTouch, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onPointer);
      window.removeEventListener('touchstart', onTouch);
      window.removeEventListener('touchmove', onTouch);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div className="rainbow" aria-hidden="true"><div className="rainbow-orb" ref={orb} /></div>;
}
