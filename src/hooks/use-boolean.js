import { useState, useCallback } from 'react';

export const useBoolean = (defaultValue) => {
  // ** States
  const [value, setValue] = useState(!!defaultValue);

  // ** Handlers
  const onTrue = useCallback(() => {
    setValue(true);
  }, []);

  const onFalse = useCallback(() => {
    setValue(false);
  }, []);

  const onToggle = useCallback(() => {
    setValue((prev) => !prev);
  }, []);

  return {
    value,
    onTrue,
    onFalse,
    onToggle,
    setValue,
  };
};
