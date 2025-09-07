"use client"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import ReduxProvider from "@/Provider/ReduxProvider";
import { Separator } from "@radix-ui/react-separator";
import "../../globals.css";
import { AppSidebar } from "@/components/app-sidebar";
import { useGetProfileQuery } from "@/redux/user/userApi";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>
) {

  const router = useRouter()
  const { data: userProfile, isLoading } = useGetProfileQuery(undefined);


  useEffect(() => {
    if (!isLoading && !userProfile) {
      router.push("/");
    }
  }, [isLoading, userProfile, router]);

  return (
    <ReduxProvider>
      <SidebarProvider>
        <AppSidebar userProfile={userProfile} />
        <SidebarInset className="z-50">
          <header className="flex items-center justify-between border-b px-4 lg:px-6">
            <div className="flex h-16 shrink-0 items-center gap-2">
              <SidebarTrigger className="-ml-1" />
              <Separator
                orientation="vertical"
                className="mr-2 data-[orientation=vertical]:h-4"
              />
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4">{children}</div>
        </SidebarInset>
      </SidebarProvider>
    </ReduxProvider>
  );
}
