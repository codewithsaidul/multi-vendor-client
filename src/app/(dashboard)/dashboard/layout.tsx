import ReduxProvider from "@/Provider/ReduxProvider";
import "../../globals.css";

export const metadata = {
  title:
    "Admin DashBoard - Your Trusted News Source | Latest Updates & Breaking Stories",
  description:
    "Get the latest breaking news, in-depth analysis, and expert opinions on the top stories. Stay updated with a wide range of topics including politics, business, technology, entertainment, and more. Your go-to source for trustworthy and timely news.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProvider>
      <div>{children}</div>
    </ReduxProvider>
  );
}
