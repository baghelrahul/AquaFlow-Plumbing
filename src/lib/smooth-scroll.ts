/**
 * Luxurious smooth scroll with easeInOutCubic easing over a configurable duration (default 800ms).
 */
export function smoothScrollTo(targetId: string, duration = 850, offset = 80) {
  if (typeof window === "undefined") return;

  const elem = document.getElementById(targetId);
  if (!elem) return;

  const elementPosition = elem.getBoundingClientRect().top + window.scrollY;
  const targetPosition = Math.max(0, elementPosition - offset);
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;

  if (Math.abs(distance) < 5) return;

  let startTime: number | null = null;

  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    // easeInOutCubic curve for slow and gentle start/finish
    const ease =
      progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    window.scrollTo(0, startPosition + distance * ease);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    } else {
      window.history.pushState(null, "", `#${targetId}`);
    }
  }

  requestAnimationFrame(animation);
}
