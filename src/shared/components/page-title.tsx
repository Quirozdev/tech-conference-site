interface Props {
  title: string;
}

export default function PageTitle({ title }: Props) {
  return (
    <h1 className="text-preset-2 font-chakra-petch text-green-200">{title}</h1>
  );
}
