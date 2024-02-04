import { greet } from '$lib/page-and-endpoint/Cargo.toml';

export function GET() {
    greet();
    return new Response('OK', { status: 200 });
}