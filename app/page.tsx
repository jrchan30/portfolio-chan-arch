import SectionArchitecturalService from '@/components/Section/SectionArchitecturalService';
import SectionArchitecturalServiceList from '@/components/Section/SectionArchitecturalServiceList';
import SectionCompanyName from '@/components/Section/SectionCompanyName';
import SectionContactUs from '@/components/Section/SectionContactUs';
import SectionCover from '@/components/Section/SectionCover';
import SectionFounderInfo from '@/components/Section/SectionFounderInfo';
import SectionInnovationAndSustainability from '@/components/Section/SectionInnovationAndSustainability';
import SectionPortfolioInfo from '@/components/Section/SectionPortfolioInfo';

export default function Home() {
  return (
    <div>
      <SectionCover />

      <div className="container mt-20">
        <SectionFounderInfo />

        <SectionInnovationAndSustainability />

        <SectionArchitecturalService />

        <SectionArchitecturalServiceList />

        <SectionPortfolioInfo />

        <SectionContactUs />

        <SectionCompanyName />
      </div>
    </div>
  );
}
