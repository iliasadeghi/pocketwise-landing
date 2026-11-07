export interface WaitlistResult {
  ok: boolean;
  message: string;
}

/**
 * Client-side stand-in for the waitlist signup. No data leaves the browser.
 *
 * TODO: replace with a real endpoint when you have one, e.g.
 *   const res = await fetch('https://your-form-endpoint', {
 *     method: 'POST',
 *     headers: { 'Content-Type': 'application/json' },
 *     body: JSON.stringify({ email }),
 *   });
 *   return { ok: res.ok, message: res.ok ? 'You’re on the list!' : 'Something went wrong.' };
 */
export async function submitWaitlist(email: string): Promise<WaitlistResult> {
  await new Promise((resolve) => setTimeout(resolve, 900));

  // Lets you preview the error state: any address at "example.com" fails.
  if (email.trim().toLowerCase().endsWith('@example.com')) {
    return { ok: false, message: 'We couldn’t add that address. Please try another one.' };
  }
  return { ok: true, message: 'You’re on the list! Check your inbox for a confirmation.' };
}
