interface Props {
  title: string;
}

export default function SectionTitle({ title }: Props) {
  return (
    <h2 className="text-preset-6 font-extrabold text-green-200 uppercase">
      {title}
    </h2>
  );
}
