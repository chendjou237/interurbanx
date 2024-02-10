import PocketBase from "pocketbase";
import pb from "./pb";

export default function isAuthenticated(client: PocketBase) {
  console.log(`the cookie value ${client.authStore.token}`);

  return client.authStore.token !== null && client.authStore.token !== "";
}
