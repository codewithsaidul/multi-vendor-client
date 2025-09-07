import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { IUser, TRole } from "@/types";
import Link from "next/link";
import { getSidebarItems } from "@/utils/getSidebarItems";

// This is sample data.

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  userProfile: IUser | undefined;
}

export function AppSidebar({ userProfile, ...props }: AppSidebarProps) {
  const data = {
    navMain: getSidebarItems(userProfile?.role as TRole),
  };

  return (
    <Sidebar {...props}>
      <SidebarHeader className="px-4 mt-7 mb-10">
        <h1 className="text-3xl font-bold">Multi-Vendor Marketplace</h1>
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
