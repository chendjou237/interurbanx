export interface IShipments {
  id: string | null;
  clientId: string;
  travelerId: string | null;
  itemInfo: string;
  origin: string;
  destination: string;
  status: ShipmentStatus;
  deliveryDate: string;
  amount: number;
  createdAt: string | null;
}

export enum ShipmentStatus {
  delivered = "delivered",
  declined = "declined",
  accepted = "accepted",
  pending = "pending",
}
