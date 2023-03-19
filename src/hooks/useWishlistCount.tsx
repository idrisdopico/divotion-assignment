import createPersistedState from 'use-persisted-state';

const useCounterState = createPersistedState('count');

interface ReturnType {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const useWishlistCount = (initialCount: number): ReturnType => {
  const [count, setCount] = useCounterState(initialCount);

  return {
    count,
    increment: () => setCount((currentCount: number) => currentCount + 1),
    decrement: () => setCount((currentCount: number) => currentCount - 1),
  } as ReturnType;
}

export default useWishlistCount;
