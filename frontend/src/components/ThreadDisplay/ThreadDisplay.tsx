import { DisplayWrapper, NoSelection, ThreadContent } from "./components";

import { useThreadDisplayState } from "./hooks";

export const ThreadDisplay = () => {
  const { selectedDataPoint } = useThreadDisplayState();

  return (
    <DisplayWrapper>
      {selectedDataPoint ? <ThreadContent /> : <NoSelection />}
    </DisplayWrapper>
  );
};
