import Card from "./Card";

type StatCardProps = {
  header: string;
  text: string;
};

export default function StatCard({ header, text }: StatCardProps) {
  return (
    <Card className="p-8 shadow-sm max-w-[18rem]">
      <h1 className="text-4xl font-medium mb-2">{header}</h1>
      <p className="text-slate-700 leading-5">{text}</p>
    </Card>
  );
}
