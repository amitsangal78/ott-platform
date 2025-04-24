import { useAppSelector, useAppDispatch } from "@repo/redux-config";
import { RootState } from "../store";
import { increment, decrement } from "../store/slices/counterSlice";

export default function Counter() {
  const count = useAppSelector((state: RootState) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <span>Counter: {count}</span>

      <button
        onClick={() => dispatch(decrement())}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Decrease
      </button>
      <button
        onClick={() => dispatch(increment())}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Increase
      </button>
    </div>
  );
}
