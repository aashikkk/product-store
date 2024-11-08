import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter
            future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
        >
            <ChakraProvider>
                <App />
            </ChakraProvider>
        </BrowserRouter>
    </StrictMode>
);
