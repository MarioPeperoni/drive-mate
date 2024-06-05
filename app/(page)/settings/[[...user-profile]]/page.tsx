import { UserProfile } from "@clerk/nextjs";

/**
 * Represents the UserProfilePage component.
 * This component renders the user profile page with the UserProfile component.
 */
const UserProfilePage = () => (
  <div className="my-4 flex items-center justify-center">
    <UserProfile
      path="/settings"
      routing="path"
      appearance={{
        elements: {
          rootBox: "w-[80%] mb-b h-[calc(100vh-100px)]",
          card: "m-0 w-full h-[calc(100vh-100px)]",
        },
      }}
    />
  </div>
);

export default UserProfilePage;
