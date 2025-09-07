/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

type Column<T> = {
  key: keyof T | string;
  header: string;
  render?: (item: T) => React.ReactNode;
};

type DataTableProps<T> = {
  columns: Column<T>[];
  data: T[];
  total: number;
  page: number;
  limit: number;
  onPageChange: (page: number) => void;
  onLimitChange: (limit: number) => void;
  search?: string;
  onSearch?: (query: string) => void;
  actions?: (item: T) => React.ReactNode;
};

export function TableData<T extends { _id: string }>({
  columns,
  data,
  total,
  page,
  limit,
  onPageChange,
  onLimitChange,
  search,
  onSearch,
  actions,
}: DataTableProps<T>) {
  const totalPages = Math.ceil(total / limit);

  return (
    <div className="space-y-4">
      {/* 🔍 Search */}
      {onSearch && (
        <input
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search..."
          className="border rounded px-3 py-2"
        />
      )}

      {/* 📋 Table */}
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((col) => (
              <TableHead key={String(col.key)}>{col.header}</TableHead>
            ))}
            {actions && <TableHead className="text-right">Actions</TableHead>}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item._id}>
              {columns.map((col) => (
                <TableCell key={String(col.key)}>
                  {col.render ? col.render(item) : (item as any)[col.key]}
                </TableCell>
              ))}
              {actions && (
                <TableCell className="text-right">{actions(item)}</TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* 📌 Pagination */}
      <div className="flex justify-between items-center mt-10">
        <div>

          <Select value={String(limit)} onValueChange={(val) => onLimitChange(Number(val))}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Set Limit" />
            </SelectTrigger>
            <SelectContent>
                {[10, 20, 50].map((l) => (
              <SelectItem key={l} value={String(l)}>
                {l} / page
              </SelectItem>
            ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex gap-2">
          <Button disabled={page === 1} onClick={() => onPageChange(page - 1)}>
            Prev
          </Button>
          <span>
            Page {page} of {totalPages}
          </span>
          <Button
            disabled={page === totalPages}
            onClick={() => onPageChange(page + 1)}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
