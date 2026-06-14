let state = {
  progress: 0,
  section: 0,
  heroProgress: 0,
  sectionProgress: 0,
};

const listeners = new Set();

function changedEnough(prev, next) {
  if (prev.section !== next.section) return true;
  if (Math.abs(prev.heroProgress - next.heroProgress) > 0.003) return true;
  if (Math.abs(prev.progress - next.progress) > 0.002) return true;
  if (next.section === 4 && Math.abs(prev.sectionProgress - next.sectionProgress) > 0.002) {
    return true;
  }
  return false;
}

export const scrollStore = {
  get: () => state,
  set: (next) => {
    const prev = state;
    state = next;
    if (changedEnough(prev, next)) {
      listeners.forEach((listener) => listener());
    }
  },
  subscribe: (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
};
