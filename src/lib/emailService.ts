// src/lib/emailService.ts
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

const COLLECTION = "waitlist";

export async function saveEmail(email: string, source: "hero" | "cta" = "hero") {
  try {
    const emailKey = email.toLowerCase().trim().replace(/[.#$[\]]/g, "_");
    const docRef = doc(db, COLLECTION, emailKey);
    const existing = await getDoc(docRef);

    if (existing.exists()) {
      return { success: true, duplicate: true };
    }

    await setDoc(docRef, {
      email: email.toLowerCase().trim(),
      source,
      createdAt: serverTimestamp(),
    });

    return { success: true, duplicate: false };
  } catch (error) {
    console.error("Error saving email:", error);
    return { success: false, duplicate: false };
  }
}