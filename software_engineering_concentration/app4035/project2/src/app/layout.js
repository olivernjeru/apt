import "./globals.css";
import "../app/utils/cron";
import { SidebarProvider } from "./SidebarContext";
import { NotesProvider } from "./NotesContext";
import MyThemeProvider from "@/components/ThemeProviderWrapper";
import AppLayout from "@/components/AppLayout";

export const metadata = {
  title: "Ideate",
  description: "Capture All Your Ideas on Ideate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MyThemeProvider>
          <NotesProvider>
            <SidebarProvider>
              <AppLayout>
                {children}
              </AppLayout>
            </SidebarProvider>
          </NotesProvider>
        </MyThemeProvider>
      </body>
    </html>
  );
}
