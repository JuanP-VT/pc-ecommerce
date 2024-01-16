import Navigation from "./components/navigation/Navigation";
import "./globals.css";
import { Inter } from "next/font/google";
import { getServerSession } from "next-auth";
import { OPTIONS } from "./api/auth/[...nextauth]/route";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PC HUB",
  description: "PC master race eCommerce",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(OPTIONS);
  return (
    <html lang="en">
      <body className={`${inter.className} relative `}>
        {" "}
        <Navigation session={session} />
        {children}
      </body>
    </html>
  );
}
