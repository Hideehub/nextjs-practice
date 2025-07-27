export async function POST(req: Request) {
  const body = await req.json();
  console.log('Form submitted:', body);

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
