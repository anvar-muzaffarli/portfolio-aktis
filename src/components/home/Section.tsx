type Props = {
    id: string;
    title: string;
    subtitle?: string;
    children: React.ReactNode;
  };
  
  export default function Section({ id, title, subtitle, children }: Props) {
    return (
      <section id={id} className="scroll-mt-24">
        <div className="rounded-3xl  bg-white p-6 shadow-sm md:p-10">
          <div className="space-y-2">
            <h2 className="text-2xl text-center font-bold tracking-tight md:text-3xl">{title}</h2>
            {subtitle ? <p className="text-black/60 text-center">{subtitle}</p> : null}
          </div>
          <div className="mt-6">{children}</div>
        </div>
      </section>
    );
  }
  