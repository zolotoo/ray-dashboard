let store = {
  projects: [],
  relationship: {},
  sport: {},
};

export async function GET() {
  return Response.json(store);
}

export async function POST(req) {
  const body = await req.json();
  store = body;
  return new Response("ok", { status: 200 });
}
