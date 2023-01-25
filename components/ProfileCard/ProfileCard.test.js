import React from "react";
import { render, screen, cleanup, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import ProfileCard from "./ProfileCard";
import { UserProvider, useUser } from "@auth0/nextjs-auth0/client";


const user = {
  email: "test@test.com"
}

afterEach(cleanup);



jest.mock('@auth0/nextjs-auth0/client', () => {
    return { useUser: () => ({ isLoading: true }) }
  });

describe("ProfileCard", () => {
    test("renders a loading message when isLoading is true", () => {
        jest.mock("@auth0/nextjs-auth0/client", () => {
          return { useUser: () => ({ isLoading: true }) }
        });
        act(() => {
          render(<ProfileCard />);
        });
        expect(screen.getByText("Loading...")).toBeInTheDocument();
      });


test("renders the profile information correctly", async () => {
    const user = {
        name: "Test User",
        email: "test@example.com",
        location: "Test Location",
        aboutMe: "Test about me",
      };
    const event = {
        name: "Test User",
        location: "Test Location",
        profilePic: "test-profile-pic.jpg",
        aboutMe: "Test about me",
        email: "test@test.com"
    };
    // const user = {};
    const userId = "12345";
    const authId = "12345";

    await act(async () => {
        const { getByText } =  render(
        <UserProvider value={{ user }}>
          <ProfileCard event={event} userId={userId} authId={authId} />
        </UserProvider>
      );
  

      expect(getByText("Test User")).toBeInTheDocument();
      expect(getByText("Test Location")).toBeInTheDocument();
      expect(getByText("Test about me")).toBeInTheDocument();
  });
});
});
