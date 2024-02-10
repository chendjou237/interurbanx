import { cookies } from "next/headers";
import PocketBase from "pocketbase";

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
    cookies().set(
      "pb_auth",
      client.authStore.exportToCookie({ httpOnly: false })
    );

    alert(client.authStore.token);
    return client.authStore.exportToCookie({ httpOnly: false });
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
  pb: PocketBase
) {
  const data = {
    username: username,
    name: firstName + lastName,
    email: email,
    emailVisibility: true,
    password: password,
    passwordConfirm: passwordConfirm,
  };
  const record = await pb.collection("users").create(data);
  console.log(record);

  const authData = await pb
    .collection("users")
    .authWithPassword(email, password);
  return authData.token;
}
