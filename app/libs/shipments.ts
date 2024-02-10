import { IShipments } from "../utils/types";
import PocketBase from "pocketbase";
export function createShipment(data: IShipments, client: PocketBase) {
  return client.collection("shipments").create(data);
}

export function getClientShipment(pb: PocketBase, id: string) {
  return pb.collection("shipments").getFullList({ filter: `client == ${id}` });
}

export function getAgentShipment(pb: PocketBase, id: string) {
  return pb.collection("shipments").getFullList({ filter: `agent == ${id}` });
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


