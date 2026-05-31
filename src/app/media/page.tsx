import { PageHero } from "@/components/PageHero";
import { NewsSection } from "@/components/NewsSection";
import { LeadershipSection } from "@/components/LeadershipSection";

export const metadata = {
  title: "Media Centre | ITC Limited",
  description: "Latest news, press releases and stories from ITC Limited.",
};

export default function MediaPage() {
  return (
    <>
      <PageHero
        label="Media Centre"
        title="News & Stories"
        description="Stay informed with the latest from ITC — brand launches, leadership insights, awards and financial updates."
        image="/images/news-brands.jpg"
      />
      <NewsSection />
      <LeadershipSection />
    </>
  );
}
