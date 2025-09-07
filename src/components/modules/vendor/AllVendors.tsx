"use client";
import { TableData } from "@/components/dashboard/dataTable/TableData";
import { Button } from "@/components/ui/button";
import { useGetVendorsQuery } from "@/redux/vendor/vendorApi";
import { useState } from "react";


type TVendor = {
  _id: string
  name: string
  email: string
  status: "pending" | "approved" | "rejected"
}



export default function AllVendors() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [search, setSearch] = useState("");
  const { data, isLoading } = useGetVendorsQuery({
    page,
    limit,
    search
  });

  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-[85vh]">
        Loading...
      </div>
    );

  const vendors = data?.data;
  const pagination = data?.meta;


  return (
    <div>
      <TableData<TVendor>
        columns={[
          { key: "name", header: "Vendor Name" },
          {
            key: "status",
            header: "Status",
            render: (v) => <span className="capitalize">{v.status}</span>,
          },
        ]}
        data={vendors}
        total={pagination.total}
        page={page}
        limit={limit}
        onPageChange={setPage}
        onLimitChange={setLimit}
        search={search}
        onSearch={setSearch}
        actions={(vendor) => (
          <Button className={`${vendor.status !== "rejected" ? "bg-red-500 hover:bg-red-600 text-white" : "bg-green-500 hover:bg-green-600 text-white"}`}>
            {
              vendor.status === "rejected" ? "Approve" : "Rejected"
            }
          </Button>
        )}
      />
    </div>
  );
}
