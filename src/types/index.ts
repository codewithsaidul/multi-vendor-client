export type { IUser } from "./user.types"
export type { ILogin } from "./auth"
export type { IVendor } from "./vendor.types"

export interface IResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  meta?: Meta;
  data: T;
}

export interface Meta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}


export interface ISidebarItem {
  title: string;
  url: string;
  items: {
    title: string;
    url: string;
  }[];
}

export type TRole = "admin" | "manager" | "user";




export type SidebarContextProps = {
  state: "expanded" | "collapsed"
  open: boolean
  setOpen: (open: boolean) => void
  openMobile: boolean
  setOpenMobile: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
}