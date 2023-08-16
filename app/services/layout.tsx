import ServicesMenu from "@/components/ServicesMenu";
import ServicesForm from "@/components/ServicesForm";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center gap-8 p-8 min-h-screen">
      <ServicesMenu />
      {children}
      <ServicesForm />
    </section>
  );
}
