import { useState } from "react";
import { debounce } from "lodash";
export default function useOnChangeWords(time = 0) {
  const [value, setValue] = useState(null);
  const handleOnChange = debounce((e) => {
    setValue(e.target.value);
  }, time);
  return [value, handleOnChange];
}
