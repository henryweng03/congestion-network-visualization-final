import Card from "./Card";

type StatCardProps = {
  header: string;
  text: string;
};

export default function StatCard({ header, text }: StatCardProps) {
  return (
    <Card className="p-8 shadow-sm">
      <h1 className="text-4xl text-slate-950 font-medium mb-2 tracking-tight">
        {header}
      </h1>
      <p className="text-slate-600 leading-5">{text}</p>
    </Card>
  );
}
