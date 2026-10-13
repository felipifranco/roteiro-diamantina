(function (root) {
  const STORAGE_KEY = 'roteiro-mg:visited-attractions:v2';

  function keyFor(item) {
    return `${item.parentId || item.stopId || ''}/${item.name}`;
  }

  function create(storage, defaults = []) {
    const values = new Map();
    let stored = null;
    try {
      stored = JSON.parse(storage.getItem(STORAGE_KEY) || 'null');
    } catch (_) {
      stored = null;
    }
    if (stored && typeof stored === 'object' && !Array.isArray(stored)) {
      Object.entries(stored).forEach(([key, value]) => {
        if (typeof value === 'boolean') values.set(key, value);
      });
    }
    defaults.forEach(item => {
      const key = keyFor(item);
      if (!values.has(key)) values.set(key, true);
    });

    function persist() {
      try {
        storage.setItem(STORAGE_KEY, JSON.stringify(Object.fromEntries(values)));
      } catch (_) {
        // The current page still reflects the change if browser storage is unavailable.
      }
    }

    return {
      isVisited(item) {
        return values.get(keyFor(item)) === true;
      },
      setVisited(item, visited) {
        values.set(keyFor(item), Boolean(visited));
        persist();
        return values.get(keyFor(item));
      },
    };
  }

  const api = { create, keyFor, storageKey: STORAGE_KEY };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.VisitedChecklist = api;
})(typeof window !== 'undefined' ? window : globalThis);
