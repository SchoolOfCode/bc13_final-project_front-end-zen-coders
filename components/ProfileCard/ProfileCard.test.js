import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ProfileCard from "./ProfileCard";

afterEach(cleanup);

describe("ProfileCard", () => {
  // Test case for when the component is loading
  test("renders a loading message when isLoading is true", () => {
    // Mocks the useUser hook to return isLoading as true
    jest.mock("@auth0/nextjs-auth0/client", () => {
      return { useUser: () => ({ isLoading: true }) };
    });

    render(
      <UserProvider>
        <ProfileCard />
      </UserProvider>
    );
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  // Test case for when there is an error in the component
  test("renders an error message when there is an error", () => {
    // Mocks the useUser hook to return an error
    jest.mock("@auth0/nextjs-auth0/client", () => {
      return { useUser: () => ({ error: { message: "Error message" } }) };
    });
    render(
      <UserProvider>
        <ProfileCard />
      </UserProvider>
    );
    expect(screen.getByText("Error message")).toBeInTheDocument();
  });

  // Test case for when the component is rendered correctly
  test("renders profile information correctly", () => {
    // Mocks the useUser hook to return a user object
    jest.mock("@auth0/nextjs-auth0/client", () => {
      return { useUser: () => ({ user: { name: "John Doe" } }) };
    });

    const event = [
      {
        name: "John Doe",
        location: "New York",
        profilePic: "https://example.com/profile.jpg",
        aboutMe: "I am a software developer",
        email: "johndoe@example.com",
      },
    ];
    const userId = "12345";
    const authId = "12345";

    render(
      <UserProvider>
        <ProfileCard event={event} userId={userId} authId={authId} />
      </UserProvider>
    );

    // Expect the profile information to be rendered correctly
    expect(screen.getByAltText("profile picture")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("New York")).toBeInTheDocument();
    expect(screen.getByText("About me:")).toBeInTheDocument();
    expect(screen.getByText("I am a software developer")).toBeInTheDocument();

    // Expect the contact button to be rendered correctly
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: "CONTACT",
      })
    ).toBeInTheDocument();
  });
});
