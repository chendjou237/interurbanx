import PocketBase from "pocketbase";

export default function isAuthenticated(client: PocketBase) {
  //console.log(`the auth token ${client.authStore.token} }`);
   return client.authStore.token !== null && client.authStore.token !== "" ;

}
