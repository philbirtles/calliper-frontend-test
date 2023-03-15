import { DisplayWrapper, NoSelection, ThreadContent } from "./components";

import { useThreadDisplayState } from "./hooks";

export const ThreadDisplay = () => {
  const { selectedDataPoint, isLoading } = useThreadDisplayState();

  return (
    <DisplayWrapper>
      {selectedDataPoint ? (
        <ThreadContent isLoading={isLoading} />
      ) : (
        <NoSelection />
      )}
    </DisplayWrapper>
  );
};
