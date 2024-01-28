import Background from "@/components/block/Background";
import SearchForm from "@/components/block/SearchForm";
import SearchTypeRadio from "@/components/block/SearchTypeRadio";
import SearchModal from "@/components/block/SearchModal";

export default function Home() {
  return (
    <main className="relative container mx-auto p-[20px] h-screen flex flex-col justify-start min-[500px]:justify-center min-[500px]:overflow-y-visible overflow-y-scroll">
      <Background />
      <SearchTypeRadio />
      <SearchForm />
      <SearchModal />
    </main>
  );
}
