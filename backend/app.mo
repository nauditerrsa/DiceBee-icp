import Time "mo:base/Time";
import Nat "mo:base/Nat";
import Hash "mo:base/Hash";

actor DiceBee {

  // Stable var sebagai seed
  stable var seed : Nat = 0;

  public query func rollDice() : async Nat {
    // Update seed dengan waktu saat ini
    let now = Time.now();
    seed := seed + Nat.fromInt(now);
    
    // Buat hash dari seed
    let h = Hash.hash(seed);
    
    // Ambil 6 digit hasil hash modulo 6 + 1 (1..6)
    let result = (Nat.fromBytes(h, 0, 4) mod 6) + 1;
    return result;
  };
}
