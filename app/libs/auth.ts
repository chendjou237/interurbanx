import { cookies } from "next/headers";
import PocketBase from "pocketbase";
import pb from "../utils/pb";

export function signOut(client: PocketBase) {
  console.log(`the auth validity:  ${client.authStore.token}`);
  client.authStore.clear();
}

export async function signin(
  email: string,
  password: string,
  client: PocketBase
) {
  try {
    const data = await client
      .collection("users")
      .authWithPassword(email, password);
    

    alert(pb.authStore.token);
    return pb.authStore.exportToCookie({ httpOnly: false });
  } catch (error) {
    console.log(error);

    alert("Invalid credential");
    return null;
  }
}

export async function signup(
  firstName: string,
  lastName: string,
  email: string,
  username: string,
  password: string,
  passwordConfirm: string,
  client: PocketBase
) {
  const data = {
    username: username,
    name: firstName + lastName,
    email: email,
    emailVisibility: true,
    password: password,
    passwordConfirm: passwordConfirm,
  };
  const record = await client.collection("users").create(data);
  console.log(record);

  const authData = await client
    .collection("users")
    .authWithPassword(email, password);
  return authData.token;
}
