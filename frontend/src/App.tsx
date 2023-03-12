import { ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "react-query";
import { ContextProvider } from "./context";
import { AppRoutes } from "./routes";
import { defaultTheme } from "./themes";

function App() {
  const queryClient = new QueryClient();

  return (
    <ContextProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={defaultTheme}>
          <AppRoutes />
        </ThemeProvider>
      </QueryClientProvider>
    </ContextProvider>
  );
}

export default App;
