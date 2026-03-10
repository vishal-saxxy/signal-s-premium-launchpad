import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

const COLLECTION = "waitlist";

export async function saveEmail(email: string, source: "hero" | "cta" = "hero") {
  try {
    const emailKey = email.toLowerCase().trim().replace(/[.#$[\]]/g, "_");
    await setDoc(doc(db, COLLECTION, emailKey), {
      email: email.toLowerCase().trim(),
      source,
      createdAt: serverTimestamp(),
    }, { merge: false });
    return { success: true, duplicate: false };
  } catch (error) {
    console.error("Error saving email:", error);
    return { success: false, duplicate: false };
  }
}