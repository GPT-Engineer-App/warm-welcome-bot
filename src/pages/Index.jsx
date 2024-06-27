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
          <TableCaption>جدول التصنيف للمجموعة 4</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>التصنيف - المجموعة 4</TableHead>
              <TableHead>مؤسسة التعليم العالي</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>جامعة الإمارات للطيران</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>جامعة الخليج الطبية</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3</TableCell>
              <TableCell>جامعة العين</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>4</TableCell>
              <TableCell>جامعة الوصل</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>5</TableCell>
              <TableCell>كلية الإمام مالك للشريعة الإسلامية والقانون</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>6</TableCell>
              <TableCell>كلية الأفق الجامعية</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Table>
          <TableCaption>جدول التصنيف للمجموعة 3</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>التصنيف - المجموعة 3</TableHead>
              <TableHead>مؤسسة التعليم العالي</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>الجامعة الأمريكية في الإمارات</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>جامعة المدينة عجمان</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3</TableCell>
              <TableCell>جامعة جميرا</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>4</TableCell>
              <TableCell>جامعة رأس الخيمة للطب والعلوم الصحية</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>5</TableCell>
              <TableCell>جامعة عجمان</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>6</TableCell>
              <TableCell>كلية دبي للصيدلة</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>7</TableCell>
              <TableCell>معهد تكنولوجيا إدارة الأعمال</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>8</TableCell>
              <TableCell>معهد روشيستر للتكنولوجيا</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Table>
          <TableCaption>جدول التصنيف للمجموعة 2</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>التصنيف - المجموعة 2</TableHead>
              <TableHead>مؤسسة التعليم العالي</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>الجامعة الأمريكية في رأس الخيمة</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>أكاديمية ربدان</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3</TableCell>
              <TableCell>جامعة السوربون - أبوظبي</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>4</TableCell>
              <TableCell>جامعة الفجيرة</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>5</TableCell>
              <TableCell>جامعة حمدان بن محمد الذكية</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>6</TableCell>
              <TableCell>جامعة دبي</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>7</TableCell>
              <TableCell>جامعة سان جوزف دبي</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Table>
          <TableCaption>جدول التصنيف للمجموعة 1</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>التصنيف - المجموعة 1</TableHead>
              <TableHead>مؤسسة التعليم العالي</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>الجامعة الأمريكية في الشارقة</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>الجامعة الأمريكية في دبي</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3</TableCell>
              <TableCell>الجامعة البريطانية في دبي</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>4</TableCell>
              <TableCell>جامعة الكندية في دبي</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>5</TableCell>
              <TableCell>جامعة الإمارات العربية المتحدة</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>6</TableCell>
              <TableCell>جامعة الشارقة</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>7</TableCell>
              <TableCell>جامعة أبوظبي</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>8</TableCell>
              <TableCell>جامعة خليفة</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>9</TableCell>
              <TableCell>جامعة زايد</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>10</TableCell>
              <TableCell>جامعة محمد بن راشد للطب والعلوم الصحية</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>11</TableCell>
              <TableCell>جامعة نيويورك - أبوظبي</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>12</TableCell>
              <TableCell>جامعة ولونغونغ في دبي</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Index;