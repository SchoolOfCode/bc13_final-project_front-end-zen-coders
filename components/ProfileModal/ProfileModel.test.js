import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { useState } from "react";
import ProfileModal from "./ProfileModal";
import fetchMock from 'jest-fetch-mock';
import flushPromises from 'flush-promises';

fetchMock.enableMocks();

describe("ProfileModal component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = render(<ProfileModal userId={1} />);
  });

  test("should render the component", () => {
    expect(wrapper.getByText("Edit Profile")).toBeTruthy();
  });

  test("should change the state of showModal when the edit button is clicked", () => {
    fireEvent.click(wrapper.getByText("Edit Profile"));
    expect(wrapper.queryByText("Update profile")).toBeTruthy();
  });

  test("should update the state of profile when the input fields are changed", async () => {
    const nameInput = wrapper.getByLabelText("Your name");
    const locationInput = wrapper.getByLabelText("Location");
    const emailInput = wrapper.getByLabelText("Email");
    const aboutMeInput = wrapper.getByLabelText("About me");
    const isSharerInput = wrapper.getByLabelText("I am a sharer");
    const isLearnerInput = wrapper.getByLabelText("I am a learner");
    const profilePicInput = wrapper.getByLabelText("Upload a profile picture");

    fireEvent.change(nameInput, { target: { value: "John" } });
    fireEvent.change(locationInput, { target: { value: "New York" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    fireEvent.change(aboutMeInput, { target: { value: "I am a software developer" } });
    fireEvent.change(isSharerInput, { target: { checked: true } });
    fireEvent.change(isLearnerInput, { target: { checked: true } });
    fireEvent.change(profilePicInput, { target: { files: [new File([], "profile-pic.jpg", { type: "image/jpeg" })] } });

    fireEvent.submit(wrapper.getByText("Update profile"))
    await flushPromises();
    expect(fetchMock.mock.calls[0][0]).toBe(`http://localhost:3003/users/update/1`);
    expect(fetchMock.mock.calls[0][1].method).toBe("PATCH");
    const data = await fetchMock.mock.calls[0][1].body.getAll('key');
    expect(data.get('name')).toBe('John');
    expect(data.get('location')).toBe('New York');
    expect(data.get('email')).toBe('john@example.com');
    expect(data.get('isSharer')).toBe('true');
    expect(data.get('isLearner')).toBe('true');
    expect(data.get('aboutMe')).toBe('I am a software developer');
    expect(data.get('profilePic')).toBe(new File([], "profile-pic.jpg", { type: "image/jpeg" }));
    });
    });