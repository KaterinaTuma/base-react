export type CounterProps = {
  name: string;
  minCount: number;
  count: number;
  maxCount: number;
  setCount: (count: number) => void;
  isDisabled: boolean;
};
