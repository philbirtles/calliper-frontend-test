import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getChartDataByToken } from "../api";
import { ErrorView } from "./ErrorView";
import { HomeView } from "./HomeView";
import { LoadingView } from "./LoadingView";

export const ShareView = () => {
  const { shareId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const getChartData = async (token: string) => {
    try {
      const { data } = await getChartDataByToken(token);
      console.log("!!!Data", data);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    if (!shareId) {
      setHasError(true);
      setIsLoading(false);
    } else {
      getChartData(shareId);
    }
  }, [shareId]);

  if (isLoading) {
    return <LoadingView />;
  }

  if (hasError) {
    return <ErrorView />;
  }
  return <HomeView />;
};
