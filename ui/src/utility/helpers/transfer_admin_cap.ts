import { Transaction } from "@mysten/sui/transactions";

export const transferAdminCap = (adminCapId: string, to: string) => {
  const tx = new Transaction();
  
  // Transfer admin capability to another address using tx.transferObjects()
  // The recipient becomes the new admin
  tx.transferObjects([tx.object(adminCapId)], to);
  
  return tx;
};
