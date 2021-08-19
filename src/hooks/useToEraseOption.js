import { useContext } from 'react';
import Context from '../ContextStuff/Context';

export default function useToEraseOption() {
  const { filters: { filterByNumericValues }, options, setOptions } = useContext(Context);

  const optionsErase = () => {
    filterByNumericValues.forEach(({ column }) => setOptions(options
      .filter((option) => column !== option)));
  };
  return [optionsErase];
}
