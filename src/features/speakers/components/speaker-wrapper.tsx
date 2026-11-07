type Props = React.ComponentPropsWithRef<"div">;

export default function SpeakerWrapper({ children, ...props }: Props) {
  return (
    <div
      className="grid gap-5 md:grid-cols-2 xl:grid-cols-4 xl:gap-6"
      {...props}
    >
      {children}
    </div>
  );
}
