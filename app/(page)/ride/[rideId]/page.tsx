import axios from "axios";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import ReservationPassagers from "@/components/reservation/ReservationPassagers";
import ReservationTitle from "@/components/reservation/ReservationTitle";
import ReservaionButton from "@/components/reservation/ReservationButton";
import { useUser } from "@clerk/nextjs";

/**
 * Fetches a ride from the server.
 * @param id - The ID of the ride to fetch.
 * @returns A Promise that resolves to the fetched ride.
 */
const fetchRide = async (id: string) => {
  const response = await axios.get(`http://localhost:5103/api/rides/${id}`);
  return response.data as Ride;
};

/**
 * Renders the RidePage component.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.params - The parameters object containing the rideId.
 * @param {string} props.params.rideId - The ID of the ride.
 * @returns {JSX.Element} The rendered RidePage component.
 */
const RidePage = async ({ params }: { params: { rideId: string } }) => {
  const ride = await fetchRide(params.rideId!);

  return (
    <Card className="mx-auto mt-5 w-[95%] sm:w-[90%]">
      <CardHeader>
        <CardTitle>Reserve your seat</CardTitle>
        <CardDescription>Check out information about this trip</CardDescription>
      </CardHeader>
      <CardContent className=" space-y-2">
        <ReservationTitle ride={ride} />
        {ride.passengers.length > 0 && <ReservationPassagers ride={ride} />}
        <ReservaionButton ride={ride} />
      </CardContent>
    </Card>
  );
};

export default RidePage;
