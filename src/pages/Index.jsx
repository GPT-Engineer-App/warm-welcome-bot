import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Index = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto p-4">
        <h1 className="text-3xl text-center mb-6">جدول التصنيف</h1>
        <Table>
          <TableCaption>جدول التصنيف للمجموعة 3</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>التصنيف</TableHead>
              <TableHead>المجموعة 3</TableHead>
              <TableHead>مؤسسة التعليم العالي</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* Empty rows initially */}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Index;