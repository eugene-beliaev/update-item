export function updateItem<T>(
  array: T[],
  predicate: (el: T) => boolean,
  reducer: (el: T) => Partial<T>
) {
  return array.map(el => {
    if (predicate(el)) {
      if (!Array.isArray(el) && typeof el === 'object') {
        return { ...el, ...reducer(el) }
      }
      return reducer(el)
    }
    return el
  })
}
