import Background from "@/components/block/Background";
import SearchForm from "@/components/block/SearchForm";
import SearchTypeRadio from "@/components/block/SearchTypeRadio";

export default function Home() {
  return (
    <main className="relative container mx-auto px-[20px]">
      <Background />
      <SearchTypeRadio />
      <SearchForm />
    </main>
  );
}
