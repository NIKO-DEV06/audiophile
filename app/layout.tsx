import "./globals.css";
import { Manrope } from "next/font/google";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { ReduxProvider } from "@/store/provider";
import { AuthContextProvider } from "@/components/auth/context/AuthContext";

const manrope = Manrope({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Audiophile by Emmanuel Ayeniko",
  description: "An Ecommerce Website for Audio/Sound Devices",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${manrope.className} bg-[#101010]`}>
        <ReduxProvider>
          <AuthContextProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </AuthContextProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
