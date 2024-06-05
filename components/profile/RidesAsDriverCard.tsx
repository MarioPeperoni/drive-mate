import { useEffect, useState } from "react";
import axios from "axios";

import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import DriveListing from "@/components/profile/DriveListing";

/**
 * Renders a card displaying the rides for a specific user as a driver.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.userId - The ID of the user.
 * @returns {JSX.Element} The rendered component.
 */
const RidesAsDriverCard = ({ userId }: { userId: string }) => {
  const [rides, setRides] = useState<Ride[]>([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const fetchRides = async () => {
      await axios
        .get(`http://localhost:5103/api/users/${userId}/driver`)
        .then((res) => {
          setRides(res.data as Ride[]);
          setIsFetching(false);
        });
    };
    fetchRides();
  }, []);

  if (isFetching) {
    return <Skeleton className="h-32 w-full" />;
  }

  return (
    <section>
      <Card>
        <CardHeader>
          <CardTitle>Rides as driver ({rides.length})</CardTitle>
        </CardHeader>
        <CardContent className="space-y-1">
          {rides.length > 0
            ? rides.map((ride) => <DriveListing ride={ride} key={ride.id} />)
            : !isFetching && (
                <p className="text-center text-muted-foreground">
                  You have no rides as driver
                </p>
              )}
        </CardContent>
      </Card>
    </section>
  );
};

export default RidesAsDriverCard;
