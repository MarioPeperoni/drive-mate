import RideRecordsList from "@/components/ride-records/RideRecordsList";
import SearchCard from "@/components/search/SearchCard";

/**
 * Represents the home page component.
 * This component renders the search card and the ride records list.
 */
const HomePage = () => {
  return (
    <div>
      <SearchCard />
      <RideRecordsList />
    </div>
  );
};

export default HomePage;
