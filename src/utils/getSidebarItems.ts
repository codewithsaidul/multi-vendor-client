import { role } from "@/constants";
import { adminSidebarItems } from "@/routes/adminSidebarRoutes";
import { TRole } from "@/types";


export const getSidebarItems = (userRole: TRole) => {
  switch (userRole) {
    case role.admin:
      return [...adminSidebarItems];
    default:
      return [];
  }
};