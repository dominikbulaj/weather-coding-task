import { useEffect, useState } from "react";
import useSelectCity from "./useSelectCity";

const usePageTitle = () => {
  const { selectedCity } = useSelectCity();
  const defaultTitle = 'Any city weather forecast'
  const [pageTitle, setPageTitle] = useState(defaultTitle)

  useEffect(() => {
    const title = selectedCity?.name ? `${selectedCity.name} weather forecast` : defaultTitle
    setPageTitle(title)
    document.title = title
  }, [selectedCity])

  return pageTitle
}

export default usePageTitle