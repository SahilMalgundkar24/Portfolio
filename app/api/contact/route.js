const SCRIPT_URL =
  process.env.GOOGLE_SCRIPT_URL ||
  process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

function parseAppsScriptResult(text) {
  if (!text) return null;
  const trimmed = text.trim();
  try {
    return JSON.parse(trimmed);
  } catch {
    const match = trimmed.match(/\{"result"\s*:\s*"success"\}/);
    if (match) return JSON.parse(match[0]);
    return null;
  }
}

function extractGasError(html) {
  if (!html || !html.includes("<!DOCTYPE")) return html?.slice(0, 300);
  const m = html.match(/class="errorMessage"[^>]*>([\s\S]*?)<\/div>/i);
  if (m) return m[1].replace(/<[^>]+>/g, "").trim();
  const m2 = html.match(/<div style="text-align:center[^"]*"[^>]*>([\s\S]*?)<\/div>/i);
  if (m2) return m2[1].replace(/<[^>]+>/g, "").trim();
  return html.slice(0, 300);
}

/** POST as form fields — works with Google Apps Script e.parameter */
async function submitToAppsScript(baseUrl, payload) {
  const form = new URLSearchParams();
  form.set("name", payload.name);
  form.set("email", payload.email);
  form.set("message", payload.message);

  return fetch(baseUrl, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: form.toString(),
    redirect: "follow",
    cache: "no-store",
  });
}

export async function POST(request) {
  if (!SCRIPT_URL) {
    return Response.json(
      { error: "Contact form is not configured." },
      { status: 503 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, email, message } = body;
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return Response.json({ error: "Missing required fields." }, { status: 400 });
  }

  const payload = {
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
  };

  try {
    const upstream = await submitToAppsScript(SCRIPT_URL, payload);
    const text = await upstream.text();
    const parsed = parseAppsScriptResult(text);

    if (parsed?.result !== "success") {
      const detail = extractGasError(text);
      console.error("Contact upstream:", upstream.status, detail);
      return Response.json(
        { error: "Could not save your message." },
        { status: 502 }
      );
    }

    return Response.json({ result: "success" });
  } catch (err) {
    console.error("Contact API error:", err);
    return Response.json(
      { error: "Could not save your message." },
      { status: 502 }
    );
  }
}
