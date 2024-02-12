import { IShipments } from "../utils/types";
import PocketBase from "pocketbase";

export function createShipment(data: IShipments, client: PocketBase) {
  return client.collection("shipments").create(data);
}

export async function getClientShipment(pb: PocketBase, id: string) {
  const data = await pb.collection("shipments"). getList<IShipments>(1, 50, {
    filter: pb.filter( `client = "${id}"`,),
    expand: 'agent',
  });
  return data.items
}

export function getAgentShipment(pb: PocketBase, id: string) {
  return pb.collection("shipments").getList(1, 50, { filter: `agent = ${id}` });
}

export function acceptShipment(id: string, agentId: string, pb: PocketBase) {
  return pb
    .collection("shipments")
    .update(id, { agent: agentId, status: "accepted" });
}

export function declineShipment(id: string, pb: PocketBase) {
  return pb.collection("shipments").update(id, { status: "declined" });
}

export function deliverShipment(id: string, pb: PocketBase) {
  return pb.collection("shipments").update(id, { status: "delivered" });
}

export function deleteShipment(id: string, pb: PocketBase) {
  return pb.collection("shipments").delete(id);
}

export function updateShipment(id: string, data: IShipments, pb: PocketBase) {
  return pb.collection("shipments").update(id, data);
}


