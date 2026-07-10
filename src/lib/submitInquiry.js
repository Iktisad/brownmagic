// Single integration point for the contact form's submit backend.
// Swap this implementation for Formspree / Web3Forms / EmailJS once a
// service is chosen — the ContactForm component only calls this function
// and reacts to the resolved/rejected promise, so no UI changes needed.
export async function submitInquiry(formData) {
  // TODO: replace with a real endpoint, e.g.:
  //   return fetch("https://formspree.io/f/XXXXXXX", {
  //     method: "POST",
  //     headers: { Accept: "application/json" },
  //     body: formData,
  //   });
  console.log("Inquiry submitted (stub — no backend wired yet):", Object.fromEntries(formData));
  await new Promise((resolve) => setTimeout(resolve, 600));
  return { ok: true };
}
