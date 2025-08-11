type Props = {
  title: string;
  subtitle?: string;
};

export default function PageHeader({ title, subtitle }: Props) {
  return (
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h1 className="text-5xl font-serif font-semibold text-green-900">
        {title}
      </h1>

      {subtitle ? (
        <h3 className="mt-2 pt-2 md:text-md font-serif font-normal text-green-800 tracking-[0.2em]">
          {subtitle}
        </h3>
      ) : null}
    </div>
  );
}
