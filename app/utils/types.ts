export interface IShipments {
  id: string | null;
  client: string | null;
  agent: string ;
  itemInfo: string | null;
  origin: string;
  destination: string;
  status: ShipmentStatus ;
  deliveryDate: string;
  amount: number;
  created: string | null;
  weight: number;
  expand: {
    agent: {
      contact: number;
      username: string;
      email: string;
    };
  } | null;
}

export enum ShipmentStatus {
  delivered = "delivered",
  declined = "declined",
  accepted = "accepted",
  pending = "pending",
}
