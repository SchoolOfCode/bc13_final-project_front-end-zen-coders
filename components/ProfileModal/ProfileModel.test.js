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

    });