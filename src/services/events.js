import { headers } from "./APIShared";
const _BASE_URL = "http://localhost:5000/";

export async function getEvent(eventId) {
  try {
    const resp = await fetch(`${_BASE_URL}/events/${eventId}`, {
      method: "GET",
      headers,
    });
    if (resp.ok) {
      const data = await resp.json();
      console.log(data);
      return data;
    } else {
      console.error("an error occured");
    }
  } catch (error) {
    console.error(error);
  }
}

export async function getEvents() {
  try {
    const resp = await fetch(`${_BASE_URL}/events/`, {
      method: "GET",
      headers,
    });
    if (resp.ok) {
      const data = await resp.json();
      console.log(data);
      return data;
    } else {
      console.error("an error occured");
    }
  } catch (error) {
    console.error(error);
  }
}
